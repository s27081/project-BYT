from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
import asyncio
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

from tests_environment.sandbox import sandbox
from tests_environment.db.db import insert_completed_task

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CodeExecutionRequest(BaseModel):
    user_id: int
    task_id: int
    code: str


async def execute_code_with_timeout(code, task_id, timeout=5):
    loop = asyncio.get_running_loop()
    try:
        result = await asyncio.wait_for(
            loop.run_in_executor(None, sandbox.run_code_and_tests, code, task_id),
            timeout=timeout
        )
        return result
    except asyncio.TimeoutError:
        return {"status": "error", "message": "Code execution timed out"}


@app.post("/execute_code/")
async def execute_code(request: CodeExecutionRequest):
    try:
        user_id = request.user_id
        task_id = request.task_id
        code = request.code

        result = await execute_code_with_timeout(code, task_id, timeout=5)

        output = result.get("message", "No output received.")

        if result.get("status") == "success":
            loop = asyncio.get_running_loop()
            response = await loop.run_in_executor(
                None, insert_completed_task, user_id, task_id
            )

            return JSONResponse({"output": output, "db_status": response["status"]})

        return JSONResponse({"output": output})

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

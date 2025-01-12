from fastapi import FastAPI
from fastapi.responses import JSONResponse
import asyncio
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

from tests_environment.sandbox import sandbox

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow your frontend domain
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers (Authorization, Content-Type, etc.)
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
        return JSONResponse({"output": output})
    except Exception as e:
        return JSONResponse({"output": f"Error: {str(e)}"})

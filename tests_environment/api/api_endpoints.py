from fastapi import FastAPI
from fastapi.responses import JSONResponse
import asyncio
from pydantic import BaseModel
from tests_environment.sandbox import sandbox

app = FastAPI()


class CodeExecutionRequest(BaseModel):
    id: int
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
        task_id = request.id
        code = request.code

        result = await execute_code_with_timeout(code, task_id, timeout=5)

        return JSONResponse(result)
    except Exception as e:
        return JSONResponse({"status": "error", "message": str(e)})

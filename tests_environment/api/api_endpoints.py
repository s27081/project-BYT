from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from tests_environment.sandbox import sandbox

app = FastAPI()


@app.post("/execute_code/")
async def execute_code(request: Request):
    try:
        data = await request.json()
        code = data['code']

        result = sandbox.run_code_and_tests(code, task_id=data['id'])

        return JSONResponse(result)
    except Exception as e:
        return JSONResponse({"status": "error", "message": str(e)})


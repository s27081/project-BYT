from fastapi import FastAPI, Depends, HTTPException

import os
from dotenv import load_dotenv

from db.connection_db import get_db, SessionLocal
from db.common_db import *

app = FastAPI()
load_dotenv()


@app.get("/")
def read_root():
    return {"Hello": "BYT project test"}

@app.get("/api/db/{table}/{item_id}")
def read_table(table: str, item_id: int, db: SessionLocal = Depends(get_db)):
    table_class = TABLE_MAP.get(table)
    db_item = db.query(table_class).filter(table_class.id == item_id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, Column, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime


load_dotenv(dotenv_path='src/.env')


DATABASE_URL = os.getenv("DATABASE_URL")


if DATABASE_URL is None:
    raise ValueError("DATABASE_URL is not set in the .env file")


engine = create_engine(DATABASE_URL, echo=True)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base = declarative_base()


class CompletedTask(Base):
    __tablename__ = "completedtasks"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    task_id = Column(Integer, index=True)
    completed_at = Column(DateTime, default=datetime.utcnow)


def create_db():
    Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def insert_completed_task(user_id: int, task_id: int):
    try:
        completed_task = CompletedTask(user_id=user_id, task_id=task_id)

        db_session = SessionLocal()

        print(f"Inserting task: user_id={user_id}, task_id={task_id}")

        db_session.add(completed_task)

        db_session.commit()

        print("Task inserted successfully.")
        db_session.close()

        return {"status": "success", "message": "Task completed and saved!"}
    except Exception as e:
        print(f"Error inserting task: {str(e)}")
        db_session.rollback()
        db_session.close()
        return {"status": "error", "message": f"Failed to save task: {str(e)}"}



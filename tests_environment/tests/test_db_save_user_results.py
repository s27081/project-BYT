import pytest
from unittest.mock import MagicMock
from datetime import datetime
from tests_environment.db.db import insert_completed_task, CompletedTask


@pytest.fixture()
def mock_db_session(mocker):
    # Mockowanie sesji bazy danych
    mock_session = MagicMock()
    mocker.patch('db.SessionLocal', return_value=mock_session)
    return mock_session


def test_insert_completed_task_success(mock_db_session):
    user_id = 1
    task_id = 100
    now = datetime.utcnow()

    result = insert_completed_task(user_id, task_id)

    assert result["status"] == "success"
    assert result["message"] == "Task completed and saved!"

    mock_db_session.add.assert_called_once()
    added_task = mock_db_session.add.call_args[0][0]

    assert added_task.user_id == user_id
    assert added_task.task_id == task_id
    assert abs((added_task.completed_at - now).total_seconds()) < 1

    mock_db_session.commit.assert_called_once()
    mock_db_session.close.assert_called_once()


def test_insert_completed_task_failure(mock_db_session):
    mock_db_session.add.side_effect = Exception("Database error")

    user_id = 1
    task_id = 100

    result = insert_completed_task(user_id, task_id)

    assert result["status"] == "error"
    assert result["message"] == "Failed to save task: Database error"

    mock_db_session.rollback.assert_called_once()

    mock_db_session.close.assert_called_once()

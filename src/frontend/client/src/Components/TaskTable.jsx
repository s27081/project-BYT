import styles from "../styles/TasksTable.module.css";

import taskList from "./TasksList";
import Link from "next/link";

export default function TaskTable({ difficulty }) {
  const filteredTasks = difficulty
    ? taskList.filter((task) => task.difficulty === difficulty)
    : taskList;

  return (
    <div className={styles.TaskContainer}>
      <h1 id={styles.labels}>{difficulty}</h1>
      {filteredTasks.map((task) => (
        <div key={task.id} className={styles.taskCards}>
          <Link href={`/dashboard/Tasks/${task.id}`}>
            <p>{task.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

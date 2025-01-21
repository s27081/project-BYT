"use client";

import Background from "../../../Components/Background";
import NavBar from "../../../Components/NavBar";
import TaskTable from "../../../Components/TaskTable";
import styles from "../../../styles/Tasks.module.css";
export default function ExercisePage() {
  return (
    <>
      <Background />
      <div className={styles.container}>
        <NavBar />
        <div className={styles.taskContainer}>
          <TaskTable difficulty="easy" />
          <TaskTable difficulty="medium" />
          <TaskTable difficulty="hard" />
        </div>
      </div>
    </>
  );
}

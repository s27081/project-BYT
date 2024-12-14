"use client";

import { use } from "react";
import Editor from "@monaco-editor/react";

import styles from "../../../../styles/TaskCompiler.module.css";
import Background from "../../../../Components/Background";
import TasksNavBar from "../../../../Components/TasksNavBar";

export default function ExercisePage({ params }) {
  const { slug } = use(params);

  const slugNumber = parseInt(slug, 10);
  if (isNaN(slugNumber) || slugNumber <= 0 || slugNumber >= 21) {
    throw new Error("Page Not Fund");
  }

  return (
    <>
      <Background />
      <div className={styles.TaskContainer}>
        <TasksNavBar slug={slug} />
        <div
          style={{ height: "100vh", display: "flex", flexDirection: "column" }}
        >
          <div style={{ flex: 1 }}>
            <Editor
              height="50%"
              width="50%"
              defaultLanguage="python"
              defaultValue="# some coment"
              theme="hc-black"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                automaticLayout: true,
              }}
            />
            <h1>Hello World : {slug}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

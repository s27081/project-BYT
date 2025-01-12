"use client";

import { use } from "react";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import useCurrentUser from "../../../../Components/Actions/useCurrentUser";

import taskList from "../../../../Components/TasksList";
import styles from "../../../../styles/TaskCompiler.module.css";
import Background from "../../../../Components/Background";
import TasksNavBar from "../../../../Components/TasksNavBar";

export default function ExercisePage({ params }) {
  const { slug } = use(params);
  const { loading, currentUser } = useCurrentUser();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const filteredTasks = taskList.filter(
    (task) => String(task.id) === String(slug)
  );

  const slugNumber = parseInt(slug, 10);
  if (isNaN(slugNumber) || slugNumber <= 0 || slugNumber >= 21) {
    throw new Error("Page Not Fund");
  }

  const runCode = async () => {
    if (loading || !currentUser) {
      setOutput("User not authenticated");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_TEST_ENV_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          task_id: slug,
          code: code,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setOutput(data.output || "No output received.");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Background />
      <div className={styles.TaskContainer}>
        <TasksNavBar slug={slug} />
        <div className={styles.flexContainer}>
          <div className={styles.description}>
            <h1>Task: {slug}</h1>
            <p>{filteredTasks[0].description}</p>
          </div>
          <div className={styles.compiler}>
            <Editor
              height="100%"
              width="100%"
              defaultLanguage="python"
              defaultValue="# some coment"
              theme="hc-black"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                automaticLayout: true,
              }}
            />
            <button onClick={runCode} className={styles.SubmitButton}>
              Submit Code
            </button>
            <div className={styles.outputContainer}>
              <h3>Output:</h3>
              <pre>{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
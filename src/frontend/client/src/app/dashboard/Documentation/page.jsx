"use client";

import Background from "../../../Components/Background";
import NavBar from "../../../Components/NavBar";

import styles from "../../../styles/Documentation.module.css";

export default function ExercisePage() {
  return (
    <>
      <Background />
      <NavBar />
      <div className={styles.DocContainer}>
        <div id={styles.ParagraphContainer}>
          <p>Syntax</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>Values</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>Data Types</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>Strings</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>Operands</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>Arrays</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>Set's</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>if, elif, else</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>while</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>for</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>functions</p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p>classes</p>
        </div>
      </div>
    </>
  );
}

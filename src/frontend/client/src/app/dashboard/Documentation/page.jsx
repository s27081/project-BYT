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
          <p><a target="_blank" href="https://www.w3schools.com/python/python_syntax.asp">Syntax</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_variables.asp">Variables</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_datatypes.asp">Data Types</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_strings.asp">Strings</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_operators.asp">Operators</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_arrays.asp">Arrays</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_sets.asp">Sets</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_conditions.asp">Conditions</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_for_loops.asp">For loop</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_while_loops.asp">While loop</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_functions.asp">Functions</a></p>
        </div>
        <div id={styles.ParagraphContainer}>
          <p><a target="_blank" href="https://www.w3schools.com/python/python_classes.asp">Classes</a></p>
        </div>
      </div>
    </>
  );
}

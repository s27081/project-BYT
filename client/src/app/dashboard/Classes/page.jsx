"use client";

import Link from "next/link";

import Background from "../../../Components/Background";
import NavBar from "../../../Components/NavBar";
import styles from "../../../styles/Classes.module.css";

export default function ExercisePage() {
  return (
    <>
      <Background />
      <NavBar />
      <div className={styles.Container}>
        <div className={styles.classContainer}>
          <Link href={"/CreateClass"}>Create Class</Link>
        </div>
        <div className={styles.classContainer}>
          <Link href={"/JoinClass"}>Join Class</Link>
        </div>
      </div>
    </>
  );
}

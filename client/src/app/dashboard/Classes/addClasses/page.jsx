"use client";

import Link from "next/link";
import { useState } from "react";
import useCurrentUser from "../../../../Components/Actions/useCurrentUser";
import { useRouter } from "next/navigation";

import Background from "../../../../Components/Background";
import NavBar from "../../../../Components/NavBar";
import styles from "../../../../styles/Classes.module.css";
import { CreateGroupForm } from "../../../../Components/Actions/CreateGroup";
import { JoinGroupForm } from "../../../../Components/Actions/JoinGroup";

export default function ExercisePage() {
  const { loading, currentUser } = useCurrentUser();
  const [name, setName] = useState("");
  const [JoinCode, setJoinCode] = useState("");
  const router = useRouter();

  const Data = { currentUser, name };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await CreateGroupForm(Data);
    if (response.success) {
      router.push("/dashboard");
    } else {
      router.push("/dashboard");
      console.error("Logownie nie powiodło się:");
    }
  };

  const Data2 = { currentUser, JoinCode };

  const onJoinSubmit = async (event) => {
    event.preventDefault();
    const response = await JoinGroupForm(Data2);
    if (response.success) {
      router.push("/dashboard");
    } else {
      router.push("/dashboard");
      console.error("Logownie nie powiodło się:");
    }
  };

  return (
    <>
      <Background />
      <NavBar />
      <div className={styles.Container}>
        <div className={styles.classContainer}>
          <Link href={"/CreateClass"}>Create Class</Link>
          <form onSubmit={onSubmit}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              create Group
            </button>
          </form>
        </div>
        <div className={styles.classContainer}>
          <Link href={"/JoinClass"}>Join Class</Link>
          <form onSubmit={onJoinSubmit}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Join code"
                value={JoinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                className={styles.inputField}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Join Group
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

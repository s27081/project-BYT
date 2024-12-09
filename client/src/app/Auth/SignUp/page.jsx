"use client";

import styles from "../../../styles/SignIn.module.css";
import Image from "next/image";
import pylingo from "../../../../public/pylingo.png";
import { FaUser, FaLock } from "react-icons/fa";
import Link from "next/link";
import { SignUpForm } from "../../../Components/Actions/SignUp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Background from "../../../Components/Background";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const router = useRouter();

  const Data = { email, password, repeatedPassword };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await SignUpForm(Data);
    console.log(response);
    if (response.success) {
      router.push("/dashboard");
    } else {
      router.push("/auth/SignUp");
      console.error("Rejestracja nie powiodła się:");
    }
  };

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <div className={styles.inputBox}>
            <FaUser
              style={{
                color: "#FFFFFF",
                fontSize: "24px",
                transform: "translateY(40px)",
              }}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputBox}>
            <FaLock
              style={{
                color: "#FFFFFF",
                fontSize: "24px",
                transform: "translateY(40px)",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputBox}>
            <FaLock
              style={{
                color: "#FFFFFF",
                fontSize: "24px",
                transform: "translateY(40px)",
              }}
            />
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatedPassword}
              onChange={(e) => setRepeatedPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            REGISTER
          </button>
        </form>
      </div>
      <Link href="/Auth/SignIn">
        <div className={styles.registerText} style={{ top: "68%" }}>
          Sign IN
        </div>
      </Link>
      <Link href="/">
        <Image
          className={styles.logoImage}
          src={pylingo}
          width={177}
          height={155}
          alt="Pylingo illustration"
        />
      </Link>
    </div>
  );
}

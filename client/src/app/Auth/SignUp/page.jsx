"use client";

import styles from "../../../styles/SignIn.module.css";
import Image from "next/image";
import pylingo from "../../../../public/pylingo.png";
import { FaUser, FaLock } from "react-icons/fa";
import Link from "next/link";
import { SignUpForm } from "../../../Components/Actions/SignUp";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
      <div className={styles.gradientBackground} />
      <div className={styles.circlesContainer}>
        <div className={styles.largeCircle} />
        <div className={styles.smallCircle} />
        <div className={styles.svgContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="859"
            height="717"
            viewBox="0 0 859 717"
            fill="none"
          >
            <path
              d="M257 135C121.4 147.8 29.1667 47 0 -5L864 -1.5V716.5H767.5C468.7 678.5 519 527 581.5 456C618 406.167 684 286.1 656 204.5C621 102.5 426.5 119 257 135Z"
              fill="#C57BA0"
            />
          </svg>
        </div>
        <div className={styles.pinkCircle} />
      </div>

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

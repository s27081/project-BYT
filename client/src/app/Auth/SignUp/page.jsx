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
  const [errors, setErrors] = useState({ email: [], password: [] });
  const router = useRouter();

  const Data = { email, password, repeatedPassword };

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrors({ email: [], password: [] });

    const response = await SignUpForm(Data);
    const newErrors = { email: [], password: [] };
    if (response.success) {
      router.push("/dashboard");
    } else {
      if (Array.isArray(response.errors)) {
        response.errors.forEach((err) => {
          if (err.field === "email") {
            newErrors.email.push(err.message);
          }
          if (err.field === "password") {
            newErrors.password.push(err.message);
          }
        });
        setErrors(newErrors);
      } else {
        newErrors.password.push("Passwords are not the same");
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <div className={styles.inputBox}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
            {errors.email.length > 0 && (
              <div className={styles.errorText}>
                {errors.email.map((error, index) => (
                  <div key={`email-error-${index}`}>
                    <p>{error}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.inputBox}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputBox}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatedPassword}
              onChange={(e) => setRepeatedPassword(e.target.value)}
              className={styles.inputField}
            />
            {errors.password.length > 0 && (
              <div className={styles.errorText}>
                {errors.password.map((error, index) => (
                  <div key={`password-error-${index}`}>
                    <p>{error}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            REGISTER
          </button>
        </form>{" "}
        <Link href="/Auth/SignIn">
          <div className={styles.registerText}>Sign IN</div>
        </Link>
      </div>

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

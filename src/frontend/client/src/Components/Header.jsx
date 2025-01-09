"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={styles.header}>
      <p id={styles.logoText}>Pylingo</p>
      <div className={styles.navItem}>
        <Link href="/">
          <p>HOME</p>
          <div
            className={pathname === "/" ? styles.navUnderline : ""}
            style={{ transform: "translate3d(24px,-15px,0px)" }}
          />
        </Link>
        <Link href="/about">
          <p>ABOUT US</p>
          <div
            className={pathname === "/about" ? styles.navUnderline : ""}
            style={{
              transform: "translate3d(30px,-15px,0px) ",
              width: "155px",
            }}
          />
        </Link>
        <Link href="/schools">
          <p>FOR SCHOOLS</p>
          <div
            className={pathname === "/schools" ? styles.navUnderline : ""}
            style={{ transform: "translate3d(35px,-15px,0px)", width: "205px" }}
          />
        </Link>
      </div>
      <div className={styles.authButtons}>
        <div className={styles.registerButton}>
          <Link href="/Auth/SignUp">
            <p>REGISTER</p>
          </Link>
        </div>
        <div className={styles.loginButton}>
          <Link href="/Auth/SignIn">
            <p>LOG IN</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

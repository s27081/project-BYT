"use client";

import Link from "next/link";

import Background from "../../../Components/Background";
import NavBar from "../../../Components/NavBar";
import styles from "../../../styles/Settings.module.css";
import { useRouter } from "next/navigation";
import useCurrentUser from "../../../Components/Actions/useCurrentUser";
export default function SettingsPage() {
  const { loading, currentUser } = useCurrentUser();
  const router = useRouter();
  console.log(currentUser);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    router.push("/Auth/SignIn");
  }
  return (
    <>
      <Background />
      <div className={styles.SettingPageContainer}>
        <NavBar />
        <div className={styles.SettingsBox}>
          <p id={styles.heading}>Account Information</p>
          <p>Email: {currentUser.email}</p>
          <p>Name: </p>
          <p>Surname: </p>
          <p>Class: </p>
          <Link href="/Auth/ChangePassword">
            <p>CHANGE PASSWORD</p>
          </Link>

          <p>DELETE ACCOUNT</p>
        </div>
      </div>
    </>
  );
}

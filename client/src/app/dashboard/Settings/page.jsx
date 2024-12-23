"use client";

import Link from "next/link";

import Background from "../../../Components/Background";
import NavBar from "../../../Components/NavBar";
import styles from "../../../styles/Settings.module.css";

import useCurrentUser from "../../../Components/Actions/useCurrentUser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteUser } from "../../../Components/Actions/deleteUser";
import Modal from "../../../Components/ChangePasswordModal";

export default function SettingsPage() {
  const { loading, currentUser } = useCurrentUser();

  const [studentClass, setStudentClass] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentSurname, setStudentSurname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Data = { studentClass, studentName, studentSurname, currentUser };
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteHandler = async () => {
    if (confirm("Are you sure you want to remove your Account?")) {
      deleteUser(currentUser).then((success) => {
        if (success) {
          alert("User removed successfully");
          router.push("/");
        } else {
          alert("Failed to remove user");
        }
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await SignInForm(Data);
    console.log(response);
    if (response.success) {
      router.push("/dashboard");
    } else {
      router.push("/Auth/SignIn");
      console.error("Logownie nie powiodło się:");
    }
  };

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
          <form onSubmit={onSubmit}>
            <label for="name">
              <p>
                Name:
                <input
                  type="text"
                  name="name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  style={{ marginLeft: "70px" }}
                />
              </p>
            </label>

            <label for="surname">
              <p>
                Surname:
                <input
                  type="text"
                  name="surname"
                  value={studentSurname}
                  onChange={(e) => setStudentSurname(e.target.value)}
                  placeholder="Enter your surname"
                  required
                  style={{ marginLeft: "15px" }}
                />
              </p>
            </label>

            <label for="class">
              <p>
                Class:
                <input
                  type="text"
                  name="class"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  placeholder="Enter your class"
                  required
                />
              </p>
            </label>

            <button id={styles.SubmitButton} type="submit">
              Update
            </button>
          </form>
          <button onClick={openModal} className={styles.delButton}>
            CHANGE PASSWORD
          </button>
          <Modal
            show={isModalOpen}
            onClose={closeModal}
            currentUser={currentUser}
          />

          <button className={styles.delButton} onClick={deleteHandler}>
            DELETE ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
}

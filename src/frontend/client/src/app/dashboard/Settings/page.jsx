"use client";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

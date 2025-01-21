import styles from "../styles/ChangePassword.module.css";
import { FaLock, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { ChangePassword } from "./Actions/changePassword";
import { useRouter } from "next/navigation";

export default function Modal({ show, onClose, currentUser }) {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const router = useRouter();
  const Data = { oldPassword, password, repeatedPassword, currentUser };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await ChangePassword(Data);
    if (response.success) {
      router.push("/dashboard");
      alert("Password has been changed");
    } else {
      alert("Passwords Does Not Match");
      router.push("/dashboard/Settings");
    }
  };
  if (!show) return null;
  return (
    <div className={styles.MainContainer}>
      <div className={styles.FormContainer}>
        <form onSubmit={onSubmit}>
          <div className={styles.inputBox}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className={styles.inputField}
            />
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
          </div>

          <button type="submit" className={styles.submitButton}>
            Change Password
          </button>
        </form>
        <button id={styles.closeButtonContainer} onClick={onClose}>
          <FaTimes className={styles.icon} id={styles.closeButton} />
        </button>
      </div>
    </div>
  );
}

import {
  FaTachometerAlt,
  FaTasks,
  FaCog,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaFileAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/NavBar.module.css";
import pylingo from "../../public/pylingo.png";
import { SignOut } from "./Actions/SignOut";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const SignOutHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await SignOut();
      console.log(response);
      router.push("/");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };
  return (
    <div className={styles.navBarContainer}>
      <div
        className={styles.menuItem}
        style={{ transform: "translate3d(55px, 100px, 0px)" }}
      >
        <div
          className={styles.icons}
          id={pathname === "/dashboard" ? styles.navHover : ""}
        >
          <FaTachometerAlt />
          <Link href="/dashboard">
            <p>Dashboard</p>
          </Link>
        </div>
        <div
          className={styles.icons}
          id={pathname === "/dashboard/Tasks" ? styles.navHover : ""}
        >
          <FaTasks />
          <Link href="/dashboard/Tasks">
            <p>Tasks</p>
          </Link>
        </div>
        <div
          className={styles.icons}
          id={pathname === "/dashboard/Documentation" ? styles.navHover : ""}
        >
          <FaFileAlt />
          <Link href="/dashboard/Documentation">
            <p>Documentation</p>
          </Link>
        </div>
        <div
          className={styles.icons}
          id={pathname === "/dashboard/Classes" ? styles.navHover : ""}
        >
          <FaChalkboardTeacher />
          <Link href="/dashboard/Classes">
            <p>Classes</p>
          </Link>
        </div>
      </div>
      <div className={styles.divider} />
      <div
        className={styles.menuItem}
        style={{ transform: "translate3d(55px, 200px, 0px)" }}
      >
        <div
          className={styles.icons}
          id={pathname === "/dashboard/Settings" ? styles.navHover : ""}
        >
          <FaCog />
          <Link href="/dashboard/Settings">
            <p>Settings</p>
          </Link>
        </div>
        <div className={styles.icons}>
          <FaSignOutAlt />
          <p onClick={SignOutHandler}>Sign Out</p>
        </div>
      </div>

      <div className={styles.supportContainer}>
        <div className={styles.supportContent}>
          <p className={styles.supportText}>Support Us</p>
          <p className={styles.supportDescription}>
            Thank you for the support that allows us to keep growing!
          </p>
          <div className={styles.supportButton}>Click!</div>
        </div>
        <Image
          className={styles.supportImage}
          src={pylingo}
          width={97}
          height={85}
          alt="Pylingo illustration"
        />
      </div>
    </div>
  );
}

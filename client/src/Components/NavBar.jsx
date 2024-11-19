import { FaTachometerAlt, FaTasks, FaCog, FaChalkboardTeacher, FaSignOutAlt, FaFileAlt } from 'react-icons/fa';
import Image from "next/image";

import styles from "../styles/NavBar.module.css"
import pylingo from "../../public/pylingo.png"
import { SignOut } from './Actions/SignOut';
import { useRouter } from 'next/navigation';


export default function NavBar() {
    router = useRouter();


    const SignOutHandler = async (event) => {

        event.preventDefault();
        const response = await SignOut();
        console.log(response)
        router.push("/")

      };

    return (
        <div className={styles.navBarContainer}>
                <div className={styles.menuItem} style={{transform: 'translate3d(55px, 100px, 0px)'}}>
                    <div className={styles.icons}>
                    <FaTachometerAlt />
                    <p>Dashboard</p>
                    </div>
                    <div className={styles.icons}>
                    <FaTasks />
                    <p>Tasks</p>
                    </div>
                    <div className={styles.icons}>
                    <FaFileAlt />
                    <p>Documentation</p>
                    </div>
                    <div className={styles.icons}>
                    <FaChalkboardTeacher />
                    <p>Classes</p>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.menuItem} style={{transform: 'translate3d(55px, 200px, 0px)'}}>
                    <div className={styles.icons}>
                        <FaCog/>
                        <p>Settings</p>
                    </div>
                    <div className={styles.icons}>
                        <FaSignOutAlt/>
                        <p onClick={SignOutHandler}>Sign Out</p>
                    </div>
                </div>

            <div className={styles.supportContainer}>
                    <div className={styles.supportContent}>
                        <p className={styles.supportText}>Support Us</p>
                        <p className={styles.supportDescription}>Thank you for the support that allows us to keep growing!</p>
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
import styles from '../styles/RootLayout.module.css';
import Image from 'next/image'
import pylingo from "../../public/pylingo.png"
import Header from '../Components/Header';
import Link from 'next/link';

export default function RootLayout(){
    return (
      <>
      <Header />
      <div className={styles.rootContainer}>
        <div style={{transform: "translateX(180px)"}}>
          <div className={styles.startText}>Start/</div>
          <div className={styles.endText}>/End</div>
          <div className={styles.mainText}>
            Discover the world of Python programming from scratch - simple lessons,
            practical examples and exercises that will introduce you to the world of code step
            step by step. Start learning today and develop your skills in one of the
            most popular programming languages!
          </div>
          <div className={styles.learnPythonText}>
          Learn Python now!
          </div>
          <Link href="/Auth/SignIn">
            <div className={styles.startNowText}>Get started now!</div>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground} />
          <Image
              className={styles.layoutImage}
              src={pylingo}
              width={232}
              height={203}
              alt="Pylingo illustration"
          />
        </div>
      </div>
        </>
      );

}
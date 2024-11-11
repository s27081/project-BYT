import styles from '../../styles/RootLayout.module.css';
import styles1 from '../../styles/SchoolsPage.module.css';
import Image from 'next/image'
import pylingo from "../../../public/pylingo.png"
import Header from '../../Components/Header';


export default function schools(){
  return (
    <>
    <Header />
    <div className={styles.rootContainer}>
        <div style={{transform: "translate3d(-580px, -60px,0px)"}}>
          <div className={styles.startText}>Start/</div>
          <div className={styles.endText}>/End</div>
          <div className={styles.mainText}>
          With our e-learning platform, teaching Python becomes easier than ever.
          Intuitive tools allow you to track your students' progress,
          while clear lessons and practical exercises ensure effective understanding of the material.
          Give your students the opportunity to learn programming in a friendly environment!
          </div>
          <div className={styles.learnPythonText}>
          Python science for your students!
          </div>
          <div className={styles.startNowText}>Get started now!</div>
        </div>
        <div className={styles.imageContainer} style={{transform: "translateX(780px)"}}>
          <div className={styles1.imageBackground} />
          <Image
              className={styles1.layoutImage}
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
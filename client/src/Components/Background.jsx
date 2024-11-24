import styles from "../styles/Background.module.css";

export default function Background() {
  return (
    <div className={styles.container}>
      <div className={styles.gradientBackground} />
      <div className={styles.circlesContainer}>
        <div className={styles.largeCircle} />
        <div className={styles.smallCircle} />
        <div className={styles.svgContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="859"
            height="717"
            viewBox="0 0 859 717"
          >
            <path
              d="M257 135C121.4 147.8 29.1667 47 0 -5L864 -1.5V716.5H767.5C468.7 678.5 519 527 581.5 456C618 406.167 684 286.1 656 204.5C621 102.5 426.5 119 257 135Z"
              fill="#C57BA0"
            />
          </svg>
        </div>
        <div className={styles.pinkCircle} />
      </div>
    </div>
  );
}

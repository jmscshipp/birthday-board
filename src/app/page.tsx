import Image from "next/image";
import styles from "./page.module.css";
import Note from "./Note"

export default function Home() {
  return (
    <div className={`${styles.page} ${styles.filledBorder}`}>
      <div className={styles.title}>
        <p>Page title here!</p>
      </div>
    <Note color="black" message="this is the note I'm leaving!! I'm putting it in the props!" sender="james"></Note>
    <Note color="orange" message="another note! this one is shorter" sender="james"></Note>
    </div>
  );
}

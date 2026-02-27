import Image from "next/image";
import styles from "./page.module.css";
import Note from "./Note"
export default function Home() {
  return (
    <div className={`${styles.page} ${styles.filledBorder}`}>
      <div className={styles.title}>
        <p>Page title here!</p>
      </div>
    <Note message="this is the note I'm leaving!! I'm putting it in the props!"></Note>
    </div>
  );
}

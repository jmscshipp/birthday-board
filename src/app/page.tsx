import Image from "next/image";
import styles from "./page.module.css";
import Note from "./Note"
export default function Home() {
  return (
    <div className={`${styles.page} ${styles.filledBorder}`}>
      <div className={styles.title}>
        <p>Page title here!</p>
      </div>
    <Note></Note>
    </div>
  );
}

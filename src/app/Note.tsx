
import styles from "./page.module.css";

type NoteProps {
    message : string;
}

export default function Note({message}{
      return (
        <div className={styles.note}>
            <div className={styles.pin}>
                <div className={styles.pinHead}></div>
                <div className={styles.pinBody}></div>
            </div>
            <p className={styles.noteText}>{message}</p>
        </div>);
}
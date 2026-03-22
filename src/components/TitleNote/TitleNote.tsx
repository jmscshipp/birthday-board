import Note from '../Note/Note';
import Pin from '../Pin/Pin';
import styles from './TitleNote.module.css';

export default function TitleNote() {
    return (
        <div className={styles.container}>
            <div className={styles.noteContainer}>
                <Pin color={'#38632a'}></Pin>
                <p className={styles.firstNoteText}>{"Selali's"}</p>
            </div>
            <div className={styles.noteContainer}>
                <Pin color={'#38632a'}></Pin>
                <p className={styles.secondNoteText}>{'23RD BIRTHDAY'}</p>
            </div>
            <div className={styles.noteContainer}>
                <Pin color={'#38632a'}></Pin>
                <p className={styles.thirdNoteText}>{'digital bulletin board'}</p>
            </div>
        </div>
    );
}

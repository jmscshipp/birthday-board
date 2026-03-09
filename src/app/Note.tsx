import styles from './page.module.css';
import Pin from './Pin';

export type NoteProps = {
    color: string;
    message: string;
    sender: string;
    placement: string;
};

export default function Note({ color, message, sender, placement }: NoteProps) {
    const headColor = {
        backgroundColor: color,
    };

    return (
        <div className={placement == 'left' ? styles.placeLeft : styles.placeRight}>
            <div className={styles.note}>
                <Pin color={color}></Pin>
                <p className={styles.text}>{message}</p>
                <p className={styles.senderText}>{`- ` + sender}</p>
            </div>
        </div>
    );
}

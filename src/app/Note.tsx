
import { Background } from "@react-navigation/elements";
import styles from "./page.module.css";


export type NoteProps = {
    color : string;
    message : string;
    sender: string;
}

export default function Note({color, message, sender} : NoteProps) {
    
    const headColor= {
        backgroundColor: color
    };

    return (
        <div className={styles.note}>
            <div className={styles.pin}>
                <div style={headColor} className={styles.pinHead}></div>
                <div className={styles.pinBody}></div>
                <div className={styles.pinShadow}></div>
            </div>
            <p className={styles.text}>{message}</p>
            <p className={styles.senderText}>{`- ` + sender}</p>
        </div>);
}
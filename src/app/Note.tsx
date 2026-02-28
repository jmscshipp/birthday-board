
import { Background } from "@react-navigation/elements";
import styles from "./page.module.css";


export type NoteProps = {
    color : string;
    message : string;
    sender: string;
}

export default function Note({color, message, sender} : NoteProps) {
      
    
    const headColor= {
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`
    };

    const senderColor= {
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`
    };

    return (
        <div className={styles.note}>
            <div className={styles.pin}>
                <div style={headColor} className={styles.pinHead}></div>
                <div className={styles.pinBody}></div>
                <div className={styles.pinShadow}></div>
            </div>
            <p className={styles.text}>{message}</p>
            <p style={headColor} className={styles.senderText}>{`-` + sender}</p>
        </div>);
}
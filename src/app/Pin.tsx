import styles from "./page.module.css";

export type PinProps = {
    color: string;
}

export default function Pin({color} : PinProps) {
    const headColor= {
        backgroundColor: color
    };

    return (
    <div className={styles.pinContainer}>
        <div className={styles.pin}>
            <div style={headColor} className={styles.pinHead}></div>
            <div className={styles.pinBody}></div>
            <div className={styles.pinShadow}></div>
        </div>
    </div>
    );
}
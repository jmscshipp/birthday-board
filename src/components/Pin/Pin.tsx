import styles from './Pin.module.css';

export type PinProps = {
    color: string;
};

export default function Pin({ color }: PinProps) {
    const headColor = {
        backgroundColor: color,
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div style={headColor} className={styles.head}></div>
                <div className={styles.body}></div>
                <div className={styles.shadow}></div>
            </div>
        </div>
    );
}

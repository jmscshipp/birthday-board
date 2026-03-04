import styles from "./page.module.css";

type PictureProps = {
    image : string;
    sender: string;
}

export default function Picture({image, sender} : PictureProps) {

    const headColor= {
        backgroundColor: 'black'
    };

    return (
        <div className={styles.pictureBox}>
                <div className={styles.pin}>
                    <div style={headColor} className={styles.pinHead}></div>
                    <div className={styles.pinBody}></div>
                    <div className={styles.pinShadow}></div>
                </div>
            <img src={image} className={styles.pictureImg}></img>
        </div>);
}
import styles from "./page.module.css";

type PictureProps = {
    image : string;
    sender: string;
}

export default function Picture({image, sender} : PictureProps) {

    return (
        <div className={styles.pictureBox}>
            <img src={image} className={styles.pictureImg}></img>
        </div>);
}
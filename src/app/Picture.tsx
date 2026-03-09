import styles from './page.module.css';
import Pin from './Pin';

type PictureProps = {
    image: string;
    sender: string;
};

export default function Picture({ image, sender }: PictureProps) {
    return (
        <div className={styles.pictureBox}>
            <Pin color={'black'}></Pin>
            <img src={image} className={styles.pictureImg}></img>
        </div>
    );
}

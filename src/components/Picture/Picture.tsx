import styles from './Picture.module.css';
import Pin from '../Pin/Pin';

type PictureProps = {
    image: string;
    sender: string;
    margin: number;
};

export default function Picture({ image, sender, margin }: PictureProps) {
    return (
        <div style={{ marginTop: margin + 'px' }} className={styles.container}>
            <Pin color={'black'}></Pin>
            <img src={image} className={styles.image}></img>
        </div>
    );
}

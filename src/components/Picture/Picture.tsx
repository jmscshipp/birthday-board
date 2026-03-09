import styles from './Picture.module.css';
import Pin from '../Pin/Pin';

type PictureProps = {
    image: string;
    sender: string;
};

export default function Picture({ image, sender }: PictureProps) {
    return (
        <div className={styles.container}>
            <Pin color={'black'}></Pin>
            <img src={image} className={styles.image}></img>
        </div>
    );
}

import styles from './Note.module.css';
import Pin from '../Pin/Pin';

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

    const getPlacementStyle = () => {
        if (placement === 'left') return styles.placeLeft;
        if (placement === 'right') return styles.placeRight;
        return styles.placeCenter;
    };

    return (
        <div className={getPlacementStyle()}>
            <div className={styles.container}>
                <Pin color={color}></Pin>
                <p className={styles.text}>{message}</p>
                <p className={styles.senderText}>{`- ` + sender}</p>
            </div>
        </div>
    );
}

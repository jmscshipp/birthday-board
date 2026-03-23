import styles from './Note.module.css';
import Pin from '../Pin/Pin';

export type NoteProps = {
    color: string;
    font: string;
    message: string;
    sender: string;
    placement: string;
    margin: number;
};

export default function Note({ color, font, message, sender, placement, margin }: NoteProps) {
    const getPlacementStyle = () => {
        if (placement === 'left') return styles.placeLeft;
        if (placement === 'right') return styles.placeRight;
        return styles.placeCenter;
    };

    const getFontStyle = () => {
        if (font === 'var(--font-kalam)') return styles.kalam;
        if (font === 'var(--font-dancing-script)') return styles.dancingScript;
        if (font === 'var(--font-comic-relief)') return styles.comicRelief;
        if (font === 'var(--font-new-rocker)') return styles.newRocker;
        if (font === 'var(--font-jersey-10)') return styles.jersey10;
        return styles.geistSans;
    };

    return (
        <div
            style={{ marginTop: margin + 'px' }}
            className={`${getFontStyle()} ${getPlacementStyle()}`}
        >
            <div className={styles.container}>
                <Pin color={color}></Pin>
                <p className={styles.text}>{message}</p>
                <p className={styles.senderText}>{`- ` + sender}</p>
            </div>
        </div>
    );
}

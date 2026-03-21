import { useState } from 'react';
import styles from './NoteModal.module.css';
import Pin from '../Pin/Pin';

type NoteModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

/* fonts
regular sans-serif (geist)
handwriting (kalam)
cursive (cerdarville)
comic sans (comic)
goth (rocker)
pixel (jersey
*/
export default function NoteModal({ isOpen, onClose }: NoteModalProps) {
    const [font, setFont] = useState('var(--font-geist-sans)');
    const [pinColor, setPinColor] = useState('#38632a');
    const [noteText, setNoteText] = useState('');
    const [senderText, setSenderText] = useState('');

    if (!isOpen) return null;

    // font control
    const fonts: string[] = [
        'var(--font-geist-sans)',
        'var(--font-kalam)',
        'var(--font-cedarville-cursive)',
        'var(--font-comic-relief)',
        'var(--font-new-rocker)',
        'var(--font-jersey-10)',
    ];
    const cycleFont = () => {
        setFont((prevFont) => {
            const currentIndex = fonts.indexOf(prevFont);
            return fonts[(currentIndex + 1) % fonts.length];
        });
    };

    // pin color control
    const pinColors: string[] = ['#38632a', '#FFC570', '#BDA6CE', '#81A6C6', '#D96868', '#000000'];
    const cyclePinColor = () =>
        setPinColor((prevColor) => {
            const currentIndex = pinColors.indexOf(prevColor);
            return pinColors[(currentIndex + 1) % pinColors.length];
        });

    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <button className={styles.exitButton} onClick={onClose}>
                        x
                    </button>
                    <div className={styles.settings}>
                        <button
                            style={{ fontFamily: font, lineHeight: '34px' }}
                            className={styles.fontChangeButton}
                            onClick={cycleFont}
                        >
                            Font
                        </button>
                        <button
                            style={{ backgroundColor: pinColor }}
                            className={styles.colorChangeButton}
                            onClick={cyclePinColor}
                        ></button>
                    </div>
                </div>
                <div
                    style={{ fontFamily: font, lineHeight: '34px' }}
                    className={styles.noteContainer}
                >
                    <div className={styles.pinWrapper}>
                        <Pin color={pinColor}></Pin>
                    </div>
                    <textarea
                        className={styles.noteInputArea}
                        name="noteDescription"
                        placeholder="Write your message here!"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        rows={5}
                        cols={25}
                    ></textarea>
                    <div className={styles.senderWrapper}>
                        <label htmlFor="sender">-</label>
                        <textarea
                            id="sender"
                            className={styles.senderInputArea}
                            name="noteSender"
                            placeholder="And name here"
                            value={senderText}
                            onChange={(e) => setSenderText(e.target.value)}
                            rows={1}
                            cols={25}
                        ></textarea>
                    </div>
                </div>
                <button
                    className={styles.pinButton}
                    disabled={!noteText.trim() || !senderText.trim()}
                >
                    All done, pin it!
                </button>
            </div>
        </div>
    );
}

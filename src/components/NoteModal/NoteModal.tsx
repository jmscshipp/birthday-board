import styles from './NoteModal.module.css';

type NoteModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function NoteModal({ isOpen, onClose }: NoteModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <button className={styles.exitButton}>x</button>
                    <div className={styles.settings}>
                        <button className={styles.fontChangeButton}>Font</button>
                        <button className={styles.colorChangeButton}></button>
                    </div>
                </div>
                <div className={styles.noteContainer}>
                    <p>this is the note I&lsquo;m leaving!! I&lsquo;m putting it in the props!</p>
                </div>
                <button className={styles.pinButton} disabled={true}>
                    All done, pin it!
                </button>
            </div>
        </div>
    );
}

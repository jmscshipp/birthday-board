import styles from './NoteModal.module.css';

type NoteModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function NoteModal({ isOpen, onClose }: NoteModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <p>x</p>
                <div className={styles.settings}>
                    <p>font</p>
                    <p>color</p>
                </div>
            </div>
            <div className={styles.noteContainer}>
                <h2>Note</h2>
                <p>This is a simple note modal.</p>
            </div>
        </div>
    );
}

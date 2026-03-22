import styles from './MessageModal.module.css';

type MessageModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MessageModal({ isOpen, onClose }: MessageModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.message}>
                    Welcome! This is a digital bulletin board for Selali&#39;s friends + family to
                    leave birthday notes for her upcoming bday (March 25th). Notes can be short and
                    sweet or you could share a memory if you feel like it. The goal is simply to
                    make her feel celebrated :)
                </div>
                <div className={styles.message}>
                    Use the buttons at the top to add notes and photos, if you have any questions
                    just message me!
                </div>
                <div className={styles.message}>- James</div>
            </div>
            <button className={styles.okayButton} onClick={() => onClose()}>
                Okay cool
            </button>
        </div>
    );
}

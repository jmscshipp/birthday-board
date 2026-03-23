import styles from './MessageModal.module.css';

type MessageModalProps = {
    message: string;
    buttonText: string;
    isOpen: boolean;
    onClose: () => void;
};

export default function MessageModal({ message, buttonText, isOpen, onClose }: MessageModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.message}>{message}</div>
                <button className={styles.button} onClick={() => onClose()}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

'use client';
import { useEffect, useState } from 'react';
import NoteModal from '../NoteModal/NoteModal';
import styles from './BoardInteraction.module.css';
import MessageModal from '../MessageModal/MessageModal';

export default function BoardInteraction() {
    const [noteModalOpen, setNoteModalOpen] = useState(false);
    const [messageModalOpen, setMessageModalOpen] = useState(true);

    // preventing background scrolling while modal is open
    useEffect(() => {
        if (noteModalOpen || messageModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [noteModalOpen, messageModalOpen]);

    return (
        <div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setNoteModalOpen(true)}>
                    Add a note
                </button>
                <button className={styles.button}>Add a photo</button>
            </div>
            <MessageModal
                isOpen={messageModalOpen}
                onClose={() => setMessageModalOpen(false)}
            ></MessageModal>
            <NoteModal
                isOpen={noteModalOpen}
                onClose={() => {
                    setNoteModalOpen(false);
                }}
            ></NoteModal>
        </div>
    );
}

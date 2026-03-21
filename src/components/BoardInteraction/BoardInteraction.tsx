'use client';
import { useEffect, useState } from 'react';
import NoteModal from '../NoteModal/NoteModal';
import styles from './BoardInteraction.module.css';
import MessageModal from '../MessageModal/MessageModal';
import PictureModal from '../PictureModal/PictureModal';

export default function BoardInteraction() {
    const [noteModalOpen, setNoteModalOpen] = useState(false);
    const [messageModalOpen, setMessageModalOpen] = useState(true);
    const [pictureModalOpen, setPictureModalOpen] = useState(false);

    // preventing background scrolling while modal is open
    useEffect(() => {
        if (noteModalOpen || messageModalOpen || pictureModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [noteModalOpen, messageModalOpen, pictureModalOpen]);

    return (
        <div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setNoteModalOpen(true)}>
                    Add a note
                </button>
                <button className={styles.button} onClick={() => setPictureModalOpen(true)}>
                    Add a photo
                </button>
            </div>
            <MessageModal
                isOpen={messageModalOpen}
                onClose={() => setMessageModalOpen(false)}
            ></MessageModal>
            <PictureModal
                isOpen={pictureModalOpen}
                onClose={() => setPictureModalOpen(false)}
            ></PictureModal>
            <NoteModal
                isOpen={noteModalOpen}
                onClose={() => {
                    setNoteModalOpen(false);
                }}
            ></NoteModal>
        </div>
    );
}

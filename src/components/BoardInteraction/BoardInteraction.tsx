'use client';
import { useState } from 'react';
import NoteModal from '../NoteModal/NoteModal';
import styles from './BoardInteraction.module.css';

export default function BoardInteraction() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setModalOpen(true)}>
                    Add a note
                </button>
                <button className={styles.button}>Add a photo</button>
            </div>
            <NoteModal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                }}
            ></NoteModal>
        </div>
    );
}

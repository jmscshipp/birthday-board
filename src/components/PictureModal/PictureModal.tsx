import { useRef, useState } from 'react';
import styles from './PictureModal.module.css';
import Pin from '../Pin/Pin';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { BsImage } from 'react-icons/bs';

type PictureModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function PictureModal({ isOpen, onClose }: PictureModalProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);
    const [senderText, setSenderText] = useState('');
    const router = useRouter();

    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewURL(URL.createObjectURL(file));
            setSelectedFile(file);
        }
    };

    if (!isOpen) return null;

    const savePicture = async (file: File, sender: string) => {
        try {
            const storageRef = ref(storage, `pictures/${file.name}`);
            await uploadBytes(storageRef, file);
            const pictureURL = await getDownloadURL(storageRef);

            await addDoc(collection(db, 'pictures'), {
                image: pictureURL,
                sender: sender,
                margin: Math.round(Math.random() * -60),
                createdAt: new Date(),
            });
            setPreviewURL(null);
            setSelectedFile(null);
            setSenderText('');
            router.refresh();
            onClose();
        } catch (error) {
            console.error('Having trouble saving picture:', error);
        }
    };

    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <button className={styles.exitButton} onClick={onClose}>
                        x
                    </button>
                </div>
                <div className={styles.noteContainer}>
                    <div className={styles.pinWrapper}>
                        <Pin color={'#38632a'}></Pin>
                    </div>
                    {previewURL ? (
                        <img src={previewURL} alt="Preview" className={styles.previewImage} />
                    ) : (
                        <div className={styles.placeholder}>
                            <BsImage size={48} />
                        </div>
                    )}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <button onClick={() => fileInputRef.current?.click()}>
                        {previewURL ? 'Change picture' : 'Choose a picture'}
                    </button>
                    <div className={styles.senderWrapper}>
                        <label htmlFor="sender">-</label>
                        <textarea
                            id="sender"
                            className={styles.senderInputArea}
                            name="noteSender"
                            placeholder="Put your name here"
                            value={senderText}
                            onChange={(e) => setSenderText(e.target.value)}
                            rows={1}
                            cols={25}
                        ></textarea>
                    </div>
                </div>
            </div>

            <button
                className={styles.pinButton}
                disabled={!selectedFile || !senderText.trim()}
                onClick={() => savePicture(selectedFile as File, senderText)}
            >
                All done, pin it!
            </button>
        </div>
    );
}

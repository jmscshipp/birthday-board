import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const getNotes = async () => {
    try {
        const snapshot = await getDocs(collection(db, 'notes'));
        console.log('notes snapshot size:', snapshot.size);
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            kind: 'note' as const,
            color: doc.data().color,
            font: doc.data().font,
            message: doc.data().message,
            sender: doc.data().sender,
            margin: doc.data().margin,
            createdAt: doc.data().createdAt.toDate(),
        }));
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
};

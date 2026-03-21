import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const getNotes = async () => {
    const snapshot = await getDocs(collection(db, 'notes'));
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        kind: 'note' as const,
        color: doc.data().color,
        message: doc.data().message,
        sender: doc.data().sender,
        margin: doc.data().margin,
    }));
};

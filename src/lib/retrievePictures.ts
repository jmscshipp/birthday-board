import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const getPictures = async () => {
    const snapshot = await getDocs(collection(db, 'pictures'));
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        kind: 'picture' as const,
        image: doc.data().image,
        sender: doc.data().sender,
        margin: doc.data().margin,
        createdAt: doc.data().createdAt.toDate(),
    }));
};

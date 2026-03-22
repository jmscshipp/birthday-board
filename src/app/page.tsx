import styles from './page.module.css';
import Note from '../components/Note/Note';
import Picture from '../components/Picture/Picture';
import BoardInteraction from '@/components/BoardInteraction/BoardInteraction';
import { getNotes } from '@/lib/retrieveNotes';
import { getPictures } from '@/lib/retrievePictures';
import MessageModal from '@/components/MessageModal/MessageModal';

export const dynamic = 'force-dynamic';

type NoteData = {
    kind: 'note';
    color: string;
    message: string;
    sender: string;
    margin: number;
};

type PictureData = {
    kind: 'picture';
    image: string;
    sender: string;
    margin: number;
};

type BoardItem = NoteData | PictureData;

const testData: BoardItem[] = [
    {
        kind: 'note',
        color: 'black',
        message:
            "Happy Birthday Selali! You're so special to me and I'm lucky to have you in my life :) Have a great day! another tes",
        sender: 'howard',
        margin: Math.random() * -60,
    },
    {
        kind: 'note',
        color: 'black',
        message: "this is the note I'm leaving!! I'm putting it in the props!",
        sender: 'howard',
        margin: Math.random() * -60,
    },
    {
        kind: 'picture',
        image: '/images/botanic-garden-horizontal.jpg',
        sender: 'howard',
        margin: Math.random() * -60,
    },
    {
        kind: 'note',
        color: 'black',
        message: "this is the note I'm leaving!! I'm putting it in the props!",
        sender: 'howard',
        margin: Math.random() * -60,
    },
    {
        kind: 'note',
        color: 'black',
        message: "this is the note I'm leaving!! I'm putting it in the props!",
        sender: 'howard',
        margin: Math.random() * -60,
    },
    {
        kind: 'note',
        color: 'black',
        message: "this is the note I'm leaving!! I'm putting it in the props!",
        sender: 'howard',
        margin: Math.random() * -60,
    },
    {
        kind: 'picture',
        image: '/images/botanic-garden-vertical.jpg',
        sender: 'howard',
        margin: Math.random() * -60,
    },
];

export default async function Home() {
    const [notes, pictures] = await Promise.all([getNotes(), getPictures()]);
    const boardItems: BoardItem[] = [...notes, ...pictures].sort((a, b) => {
        const aTime = new Date(a.createdAt).getTime();
        const bTime = new Date(b.createdAt).getTime();
        return aTime - bTime;
    });
    if (boardItems.length > 0) {
        boardItems[0].margin = 0;
    }

    return (
        <div>
            <div className={styles.page}>
                <Note
                    color={'black'}
                    message={'Title message here'}
                    sender={'James'}
                    placement={'center'}
                    margin={0}
                ></Note>
                <BoardInteraction></BoardInteraction>

                <div>
                    {boardItems.map((item, index) => {
                        if (item.kind === 'picture') {
                            return (
                                <Picture
                                    key={index}
                                    image={item.image}
                                    sender={item.sender}
                                    margin={item.margin}
                                />
                            );
                        } else if (item.kind === 'note') {
                            return (
                                <Note
                                    key={index}
                                    color={item.color}
                                    message={item.message}
                                    sender={item.sender}
                                    placement={
                                        index % 3 == 0
                                            ? 'center'
                                            : index % 2 == 0
                                              ? 'left'
                                              : 'right'
                                    }
                                    margin={item.margin}
                                ></Note>
                            );
                        }
                    })}
                </div>
                <p className={styles.signature}>
                    this site made by{' '}
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">james</a>
                    :)
                </p>
            </div>
        </div>
    );
}

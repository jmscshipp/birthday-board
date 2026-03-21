import styles from './page.module.css';
import Note from '../components/Note/Note';
import Picture from '../components/Picture/Picture';
import BoardInteraction from '@/components/BoardInteraction/BoardInteraction';
import { getNotes } from '@/lib/retrieveNotes';

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
    const notes: NoteData[] = await getNotes();

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
                    {notes.map((note, index) => {
                        /*if (note.kind === 'picture') {
                            return (
                                <Picture
                                    key={index}
                                    image={note.image}
                                    sender={note.sender}
                                    margin={note.margin}
                                />
                            );
                        } else */ if (note.kind === 'note') {
                            return (
                                <Note
                                    key={index}
                                    color={note.color}
                                    message={note.message}
                                    sender={note.sender}
                                    placement={
                                        index % 3 == 0
                                            ? 'center'
                                            : index % 2 == 0
                                              ? 'left'
                                              : 'right'
                                    }
                                    margin={note.margin}
                                ></Note>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

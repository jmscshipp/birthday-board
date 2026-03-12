import styles from './page.module.css';
import Note from '../components/Note/Note';
import Picture from '../components/Picture/Picture';
import NoteModal from '@/components/NoteModal/NoteModal';

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

export default function Home() {
    return <NoteModal isOpen={true} onClose={() => {}}></NoteModal>;

    return (
        <div className={styles.page}>
            <div className={styles.title}>
                <p>Page title here!</p>
            </div>
            <div>
                {testData.map((note, index) => {
                    if (note.kind === 'picture') {
                        return (
                            <Picture
                                key={index}
                                image={note.image}
                                sender={note.sender}
                                margin={note.margin}
                            />
                        );
                    } else if (note.kind === 'note') {
                        return (
                            <Note
                                key={index}
                                color={note.color}
                                message={note.message}
                                sender={note.sender}
                                placement={
                                    index % 3 == 0 ? 'center' : index % 2 == 0 ? 'left' : 'right'
                                }
                                margin={note.margin}
                            ></Note>
                        );
                    }
                })}
            </div>
        </div>
    );
}

//<Picture image="/images/botanic-garden-vertical.jpg" sender=""></Picture>

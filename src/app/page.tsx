import styles from './page.module.css';
import Note from '../components/Note/Note';
import Picture from '../components/Picture/Picture';

type NoteData = {
    kind: 'note';
    color: string;
    message: string;
    sender: string;
};

type PictureData = {
    kind: 'picture';
    image: string;
    sender: string;
};

type BoardItem = NoteData | PictureData;

export default function Home() {
    const testData: BoardItem[] = [
        {
            kind: 'note',
            color: 'black',
            message: "this is the note I'm leaving!! I'm putting it in the props!",
            sender: 'howard',
        },
        {
            kind: 'note',
            color: 'black',
            message: "this is the note I'm leaving!! I'm putting it in the props!",
            sender: 'howard',
        },
        {
            kind: 'picture',
            image: '/images/botanic-garden-horizontal.jpg',
            sender: 'howard',
        },
        {
            kind: 'note',
            color: 'black',
            message: "this is the note I'm leaving!! I'm putting it in the props!",
            sender: 'howard',
        },
        {
            kind: 'note',
            color: 'black',
            message: "this is the note I'm leaving!! I'm putting it in the props!",
            sender: 'howard',
        },
        {
            kind: 'note',
            color: 'black',
            message: "this is the note I'm leaving!! I'm putting it in the props!",
            sender: 'howard',
        },
        {
            kind: 'picture',
            image: '/images/botanic-garden-vertical.jpg',
            sender: 'howard',
        },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.title}>
                <p>Page title here!</p>
            </div>
            <div>
                {testData.map((note, index) => {
                    if (note.kind === 'picture') {
                        return <Picture key={index} image={note.image} sender={note.sender} />;
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
                            ></Note>
                        );
                    }
                })}
            </div>
        </div>
    );
}

//<Picture image="/images/botanic-garden-vertical.jpg" sender=""></Picture>

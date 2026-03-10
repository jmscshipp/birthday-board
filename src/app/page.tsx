import styles from './page.module.css';
import Note from '../components/Note/Note';
import Picture from '../components/Picture/Picture';

type NoteData = {
    color: string;
    message: string;
    sender: string;
};

export default function Home() {
    const testData: NoteData[] = [
        {
            color: 'black',
            message: "this is the note I'm leaving!! I'm putting it in the props!",
            sender: 'howard',
        },
        {
            color: 'red',
            message: 'another note! this one is shorter',
            sender: 'james',
        },
        {
            color: 'orange',
            message:
                "this not is very important to me and so I'm gonna  make it extra long to fill the space yes.",
            sender: 'Lisa',
        },
        {
            color: 'green',
            message: 'random note. I like to keep things brief',
            sender: 'thomas',
        },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.title}>
                <p>Page title here!</p>
            </div>
            <div>
                {testData.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            color={note.color}
                            message={note.message}
                            sender={note.sender}
                            placement={index % 2 == 0 ? 'left' : 'right'}
                        ></Note>
                    );
                })}
            </div>
        </div>
    );
}

//<Picture image="/images/botanic-garden-vertical.jpg" sender=""></Picture>

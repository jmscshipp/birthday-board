import styles from './page.module.css';
import Note from '../components/Note/Note';
import Picture from '../components/Picture/Picture';

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.title}>
                <p>Page title here!</p>
            </div>
            <Note
                color="black"
                message="this is the note I'm leaving!! I'm putting it in the props!"
                sender="james"
                placement="right"
            ></Note>
            <Picture image="/images/botanic-garden-horizontal.jpg" sender=""></Picture>
            <Note
                color="orange"
                message="another note! this one is shorter"
                sender="james"
                placement="left"
            ></Note>
            <Picture image="/images/botanic-garden-vertical.jpg" sender=""></Picture>
        </div>
    );
}

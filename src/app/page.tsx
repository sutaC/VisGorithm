import styles from "./page.module.css";
import { InsertionSortDisplay } from "@/components/algorithms/InsertionSortDisplay";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Insertion Sort</h1>
            <InsertionSortDisplay />
        </main>
    );
}

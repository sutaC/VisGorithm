import styles from "./page.module.css";
import { BubbleSortDisplay } from "@/components/algorithms/BubbleSortDisplay";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Bubble Sort</h1>
            <BubbleSortDisplay />
        </main>
    );
}

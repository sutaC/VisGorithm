import styles from "./page.module.css";
import ArrayDisplay from "@/components/ArrayDisplay";

export default function Home() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <main className={styles.main}>
            <h1>Array</h1>
            <ArrayDisplay array={arr}></ArrayDisplay>
        </main>
    );
}

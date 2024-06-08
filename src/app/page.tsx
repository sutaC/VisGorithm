"use client";

import { BubbleSortDisplay } from "@/components/algorithms/BubbleSortDisplay";
import styles from "./page.module.css";
import { InsertionSortDisplay } from "@/components/algorithms/InsertionSortDisplay";
import { useState } from "react";

function selectAlgorithm(name: string): JSX.Element {
    switch (name) {
        case "BubbleSort":
            return <BubbleSortDisplay />;
        case "InsertionSort":
            return <InsertionSortDisplay />;
        default:
            console.warn(
                `No algorithm was selected with provided name: ${name}`
            );
            return <></>;
    }
}

export default function Home() {
    const [currAlg, setCurrAlg] = useState("BubbleSort");

    return (
        <div className={styles.app}>
            <header>
                <h1>VisGorithm</h1>

                <select onChange={(e) => setCurrAlg(e.target.value)}>
                    <option value="BubbleSort">Bubble Sort</option>
                    <option value="InsertionSort">Insertion Sort</option>
                </select>
            </header>
            <main className={styles.main}>
                <p>
                    <strong>{currAlg}</strong>
                </p>
                {selectAlgorithm(currAlg)}
            </main>
        </div>
    );
}

"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { BubbleSortDisplay } from "@/components/algorithms/BubbleSortDisplay";
import { InsertionSortDisplay } from "@/components/algorithms/InsertionSortDisplay";
import { SelectionSortDisplay } from "@/components/algorithms/SelectionSortDisplay";
import { testSort } from "@/algorithms/innerFunctions";
import { quickSort } from "@/algorithms/quickSort";

function selectAlgorithm(name: string): JSX.Element {
    switch (name) {
        case "BubbleSort":
            return <BubbleSortDisplay />;
        case "InsertionSort":
            return <InsertionSortDisplay />;
        case "SelectionSort":
            return <SelectionSortDisplay />;
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
                    <option value="SelectionSort">Selection Sort</option>
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

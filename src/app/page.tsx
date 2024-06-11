"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { BubbleSortDisplay } from "@/components/algorithms/BubbleSortDisplay";
import { InsertionSortDisplay } from "@/components/algorithms/InsertionSortDisplay";
import { SelectionSortDisplay } from "@/components/algorithms/SelectionSortDisplay";
import { QuickSortDisplay } from "@/components/algorithms/QucikSortDisplay";
import { LinearSearchDisplay } from "@/components/algorithms/LinearSearchDisplay";
import { binarySearch } from "@/algorithms/binarySearch";
import { getRandomArray, testSearch } from "@/algorithms/innerFunctions";
import { BinarySearchDisplay } from "@/components/algorithms/BinarySearchDisplay";

function selectAlgorithm(name: string): JSX.Element {
    switch (name) {
        case "BubbleSort":
            return <BubbleSortDisplay />;
        case "InsertionSort":
            return <InsertionSortDisplay />;
        case "SelectionSort":
            return <SelectionSortDisplay />;
        case "QuickSort":
            return <QuickSortDisplay />;
        case "LinearSearch":
            return <LinearSearchDisplay />;
        case "BinarySearch":
            return <BinarySearchDisplay />;
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
                    <option value="QuickSort">Quick Sort</option>
                    <option value="LinearSearch">Linear Search</option>
                    <option value="BinarySearch">Binary Search</option>
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

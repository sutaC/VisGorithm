"use client";

import { useState } from "react";
import styles from "./page.module.css";
import ArrayDisplay, { Pointer } from "@/components/ArrayDisplay";
import { bubleSort, bubleSortEnhanced } from "@/algorithms/bubbleSort";

function getRandomArray(size: number): number[] {
    const array = [];
    for (let i = 0; i < size; i++) {
        const val = Math.floor(Math.random() * 100);
        array.push(val);
    }
    return array;
}

export default function Home() {
    const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    const [ptrs, setPtrs] = useState<Pointer[]>([]);

    const randArr = () => {
        setArr(getRandomArray(10));
    };

    const sortArr = () => {
        setArr(bubleSort(arr));
        bubleSortEnhanced(arr, (array, pointers) => {
            setPtrs(pointers);
            setArr(array);
        });
    };

    return (
        <main className={styles.main}>
            <h1>Array</h1>
            <ArrayDisplay array={arr} pointers={ptrs}></ArrayDisplay>
            <div>
                <button onClick={randArr}>Rand</button>
                <button onClick={sortArr}>Sort</button>
            </div>
        </main>
    );
}

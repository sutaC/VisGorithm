"use client";

import { useState } from "react";
import styles from "./page.module.css";
import ArrayDisplay, { Pointer } from "@/components/ArrayDisplay";

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
    const [ptrs, setPtrs] = useState<Pointer[]>([{ index: 0, color: "red" }]);

    const updatePtr = () => {
        const [ptr] = ptrs;
        ptr.index++;
        if (ptr.index >= arr.length) ptr.index = 0;
        setPtrs([ptr]);
    };

    const randArr = () => {
        setArr(getRandomArray(10));
    };

    return (
        <main className={styles.main}>
            <h1>Array</h1>
            <ArrayDisplay array={arr} pointers={ptrs}></ArrayDisplay>
            <button onClick={updatePtr}>+</button>
            <button onClick={randArr}>Rand</button>
        </main>
    );
}

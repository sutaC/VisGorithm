"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";
import ArrayDisplay, { Pointer } from "@/components/ArrayDisplay";
import { bubleSortEnhanced } from "@/algorithms/bubbleSort";
import { getRandomArray } from "@/algorithms/innerFunctions";

export default function Home() {
    const [arr, setArr] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [ptrs, setPtrs] = useState<Pointer[]>([]);

    let isRunningRef = useRef(false);
    let isSortedRef = useRef(false);

    const randArr = () => {
        if (isRunningRef.current) return;
        setArr(getRandomArray(10));
        setPtrs([]);
        isSortedRef.current = false;
    };

    const sortArr = async () => {
        if (isRunningRef.current) return;
        isRunningRef.current = true;
        await bubleSortEnhanced(arr, (array, pointers) => {
            setPtrs(pointers);
            setArr(array);
        });
        isRunningRef.current = false;
        isSortedRef.current = true;
    };

    return (
        <main className={styles.main}>
            <h1>Array</h1>
            <ArrayDisplay array={arr} pointers={ptrs}></ArrayDisplay>
            <div className={styles.controls}>
                <button onClick={randArr} disabled={isRunningRef.current}>
                    Rand
                </button>
                <button
                    onClick={sortArr}
                    disabled={isRunningRef.current || isSortedRef.current}
                >
                    Sort
                </button>
            </div>
        </main>
    );
}

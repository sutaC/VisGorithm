"use client";
import styles from "./BubbleSortDisplay.module.css";
import { useRef, useState } from "react";
import ArrayDisplay, { Pointer } from "@/components/ArrayDisplay";
import { bubleSortEnhanced } from "@/algorithms/bubbleSort";
import { getRandomArray } from "@/algorithms/innerFunctions";
import { CodeDisplay } from "../CodeDisplay";
import { codeLines } from "@/algorithms/bubbleSort";

export function BubbleSortDisplay() {
    const [arr, setArr] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [ptrs, setPtrs] = useState<Pointer[]>([]);
    const [codePtr, setCodePtr] = useState<number | null>(null);

    let isRunningRef = useRef(false);
    let isSortedRef = useRef(false);

    const randArr = () => {
        if (isRunningRef.current) return;
        setArr(getRandomArray(10));
        setPtrs([]);
        setCodePtr(null);
        isSortedRef.current = false;
    };

    const sortArr = async () => {
        if (isRunningRef.current) return;
        isRunningRef.current = true;
        await bubleSortEnhanced(
            arr,
            (array, pointers) => {
                setPtrs(pointers);
                setArr(array);
            },
            (codePointer) => setCodePtr(codePointer)
        );
        isRunningRef.current = false;
        isSortedRef.current = true;
    };

    return (
        <div className={styles.display}>
            <ArrayDisplay array={arr} pointers={ptrs}></ArrayDisplay>

            <CodeDisplay code={codeLines} pointer={codePtr} />

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
        </div>
    );
}

import styles from "./EFDisplay.module.css";
import ArrayDisplay, { Pointer } from "./ArrayDisplay";
import { CodeDisplay } from "./CodeDisplay";
import {
    EnhancedFunction,
    EnhancedSearchFunction,
    getRandomArray,
} from "@/algorithms/innerFunctions";
import { useRef, useState } from "react";
import { quickSort } from "@/algorithms/quickSort";

export function EFDisplay(props: {
    EF: EnhancedFunction;
    codeLines: string[];
    options?: { search?: boolean; sorted?: boolean };
}) {
    const [arr, setArr] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [ptrs, setPtrs] = useState<Pointer[]>([]);
    const [codePtr, setCodePtr] = useState<number | null>(null);

    // search
    const [needle, setNeedle] = useState<number>(0);

    let [isRunning, setIsRunning] = useState(false);
    let [isDone, setIsDone] = useState(false);

    const randArr = () => {
        if (isRunning) return;
        setArr(getRandomArray(10));
        if (props.options?.sorted) setArr(quickSort(arr));
        if (props.options?.search) {
            const randIdx = Math.floor(Math.random() * arr.length);
            setNeedle(arr[randIdx]);
        }
        setPtrs([]);
        setCodePtr(null);
        setIsDone(false);
    };

    const sortArr = async () => {
        if (isRunning) return;
        setIsRunning(true);

        const update = (array: number[], pointers: Pointer[]) => {
            setPtrs(pointers);
            setArr(array);
        };
        const pointCode = (codePointer: number | null) =>
            setCodePtr(codePointer);

        // Call
        if (props.options?.search) {
            // Search
            const fn: EnhancedSearchFunction =
                props.EF as unknown as EnhancedSearchFunction;

            await fn(arr, needle, update, pointCode);
        } else {
            // Default
            await props.EF(arr, update, pointCode);
        }

        setIsRunning(false);
        setIsDone(true);
    };

    return (
        <div className={styles.display}>
            {props.options?.search ? <p>Search for: {needle}</p> : <></>}

            <ArrayDisplay array={arr} pointers={ptrs}></ArrayDisplay>

            <CodeDisplay code={props.codeLines} pointer={codePtr} />

            <div className={styles.controls}>
                <button onClick={randArr} disabled={isRunning}>
                    Rand
                </button>
                <button onClick={sortArr} disabled={isRunning || isDone}>
                    Run
                </button>
            </div>
        </div>
    );
}
import styles from "./EFDisplay.module.css";
import ArrayDisplay from "./ArrayDisplay";
import { CodeDisplay } from "./CodeDisplay";
import {
    EnhancedFunction,
    EnhancedSearchFunction,
    Pointer,
    getRandomArray,
} from "@/algorithms/innerFunctions";
import { useState } from "react";
import { quickSort } from "@/algorithms/sorts/quickSort";

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
    const [searchNon, setSearchNon] = useState(false);

    let [isRunning, setIsRunning] = useState(false);
    let [isDone, setIsDone] = useState(false);

    const randArr = () => {
        if (isRunning) return;
        let newArr = getRandomArray(10);
        if (props.options?.sorted) newArr = quickSort(newArr);
        if (props.options?.search) {
            let val: number;
            if (searchNon) {
                val = -1;
            } else {
                val = newArr[Math.floor(Math.random() * newArr.length)];
            }
            setNeedle(val);
        }
        setPtrs([]);
        setArr(newArr);
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

                {props.options?.search ? (
                    <div className="field">
                        <label htmlFor="searchNon">Not foundable: </label>
                        <input
                            type="checkbox"
                            id="searchNon"
                            checked={searchNon}
                            onChange={(e) => setSearchNon(e.target.checked)}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

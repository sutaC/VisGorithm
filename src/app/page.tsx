"use client";

import { useState } from "react";
import styles from "./page.module.css";
import ArrayDisplay, { Pointer } from "@/components/ArrayDisplay";

export default function Home() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const [ptrs, setPtrs] = useState<Pointer[]>([{ index: 0, color: "red" }]);

    const updatePtr = () => {
        const [ptr] = ptrs;
        ptr.index++;
        if (ptr.index >= arr.length) ptr.index = 0;
        setPtrs([ptr]);
    };

    return (
        <main className={styles.main}>
            <h1>Array</h1>
            <ArrayDisplay array={arr} pointers={ptrs}></ArrayDisplay>
            <button onClick={updatePtr}>+</button>
        </main>
    );
}

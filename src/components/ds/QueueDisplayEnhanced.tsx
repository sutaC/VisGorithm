"use client";

import styles from "./QueueDisplayEnhanced.module.css";
import { useState } from "react";
import { QueueEnhanced } from "@/algorithms/ds/Queue";
import { QueueDisplay } from "../QueueDisplay";
import { getRandomArray } from "@/algorithms/innerFunctions";

export function QueueDisplayEnhanced() {
    const [queue, setQueue] = useState(new QueueEnhanced([0, 0, 0, 0, 0]));

    const handleEnqueue = () => {
        if (queue.length >= 5) return;
        const [val] = getRandomArray(1);
        queue.enqueue(val);
        setQueue(new QueueEnhanced(queue.getStructure()));
    };

    const handleDequeue = () => {
        if (queue.length === 0) return;
        queue.dequeue();
        setQueue(new QueueEnhanced(queue.getStructure()));
    };

    return (
        <div className={styles.display}>
            <div className={styles.controlls}>
                <button disabled={queue.length >= 5} onClick={handleEnqueue}>
                    Enqueue
                </button>
                <button disabled={queue.length === 0} onClick={handleDequeue}>
                    Dequeue
                </button>
            </div>

            <QueueDisplay queue={queue}></QueueDisplay>
        </div>
    );
}

"use client";

import queueStyles from "@/components/QueueDisplay.module.css";
import styles from "./QueueDisplayEnhanced.module.css";
import { useState } from "react";
import { QueueEnhanced } from "@/algorithms/ds/Queue";
import { QueueDisplay } from "../QueueDisplay";
import {
    Pointer,
    getRandomArray,
    pointer,
    wait,
} from "@/algorithms/innerFunctions";

export function QueueDisplayEnhanced() {
    const [queue, setQueue] = useState(new QueueEnhanced([0, 0, 0, 0, 0]));
    const [pointers, setPointers] = useState<Pointer[]>([]);
    const [processing, setProcessing] = useState(false);

    const update = () => setQueue(new QueueEnhanced(queue.getStructure()));

    const handleEnqueue = async () => {
        if (processing) return;
        if (queue.length >= 5) return;
        setProcessing(true);

        const [val] = getRandomArray(1);

        queue.enqueue(val);
        setPointers([pointer(queue.length - 1, queueStyles.enqueue)]);
        update();

        await wait(500);
        setPointers([]);

        setProcessing(false);
    };

    const handleDequeue = async () => {
        if (processing) return;
        if (queue.length === 0) return;

        setProcessing(true);

        setPointers([pointer(0, queueStyles.dequeue)]);
        await wait(500);

        queue.dequeue();
        setPointers([]);
        update();

        setProcessing(false);
    };

    return (
        <div className={styles.display}>
            <div className={styles.controlls}>
                <button
                    disabled={queue.length >= 5 || processing}
                    onClick={handleEnqueue}
                >
                    Enqueue
                </button>
                <button
                    disabled={queue.length === 0 || processing}
                    onClick={handleDequeue}
                >
                    Dequeue
                </button>
            </div>

            <QueueDisplay queue={queue} pointers={pointers}></QueueDisplay>
        </div>
    );
}

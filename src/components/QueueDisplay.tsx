import { Pointer, applyStyles } from "@/algorithms/innerFunctions";
import styles from "./QueueDisplay.module.css";
import { QueueEnhanced } from "@/algorithms/ds/Queue";

export function QueueDisplay(props: {
    queue: QueueEnhanced<number>;
    pointers?: Pointer[];
}) {
    const { queue } = props;

    return (
        <div className={styles.display}>
            {queue.getStructure().map((v, index) => (
                <div key={index} className={styles.nodeContainer}>
                    <div
                        className={`${styles.node} ${
                            props.pointers
                                ? applyStyles(index, props.pointers)
                                : ""
                        }`}
                    >
                        {v}
                    </div>
                    {index < queue.length - 1 ? (
                        <span className={styles.arrow}>&rarr;</span>
                    ) : (
                        <></>
                    )}
                </div>
            ))}
        </div>
    );
}

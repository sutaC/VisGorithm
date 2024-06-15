import styles from "./QueueDisplay.module.css";
import { QueueEnhanced } from "@/algorithms/ds/Queue";

export function QueueDisplay(props: { queue: QueueEnhanced<number> }) {
    const { queue } = props;

    return (
        <div className={styles.display}>
            {queue.getStructure().map((v, idx) => (
                <div key={idx} className={styles.nodeContainer}>
                    <div className={styles.node}>{v}</div>
                    {idx < queue.length - 1 ? (
                        <span className={styles.arrow}>&rarr;</span>
                    ) : (
                        <></>
                    )}
                </div>
            ))}
        </div>
    );
}

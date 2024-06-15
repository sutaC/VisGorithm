import { QueueEnhanced } from "@/algorithms/ds/Queue";
import styles from "./QueueDisplay.module.css";

function QueueDisplay(props: { structure?: number[] }) {
    const queue = new QueueEnhanced(props.structure);

    return (
        <div className={styles.display}>
            {queue.getStructure().map((v, idx) => (
                <>
                    <div className={styles.node}>{v}</div>
                    {idx < queue.length - 1 ? (
                        <span className={styles.arrow}>&rarr;</span>
                    ) : (
                        <></>
                    )}
                </>
            ))}
        </div>
    );
}

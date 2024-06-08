import styles from "./CodeDisplay.module.css";

export function CodeDisplay(prop: { code: string[]; pointer?: number | null }) {
    return (
        <div className={styles.display}>
            {prop.code.map((line, idx) => (
                <pre
                    className={`
                        ${styles.line} 
                        ${idx === prop.pointer ? styles.pointer : ""}`}
                >
                    {line}
                </pre>
            ))}
        </div>
    );
}

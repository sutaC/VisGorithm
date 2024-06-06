import style from "./ArrayDisplay.module.css";

export default function ArrayDisplay(prop: { array: number[] }) {
    return (
        <div className={style.display}>
            {prop.array.map((val) => (
                <div className={style.cell}>{val}</div>
            ))}
        </div>
    );
}

import style from "./ArrayDisplay.module.css";

export interface Pointer {
    index: number;
    color: string;
}

export default function ArrayDisplay(prop: {
    array: number[];
    pointers?: Pointer[];
}) {
    return (
        <div className={style.display}>
            {prop.array.map((val, index) => (
                <div
                    key={index}
                    className={style.cell}
                    style={{
                        background:
                            prop.pointers?.find((ptr) => ptr.index === index)
                                ?.color || "transparent",
                    }}
                >
                    {val}
                </div>
            ))}
        </div>
    );
}

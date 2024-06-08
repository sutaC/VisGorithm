import style from "./ArrayDisplay.module.css";

export interface Pointer {
    index: number;
    style: string;
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
                    className={`
                        ${style.cell} 
                        ${
                            prop.pointers?.find((ptr) => ptr.index === index)
                                ?.style
                        }
                        `}
                >
                    {val}
                </div>
            ))}
        </div>
    );
}

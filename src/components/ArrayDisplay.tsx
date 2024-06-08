import style from "./ArrayDisplay.module.css";

export interface Pointer {
    index: number;
    style: string;
}

function applyStyles(index: number, pointers: Pointer[]): string {
    let out = "";
    pointers.forEach((ptr) => {
        if (ptr.index === index) {
            out += " " + ptr.style;
        }
    });
    return out;
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
                            prop.pointers
                                ? applyStyles(index, prop.pointers)
                                : ""
                        }
                        `}
                >
                    {val}
                </div>
            ))}
        </div>
    );
}

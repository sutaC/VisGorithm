import { Pointer, applyStyles } from "@/algorithms/innerFunctions";
import style from "./ArrayDisplay.module.css";

export default function ArrayDisplay(props: {
    array: number[];
    pointers?: Pointer[];
}) {
    return (
        <div className={style.display}>
            {props.array.map((val, index) => (
                <div
                    key={index}
                    className={`
                        ${style.cell} 
                        ${
                            props.pointers
                                ? applyStyles(index, props.pointers)
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

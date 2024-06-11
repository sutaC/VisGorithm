import style from "@/components/ArrayDisplay.module.css";
import {
    PointCodeFunction,
    UpdateFunction,
    pointer,
    wait,
} from "./innerFunctions";
import { Pointer } from "@/components/ArrayDisplay";

// Original
export function linearSearch(array: number[], needle: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === needle) {
            return i;
        }
    }
    return -1;
}

// Enhanced
export async function linearSearchEnhanced(
    array: number[],
    needle: number,
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    // Start
    pointCode(0);
    await wait(500);

    for (let i = 0; i < array.length; i++) {
        // Loop
        pointCode(1);
        update(array, [pointer(i, style.index)]);
        await wait(500);

        // If
        pointCode(2);
        update(array, [pointer(i, style.nonSwap)]);
        await wait(500);
        if (array[i] === needle) {
            pointCode(3);
            update(array, [pointer(i, style.greater)]);
            await wait(500);
            // Found
            return;
        }

        // Next
        update(array, [pointer(i, style.smaller)]);
        await wait(500);
    }

    // Not found
    const notFound: Pointer[] = [];
    array.forEach((v, i) => notFound.push(pointer(i, style.notFound)));
    update(array, notFound);
    return;
}

// Code lines
export const codeLines: string[] = [
    "function linearSearch(array: number[], needle: number): number {",
    "    for (let i = 0; i < array.length; i++) {",
    "        if (array[i] === needle) {",
    "            return i;",
    "        }",
    "    }",
    "    return -1;",
    "}",
];

import {
    PointCodeFunction,
    Pointer,
    UpdateFunction,
    clone,
    pointer,
} from "../innerFunctions";
import { swap, wait } from "../innerFunctions";
import styles from "@/components/ArrayDisplay.module.css";

// Original
export function bubleSort(arr: number[]): number[] {
    const array: number[] = clone(arr);
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j - 1] > array[j]) {
                swap(array, j - 1, j);
            }
        }
    }
    return array;
}

// Enhanced
const pTime = 250;
const uTime = 500;

export async function bubleSortEnhanced(
    arr: number[],
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    const array: number[] = clone(arr);

    const sortedPtrs: Pointer[] = [];

    // Start
    pointCode(0);
    await wait(uTime);

    for (let i = 0; i < array.length - 1; i++) {
        // Outer loop
        pointCode(1);
        await wait(pTime);

        for (let j = 1; j < array.length - i; j++) {
            // Traverse
            pointCode(2);
            update(array, [pointer(j - 1, styles.index), ...sortedPtrs]);
            await wait(uTime);

            // If condition
            pointCode(3);
            await wait(pTime);
            if (array[j - 1] > array[j]) {
                // Swap
                pointCode(4);
                update(array, [
                    pointer(j - 1, `${styles.greater} ${styles.swapRight}`),
                    pointer(j, `${styles.smaller} ${styles.swapLeft}`),
                    ...sortedPtrs,
                ]);
                await wait(uTime * 2);
                swap(array, j - 1, j);
            } else {
                // No swap
                update(array, [
                    pointer(j - 1, styles.nonSwap),
                    pointer(j, styles.nonSwap),
                    ...sortedPtrs,
                ]);
                await wait(uTime * 2);
            }

            // Next
            if (j >= array.length - i - 1) {
                // Sorted section
                sortedPtrs.push(pointer(array.length - i - 1, styles.sorted));
            }
            update(array, [pointer(j - 1, styles.index), ...sortedPtrs]);
            await wait(uTime);
        }
    }

    // End
    pointCode(null);
    sortedPtrs.push(pointer(0, styles.sorted));
    sortedPtrs.push(pointer(1, styles.sorted));
    update(array, sortedPtrs);
}

export const codeLines: string[] = [
    "function bubleSort(array: number[]): void {",
    "   for (let i = 0; i < array.length - 1; i++) {",
    "       for (let j = 1; j < array.length - i; j++) {",
    "           if (array[j - 1] > array[j]) {",
    "               swap(array, j - 1, j);",
    "           }",
    "       }",
    "   }",
    "}",
];

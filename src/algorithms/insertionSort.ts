import styles from "@/components/ArrayDisplay.module.css";
import { Pointer } from "@/components/ArrayDisplay";
import {
    swap,
    pointer,
    UpdateFunction,
    PointCodeFunction,
    clone,
    wait,
} from "./innerFunctions";

// Original
export function insertionSort(arr: number[]): number[] {
    const array: number[] = clone(arr);
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            swap(array, j - 1, j);
        }
    }
    return array;
}

// Enhanced
const pTime = 250;
const uTime = 500;

export async function insertionSortEnhanced(
    arr: number[],
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    const array: number[] = clone(arr);

    const sorted: Pointer[] = [pointer(0, styles.sorted)];

    // Start
    pointCode(0);
    await wait(uTime);

    for (let i = 1; i < array.length; i++) {
        // Outer loop
        pointCode(1);
        update(array, [pointer(i, styles.index), ...sorted]);
        await wait(uTime);

        // Sorted
        sorted.push(pointer(i, styles.sorted));

        let j = i;
        for (; j > 0 && array[j] < array[j - 1]; j--) {
            pointCode(2);
            update(array, [pointer(j, styles.index), ...sorted]);
            await wait(uTime);

            // Swap
            // TODO: fix swap
            pointCode(3);
            update(array, [
                pointer(j - 1, styles.swapGreater),
                pointer(j, styles.swapSmaller),
                ...sorted,
            ]);
            await wait(uTime * 2);

            // Swap
            swap(array, j - 1, j);
        }

        // No swap
        if (j > 0) {
            pointCode(2);
            update(array, [
                pointer(j, styles.nonSwap),
                pointer(j - 1, styles.nonSwap),
                ...sorted,
            ]);
            await wait(uTime * 2);
        }
    }

    pointCode(null);
    update(array, sorted);
}

// Code lines

export const codeLines: string[] = [
    "function insertionSort(arr: number[]): void {",
    "    for (let i = 1; i < array.length; i++) {",
    "        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {",
    "            swap(array, j - 1, j);",
    "        }",
    "    }",
    "}",
];

import styles from "@/components/ArrayDisplay.module.css";
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

    // Start
    pointCode(0);
    await wait(uTime);

    for (let i = 1; i < array.length; i++) {
        // Outer loop
        pointCode(1);
        update(array, [pointer(i, styles.index)]);
        await wait(uTime);

        let j = i;
        for (; j > 0 && array[j] < array[j - 1]; j--) {
            pointCode(2);
            await wait(pTime);

            // Swap
            pointCode(3);
            update(array, [
                pointer(j - 1, styles.swapGreater),
                pointer(j, styles.swapSmaller),
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
            ]);
            await wait(uTime * 2);
        }
    }

    update(array, []);
}

// Code lines

export const codeLines: string[] = [
    "export function insertionSort(arr: number[]): void {",
    "    for (let i = 1; i < array.length; i++) {",
    "        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {",
    "            swap(array, j - 1, j);",
    "        }",
    "    }",
    "}",
];

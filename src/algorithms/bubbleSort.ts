import { Pointer } from "@/components/ArrayDisplay";
import { swap, wait } from "./innerFunctions";
import styles from "@/components/ArrayDisplay.module.css";

// Original

export function bubleSort(array: number[]): number[] {
    const arr = structuredClone(array);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
    return arr;
}

// Enhanced

function pointer(index: number, style: string): Pointer {
    return { index, style };
}

const pTime = 250;
const uTime = 500;

export async function bubleSortEnhanced(
    array: number[],
    update: (array: number[], pointers: Pointer[]) => void,
    pointCode: (codePointer: number | null) => void
): Promise<void> {
    const arr = structuredClone(array);

    const sortedPtrs: Pointer[] = [];

    // Start
    pointCode(0);
    await wait(uTime);

    for (let i = 0; i < arr.length - 1; i++) {
        // Outer loop
        pointCode(1);
        await wait(pTime);

        for (let j = 1; j < arr.length - i; j++) {
            // Inner loop
            pointCode(2);
            await wait(pTime);

            // Traverse
            update(arr, [pointer(j - 1, styles.index), ...sortedPtrs]);
            await wait(uTime);

            // If condition
            pointCode(3);
            await wait(pTime);
            if (arr[j - 1] > arr[j]) {
                // Swap
                pointCode(4);
                update(arr, [
                    pointer(j - 1, styles.swapGreater),
                    pointer(j, styles.swapSmaller),
                    ...sortedPtrs,
                ]);
                await wait(uTime * 2);
                swap(arr, j - 1, j);
            } else {
                // No swap
                update(arr, [
                    pointer(j - 1, styles.nonSwap),
                    pointer(j, styles.nonSwap),
                    ...sortedPtrs,
                ]);
                await wait(uTime * 2);
            }

            // Next
            if (j >= arr.length - i - 1) {
                // Sorted section
                sortedPtrs.push(pointer(arr.length - i - 1, styles.sorted));
            }
            update(arr, [pointer(j - 1, styles.index), ...sortedPtrs]);
            await wait(uTime);
        }
    }

    // End
    pointCode(null);
    sortedPtrs.push(pointer(0, styles.sorted));
    sortedPtrs.push(pointer(1, styles.sorted));
    update(arr, sortedPtrs);
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

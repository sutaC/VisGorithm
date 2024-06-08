import { Pointer } from "@/components/ArrayDisplay";
import { swap, wait } from "./innerFunctions";
import styles from "@/components/ArrayDisplay.module.css";

// Original

export function bubleSort(array: number[]): number[] {
    const arr = structuredClone(array);

    for (let i = 0; i < arr.length; i++) {
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

export async function bubleSortEnhanced(
    array: number[],
    update: (array: number[], pointers: Pointer[]) => void
): Promise<void> {
    const arr = structuredClone(array);

    const sortedPtrs: Pointer[] = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            // Traverse
            update(arr, [pointer(j - 1, styles.index), ...sortedPtrs]);
            await wait(500);

            if (arr[j - 1] > arr[j]) {
                // Update
                update(arr, [
                    pointer(j - 1, styles.swapGreater),
                    pointer(j, styles.swapSmaller),
                    ...sortedPtrs,
                ]);
                await wait(1000);

                // Swap
                swap(arr, j - 1, j);
            } else {
                // No update
                update(arr, [
                    pointer(j - 1, styles.nonSwap),
                    pointer(j, styles.nonSwap),
                    ...sortedPtrs,
                ]);
                await wait(500);
            }

            // Next
            if (j >= arr.length - i - 1) {
                // Sorted section
                sortedPtrs.push(pointer(arr.length - i - 1, styles.sorted));
            }
            update(arr, [pointer(j - 1, styles.index), ...sortedPtrs]);
            await wait(500);
        }
    }

    // End
    sortedPtrs.push(pointer(0, styles.sorted));
    sortedPtrs.push(pointer(1, styles.sorted));
    update(arr, sortedPtrs);
}

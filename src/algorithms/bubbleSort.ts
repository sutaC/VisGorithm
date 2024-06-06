import { Pointer } from "@/components/ArrayDisplay";
import { swap, wait } from "./innerFunctions";

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

function pointer(index: number, color: string): Pointer {
    return { index, color };
}

export async function bubleSortEnhanced(
    array: number[],
    update: (array: number[], pointers: Pointer[]) => void
): Promise<void> {
    const arr = structuredClone(array);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            // Traverse
            update(arr, [pointer(j - 1, "gray")]);
            await wait(500);

            if (arr[j - 1] > arr[j]) {
                // Update
                update(arr, [pointer(j - 1, "green"), pointer(j, "red")]);
                await wait(500);

                // Swap
                swap(arr, j - 1, j);
                update(arr, [pointer(j - 1, "red"), pointer(j, "green")]);
                await wait(500);
            } else {
                // No update
                update(arr, [pointer(j - 1, "yellow"), pointer(j, "yellow")]);
                await wait(500);
            }

            // Next
            update(arr, [pointer(j - 1, "gray")]);
            await wait(500);
        }
    }

    // End
    update(arr, []);
}

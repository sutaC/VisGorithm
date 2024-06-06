import { swap } from "./innerFunctions";

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

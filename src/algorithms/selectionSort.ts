import { clone, swap } from "./innerFunctions";

export function selectionSort(arr: number[]): number[] {
    const array: number[] = clone(arr);
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        swap(array, i, min);
    }
    return array;
}

import { clone, swap } from "./innerFunctions";

// Original
function partition(array: number[], lo: number, hi: number): number {
    const pivot = array[hi];
    let idx = lo;
    for (let i = lo; i < hi; i++) {
        if (array[i] <= pivot) {
            swap(array, i, idx);
            idx++;
        }
    }
    swap(array, hi, idx);
    return idx;
}

function quickSortRecursive(array: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    const pivotIdx = partition(array, lo, hi);
    quickSortRecursive(array, lo, pivotIdx - 1);
    quickSortRecursive(array, pivotIdx + 1, hi);
}

export function quickSort(arr: number[]): number[] {
    const array: number[] = clone(arr);
    quickSortRecursive(array, 0, array.length - 1);
    return array;
}

// Enhanced

// Code lines

export const codeLines: string[] = [
    "function partition(array: number[], lo: number, hi: number): number {",
    "    const pivot = array[hi];",
    "    let idx = lo;",
    "    for (let i = lo; i < hi; i++) {",
    "        if (array[i] <= pivot) {",
    "            swap(array, i, idx);",
    "            idx++;",
    "        }",
    "    }",
    "    swap(array, hi, idx);",
    "    return idx;",
    "}",
    "",
    "function quickSortRecursive(array: number[], lo: number, hi: number): void {",
    "    if (lo >= hi) {",
    "        return;",
    "    }",
    "    const pivotIdx = partition(array, lo, hi);",
    "    quickSortRecursive(array, lo, pivotIdx - 1);",
    "    quickSortRecursive(array, pivotIdx + 1, hi);",
    "}",
    "",
    "function quickSort(array: number[]): void {",
    "    quickSortRecursive(array, 0, array.length - 1);",
    "}",
];

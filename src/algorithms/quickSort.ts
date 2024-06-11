import {
    PointCodeFunction,
    UpdateFunction,
    clone,
    swap,
} from "./innerFunctions";

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

async function partitionEnhanced(
    array: number[],
    lo: number,
    hi: number,
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<number> {
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

async function quickSortRecursiveEnhanced(
    array: number[],
    lo: number,
    hi: number,
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    if (lo >= hi) {
        return;
    }
    const pivotIdx = await partitionEnhanced(array, lo, hi, update, pointCode);
    await quickSortRecursiveEnhanced(
        array,
        lo,
        pivotIdx - 1,
        update,
        pointCode
    );
    await quickSortRecursiveEnhanced(
        array,
        pivotIdx + 1,
        hi,
        update,
        pointCode
    );
}

export async function quickSortEnhanced(
    arr: number[],
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    const array: number[] = clone(arr);
    quickSortRecursiveEnhanced(array, 0, array.length - 1, update, pointCode);
}

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
    "function quickSortRecursive(array: number[], lo: number, hi: number): void {",
    "    if (lo >= hi) {",
    "        return;",
    "    }",
    "    const pivotIdx = partition(array, lo, hi);",
    "    quickSortRecursive(array, lo, pivotIdx - 1);",
    "    quickSortRecursive(array, pivotIdx + 1, hi);",
    "}",
    "function quickSort(array: number[]): void {",
    "    quickSortRecursive(array, 0, array.length - 1);",
    "}",
];

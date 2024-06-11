import style from "@/components/ArrayDisplay.module.css";
import {
    PointCodeFunction,
    UpdateFunction,
    clone,
    pointer,
    swap,
    wait,
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
    // Start fn
    pointCode(0);
    await wait(250);

    // Pivot
    pointCode(1);
    await wait(250);
    const pivot = array[hi];

    // Idx trav
    let idx = lo;
    pointCode(2);
    update(array, [pointer(idx, style.highlight)]);
    await wait(500);

    for (let i = lo; i < hi; i++) {
        // Loop
        pointCode(3);
        update(array, [pointer(i, style.idx), pointer(idx, style.highlight)]);
        await wait(500);

        // If
        pointCode(4);
        await wait(250);
        if (array[i] <= pivot) {
            pointCode(5);
            // Out
            update(array, [
                pointer(idx, `${style.greater} ${style.fadeOut}`),
                pointer(i, `${style.smaller} ${style.fadeOut}`),
            ]);
            await wait(500);
            // In
            swap(array, i, idx);
            update(array, [
                pointer(idx, `${style.greater} ${style.fadeIn}`),
                pointer(i, `${style.smaller} ${style.fadeIn}`),
            ]);
            await wait(500);

            // Idx increment
            pointCode(6);
            idx++;
            update(array, [
                pointer(i, style.idx),
                pointer(idx, style.highlight),
            ]);
            await wait(500);
        } else {
            update(array, [
                pointer(idx, style.nonSwap),
                pointer(i, style.nonSwap),
            ]);
            await wait(1000);
        }
    }

    // Pivot swap
    pointCode(6);
    // Out
    update(array, [
        pointer(idx, `${style.greater} ${style.fadeOut}`),
        pointer(hi, `${style.smaller} ${style.fadeOut}`),
    ]);
    await wait(500);
    // In
    swap(array, hi, idx);
    update(array, [
        pointer(idx, `${style.greater} ${style.fadeIn}`),
        pointer(hi, `${style.smaller} ${style.fadeIn}`),
    ]);
    await wait(500);

    // Return
    pointCode(9);
    await wait(250);
    return idx;
}

async function quickSortRecursiveEnhanced(
    array: number[],
    lo: number,
    hi: number,
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    // Start fn
    pointCode(12);
    await wait(250);

    // Base case
    pointCode(13);
    await wait(250);
    if (lo >= hi) {
        // Return
        pointCode(14);
        await wait(250);
        return;
    }

    // Partition call
    pointCode(15);
    await wait(250);
    const pivotIdx = await partitionEnhanced(array, lo, hi, update, pointCode);

    // Rec call
    pointCode(16);
    await wait(250);
    await quickSortRecursiveEnhanced(
        array,
        lo,
        pivotIdx - 1,
        update,
        pointCode
    );

    pointCode(17);
    await wait(250);
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
    // Start
    pointCode(20);
    await wait(250);
    const array: number[] = clone(arr);
    // Rec call
    pointCode(21);
    await wait(250);
    await quickSortRecursiveEnhanced(
        array,
        0,
        array.length - 1,
        update,
        pointCode
    );
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

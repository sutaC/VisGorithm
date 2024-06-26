import style from "@/components/ArrayDisplay.module.css";
import {
    PointCodeFunction,
    Pointer,
    UpdateFunction,
    clone,
    pointer,
    swap,
    wait,
} from "../innerFunctions";

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
    // Borders
    const bdrs: Pointer[] = [
        pointer(lo, style.borderStart),
        pointer(hi, style.borderEnd),
    ];

    // Start fn
    pointCode(0);
    update(array, bdrs);
    await wait(500);

    // Pivot
    pointCode(1);
    await wait(500);
    const pivot = array[hi];

    // Idx trav
    let idx = lo;
    pointCode(2);
    update(array, [pointer(idx, style.highlight), ...bdrs]);
    await wait(500);

    for (let i = lo; i < hi; i++) {
        // Loop
        pointCode(3);
        update(array, [
            pointer(i, style.index),
            pointer(idx, style.highlight),
            ...bdrs,
        ]);
        await wait(500);

        // If
        pointCode(4);
        await wait(250);
        if (array[i] <= pivot) {
            pointCode(5);

            if (idx < i - 1) {
                // Long swap
                // Out
                update(array, [
                    pointer(idx, `${style.greater} ${style.swapRightFadeOut}`),
                    pointer(i, `${style.smaller} ${style.swapLeftFadeOut}`),
                    ...bdrs,
                ]);
                await wait(500);
                // In
                swap(array, i, idx);
                update(array, [
                    pointer(idx, `${style.smaller} ${style.swapRightFadeIn}`),
                    pointer(i, `${style.greater} ${style.swapLeftFadeIn}`),
                    ...bdrs,
                ]);
                await wait(500);
            } else if (idx === i - 1) {
                // Short swap
                update(array, [
                    pointer(idx, `${style.swapRight} ${style.greater}`),
                    pointer(i, `${style.swapLeft} ${style.smaller}`),
                    ...bdrs,
                ]);
                await wait(1000);
                swap(array, i, idx);
            } else {
                // No animation
                update(array, [
                    pointer(idx, style.greater),
                    pointer(i, style.smaller),
                    ...bdrs,
                ]);
                await wait(1000);
                swap(array, i, idx);
            }

            // Idx increment
            pointCode(6);
            update(array, [
                pointer(i, style.index),
                pointer(idx, style.highlight),
                ...bdrs,
            ]);
            await wait(250);
            idx++;
            update(array, [
                pointer(i, style.index),
                pointer(idx, style.highlight),
                ...bdrs,
            ]);
            await wait(250);
        } else {
            update(array, [
                pointer(idx, style.nonSwap),
                pointer(i, style.nonSwap),
                ...bdrs,
            ]);
            await wait(1000);
        }
    }

    // Pivot swap
    pointCode(6);
    if (idx < hi - 1) {
        // Long swap
        // Out
        update(array, [
            pointer(idx, `${style.greater} ${style.swapRightFadeOut}`),
            pointer(hi, `${style.smaller} ${style.swapLeftFadeOut}`),
            ...bdrs,
        ]);
        await wait(500);
        // In
        swap(array, hi, idx);
        update(array, [
            pointer(idx, `${style.smaller} ${style.swapRightFadeIn}`),
            pointer(hi, `${style.greater} ${style.swapLeftFadeIn}`),
            ...bdrs,
        ]);
        await wait(500);
    } else if (idx === hi - 1) {
        // Short swap
        update(array, [
            pointer(idx, `${style.swapRight} ${style.greater}`),
            pointer(hi, `${style.swapLeft} ${style.smaller}`),
            ...bdrs,
        ]);
        await wait(1000);
        swap(array, hi, idx);
    } else {
        // No animation
        update(array, [
            pointer(idx, style.greater),
            pointer(hi, style.smaller),
            ...bdrs,
        ]);
        await wait(1000);
        swap(array, hi, idx);
    }

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
    const bdrs: Pointer[] = [
        pointer(lo, style.borderStart),
        pointer(hi, style.borderEnd),
    ];

    // Start fn
    pointCode(12);
    update(array, bdrs);
    await wait(500);

    // Base case
    pointCode(13);
    await wait(500);
    if (lo >= hi) {
        // Return
        pointCode(14);
        await wait(500);
        return;
    }

    // Partition call
    pointCode(15);
    await wait(500);
    const pivotIdx = await partitionEnhanced(array, lo, hi, update, pointCode);

    // Rec call
    pointCode(16);
    await wait(500);
    await quickSortRecursiveEnhanced(
        array,
        lo,
        pivotIdx - 1,
        update,
        pointCode
    );

    pointCode(17);
    await wait(500);
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
    await wait(500);
    const array: number[] = clone(arr);
    // Rec call
    pointCode(21);
    await wait(500);
    await quickSortRecursiveEnhanced(
        array,
        0,
        array.length - 1,
        update,
        pointCode
    );
    pointCode(null);

    const sorted: Pointer[] = [];
    for (let i = 0; i < array.length; i++) {
        sorted.push(pointer(i, style.sorted));
    }
    update(array, sorted);
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

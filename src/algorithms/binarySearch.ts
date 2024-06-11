import { PointCodeFunction, UpdateFunction } from "./innerFunctions";

// Original
export function binarySearch(array: number[], needle: number): number {
    let lo = 0;
    let hi = array.length;
    do {
        const mid = Math.floor((hi + lo) / 2);
        const val = array[mid];
        if (val === needle) {
            return mid;
        } else if (val > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (lo < hi);
    return -1;
}

// Enhanced

export async function binarySearchEnhanced(
    array: number[],
    needle: number,
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    // Base
    let lo = 0;
    let hi = array.length;
    do {
        const mid = Math.floor((hi + lo) / 2);
        const val = array[mid];
        if (val === needle) {
            // Found
            return;
        } else if (val > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (lo < hi);
    // Not found
    return;
}

// Codelines
export const codeLines: string[] = [
    "function binarySearch(array: number[], needle: number): number {",
    "    let lo = 0;",
    "    let hi = array.length;",
    "    do {",
    "        const mid = Math.floor((hi + lo) / 2);",
    "        const val = array[mid];",
    "        if (val === needle) {",
    "            return mid;",
    "        } else if (val > needle) {",
    "            hi = mid;",
    "        } else {",
    "            lo = mid + 1;",
    "        }",
    "    } while (lo < hi);",
    "    return -1;",
    "}",
];

import { PointCodeFunction, UpdateFunction } from "./innerFunctions";

// Original
export function linearSearch(array: number[], needle: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === needle) {
            return i;
        }
    }
    return -1;
}

// Enhanced
export async function linearSearchEnhanced(
    array: number[],
    needle: number,
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    // Base
    for (let i = 0; i < array.length; i++) {
        if (array[i] === needle) {
            // Found
            return;
        }
    }

    // Not found
    return;
}

// Code lines
export const codeLines: string[] = [
    "function linearSearch(array: number[], needle: number): number {",
    "    for (let i = 0; i < array.length; i++) {",
    "        if (array[i] === needle) {",
    "            return i;",
    "        }",
    "    }",
    "    return -1;",
    "}",
];

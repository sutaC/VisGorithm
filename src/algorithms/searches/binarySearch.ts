import style from "@/components/ArrayDisplay.module.css";
import {
    PointCodeFunction,
    UpdateFunction,
    pointer,
    wait,
} from "../innerFunctions";
import { Pointer } from "@/components/ArrayDisplay";

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
    const notFound: Pointer[] = [];

    // Start
    pointCode(0);
    await wait(250);

    let lo = 0;
    pointCode(1);
    update(array, [pointer(lo, style.borderStart)]);
    await wait(500);

    let hi = array.length;
    pointCode(2);
    update(array, [
        pointer(lo, style.borderStart),
        pointer(hi - 1, style.borderEnd),
    ]);
    await wait(500);

    do {
        // Loop
        update(array, [
            pointer(lo, style.borderStart),
            pointer(hi - 1, style.borderEnd),
            ...notFound,
        ]);
        pointCode(3);
        await wait(500);

        // Middle
        const mid = Math.floor((hi + lo) / 2);
        update(array, [
            pointer(lo, style.borderStart),
            pointer(hi - 1, style.borderEnd),
            pointer(mid, style.index),
            ...notFound,
        ]);
        pointCode(4);
        await wait(500);

        pointCode(5);
        await wait(250);
        const val = array[mid];

        if (val === needle) {
            // Found
            pointCode(6);
            await wait(250);
            pointCode(7);
            update(array, [pointer(mid, style.sorted), ...notFound]);
            return;
        } else if (val > needle) {
            pointCode(8);
            update(array, [
                pointer(lo, style.borderStart),
                pointer(hi - 1, style.borderEnd),
                pointer(mid, style.smaller),
                ...notFound,
            ]);
            await wait(500);

            // Hi
            hi = mid;
            notFound.push(pointer(mid, style.notFound));
            pointCode(9);
            update(array, [
                pointer(lo, style.borderStart),
                pointer(hi - 1, style.borderEnd),
                ...notFound,
            ]);
            await wait(500);
        } else {
            pointCode(10);
            update(array, [
                pointer(lo, style.borderStart),
                pointer(hi - 1, style.borderEnd),
                pointer(mid, style.greater),
                ...notFound,
            ]);
            await wait(500);

            // Lo
            lo = mid + 1;
            notFound.push(pointer(mid, style.notFound));
            pointCode(11);
            update(array, [
                pointer(lo, style.borderStart),
                pointer(hi - 1, style.borderEnd),
                ...notFound,
            ]);
            await wait(500);
        }

        // Not found
        pointCode(13);
        await wait(250);
    } while (lo < hi);

    // Not found
    pointCode(14);
    update(array, notFound);
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

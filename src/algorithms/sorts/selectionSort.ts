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

// Enhanced
export async function selectionSortEnhanced(
    arr: number[],
    update: UpdateFunction,
    pointCode: PointCodeFunction
): Promise<void> {
    const array: number[] = clone(arr);

    const sorted: Pointer[] = [];

    pointCode(0);
    await wait(500);

    for (let i = 0; i < array.length; i++) {
        // Outer loop
        pointCode(1);
        update(array, [pointer(i, style.index), ...sorted]);
        await wait(500);

        let min = i;
        pointCode(2);
        await wait(250);

        for (let j = i + 1; j < array.length; j++) {
            // Search
            pointCode(3);
            update(array, [
                pointer(j, style.index),
                pointer(min, style.highlight),
                ...sorted,
            ]);
            await wait(500);

            // If
            pointCode(4);
            await wait(250);

            if (array[j] < array[min]) {
                pointCode(5);
                update(array, [
                    pointer(j, style.greater),
                    pointer(min, style.smaller),
                    ...sorted,
                ]);
                // Min
                min = j;
            } else {
                update(array, [
                    pointer(j, style.nonSwap),
                    pointer(min, style.nonSwap),
                    ...sorted,
                ]);
            }
            await wait(500);

            update(array, [
                pointer(j, style.index),
                pointer(min, style.highlight),
                ...sorted,
            ]);
            await wait(500);
        }

        // Swap
        pointCode(8);
        await wait(250);
        if (min - 1 > i) {
            // Long swap
            // Out
            update(array, [
                pointer(i, `${style.swapRightFadeOut} ${style.greater}`),
                pointer(min, `${style.swapLeftFadeOut} ${style.smaller}`),
                ...sorted,
            ]);
            await wait(500);

            // In
            swap(array, i, min);
            update(array, [
                pointer(i, `${style.swapRightFadeIn} ${style.greater}`),
                pointer(min, `${style.swapLeftFadeIn} ${style.smaller}`),
                ...sorted,
            ]);
            await wait(500);
        } else if (min - 1 === i) {
            // Short swap
            update(array, [
                pointer(i, `${style.swapRight} ${style.greater}`),
                pointer(min, `${style.swapLeft} ${style.smaller}`),
                ...sorted,
            ]);
            await wait(1000);

            // In
            swap(array, i, min);
        }

        sorted.push(pointer(i, style.sorted));
    }

    sorted.push(pointer(array.length - 1, style.sorted));
    pointCode(null);
    update(array, sorted);
}

// Code

export const codeLines: string[] = [
    "function selectionSort(arr: number[]): void {",
    "    for (let i = 0; i < array.length; i++) {",
    "        let min = i;",
    "        for (let j = i + 1; j < array.length; j++) {",
    "            if (array[j] < array[min]) {",
    "                min = j;",
    "            }",
    "        }",
    "        swap(array, i, min);",
    "    }",
    "}",
];

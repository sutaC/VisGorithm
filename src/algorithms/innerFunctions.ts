import { quickSort } from "./sorts/quickSort";

// Types
export type UpdateFunction = (array: number[], pointers: Pointer[]) => void;
export type PointCodeFunction = (codePointer: number | null) => void;
export type EnhancedFunction = (
    arr: number[],
    update: UpdateFunction,
    pointCode: PointCodeFunction
) => Promise<void>;
export type EnhancedSearchFunction = (
    arr: number[],
    needle: number,
    update: UpdateFunction,
    pointCode: PointCodeFunction
) => Promise<void>;

export interface Pointer {
    index: number;
    style: string;
}

// Functions
export function swap(array: number[], a: number, b: number) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

export async function wait(time: number): Promise<void> {
    return new Promise<void>((res) => setTimeout(res, time));
}

export function getRandomArray(size: number): number[] {
    const array = [];
    for (let i = 0; i < size; i++) {
        const val = Math.floor(Math.random() * 100);
        array.push(val);
    }
    return array;
}

export function pointer(index: number, style: string): Pointer {
    return { index, style };
}

export function clone(v: any): any {
    return structuredClone(v);
}

export function testSort(alg: (arr: number[]) => number[]): boolean {
    for (let i = 0; i < 100; i++) {
        const sorted = alg(getRandomArray(100));
        for (let j = 1; j < sorted.length; j++) {
            if (sorted[j - 1] > sorted[j]) {
                console.error(`Array not sorted at idx ${j}: `, sorted);
                return false;
            }
        }
    }
    return true;
}

export function testSearch(
    alg: (arr: number[], needle: number) => number,
    sorted?: boolean
): boolean {
    for (let i = 0; i < 100; i++) {
        let arr: number[] = getRandomArray(100);
        if (sorted) arr = quickSort(arr);
        let needle: number;
        if (Math.random() > 0.95) {
            // Has
            needle = arr[Math.floor(Math.random() * arr.length)];
        } else {
            // Not
            [needle] = getRandomArray(1);
        }
        const res = alg(arr, needle);
        const trueIdx = arr.indexOf(needle);
        if (arr[res] !== arr[trueIdx]) {
            console.error(
                `Got wrong result (${res}) what suposed to be (${trueIdx})`,
                arr
            );
            return false;
        }
    }
    return true;
}

export function applyStyles(index: number, pointers: Pointer[]): string {
    let out = "";
    pointers.forEach((ptr) => {
        if (ptr.index === index) {
            out += " " + ptr.style;
        }
    });
    return out;
}

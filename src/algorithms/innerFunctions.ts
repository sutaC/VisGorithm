import { Pointer } from "@/components/ArrayDisplay";

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
                console.warn(`Array not sorted at idx ${j}: `, sorted);
                return false;
            }
        }
    }
    return true;
}

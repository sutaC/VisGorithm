// Original
export function linearSearch(array: number[], needle: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === needle) {
            return i;
        }
    }
    return -1;
}

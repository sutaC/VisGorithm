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

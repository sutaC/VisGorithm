export function swap(array: number[], a: number, b: number) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

export function swap(array: number[], a: number, b: number) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

export async function wait(time: number): Promise<void> {
    return new Promise<void>((res) => setTimeout(res, time));
}

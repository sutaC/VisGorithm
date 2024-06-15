interface Node<T> {
    value: T;
    next: Node<T> | null;
}

export class Queue<T> {
    protected head: Node<T> | null = null;
    protected tail: Node<T> | null = null;

    public length: number = 0;

    // Methods

    public peek(): T | undefined {
        return this.head?.value;
    }

    public enqueue(value: T): void {
        this.length++;
        const node: Node<T> = { value, next: null };
        if (this.tail === null) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    public dequeue(): T | undefined {
        if (this.head === null) return undefined;
        this.length--;
        const node: Node<T> = this.head;
        this.head = node.next;
        return node.value;
    }

    public getLength(): number {
        return this.length;
    }
}

export class QueueEnhanced<T> extends Queue<T> {
    constructor(values?: T[]) {
        super();
        // Adds start values
        values?.forEach((v) => this.enqueue(v));
    }

    getStructure(): T[] {
        const structure: T[] = [];
        let curr: Node<T> | null = this.head;
        while (curr !== null) {
            structure.push(curr.value);
            curr = curr.next;
        }
        return structure;
    }
}

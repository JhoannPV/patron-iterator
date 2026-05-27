export interface Iterator<T> {
    hasMore(): boolean;
    getNext(): T | null;
}
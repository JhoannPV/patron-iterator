import { Iterator } from "..";

export interface Collection<T> {
    addCurso(curso: T): void;
    count(): number;
    at(index: number): T;
    createIterator(): Iterator<T>;
}
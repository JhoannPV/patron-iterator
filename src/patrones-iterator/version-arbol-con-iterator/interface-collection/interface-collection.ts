import { Iterator } from "..";

export interface Collection<T> {
    addCursosArbol(curso: T): void;
    getRaiz(): T | null;
    createIterator(): Iterator<string>;
}
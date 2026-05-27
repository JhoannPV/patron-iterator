import { Collection, Iterator } from "..";

export class CursosIterator implements Iterator<string> {
    private position: number = 0;

    constructor(private collection: Collection<string>) { }

    hasMore(): boolean {
        return this.position < this.collection.count();
    }
    getNext(): string | null {
        if (this.hasMore()) {
            return this.collection.at(this.position++);
        }
        return null;
    }
}
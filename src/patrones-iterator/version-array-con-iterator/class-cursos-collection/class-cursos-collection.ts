import { Collection, CursosIterator, Iterator } from "..";

export class CursosCollection implements Collection<string> {
    private cursos: string[] = [];

    addCurso(curso: string) {
        this.cursos.push(curso);
    }

    count(): number {
        return this.cursos.length;
    }

    at(index: number): string {
        return this.cursos[index];
    }

    createIterator(): Iterator<string> {
        return new CursosIterator(this);
    }
}
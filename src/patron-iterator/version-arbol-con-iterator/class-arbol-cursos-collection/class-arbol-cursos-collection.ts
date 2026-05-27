import { ArbolCursosIterator, Collection, NodeCurso } from "..";
import { Iterator } from "..";


export class ArbolCursosCollection implements Collection<NodeCurso> {
    constructor(
        public raiz: NodeCurso | null = null,
    ) { }

    addCursosArbol(curso: NodeCurso): void {
        this.raiz = curso;
    }

    getRaiz(): NodeCurso | null {
        return this.raiz;
    }

    createIterator(): Iterator<string> {
        return new ArbolCursosIterator(this);
    }
}
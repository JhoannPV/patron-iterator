import { Collection, Iterator, NodeCurso } from "..";

export class ArbolCursosIterator implements Iterator<string> {
    private arbol: NodeCurso | null;
    private pendientes: NodeCurso[] = [];

    constructor(private collection: Collection<NodeCurso>) {
        this.arbol = collection.getRaiz();
    }

    hasMore(): boolean {
        return this.arbol !== null || this.pendientes.length > 0;
    }

    getNext(): string | null {
        if (this.arbol === null) {
            this.arbol = this.pendientes.pop() ?? null;
        }

        if (this.arbol === null) {
            return null;
        }

        const nodoActual = this.arbol;

        if (this.arbol.derecha) {
            this.pendientes.push(this.arbol.derecha);
        }

        this.arbol = this.arbol.izquierda ?? this.pendientes.pop() ?? null;

        return nodoActual.nombre;
    }
}
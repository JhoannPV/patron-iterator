import { ArbolCursos, NodeCurso } from ".";

export const arbolSinIterator = () => {

    const recorrer = (nodo: NodeCurso | null): void => {
        if (nodo === null) return;

        console.log(nodo.nombre);
        if (nodo.izquierda) nodo.izquierda.nombre = `<-${nodo.izquierda.nombre}`;
        if (nodo.derecha) nodo.derecha.nombre = `${nodo.derecha.nombre} ->`;
        recorrer(nodo.izquierda);
        recorrer(nodo.derecha);
    }

    const curso1 = new NodeCurso("Curso de React");
    const curso2 = new NodeCurso("Curso de React con TypeScript");
    const curso3 = new NodeCurso("Curso de React con React Router");
    const curso4 = new NodeCurso("Curso de React + TypeScript + Bun");
    const curso5 = new NodeCurso("Curso de React + TypeScript + Bun + Vite");

    curso1.izquierda = curso2;
    curso1.derecha = curso3;
    curso2.izquierda = curso4;
    curso2.derecha = curso5;

    const arbol = new ArbolCursos(curso1);

    recorrer(arbol.raiz);
}
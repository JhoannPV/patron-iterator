import { ArbolCursosCollection, NodeCurso } from ".";

export const arbolConIterator = () => {
    const curso1 = new NodeCurso("Curso de React");
    const curso2 = new NodeCurso("Curso de React con TypeScript");
    const curso3 = new NodeCurso("Curso de React con React Router");
    const curso4 = new NodeCurso("Curso de React + TypeScript + Bun");
    const curso5 = new NodeCurso("Curso de React + TypeScript + Bun + Vite");

    curso1.izquierda = curso2;
    curso1.derecha = curso3;
    curso2.izquierda = curso4;
    curso2.derecha = curso5;

    const arbol = new ArbolCursosCollection(curso1);
    const iterator = arbol.createIterator();

    while (iterator.hasMore()) {
        const curso = iterator.getNext();
        if (curso) {
            console.log(curso);
        }
    }
}
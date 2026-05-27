export class NodeCurso {
    constructor(
        public nombre: string,
        public izquierda: NodeCurso | null = null,
        public derecha: NodeCurso | null = null
    ) { }
}
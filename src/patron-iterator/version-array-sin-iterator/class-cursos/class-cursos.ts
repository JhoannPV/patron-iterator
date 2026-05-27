export class Cursos {
    private cursos: string[] = [];

    addCurso(curso: string) {
        this.cursos.push(curso);
    }
    getCursos() {
        return this.cursos;
    }
}
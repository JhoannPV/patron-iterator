import { Cursos } from ".";

export const arraySinIterator = () => {


    const cursos = new Cursos();
    cursos.addCurso('Curso de JavaScript');
    cursos.addCurso('Curso de TypeScript');
    cursos.addCurso('Curso de React');

    console.log('Cursos sin Iterator:');
    const cursosArray = cursos.getCursos();
    for (let i = 0; i < cursosArray.length; i++) {
        console.log(`- ${cursosArray[i]}`);
    }
}
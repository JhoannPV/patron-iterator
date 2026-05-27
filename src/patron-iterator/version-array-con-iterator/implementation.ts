import { CursosCollection } from ".";

export const arrayConIterator = () => {
    const cursos = new CursosCollection();
    cursos.addCurso("Curso de TypeScript");
    cursos.addCurso("Curso de JavaScript");
    cursos.addCurso("Curso de Angular");

    const iterator = cursos.createIterator();

    console.log('Cursos con Iterator:');
    while (iterator.hasMore()) {
        const curso = iterator.getNext();
        console.log(`- ${curso}`);
    }
}
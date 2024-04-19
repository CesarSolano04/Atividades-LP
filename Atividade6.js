class Estudante {
    constructor(nome, email, ra, curso, disciplinas = []) {
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }

    primeiraDisciplina() {
        return this.disciplinas.length > 0 ? this.disciplinas[0] : "Nenhuma disciplina matriculada.";
    }

    ultimaDisciplina() {
        return this.disciplinas.length > 0 ? this.disciplinas[this.disciplinas.length - 1] : "Nenhuma disciplina matriculada.";
    }
}

// Exemplo de uso
const estudante1 = new Estudante("João Silva", "joao@example.com", "123456", "Engenharia Civil", ["Cálculo I", "Física I", "Introdução à Engenharia"]);
const estudante2 = new Estudante("Maria Souza", "maria@example.com", "654321", "Administração", ["Economia", "Contabilidade", "Gestão de Pessoas"]);

console.log("Estudante 1:");
console.log("Nome:", estudante1.nome);
console.log("E-mail:", estudante1.email);
console.log("RA:", estudante1.ra);
console.log("Curso:", estudante1.curso);
console.log("Primeira Disciplina:", estudante1.primeiraDisciplina());
console.log("Última Disciplina:", estudante1.ultimaDisciplina());
console.log();

console.log("Estudante 2:");
console.log("Nome:", estudante2.nome);
console.log("E-mail:", estudante2.email);
console.log("RA:", estudante2.ra);
console.log("Curso:", estudante2.curso);
console.log("Primeira Disciplina:", estudante2.primeiraDisciplina());
console.log("Última Disciplina:", estudante2.ultimaDisciplina());
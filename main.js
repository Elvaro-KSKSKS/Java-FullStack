class Aluno {
    #nome = '';
    #nota = 0;

    constructor(nome, nota) {
        this.#nome = nome;
        this.#nota = nota;
    };

    getNome() {
        return this.#nome;
    }

    getNota() {
        return this.#nota;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    setNota(nota) {
        this.#nota = nota;
    }
};

const aluno = new Aluno('Luna', 10);
const aluno2 = new Aluno('Rafael', 8);
const aluno3 = new Aluno('Carlos', 5);

const alunos = [aluno, aluno2, aluno3];

function retornaAprovados(lista) {
    const alunosAprovados = lista.filter(function(aluno) {
        return aluno.getNota() >= 6;
    });

    if(alunosAprovados.length == 0) {
        console.log('Nenhum aluno foi aprovado.');
    } else {
        alunosAprovados.forEach(function(aluno) {
            console.log(aluno.getNome());
        })
    };
};

retornaAprovados(alunos);
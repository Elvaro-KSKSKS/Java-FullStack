function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Cachorro(nome, idade) {
    Animal.call(this, nome, idade);

    this.latir = function() {
        console.log('Au');
    }
}

function Gato(nome, idade) {
    Animal.call(this, nome, idade);

    this.miar = function() {
        console.log('Miau');
    }
}

function Passaro(nome, idade) {
    Animal.call(this, nome, idade);

    this.cantar = function() {
        console.log('♫');
    }
}

const cachorro = new Cachorro('Trovão', 6);
const gato = new Gato('Mingau', 4);
const passaro = new Passaro('Pardal', 7);

cachorro.latir();
gato.miar();
passaro.cantar();
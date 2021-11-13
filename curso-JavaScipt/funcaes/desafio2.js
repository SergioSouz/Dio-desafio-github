function calcularIdade(anos){
    return`daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade.`;
}

const  pessoa1 = {
    nome: "maria",
    idade: 30
};

const  pessoa2 = {
    nome: "carla",
    idade: 26
};

const  animal1 = {
    nome: "fiona",
    idade: 5,
    raça : "pug"

};

console.log(calcularIdade.apply(animal1,[7]));
console.log(calcularIdade.call(pessoa1,10));


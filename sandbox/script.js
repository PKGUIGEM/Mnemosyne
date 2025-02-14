console.log("Hello World!");



// VARIAVEIS

var idade = 22 ;   //var e uma variavel desencorajada, pois o js permite o uso de varias variaveis com o mesmo nome
console.log(idade)

let nome = "Ariel"; //náo permite criar duas variaveis com o mesmo nome 
nome = "Patrick"
console.log(nome);

const cargo = "Professor"; //náo pode redeclara essa variavel 
console.log(cargo);

// Exercicios

const nome_ = "Patrick";
let idade_ = 27;

let mensagem = `Meu nome é ${nome_}, tenho ${idade_} anos.`;  //interpolacao  usar crase, cuidado nao e aspas simples
console.log("Meu nome é " + nome_ +" , tenho " + idade_+" anos.")   // concartenacao

console.log(mensagem);


//  Tipos de variaveis

console.log(typeof nome_);

let maiordeidade = true;
let temfilhos = false;
console.log(maiordeidade)
console.log(temfilhos)

let tamanho;
console.log(tamanho)

let endereco = null;
console.log(endereco)

//Exercicio 03 de tipos primitivos

let a = 10;
let b = "Ariel";
let c = "10";
let d = 20;

console.log("a + b", a + b);
console.log("a + c", a + c);
console.log("a + d", a + d);

//convercao

let n1 = "42";
n1 = Number(n1);
console.log(n1);

//Estrutura condicional

const idade___ = 18;

if (idade___ < 18) {
    console.log("Menor de idade");
} else if (idade___ === 18) {
    console.log("Acabou de atingir a maioridade penal");
} else {
    console.log ("Maior de idade");
} 
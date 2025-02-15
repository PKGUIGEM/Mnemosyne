//exercicio 1

// let num = prompt("Digite um numero: ");

// if (num  > 0) {
//     console.log("Positivo");
// } 
// else if (num < 0) {
//     console.log("Negativo");
// }
// else {
//     console.log("O numero escolhido e zero!")
// }

//exercicio 2

// let num1 = prompt("Digite um numero: ");
// if (num1 % 2 === 0) {
//     console.log("O numero escolhido e par");
// } 
// else {
//     console.log("O numero escolhido e impar!")
// }

//exercicio 3

// let idade = prompt("Digite sua idade: ");

// if (0 > idade < 12) {
//     console.log("Voce é uma crianÇa");
// }
// else if (12 > idade < 17) {
//     console.log("Voce e um adolescente!");
// } 
// else {
//     console.log("Voce e um adulto");
// }

//exercicio 4

// let nota = prompt("Insira a nota do aluno (entre 0 e 100): ")

// if (nota >= 60) {
//     console.log("Aprovado");
// }
// else {
//     console.log("Reprovado");
// }







//nivel intermedeiario


//Exercicio 1

// let num1 = prompt("Insira um numero : ")
// let num2 = prompt("Insira um outro numero : ")
// let oper = prompt("Isira um operador :")

// num1 = Number(num1);
// num2 = Number(num2);

// if (oper == "+") {
// let resultadosoma = num1 + num2
// console.log(resultadosoma);
// }

// else if (oper == "-") {
// let resultadosub = num1- num2
// console.log(resultadosub);
// }

// else if (oper == "/") {
// let resultadodiv = num1 / num2
// console.log(resultadodiv);
// }
// else if (oper == "*") {
// let resultadomult = num1 * num2
// console.log(resultadomult);
// }
// else {
//     console.log("Náo existe dados coerentes para o calculo")
// }


//Exercicio 2

// let numero1 = prompt("Insira um numero : ")
// let numero2 = prompt("Insira um numero : ")
// let numero3 = prompt("Insira um numero : ")

// if (numero1 > numero2 && numero1 > numero3) {
//    let result1 = `O maior numero e o numero ${numero1}.` 
// console.log(result1);
// }

// else if (numero2 > numero1 && numero2 > numero3) {
//     let result2 = `O maior numero e o numero ${numero2}.`
//     console.log(result2);
//     }
// else if (numero3 > numero1 && numero3 > numero2) {
//     let result3 = `O maior numero e o numero ${numero3}.` 
//     console.log(result3);
//     }
// else {
//     console.log("Pode haver dois numeros maiores iguais, ou voce imputou dados errados!");
// }


//Exercicio 3

//3. **Desconto em compras:**
  //  - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
   // - Caso contrário, exiba o valor normal.

// let compra = prompt("Digite o valor de compra: ")

// if (compra > 100) {
//     compra_desconto =  compra-(compra*0.10)
//     mensagem = `O valor da sua compra recebeu um desconto de 10%, por isso o valor da sua compra ficou em ${compra_desconto}`;
//     console.log(mensagem);
// }
// else  {
//     console.log ( "O valor da sua compra e de " + (compra) + "!")
// }

//Exercicio 4

// let login = prompt ("Login: ")
// let senha = prompt ("senha: ")

// if (login === "admin" && senha === "1234"){
//     console.log ("Login bem-sucedido!")
// }
// else {
//     console.log ("Acesso negado!")
// }








//Exercicio 1 Nivel avançado

// let lado1 = prompt("insira o lado 1: ")
// let lado2 = prompt("insira o lado 2: ")
// let lado3 = prompt("insira o lado 3: ")

// if (lado1 == lado2 == lado3) {
//     console.log("Equilatero");
// }
// else if (lado1 != lado2 != lado3) {
//     console.log("Escaleno");
// }
// else {
// console.log("isosceles")
// }

//Exercicio 2

// let nota1 = prompt("Insira sua nota: ")

// if ( nota1 >= 90  &&  nota1 <= 100 ) {
//     console.log("Parabens voce recebeu conceito A");
// }
// else if  ( nota1 >= 80  &&  nota1 <= 89 ) {
//     console.log("Parabens voce recebeu conceito B");
// }
// else if  ( nota1 >= 70  &&  nota1 <= 79 ) {
//     console.log("Voce recebeu conceito C, estude mais da proxima vez!");
// }
// else if  ( nota1 >= 60  &&  nota1 <= 69 ) {
//     console.log("Voce recebeu conceito D, estude mais!");
// }
// else if ( nota1 < 0) {
//     console.log("Essa nota esta invalida");
// }
// else if ( nota1 > 100) {
//     console.log("Essa nota esta invalida");
// }
// else  {
//     console.log("Voce recebeu conceito F, se lascou!");
// }

//exercicio 3

// let altura = prompt("insira sua altura: ")
// let peso= prompt("insira seu peso: ")

// let imc = peso/(altura*altura)

// if (imc < 18.5) {
//     console.log ("Baixo peso")
// }

// else if (imc > 18.5 && imc < 24.9) {
//     console.log("Peso normal")
// }
// else{
//     console.log("Voce esta acima do peso")
// }












    





let num1 = prompt ("Digite um numero: ")
let num2 = prompt ("Digite um numero: ")
let operador = prompt("digite um operador: ")

num1 = number(num1)
num2 = number(num2)

switch (operador) {
    case "+":
       let resultsoma =  num1 + num2
        console.log(resultsoma)
        break;
    case "-":
        let resultsub =  num1 - num2
        console.log(resultsub)
        break;
    case "*":
        let resultmult =  num1 * num2
        console.log(resultmult)
        break;
    case "/":
            let resultdiv =  num1 / num2
            console.log(resultdiv)
            break;
    default:
        console.log("Os dados indocados estao errados")
        break;
}
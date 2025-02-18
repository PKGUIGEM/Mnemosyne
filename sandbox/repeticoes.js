

// for: ideial para loops com numero conhecido

// for(let contador = 1; contador <=10; contador++) {
//     console.log("contagem: ", contador);
// }

// let contador = prompt("Digite um numero: ")


// while (contador <= 100) {
//     console.log("contador: ", contador);
//     contador++ 
// } 

// do {
//     console.log("Executado pelo menos uma vez")
// } while (false);


// let num = prompt("Insira um numero: ")

// for (let contador = 1; contador <= 10; contador++) {
//     let valorcalculado = num * contador;
//     let mensagem = `$
    
//     {num} x ${contador} = ${valorcalculado}`

//     console.log(mensagem);


let n = prompt("escolha um numero: ")
let soma = 0
for( let contador = 1; contador <= n; contador++){
    soma = contador + soma
    mensagem = `${n} e o meu limite ${soma} e o resultado do calculo e ${contador} e encremental de 1 ate o n escolhido` 
    console.log(mensagem)
}





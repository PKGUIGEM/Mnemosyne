

// for: ideial para loops com numero conhecido

// BASICO


// Exercicio 1
// 1. **Contagem de 1 a 10:**
//     - Use um `for` para exibir os números de 1 a 10 no console.

function exercicioRep01 (){
   
    for(let contador = 1; contador <=10; contador++) {
    
        console.log("contagem: ", contador);
   
    }

    let divDeLogs = document.querySelector(".logs");

    let paragrafo = document.createElement("p");

    paragrafo.innerHTML = "Exercicio 01 de repeticao executado.";

    divDeLogs.appendChild(paragrafo);

}

exercicioRep01();
// ---------------------------------------------------------------------------------

// 2. **Tabuada de um número:**
//     - Peça um número ao usuário.
//     - Exiba a tabuada desse número de 1 a 10 usando um `for`.

function exercicioRep02 (){
    let num = prompt("Insira um numero: ")

    for (let contador = 1; contador <= 10; contador++) {
        let valorcalculado = num * contador;
        let mensagem = `$

        {num} x ${contador} = ${valorcalculado}`

        console.log(mensagem);
    }
}

// ---------------------------------------------------------------------------------

// 3. **Soma dos primeiros N números naturais:**
//     - Peça um número `N` ao usuário.
//     - Use um `while` ou `for` para somar os números de `1` a `N`.

function exercicioRep03 (){
    let n = prompt("escolha um numero: ")
    let soma = 0
    for( let contador = 1; contador <= n; contador++){
        soma = contador + soma
        mensagem = `${n} e o meu limite ${soma} e o resultado do calculo e ${contador} e encremental de 1 ate o n escolhido`
        console.log(mensagem)
    }
}
// ---------------------------------------------------------------------------------


//  **Nível Intermediário**

// 1. **Exibir os números pares de 1 a 50:**
//     - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

function exercicioRep04 (){
    for( let contador = 0; contador <= 50; contador+=2){
        console.log(contador)
    }
}


// ---------------------------------------------------------------------------------
// 2. **Jogo de adivinhação:**
//     - Gere um número aleatório de 1 a 100.
//     - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//     - Informe se o número inserido é maior ou menor que o corret
// 
// function exercicioRep05 (){
//     WHILE
//     let numeroAleatorio = Math.floor(Math.random() * 100);

//     let chute = null;

//     while (chute != numeroAleatorio) {

//         chute = parseInt(prompt("Chute um número:"));

//         if (chute != numeroAleatorio) {

//             if (chute > numeroAleatorio) {

//                 alert("Chutou alto.");

//             } else {

//                 alert("Chutou baixo.");

//             }

//         }

//     }

//     alert("Você acertou!");o.
// }

//-----------------------------------------------------------------

// 3. **Contagem regressiva:**
//     - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.
function exercicioRep05 (){
    let num = prompt("Digite um numero: ")
    for( let contagem = num; contagem >= 0; contagem--){    
        console.log(contagem)
    }
}

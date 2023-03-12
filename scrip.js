const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeiro_numero = document.querySelector(".primeiro-numero");
const segundo_numero = document.querySelector(".segundo-numero");

let numero_aleatorio_1 = valor_aleatorio(numeros);
let numero_aleatorio_2 = valor_aleatorio(numeros);


function valor_aleatorio(valor) {
        const comprimento = valor.length;
        const indice_aleatorio = Math.floor(Math.random() * comprimento);
        const valor_aleatorio = valor[indice_aleatorio];

        return valor_aleatorio;
}

function conta(valor_1, valor_2){
        let resultado = valor_1 * valor_2;
        return resultado;
}

function btn(){
        const resultado = document.querySelector(".resultado");
        const input = document.querySelector(".resposta");
        
        let resposta = conta(numero_aleatorio_1, numero_aleatorio_2);
        let valor = input.value;

        if (valor == resposta){
                return resultado.innerHTML = `Certa Resposta! O resultado é: ${resposta}`;
        }
        else{
                return resultado.innerHTML = `Resposta errada! O resultado correto é: ${resposta}`;
        }

}

primeiro_numero.innerHTML = numero_aleatorio_1;
segundo_numero.innerHTML = numero_aleatorio_2;


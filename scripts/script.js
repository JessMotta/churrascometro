// Carne - 400g por pessoa, se for + de 6h = 650g
// Cerveja - 1200ml por pessoa, se for + de 6h = 2000ml
//Refrigerante/agua - 1000ml por pessoa, se for + 6h = 1500ml

// Crianças valem por 0,5 pessoa

// ler os elementos de entrada
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    // acessar os valores dentro das caixas de texto
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    // variaveis recebem o retorno das funções

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);


    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebidas * adultos + (bebidas / 2 * criancas);


    resultado.innerHTML = `<h3>Para esse churrasco você vai precisar de:</h3>`
    resultado.innerHTML += `<div class="resultShow"><img src="./assets/icons/meat.png"><p class="paragraph">${Math.ceil(qtdTotalCarne / 1000)} kg de carne</p></div>`
    resultado.innerHTML += `<div class="resultShow"><img src="./assets/icons/beer_one.png"><p class="paragraph">${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja</p></div>`
    resultado.innerHTML += `<div class="resultShow"><img src="./assets/icons/drink.png"><p class="paragraph">${Math.ceil(qtdTotalBebidas / 2000)} garrafas de bebidas</p></div>`

}

    function carnePP(duracao){
        if(duracao >= 6){
            return 650;
        }
        else{
            return 400;
        }
    }

    function cervejaPP(duracao){
        if(duracao >= 6){
            return 2000;
        }
        else{
            return 1200;
        }
    } 

    function bebidasPP(duracao){
        if(duracao >= 6){
            return 1500;
        }
        else{
            return 1000;
        }
    }



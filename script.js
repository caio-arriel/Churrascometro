// carne - 400g por peddoa + de 6h - 650
// cerveja - 1200ml por pessoa + 6h - 2000ml
// refri/agua - 1000ml por pessoa + 6h 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputAdultosCerveja = document.getElementById("adultosCerveja");

let resultado = document.getElementById("resultado");
let resultadoKit = document.getElementById("resultadoKit");

function calcular(){

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let adultosCerveja = inputAdultosCerveja.value

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    console.log(qdtTotalCarne)

    let qqtTotalCerveja = adultosCerveja * cervejaPP(duracao)
    console.log(qqtTotalCerveja)

    let qqtTotalRefriAgua = refriAguaPP(duracao) * adultos + (refriAguaPP(duracao) / 2 * criancas)
    console.log(qqtTotalRefriAgua)

    resultado.innerHTML = `<p><b>Você vai precisa de:</b></p>`
    resultado.innerHTML += `<img src="./imagens/steak.png" alt=""><p> ${qdtTotalCarne/1000}Kg de Carne`
    resultado.innerHTML += `<img src="./imagens/beer.png" alt=""><p>${Math.ceil(qqtTotalCerveja/355)} Latas de Cerveja`
    resultado.innerHTML += `<img src="./imagens/soda-glass.png" alt=""><p>${Math.ceil(qqtTotalRefriAgua/2000)} Garrafas de 2L Bebidas`

    let qtdCarneKit = qdtTotalCarne / adultos;
    let qtdCervejaKit = qqtTotalCerveja / adultosCerveja;
    let qtdRefriAguaKit = qqtTotalRefriAgua / adultos;
    
    resultadoKit.innerHTML = `<p><b>Cada Kit-Churrasco será:</b></p>`
    resultadoKit.innerHTML += `<p><b>Cada adulto devera levar pelo menos ${qtdCarneKit/1000}Kg de carne</b><p/>`;
    resultadoKit.innerHTML += `<p><b>Cada adulto devera levar pelo menos ${Math.ceil(qtdCervejaKit/355)} Latas de Cerveja</b><p/>`;
    resultadoKit.innerHTML += `<p><b>Cada adulto devera levar pelo menos ${Math.ceil(qtdRefriAguaKit/2000)} Garrafas de 2L de Refrigerante ou Água</b><p/>`;
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function refriAguaPP(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}



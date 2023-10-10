


/*Estruturas de controle Condicional
comando que pewrmitem analisar uma ou ms condições. e apartir disso (verdadeiro ou falso),
o programa pode excutar ações diferentes. 




comando mais comuns : if(se), else(senão se)

*/


let usario = prompt("Qual é o seu nome");
let idade = prompt("Quantos anos voce tem?");
let mensagem;

//verificar a idade de determinar se o menor ou maior //
//if (idade >= 18) {
    //mensagem = "maior"
//} else {
    //mensagem = "menor"
//}


//console.log(`${usario} é ${mensagem} de idade`)
//alert(`${usario} é ${mensagem} de idade`)


if(idade >= 60 ){
    mensagem = "idosa";
} else if(idade >= 18){
    mensagem = " adulto(a)";
} else {
    mensagem = "menor";
}

console.log(`${usario} você tem ${idade} anos e é
considerado ${mensagem}, `);
alert(`${usario} você tem ${idade} anos e é 
considerado ${mensagem},`);
/* Habilitar o modo estrito do JS*/
"Use strict";

let nota01 = 7;
let nota02 = 8;
let resultado;


let media = (nota01 + nota02) / 2;


if (media >= 7) {
    resultado = " 🎉Estas aprovado";
} else if (media >= 5) {
    resultado = "😢Recuperação";
} else {
    resultado ="😭Reprovado";
}


console.log(`${nota01} com essa nota  ${nota02} é 
considerado ${resultado}, `);









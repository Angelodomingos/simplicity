/* Estruturas de Dados 

- Arrays (Vetores/Matrizes): 
Lista de dados indexados, sequenciais e acessíveis por um
índice numérico.

- Objetos
Lista de dados não indexados e formados por propriedades
e valores. */

// Arrays (os índices sempre começam no zero)
let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // saída direta/estruturada (APENAS NO console)
console.log(cursos[2]); // SQL

/* Exercícios
1) Crie uma constante chamada "dados" e coloque nela
os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade */
const dados = ["Fulano", "Silva", 25, "11-2135-0300", "São Paulo"];

/* 2) Mostre no console uma mensagem contendo somente o nome e a idade
da pessoa. Exemplo: "Fulano tem 25 anos." */
console.log(dados);
console.log(`${dados[0]} tem ${dados[2]} anos.`);

console.log("----------");

// Objeto
let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco",
    opcionais: ["Ar condicionado", "Vidros elétricos", "Alarme"]
};

console.log(carro);
console.log(carro.modelo);
console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);
console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`);

/* Exercícios
1) Crie um novo objeto contendo informações de algo que você gosta
(filme, livro, comida, jogo etc) */


/* 2) Mostre uma mensagem com pelo menos 2 propriedades do objeto
que você criou. */













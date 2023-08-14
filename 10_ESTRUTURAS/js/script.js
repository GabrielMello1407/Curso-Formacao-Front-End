// 1 - Variáveis
let nome = "Gabriel";
console.log(nome);

nome = "Gabriel de Mello Moraes";

console.log(nome);

const idade = 31;

console.log(idade);

//idade = 32

// 2 - mais sobre variáveis
// let @teste = "inválido"
// let 2teste = "inválido"

let a = 10, b = 20, c = 30;
console.log(a, b, c);

const nomecompleto = "Gabriel Mello";

const nomeCompleto = "Mara Mello";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// 3 - Função prompt
// const age = prompt("Digite sua idade:")

// console.log(`Você tem ${age} anos.`)

// 4 - função alert
// alert("Testando");
// const z = 10;
// alert(`O número é ${z}`);

// 5 - math
console.log(Math.max(5,8,10,18))
console.log(Math.floor(5.8))
console.log(Math.ceil(5.14))

// 6 - console
// console.log("teste")
// console.error("Ocorreu um erro!")
// console.warn("Aviso!")

// 7 - If
// const m = 10;

// if (m > 5) {
//   console.log(`${m} é maior que 5`)
// }

// const user = "João"

// if (user === "João") {
//   console.log("Olá joão")
// }
// if (user === "Maria"){
//   console.log("maria")
// }

// console.log(user === "Maria",user === "João")

// 8 - Else
// const loggedIn = false

// if (loggedIn) {
//   console.log("Está autenticado!")
// } else {
//   console.log("Não está autenticado!")
// }

// const q = 10
// const w = 20

// if (q > 5 && w > 20) {
//   console.log("Números mais altos")
// } else {
//   console.log("Os Números não são mais altos")
// }

// 9 - Elseif
// if (1 > 2) {
//   console.log("teste")
// } else if (2 > 3) {
//   console.log("teste 2")
// } else if (5 > 1) {
//   console.log("Agora sim")
// }

// const userName = "Gabriel"
// const userAge = 22

// if (userName === "José") {
//   console.log("Bem vindo Jose")
// } else if (userName === "Gabriel" && userAge === 22) {
//   console.log("Bem vindo Gabriel , voce tem 22 anos")
// } else {
//   console.log("Nenhuma condição aceita")
// }

// 10 - While

// let p = 0;

// while (p < 5) {
//   console.log(`Repetindo ${p}`)
//   p = p + 1;
// }
// loop infinito
// let x = 10

// while (x > 5) {
//   console.log(`Imprimindo ${x}`)
// }

// 11 - do While
// let o = 10;
 
// do {
//   console.log(`Valor de o:${o}`)
//   o--;
// } while (o > 1)

// 12 - for
for (let t = 0; t < 10; t++){
  console.log("Repetindo algo...")
}

let r = 10;
for (r; r > 0; r = r - 1){
  console.log(`O r está diminuindo: ${r}`)
}
// 13 - Identação
for (let u = 0; u < 10; u++){
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`)
} else {
  if (u / 2 === 0) {
    console.log("deu 0")
    };
  }
};
// 14 - break
for (let g = 20; g > 10; g--){
  console.log(`O valor de g é : ${g}`)

  if (g === 15) {
    console.log("O g é 15!")
    break;
  }
}
// 15 - continue
for (let s = 0; s < 10; s = s + 1){
  //operador de resto = %
  if (s % 2 === 0) {
    console.log(`Numero pár!`)
    continue
  }
  console.log(`${s}`)
}
// 16 - switch

const job = "Advogado"

switch (job) {
  case "Progamador":
    console.log("Você é um progamador!")
    break;
  case "Advogado":
    console.log("Você é um advogado")
    break;
  case "Engenheiro":
    console.log("Você é um engenheiro")
    break
  default:
    console.log("Profissão não encontrada!")
}
// switch"errado"
const l = 100
switch (l) {
  case 200:
    console.log("L é 200!")
  case 100:
    console.log("L é 100")
  case 10:
    console.log("L é 10")
  default:
    console.log("L não foi encontrado!")
}
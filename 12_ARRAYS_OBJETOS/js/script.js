// 1 - Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

const itens = ["Gabriel", true, 2, 2.12, []]
console.log(itens)

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d"]
console.log(arr[0])

console.log(arr[2])

console.log(arr[84])

// 3 - propriedades
const numbers = [5, 3, 4]
console.log(numbers.length)

console.log(numbers["length"])

const myName = "Gabriel"

console.log(myName.length)

// 4 - Métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "Algum texto"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf("g"))

// 5 - objetos

const person = {
  name: "Gabriel",
  age: 22,
  job: "Progamador"
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)

// 6 - Criando e deletando propriedades
const car = {
  engine: 2.0,
  brand: "VW",
  km: 20000,
  model: "Virtus"
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

// 7 - mais sobre objetos
const obj = {
  a: "teste",
  b:true
}
console.log(obj instanceof Object)

const obj2 = {
  c: []
}
Object.assign(obj2, obj) //comando que junta mais de um objeto em um só

console.log(obj2)

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 9 - Mutação
const a = {
  name:"Gabriel"
}
const b = a
console.log(a)
console.log(b)

console.log(a === b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - Loops em arrays
const users = ["Gabriel", "Taina", "Pedro", "Junior"]

for (let i = 0; i < users.length; i++){
  console.log(`Listando o usuário: ${users[i]}`)
}

// 11 - Métodos push e pop
const array = ["a", "b", "c"]
array.push("d")

console.log(array)

console.log(array.length)
array.pop()
console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z","x", "y")

console.log(array)

// 12 - Métodos shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")

letters.unshift("z")

console.log(letters)

// 13 - indexOf e lastIndexof
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Manga"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements.indexOf("Abacate"))

console.log(myElements.lastIndexOf("Abacate"))
console.log(myElements.indexOf("Mamão"))
console.log(myElements.lastIndexOf("Mamão"))

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f", "g", "h"]
const subArray = testeSlice.slice(2, 4)

console.log(testeSlice)
console.log(subArray)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3)

const subArray4 = testeSlice.slice(2)
console.log(subArray4)

// 15 - forEach
const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
  console.log(`O numero é ${numero}`)
})

const posts = [
  {title: "Primeiro post", category: "Php"},
  {title: "Segundo post", category: "JavaScript"},
  {title: "Terceiro post", category: "Python"}
]
posts.forEach((post) => {
  console.log(`Exibindo posts: ${post.title} da categoria: ${post.category}`)
})

// 16 - includes
const brands = ["bmw", "fiat", "vw"]

console.log(brands.includes("fiat"))
console.log(brands.includes("kia"))

if (brands.includes("bmw")) {
  console.log("Há carros da bmw")
}

// 17 - Reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()
console.log(reverseTest)

// 18 - Trim
const trimTest = "  Teste \n "

console.log(trimTest)

console.log(trimTest.trim())

console.log(trimTest.length)

console.log(trimTest.trim().length)

// 19 - padStart
const testPadStart = "1"

const newNumber = testPadStart.padStart(4, "0")

console.log(newNumber)

const testPadEnd = newNumber.padEnd(10, "0")

console.log(testPadEnd)

// 20 - Split divide string em array
const frase = "O rato roeu a roupa do rei de roma"

const arrayDaFrase = frase.split(" ")

console.log(frase)
console.log(arrayDaFrase)

// 21 - Join une lista em uma string
const fraseDeNovo = arrayDaFrase.join("")
console.log(fraseDeNovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)

// 22 - Repeat , repete um texto n vezes
const palavra = "Testando"

console.log(palavra.repeat(5))

// 23 - Rest Operator / Rest Parameters - é caractezidado pelo simbolo ... , é usado para receber indefinidos argumentos em uma função

const somaInfinita = (...args) => {
  let total = 0

  for (let i = 0; i < args.length; i++){
    total += args[i]
  }
  return total
}
console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 20, 35, 123213, 12312566, 3426276))

// 24 - for...of estrutura de repetição semelhante ao for , mais simples

const somaInfinita2 = (...args) => {

  let total = 0

  for (num of args) {
    total += num
  }
  return total
}
console.log(somaInfinita(1, 2, 4))
console.log(somaInfinita(1, 3123, 4, 534, 52, 534, 5))

// 25 - Destructuring em objetos , funcionalidade que nos permite desestruturar algum dado
const userDetails = {
  firstName: "Gabriel",
  lastName: "Mello",
  job: "Progamador"
}

const { firstName, lastName, job } = userDetails
console.log(firstName, lastName, job)

//renomear variaveis
const { firstName: primeiroNome } = userDetails
console.log(primeiroNome)

// 26 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]
const [veiculoA, veiculoB, VeiculoC,e] = myList

console.log(veiculoA, veiculoB, VeiculoC)
console.log(e)

// 27 - Json , dado em formato de texto
const myJson = '{"name": "gabriel", "age": 31, "skills":["php","javascript","python"]}'

console.log(myJson)

console.log(typeof myJson)

// 28 - Conversão json para objeto e objeto para json
const myObject = JSON.parse(myJson)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

//json invalido
const badJson = '{"name": Gabriel,"age":22}'

//const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)
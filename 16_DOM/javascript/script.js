// 1 - movendo-se pelo dom
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - Selecionando elementos por tag
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 3 - Selecionando elementos por id
const title = document.getElementById("title")
console.log(title)

// 4 - Selecioanndo elementos por classe
const product = document.getElementsByClassName("product")
console.log(product)

// 5 - Selecionando elementos por css
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// 6 - InsertBefore
const p = document.createElement("p")
const header = title.parentElement

header.insertBefore(p, title)

// 7 - AppendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - ReplaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título!"

header.replaceChild(h2, title)

// 9 - Nó de texto createTextNod
const myText = document.createTextNode("Mais um título")

const h3 = document.createElement("h3")
h3.appendChild(myText)

mainContainer.appendChild(h3)

// 10 - getAttribute e setAttribute
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "blank")

// 11 - Altura e largura dos elementos
const footer = document.querySelector("footer")

console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// 12 - Posição do elemento getClientBoundingRect
const product1 = product[0]

console.log(product1.getBoundingClientRect())

// 13 - Estilos com js
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "10px"

// 14 - Alterando estilos de varios elementos
for (const li of listItens) {
  li.style.backgroundColor = "red"
  li.style.listStyle = "none"
}
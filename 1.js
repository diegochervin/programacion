console.log("El archivo esta linkeado")

//variables y constantes
//primera forma
var autor = "Jorge Luis Borges"

console.log(autor)

//segunda forma
//forma de declarar variables con let
let titulo = "Aleph"

console.log(titulo)
//espacio de memopria que no se puede reasignar su valor
const PI = 3.1415

console.log(PI)

//diferencias entree variables y constantes
//puedo declarar una variable

let libro 
console.log(libro)

//asignar valor a una variable
libro = "ficcion"
console.log(libro)

// inicializar = declarar y asignar
let editorial = "SUdamericana"

//constante si o si debo inicializarla
const fecha = 1949

let cuadro = "cuadrado"
console.log(cuadro)

cuadro =" hola"
console.log(cuadro)


//mostrar algo al usuario cartel emergente
//alert ("hola a todos")


//metodo de entrada al usuario
//let nombre = prompt ("ingresa algo")
//alert(nombre)


//tipo de datos
//string o cadena de textp
let cadenaTexto = "1 palabra"

//numeros

let cinco = 5

//boolean
let verdadero = true

//operaciones aritmeticas

//parsea o transformar un string a number
//parseInt y parseFloat transforman ambos.
//Number considera los decimales, parseInt No

let num1 = parseFloat(prompt("ingrese un numero"))
let num2 = parseFloat(prompt("ingrese otro numero"))

let suma = num1 + num2
let resta = num1 - num2
let multi = num1 * num2

console.log("la suma es : " + suma)
console.log("la resta es : " + resta)
console.log("la multiplicacion es : " + multi)

// otra forma de concatenar las backticks alt+96 
console.log(`la suma de ${num1} y ${num2} es ${suma} `)


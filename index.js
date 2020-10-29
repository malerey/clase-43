// // Primer ejercicio, fijarse si numero esta contenido en un array

// const contiene = (num, array) => {
//     if (array.includes(num)) {
//       return true;
//     } else {
//       return false;
//     }
// };

// const contiene3 = (num, array) => {
//   return Boolean(array.includes(num))
// }

// const contiene2 = (num, array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (num === array[i]) {
//       return true
//       // la unica manera en la que entramos a este if
//       // es si num es igual a uno de los elementos del array
//     }
//   }
//   // llegamos a este momento del codigo SOLO si no hay un numero === array[i]
//   return false
// }

// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])); // true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])); // false

// podemos recorrer un string como recorremos un array
// letra.toUpperCase() === letra
// convertir mayus a minus y vicerversa

// ahora puedo:
// 1 crear un string nuevo con mayus y minus invertidas
// 2 modificar el string que recibi

// const invertirCaso = (string) => {
//   let nuevoString = ''
//   for (let i = 0; i < string.length; i++) {
//   if (string[i].toUpperCase() === string[i]) {
//     nuevoString += string[i].toLowerCase()
//     // es equivalente a
//     // nuevoString = nuevoString + string[i].toLowerCase()
//     }
//     else {
//       nuevoString += string[i].toUpperCase()
//     }
//   }
//   return nuevoString
// }

// const invertirCaso = string => {
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() === string[i]) {
//       string[i] = string[i].toLowerCase();
//     } else {
//       string[i] = string[i].toUpperCase();
//     }
//   }
//   return string;
// };

// console.log(invertirCaso('Ada Lovelace')); // 'aDA lOVELACE'
// console.log(invertirCaso('feliz cumple')); // 'FELIZ CUMPLE'
// console.log(invertirCaso('jAvAsCrIpT')); // 'JaVaScRiPt'


// const gano = (array) => {
//   if (array[0] === array[1] && array[1] === array[2] && array[2] === array[3] && array[3] === array[4]) {
//     return true
//   }
//   else {
//     return false
//   }
// }

// console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])) // false
// console.log(gano(['💫', '💫', '💫', '💫', '💫'])) // true
// console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])) // true


// encontrar a sam
// sabiendo el indice de sam, fijarme si frodo esta antes o despues
// fijarme si el indice de frodo  + 1 o  - 1 es igual al de sam 

// const estanJuntos = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "Sam") {
//       // array[i]
//       // i es el lugar donde esta Sam 
//       // i + 1 e i - 1
//       if (array[i + 1] === "Frodo" || array[i - 1] === "Frodo") {
//         return true
//     }
//   } 
// }
//   return false
// }

// console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])) //true
// console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo'])) //false
// console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])) //false


// While 

// Estructura de repeticion 
// El codigo dentro del while se ejecuta siempre y cuando la condicion sea verdadera

// let numero = 0
// while (numero > 10) {
//   console.log(numero)
//   numero++
// }


// let numero = 9
// while (numero <= 90) {
//   console.log(numero) 
//   numero += 9
// }


// do / while 
// se ejecuta siempre al menos una vez 

// do {
//   // codigo aqui
// }
// while (condicion)




// let numero = 0

// do {
//   console.log(numero)
//   numero++
// }
// while (numero <= 10)

// // si la condicion es false igual se ejecuta

// do {
//   console.log("hola")
// }
// while (false)

let continuarPrograma = true

while (continuarPrograma) {
  let respuestaUsuario = prompt("Diga cuanto tardo la vuelta")
  let confirmar = confirm("Hay alguna vuelta pendiente?")

  console.log(respuestaUsuario)

  if (confirmar === false) {
    continuarPrograma = false 
  }

}


// ============================================================
// TP2 - Ejercicios sobre Operaciones con Arrays


// ------------------------------------------------------------
// Ejercicio 1: Agregar y eliminar elementos (push y pop)

const frutas = ["manzana", "banana", "pera"];

console.log("--- Ejercicio 1 ---");
console.log("Array original:", frutas);

frutas.push("naranja"); // agrega una fruta al final
console.log("Después de push:", frutas);

frutas.pop(); // elimina la última fruta
console.log("Después de pop:", frutas);

// ------------------------------------------------------------
// Ejercicio 2: Array bidimensional

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("--- Ejercicio 2 ---");
console.log("Elemento 5:", matriz[1][1]); // fila 1, columna 1

// ------------------------------------------------------------
// Ejercicio 3: Iterar sobre un array con for

console.log("--- Ejercicio 3 ---");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// ------------------------------------------------------------
// Ejercicio 4: Uso de map

function elevarAlCuadrado(numeros) {
  return numeros.map((numero) => numero * numero);
}

console.log("--- Ejercicio 4 ---");
console.log(elevarAlCuadrado([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

// ------------------------------------------------------------
// Ejercicio 5: Uso de filter

function filtrarMayoresDe(numeros, valor) {
  return numeros.filter((numero) => numero > valor);
}

console.log("--- Ejercicio 5 ---");
console.log(filtrarMayoresDe([4, 10, 15, 20, 8], 9)); // [10, 15, 20]

// ------------------------------------------------------------
// Ejercicio 6: Uso de reduce

function sumarElementos(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log("--- Ejercicio 6 ---");
console.log(sumarElementos([1, 2, 3, 4, 5])); // 15

// ------------------------------------------------------------
// Ejercicio 7: Uso de some

const numeros = [5, 12, -3, 8];

console.log("--- Ejercicio 7 ---");
console.log(
  "¿Algún número mayor que 10?:",
  numeros.some((numero) => numero > 10)
); // true

// ------------------------------------------------------------
// Ejercicio 8: Uso de every
// (usa el mismo array numeros del ejercicio anterior)

console.log("--- Ejercicio 8 ---");
console.log(
  "¿Todos son positivos?:",
  numeros.every((numero) => numero > 0)
); // false

// ------------------------------------------------------------
// Ejercicio 9: Uso de find

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 32 },
  { nombre: "María", edad: 28 },
];

console.log("--- Ejercicio 9 ---");
const personaEncontrada = personas.find((persona) => persona.edad > 30);
console.log("Primera persona mayor de 30:", personaEncontrada);

// ------------------------------------------------------------
// Ejercicio 10: Uso de sort

const palabras = ["pera", "manzana", "banana", "kiwi"];

console.log("--- Ejercicio 10 ---");
palabras.sort();
console.log("Palabras ordenadas:", palabras);

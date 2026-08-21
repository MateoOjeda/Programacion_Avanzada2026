// ============================================================
// TP2 - Ejercicios sobre Funciones


// ------------------------------------------------------------
// Ejercicio 1: Función suma

function sumar(a, b) {
    return a + b;
}

console.log("--- Ejercicio 1 ---");
console.log(sumar(5, 3)); // 8
console.log(sumar(10, 20)); // 30
console.log(sumar(-4, 7)); // 3

// ------------------------------------------------------------
// Ejercicio 2: Función que multiplica

function multiplicar(a, b) {
    return a * b;
}

console.log("--- Ejercicio 2 ---");
console.log(multiplicar(4, 6)); // 24
console.log(multiplicar(7, 8)); // 56
console.log(multiplicar(-3, 5)); // -15

// ------------------------------------------------------------
// Ejercicio 3: Función con parámetro por defecto

function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}

console.log("--- Ejercicio 3 ---");
console.log(saludar("Mateo")); // Hola, Mateo
console.log(saludar()); // Hola, Invitado

// ------------------------------------------------------------
// Ejercicio 4: Función que devuelve un objeto

function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
    };
}

console.log("--- Ejercicio 4 ---");
console.log(crearPersona("Ana", 25));
console.log(crearPersona("Luis", 30));

// ------------------------------------------------------------
// Ejercicio 5: Función que modifica un objeto

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

console.log("--- Ejercicio 5 ---");
const persona = crearPersona("Ana", 25);
console.log("Antes:", persona);

actualizarEdad(persona, 26);
console.log("Después:", persona);

// ------------------------------------------------------------
// Ejercicio 6: Función recursiva (factorial)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("--- Ejercicio 6 ---");
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

// ------------------------------------------------------------
// Ejercicio 7: Función con función interna

function despedir() {
    function adios() {
        return "Adiós, hasta pronto!";
    }
    return adios();
}

console.log("--- Ejercicio 7 ---");
console.log(despedir());

// ------------------------------------------------------------
// Ejercicio 8: Función que usa otra función

function procesarArray(array, funcion) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcion(array[i]));
    }
    return resultado;
}

function multiplicarPor2(numero) {
    return numero * 2;
}

console.log("--- Ejercicio 8 ---");
const numeros = [1, 2, 3, 4, 5];
console.log(procesarArray(numeros, multiplicarPor2)); // [2, 4, 6, 8, 10]

// ------------------------------------------------------------
// Ejercicio 9: Función que devuelve otra función

function crearMultiplicador(x) {
    return function (numero) {
        return numero * x;
    };
}

console.log("--- Ejercicio 9 ---");
const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15

// ------------------------------------------------------------
// Ejercicio 10: Función anónima

const sumarAnonima = function (a, b) {
    return a + b;
};

console.log("--- Ejercicio 10 ---");
console.log(sumarAnonima(9, 4)); // 13

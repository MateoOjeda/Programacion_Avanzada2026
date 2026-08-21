// ============================================================
// TP2 - Ejercicios sobre Objetos

// ------------------------------------------------------------
// Ejercicio 1: Creación de un objeto básico

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  añoDePublicacion: 1967,
};

console.log("--- Ejercicio 1 ---");
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año de publicación:", libro.añoDePublicacion);

// ------------------------------------------------------------
// Ejercicio 2: Anidación de objetos

const estudiante = {
  nombre: "Lucía Gómez",
  edad: 21,
  direccion: {
    calle: "San Martín 1234",
    ciudad: "Paraná",
    pais: "Argentina",
  },
};

console.log("--- Ejercicio 2 ---");
console.log(
  "Dirección completa:",
  `${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`
);

// ------------------------------------------------------------
// Ejercicio 3: Métodos en objetos

libro.descripcion = function () {
  return `"${this.titulo}" escrito por ${this.autor}`;
};

console.log("--- Ejercicio 3 ---");
console.log(libro.descripcion());

// ------------------------------------------------------------
// Ejercicio 4: Iteración sobre las propiedades de un objeto

const producto = {
  nombre: "Teclado inalámbrico",
  precio: 8500,
  disponible: true,
};

console.log("--- Ejercicio 4 ---");
for (const propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`);
}

// ------------------------------------------------------------
// Ejercicio 5: Actualización de propiedades

producto.precio = 9999;

console.log("--- Ejercicio 5 ---");
console.log(producto);

// ------------------------------------------------------------
// Ejercicio 6: Comprobación de propiedades

function tienePropiedad(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad);
}

console.log("--- Ejercicio 6 ---");
console.log(tienePropiedad(producto, "nombre")); // true
console.log(tienePropiedad(producto, "color")); // false

// ------------------------------------------------------------
// Ejercicio 7: Eliminación de propiedades

console.log("--- Ejercicio 7 ---");
console.log("Antes de eliminar:", producto);

delete producto.disponible;

console.log("Después de eliminar:", producto);

// ------------------------------------------------------------
// Ejercicio 8: Combinar objetos

const persona1 = { nombre: "Carlos", edad: 30 };
const persona2 = { ciudad: "Paraná", profesion: "Ingeniero" };

const personaCompleta = Object.assign({}, persona1, persona2);

console.log("--- Ejercicio 8 ---");
console.log(personaCompleta);

// ------------------------------------------------------------
// Ejercicio 9: Copiar objetos (copia profunda)

const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));

copiaEstudiante.nombre = "María Pérez";
copiaEstudiante.edad = 25;
copiaEstudiante.direccion.ciudad = "Rosario";

console.log("--- Ejercicio 9 ---");
console.log("Original (sin cambios):", estudiante);
console.log("Copia (modificada):", copiaEstudiante);

// ------------------------------------------------------------
// Ejercicio 10: Métodos getters y setters

// Guardamos el valor actual en una propiedad interna
libro._añoDePublicacion = libro.añoDePublicacion;

// Definimos el getter y el setter para añoDePublicacion
Object.defineProperty(libro, "añoDePublicacion", {
  get() {
    return this._añoDePublicacion;
  },
  set(nuevoAño) {
    this._añoDePublicacion = nuevoAño;
  },
});

libro.añoDePublicacion = 2014; // se usa el setter

console.log("--- Ejercicio 10 ---");
console.log("Año actualizado:", libro.añoDePublicacion); // se usa el getter

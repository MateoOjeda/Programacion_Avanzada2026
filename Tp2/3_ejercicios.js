// ============================================================
// TP2 - Ejercicios sobre Funciones
// (Consumo de Datos, Mapeo de Información, Autenticación)


// ------------------------------------------------------------
// Ejercicio 1: Consumo de datos desde una API

async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();
    console.log("Lista de usuarios:", usuarios);
    return usuarios;
}

// ------------------------------------------------------------
// Ejercicio 2: Procesamiento de datos de una API
// (usa la función obtenerUsuarios del ejercicio anterior)

async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();
    const nombres = usuarios.map((usuario) => usuario.name);
    console.log("Nombres de usuarios:", nombres);
}

// ------------------------------------------------------------
// Ejercicio 3: Autenticación simulada

const USUARIO_PREDEFINIDO = {
    usuario: "admin",
    contraseña: "1234",
};

function autenticarUsuario(credenciales) {
    return (
        credenciales.usuario === USUARIO_PREDEFINIDO.usuario &&
        credenciales.contraseña === USUARIO_PREDEFINIDO.contraseña
    );
}

console.log("--- Ejercicio 3 ---");
console.log(autenticarUsuario({ usuario: "admin", contraseña: "1234" })); // true
console.log(autenticarUsuario({ usuario: "admin", contraseña: "0000" })); // false

// ------------------------------------------------------------
// Ejercicio 4: Transformación de datos

function mapearUsuarios(usuarios) {
    return usuarios.map((usuario) => ({
        nombre: usuario.name,
        email: usuario.email,
    }));
}

// ------------------------------------------------------------
// Ejercicio 5: Validación de formularios

function validarFormulario(formulario) {
    if (!formulario.nombre || !formulario.email || !formulario.password) {
        return false;
    }
    return true;
}

console.log("--- Ejercicio 5 ---");
console.log(
    validarFormulario({ nombre: "Ana", email: "ana@mail.com", password: "abc123" })
); // true
console.log(validarFormulario({ nombre: "", email: "ana@mail.com", password: "abc123" })); // false
console.log(validarFormulario({ nombre: "Ana", email: "ana@mail.com" })); // false

// ------------------------------------------------------------
// Ejercicio 6: Paginación de datos (5 elementos por página)

function obtenerPagina(datos, pagina) {
    const elementosPorPagina = 5;
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
}

console.log("--- Ejercicio 6 ---");
const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("Página 1:", obtenerPagina(datos, 1)); // [1, 2, 3, 4, 5]
console.log("Página 2:", obtenerPagina(datos, 2)); // [6, 7, 8, 9, 10]
console.log("Página 3:", obtenerPagina(datos, 3)); // [11, 12]

// ------------------------------------------------------------
// Ejercicio 7: Envío de datos a una API (POST)

async function enviarDatos(data) {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resultado = await respuesta.json();
    console.log("Respuesta de la API:", resultado);
}

// ------------------------------------------------------------
// Ejercicio 8: Búsqueda de usuarios (find)

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find((usuario) => usuario.email === email);
}

// ------------------------------------------------------------
// Ejercicio 9: Generación de token de autenticación (simulado)

function generarToken(usuario) {
    return btoa(JSON.stringify(usuario));
}

console.log("--- Ejercicio 9 ---");
const usuarioToken = { nombre: "Ana", email: "ana@mail.com" };
console.log("Token:", generarToken(usuarioToken));

// ------------------------------------------------------------
// Ejercicio 10: Actualización de información del usuario

function actualizarUsuario(usuario, cambios) {
    return Object.assign({}, usuario, cambios);
}

console.log("--- Ejercicio 10 ---");
const usuarioViejo = { nombre: "Luis", edad: 30, ciudad: "Santa Fe" };
const usuarioActualizado = actualizarUsuario(usuarioViejo, {
    edad: 31,
    ciudad: "Paraná",
});
console.log("Usuario actualizado:", usuarioActualizado);

// ------------------------------------------------------------
// Ejecución de los ejercicios que consumen la API (1, 2, 4, 7 y 8)

async function ejecutarEjercicios() {
    // Ejercicio 1: obtiene e imprime la lista completa de usuarios
    console.log("--- Ejercicio 1 ---");
    const usuarios = await obtenerUsuarios();

    // Ejercicio 2: usa obtenerUsuarios e imprime solo los nombres
    console.log("--- Ejercicio 2 ---");
    await imprimirNombresDeUsuarios();

    // Ejercicio 4: transforma la lista obtenida
    console.log("--- Ejercicio 4 ---");
    console.log(mapearUsuarios(usuarios));

    // Ejercicio 8: busca un usuario por su email
    console.log("--- Ejercicio 8 ---");
    console.log(buscarUsuarioPorEmail(usuarios, "Sincere@april.biz"));

    // Ejercicio 7: envía datos a la API
    console.log("--- Ejercicio 7 ---");
    await enviarDatos({
        titulo: "Prueba TP2",
        cuerpo: "Contenido de prueba",
        userId: 1,
    });
}

ejecutarEjercicios();

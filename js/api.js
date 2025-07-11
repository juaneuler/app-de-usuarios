// Este archivo Js tiene la función para el fetch a la API

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function obtenerUsuarios() {
    let usuarios = [];

    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error ("Ocurrió un error al obtener los usuarios");
        usuarios = await respuesta.json();
        console.log("Usuarios obtenidos:", usuarios);
    } catch (error) {
        console.error("Ocurrió un problema:", error.message);
    } finally {
        console.log("Petición resuelta!");
    }
    return usuarios;
}
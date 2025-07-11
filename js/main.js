// Este archivo Js ejecuta las funciones para que funcione la app

import { obtenerUsuarios } from "./api.js";
import { renderizarUsuarios } from "./render.js";
import { ordenarUsuarios, filtrarUsuarios } from "./utilidades.js";

let usuariosOriginales = [];
let usuariosMostrados = [];

async function iniciarApp() {
    usuariosOriginales = await obtenerUsuarios();
    usuariosMostrados = [...usuariosOriginales];
    renderizarUsuarios(usuariosMostrados);
}

iniciarApp();

// Ordenamos el array que se esté mostrando según el criterio elegido. Esto permite ordenar tanto el array que viene por defecto de la API, como el generado por la búsqueda con la barra
document.getElementById('botonOrdenar').addEventListener('click', () => {
    const campo = document.getElementById('campoOrden').value;
    usuariosMostrados = ordenarUsuarios(usuariosMostrados, campo);
    renderizarUsuarios(usuariosMostrados);
});

// Filtramos el array en pantalla según lo escrito en la barra
document.getElementById('botonFiltrar').addEventListener('click', () => {
    const campo = document.getElementById('campoFiltro').value;
    const texto = document.getElementById('busqueda').value;
    usuariosMostrados = filtrarUsuarios(usuariosOriginales, campo, texto);
    renderizarUsuarios(usuariosMostrados)
});

// Volvemos a ver todos los usuarios sin filtrar
document.getElementById('botonReiniciar').addEventListener('click', () => {
    // Limpiamos la barra de búsqueda y los selectores
    document.getElementById('busqueda').value = '';
    document.getElementById('campoFiltro').selectedIndex = 0;
    document.getElementById('campoOrden').selectedIndex = 0;
    usuariosMostrados = [...usuariosOriginales]
    renderizarUsuarios(usuariosMostrados);
});
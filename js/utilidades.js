// Este archivo Js tiene las funciones para ordenar y filtar

// Función para ordenar

export function ordenarUsuarios(usuarios, campo) {
    return [...usuarios].sort((a, b) => {
        const valorA = a[campo].toLowerCase();
        const valorB = b[campo].toLowerCase();
        if (valorA < valorB) return -1;
        if (valorA > valorB) return 1;
        return 0;
    });
}

// Función para filtrar

export function filtrarUsuarios(usuarios, campo, texto) {
    return usuarios.filter(usuario => 
        usuario[campo].toLowerCase().includes(texto.toLowerCase())
    );
}
// Este archivo Js tiene la función para renderizar en el DOM los objetos del array

export function renderizarUsuarios(usuarios) {
    const contenedor = document.getElementById('listaUsuarios');
    contenedor.innerHTML = ''; // Con esto, nos aseguramos que el DOM esté limpio antes de renderizar

    if (!usuarios.length) {
        contenedor.innerHTML = '<p>No se encontraron usuarios</p>';
        return;
    }

    usuarios.forEach(usuario => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjetaUsuario';
        tarjeta.innerHTML = `
            <h2>${usuario.name}</h2>
            <p><strong>Usuario:</strong> ${usuario.username}</p>
            <p><strong>E-mail:</strong> ${usuario.email}</p>
            <p><strong>Dirección:</strong> ${usuario.address.street}. ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}</p>
            <p><strong>Teléfono:</strong> ${usuario.phone}</p>
            <p><strong>Sitio Web:</strong> ${usuario.website}</p>
            <p><strong>Compañía:</strong> ${usuario.company.name}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}
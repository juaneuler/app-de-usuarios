# App de Usuarios

Esta aplicación permite visualizar, filtrar y ordenar una lista de usuarios obtenidos desde una API pública.

## Funcionalidades

- **Visualización:** Muestra tarjetas con los datos principales de cada usuario. Las tarjetas se generan dinámicamente con Js vainilla.
- **Filtrado:** Permite buscar usuarios por nombre, usuario o email.
- **Orden:** Permite ordenar la lista por nombre, usuario o email.
- **Reinicio:** Botón para limpiar filtros y volver a mostrar todos los usuarios tal cual vienen de la API.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (se usaron varios archivos para emular componentes de React y dar escalabilidad)
- API pública: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

## Instrucciones de uso

1. Descargá los archivos.
2. **Importante:** para que la aplicación funcione correctamente, es necesario abrirla en un servidor local!
   - Usá la extensión **Live Server** en Visual Studio Code.
   - O montá un servidor local con alguna herramienta.
3. Abrí `index.html` en tu navegador desde el servidor.
4. Utilizá la barra de búsqueda y los selectores para filtrar y ordenar la lista de usuarios.
5. Hacé click en "Reiniciar filtros" para volver a ver todos los usuarios.

### Nota sobre CORS

Por políticas de seguridad de los navegadores, **no es posible cargar datos externos desde archivos abiertos con `file://`**.

Si abrís el `index.html` con doble clic (sin servidor), la API pública será bloqueada y los datos no se cargarán.  
Para evitarlo, abrí el proyecto usando **Live Server** o cualquier servidor local que use el protocolo `http://`.

## Estructura del proyecto

- `index.html`: Estructura principal y controles de la app.
- `styles.css`: Estilos y responsive.
- `js/api.js`: Lógica para obtener los usuarios desde la API.
- `js/render.js`: Lógica para renderizar los usuarios en el DOM.
- `js/utilidades.js`: Funciones de filtrado y ordenamiento.
- `js/main.js`: Lógica principal y conexión de eventos.


Desarrollado por Juan Euler
E-Mail: juaneuler@hotmail.com  
Portfolio: https://portfolio-juan-euler.netlify.app/
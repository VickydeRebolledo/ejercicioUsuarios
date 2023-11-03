# Ejercicio de Lista de Usuarios

Esta es una aplicación React que muestra una lista de usuarios y sus detalles.

## Instrucciones para Ejecutar el Proyecto

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### Requisitos Previos

Asegúrate de tener instalados los siguientes elementos en tu máquina:

- [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) (Node Package Manager)

### Instalación

1. Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:

  `git clone https://github.com/VickydeRebolledo/ejercicioUsuarios.git`

2. Navega al directorio del proyecto:

  `cd ejercicioUsuarios`

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

  `npm install`

4. Inicia el servidor de desarrollo con el siguiente comando:
  
  `npm start`

5. Abre tu navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.

## Funcionalidades
Muestra una lista de usuarios obtenidos de la API de RandomUser.me.
Al hacer clic en el botón "Detalles" de un usuario, se muestra la dirección del usuario en un modal.

Puedes filtrar la lista de usuarios por nacionalidad seleccionando una opción en el menú desplegable de la página. Las nacionalidades disponibles son:
  - Estados Unidos 
  - Canadá
  - México 
  - España 

Selecciona una nacionalidad y la lista se actualizará automáticamente con los usuarios de esa nacionalidad. 

Asimismo, la lista de usuarios se muestra en grupos de 15, 20 o 30  tarjetas por página según se elija. 


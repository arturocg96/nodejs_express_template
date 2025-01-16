// const mysql = require('mysql2/promise');

// // Configuración de la conexión a la base de datos.
// // Se utilizan variables de entorno para garantizar la seguridad y flexibilidad de la configuración.
// const dbConfig = {
//     host: process.env.DB_HOST,         // Dirección del host de la base de datos.
//     user: process.env.DB_USER,         // Nombre de usuario para la conexión.
//     password: process.env.DB_PASSWORD, // Contraseña del usuario.
//     database: process.env.DB_NAME,     // Nombre de la base de datos a utilizar.
//     port: process.env.DB_PORT,         // Puerto en el que escucha el servidor de base de datos.
// };

// /**
//  * Conecta a la base de datos utilizando las configuraciones definidas en `dbConfig`.
//  *
//  * @returns {Promise<mysql.Connection>} - La conexión activa a la base de datos.
//  * @throws {Error} - Lanza un error si la conexión no se puede establecer.
//  */
// const connection = async () => {
//     try {
//       const conn = await mysql.createConnection(dbConfig);
//       return conn;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }

//   module.exports = connection;

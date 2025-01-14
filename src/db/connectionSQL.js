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
// module.exports.connect = async () => {
//     try {
//         // Establece la conexión con la base de datos.
//         const connection = await mysql.createConnection(dbConfig);
       
//         return connection; // Devuelve la conexión establecida.
//     } catch (error) {
//         // Maneja y registra cualquier error ocurrido durante el intento de conexión.
//         console.error('Error al conectar a la base de datos:', error.message);
//         throw error; // Lanza el error para que el consumidor de este módulo pueda manejarlo.
//     }
// };

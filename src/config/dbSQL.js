// // Importación del módulo 'mysql2/promise' para trabajar con MySQL utilizando promesas.
// const mysql = require('mysql2/promise');
// require("dotenv").config();

// // Configuración de la conexión a la base de datos.
// // Se utilizan variables de entorno para almacenar las credenciales y detalles de la base de datos.
// // Esto mejora la seguridad, ya que evita incluir información sensible directamente en el código fuente
// // y facilita la flexibilidad en diferentes entornos (desarrollo, pruebas, producción).
// const dbConfig = {
//     host: process.env.DB_HOST,         // Dirección del servidor de la base de datos (por ejemplo, 'localhost' o una IP remota).
//     user: process.env.DB_USER,         // Nombre del usuario autorizado a acceder a la base de datos.
//     password: process.env.DB_PASSWORD, // Contraseña asociada al usuario de la base de datos.
//     database: process.env.DB_NAME,     // Nombre de la base de datos a la que se debe conectar.
//     port: process.env.DB_PORT,         // Puerto en el que escucha el servidor de la base de datos (por defecto suele ser 3306 para MySQL).
// };

// // Creación de un grupo de conexiones (connection pool) para la base de datos.
// // El connection pool permite reutilizar conexiones existentes, mejorando el rendimiento
// // y reduciendo la sobrecarga de establecer nuevas conexiones constantemente.
// const pool = mysql.createPool(dbConfig);

// // Exportación del connection pool como una promesa para que pueda ser utilizado en otras partes de la aplicación.
// // Esto permite interactuar con la base de datos mediante operaciones asincrónicas.
// module.exports = pool.promise();

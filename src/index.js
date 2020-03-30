const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 *  Rota / Recurso
 */
/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do Back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação Back-end
 */

 /**
  * Tipos de parâmetro
  * Querry Params: parâmetros nomeados enviados na rota após "!" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos (id)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */
 /**
  * SQL: Mysql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */
 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */
  
 app.listen(3333);


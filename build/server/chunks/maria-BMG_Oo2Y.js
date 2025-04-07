import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "finanssoreal",
  password: "finanssoreal",
  database: "local_finanssoreal"
});

export { pool as p };
//# sourceMappingURL=maria-BMG_Oo2Y.js.map

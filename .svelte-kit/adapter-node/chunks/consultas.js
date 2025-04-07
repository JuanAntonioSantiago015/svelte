import { p as pool } from "./maria.js";
async function queryDatabase(query, params = []) {
  let conn;
  try {
    conn = await pool.getConnection();
    const [result] = await conn.query(query, params);
    return result;
  } catch (err) {
    console.error(err);
    return { error: "Error en la consulta" };
  } finally {
    if (conn) conn.release();
  }
}
async function getAllData() {
  return await queryDatabase("SELECT * FROM tb_municipio LIMIT 100");
}
async function getById(muniId) {
  console.log("Query para cargar uno");
  return await queryDatabase("SELECT * FROM tb_municipio WHERE codigo = ?", [muniId]);
}
export {
  getById as a,
  getAllData as g
};

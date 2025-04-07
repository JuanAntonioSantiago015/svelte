import "../../../../chunks/index.js";
import { p as pool } from "../../../../chunks/maria.js";
async function POST({ request }) {
  try {
    const { codigo, estado, nombre, cod_usuario, cod_departamento } = await request.json();
    const [result] = await pool.query(
      "INSERT INTO tb_municipio (codigo, estado, nombre, cod_usuario, cod_departamento, created_at) VALUES (?, ?, ?, ?, ?, NOW())",
      [codigo, estado, nombre, cod_usuario, cod_departamento]
    );
    return new Response(JSON.stringify({ success: true, id: result.insertId }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
export {
  POST
};

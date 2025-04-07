import { p as pool } from "../../../../../chunks/maria.js";
async function load({ params }) {
  const { muniid } = params;
  try {
    const [result] = await pool.query("SELECT * FROM tb_municipio where codigo = ?", [muniid]);
    return { props: { data: rows[0] } };
  } catch {
    return { status: 500, body: { error: error.message } };
  }
}
export {
  load
};

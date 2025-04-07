import { p as pool } from './maria-BMG_Oo2Y.js';
import 'mariadb';

async function load({ params }) {
  const { muniid } = params;
  try {
    const [result] = await pool.query("SELECT * FROM tb_municipio where codigo = ?", [muniid]);
    return { props: { data: rows[0] } };
  } catch {
    return { status: 500, body: { error: error.message } };
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DrVcgwVn.js')).default;
const server_id = "src/routes/crud/update/[muniid]/+page.server.ts";
const imports = ["_app/immutable/nodes/5.BsSeYFIs.js","_app/immutable/chunks/nMOs572-.js","_app/immutable/chunks/CaUj3mEh.js","_app/immutable/chunks/BU-RXIxO.js","_app/immutable/chunks/03pT3oY_.js","_app/immutable/chunks/Cg7CmM2v.js","_app/immutable/chunks/CZzYgC2K.js","_app/immutable/chunks/Cl2tfy-_.js","_app/immutable/chunks/C_d15Yp-.js","_app/immutable/chunks/C8wcO_O3.js","_app/immutable/chunks/C821J9Q3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-DN3w4Dwv.js.map

import { a as getById } from './consultas-CE96_2nM.js';
import './maria-BMG_Oo2Y.js';
import 'mariadb';

async function load() {
  try {
    const datos = await getById("2");
    console.log("Datos encontrados: " + datos);
    if (!datos) {
      throw new Error("No se recibieron datos");
    }
    return { datos };
  } catch (error) {
    console.error("Error en load: ", error);
    return {
      datos: []
    };
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DQ0WJdCX.js')).default;
const server_id = "src/routes/mail/selectOne/+page.server.ts";
const imports = ["_app/immutable/nodes/8.Dh5SRDW8.js","_app/immutable/chunks/nMOs572-.js","_app/immutable/chunks/CaUj3mEh.js","_app/immutable/chunks/BU-RXIxO.js","_app/immutable/chunks/03pT3oY_.js","_app/immutable/chunks/CoSa2akO.js","_app/immutable/chunks/Cg7CmM2v.js","_app/immutable/chunks/CZzYgC2K.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-DqoqgJp6.js.map

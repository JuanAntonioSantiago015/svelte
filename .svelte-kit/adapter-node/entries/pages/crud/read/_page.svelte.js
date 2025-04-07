import { e as ensure_array_like, d as stringify, c as pop, p as push } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let municipios = [];
  const each_array = ensure_array_like(municipios);
  $$payload.out += `<ul class="list bg-base-100 rounded-box shadow-md"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let municipio = each_array[$$index];
    $$payload.out += `<li class="list-row"><div class="text-4xl font-thin opacity-30 tabular-nums">${escape_html(municipio.codigo)}</div> <div class="list-col-grow"><div>${escape_html(municipio.nombre)}</div></div> <a class="btn btn-warning"${attr("href", `/crud/update/$${stringify(municipio.codigo)}`)}>Editar</a></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
export {
  _page as default
};

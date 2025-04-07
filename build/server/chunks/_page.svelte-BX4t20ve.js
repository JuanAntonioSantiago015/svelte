import { p as push, e as ensure_array_like, d as stringify, c as pop } from './index2-D5ngtJw1.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-YVTFWYF4.js';

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

export { _page as default };
//# sourceMappingURL=_page.svelte-BX4t20ve.js.map

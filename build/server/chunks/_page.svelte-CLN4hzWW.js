import { p as push, e as ensure_array_like, f as bind_props, c as pop } from './index2-D5ngtJw1.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  console.log(data);
  console.log("Datos en vista:", data?.datos);
  $$payload.out += `<main><h1>Datos de la Base de datos:</h1> `;
  if (!data || !data.datos) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>No hay datos disponibles</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(data.datos);
    const each_array_1 = ensure_array_like(data.datos);
    $$payload.out += `<ul class="list bg-base-100 rounded-box shadow-md"><li class="list-row"><div class="text-4xl font-thin opacity-30 tabular-nums">${escape_html(data.datos.codigo)}</div> <div class="list-col-grow"><div>${escape_html(data.datos.nombre)}</div></div></li></ul> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out += `<ul class="list bg-base-100 rounded-box shadow-md"><li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li> <li class="list-row"><div class="text-4xl font-thin opacity-30 tabular-nums">01</div> <div class="list-col-grow"><div>Dio Lupa</div> <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div></div></li></ul>`;
    }
    $$payload.out += `<!--]--> <!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$payload.out += `<li>${escape_html(item.codigo)}: ${escape_html(item.nombre)}</li>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></main>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CLN4hzWW.js.map

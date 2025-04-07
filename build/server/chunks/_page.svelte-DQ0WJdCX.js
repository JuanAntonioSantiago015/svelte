import { p as push, f as bind_props, c as pop } from './index2-D5ngtJw1.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  console.log("Datos en la vista: ", data?.datos);
  $$payload.out += `<div class="hero bg-base-200 min-h-screen"><div class="hero-content text-center"><div class="max-w-md">`;
  if (data) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1 class="text-5xl font-bold">${escape_html(data.datos.nombre)}</h1> <p class="py-6">${escape_html(data.datos.codigo)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DQ0WJdCX.js.map

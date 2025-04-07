import { p as push, f as bind_props, c as pop } from './index2-D5ngtJw1.js';
import './client-4Nhtp2bS.js';
import { I as Input } from './Input-BYOzf1Za.js';
import './exports-BWCsmFhW.js';
import './utils-B3WPzOwK.js';
import './escaping-CqgfEcN3.js';
import './attributes-YVTFWYF4.js';

function _page($$payload, $$props) {
  push();
  function handleInput(event) {
    const { id, value } = value.target;
    formData = { ...formData, [id]: value };
    console.log(formData);
  }
  let data = $$props["data"];
  data?.estado || "";
  data?.nombre || "";
  data?.codigo_usuario || "";
  data?.cod_departamento || "";
  data?.updated_at || "";
  $$payload.out += `<form>`;
  Input($$payload, {
    label: "estado",
    type: "number",
    defaultValue: "estado",
    onInput: handleInput,
    id: "estado"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    label: "nombre",
    type: "text",
    defaultValue: "nombre",
    onInput: handleInput,
    id: "nombre"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    label: "Codigo de usuario",
    type: "number",
    defaultValue: "cod_usuario",
    onInput: handleInput,
    id: "cod_usuario"
  });
  $$payload.out += `<!----></form>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DrVcgwVn.js.map

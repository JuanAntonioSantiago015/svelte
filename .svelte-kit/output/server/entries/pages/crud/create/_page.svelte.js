import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { c as pop, p as push } from "../../../../chunks/index2.js";
import { I as Input } from "../../../../chunks/Input.js";
function _page($$payload, $$props) {
  push();
  let name = "";
  let loading = false;
  let formData = {
    codigo: "",
    estado: "",
    nombre: "",
    cod_usuario: "",
    cod_departamento: ""
  };
  function handleInput(event) {
    const { id, value } = event.target;
    formData = { ...formData, [id]: value };
    console.log(formData);
  }
  $$payload.out += `<form><div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"><div class="card-body"><fieldset class="fieldset">`;
  Input($$payload, {
    label: "Codigo",
    value: name,
    type: "number",
    placeholder: "Escriba el codigo",
    onInput: handleInput,
    id: "codigo"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    label: "estado",
    type: "number",
    placeholder: "Escriba un codigo",
    onInput: handleInput,
    id: "estado"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    label: "nombre",
    type: "text",
    placeholder: "Escriba el nombre del municipio",
    onInput: handleInput,
    id: "nombre"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    label: "Codigo de usuario",
    type: "number",
    placeholder: "Ingrese el codigo de usuario",
    onInput: handleInput,
    id: "cod_usuario"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    label: "Codigo de departamento",
    type: "number",
    placeholder: "Ingrese el codigo del departamento",
    onInput: handleInput,
    id: "cod_departamento"
  });
  $$payload.out += `<!----> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button class="btn btn-neutral mt-4" type="submit"${attr("disabled", loading, true)}>${escape_html("Enviar")}</button></fieldset></div></div></form>`;
  pop();
}
export {
  _page as default
};

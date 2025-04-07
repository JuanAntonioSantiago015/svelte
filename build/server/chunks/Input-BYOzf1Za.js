import { f as bind_props } from './index2-D5ngtJw1.js';
import { h as fallback } from './utils-B3WPzOwK.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-YVTFWYF4.js';

function Input($$payload, $$props) {
  let value = fallback($$props["value"], "");
  let placeholder = fallback($$props["placeholder"], "");
  let type = fallback($$props["type"], "");
  let onInput = fallback($$props["onInput"], "");
  let id = fallback($$props["id"], "");
  let label = fallback($$props["label"], "");
  $$payload.out += `<fieldset class="fieldset"><label calss="fieldset-label">${escape_html(label)}</label> <input class="input"${attr("type", type)}${attr("placeholder", placeholder)}${attr("value", value)}${attr("name", id)}${attr("id", id)}></fieldset>`;
  bind_props($$props, {
    value,
    placeholder,
    type,
    onInput,
    id,
    label
  });
}

export { Input as I };
//# sourceMappingURL=Input-BYOzf1Za.js.map

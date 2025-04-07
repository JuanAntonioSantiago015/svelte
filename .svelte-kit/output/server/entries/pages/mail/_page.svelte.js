import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { h as head, f as bind_props, c as pop, p as push } from "../../../chunks/index2.js";
import { h as fallback } from "../../../chunks/utils.js";
function ReCaptcha($$payload, $$props) {
  push();
  let SITE_KEY = $$props["SITE_KEY"];
  let captchaStyle = fallback($$props["captchaStyle"], () => ({ theme: "light", size: "normal" }), true);
  const getRecaptchaResponse = () => {
    return grecaptcha.getResponse();
  };
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script src="https://www.google.com/recaptcha/api.js" async defer><\/script><!---->`;
  });
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="g-recaptcha"${attr("data-sitekey", SITE_KEY)}${attr("data-theme", captchaStyle.theme)}${attr("data-size", captchaStyle.size)}></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { SITE_KEY, captchaStyle, getRecaptchaResponse });
  pop();
}
function _page($$payload, $$props) {
  push();
  let SITE_KEY = "6LcATQkrAAAAAIBluic6wsTssdaLLgrdrBNAAgeQ";
  let loading = false;
  $$payload.out += `<div class="hero bg-base-200 min-h-screen"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left"><h1 class="text-5xl font-bold">Hablanos pai!</h1> <p class="py-6">Este es un formulario para enviar correos</p></div> <form><div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"><div class="card-body"><fieldset class="fieldset"><label class="fieldset-label">Email</label> <input type="email" class="input" name="from" placeholder="Email"> <label class="fieldset-label">Asunto</label> <input name="subject" class="input" placeholder="Password"> <label class="fieldset-label">Comentario</label> <textarea class="textarea" placeholder="Comentario"></textarea> `;
  ReCaptcha($$payload, {
    SITE_KEY,
    captchaStyle: { theme: "dark", size: "compact" }
  });
  $$payload.out += `<!----> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button class="btn btn-neutral mt-4" type="submit"${attr("disabled", loading, true)}>${escape_html("Enviar")}</button></fieldset></div></div></form></div></div>`;
  pop();
}
export {
  _page as default
};

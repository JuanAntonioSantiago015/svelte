function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div className="navbar bg-base-100 shadow-sm"><a className="btn btn-ghost text-xl" href="/">Inicio</a> <ul class="menu menu-horizontal px-1"><li><a href="mail/">Mails</a></li> <li><a href="mail/loadData">Seleccionar todos</a></li> <li><a href="mail/selectOne">Seleccionar Uno</a></li> <li><a href="crud/create">Crear</a></li> <li><a href="crud/read">Listar todos</a></li></ul></div> `;
  children($$payload);
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BKe9VZBs.js.map



export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B7dNjAB0.js","_app/immutable/chunks/nMOs572-.js","_app/immutable/chunks/CaUj3mEh.js"];
export const stylesheets = ["_app/immutable/assets/0.Bxj5gjbN.css"];
export const fonts = [];

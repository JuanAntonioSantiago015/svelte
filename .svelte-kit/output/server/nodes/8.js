import * as server from '../entries/pages/mail/selectOne/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mail/selectOne/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/mail/selectOne/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.Dh5SRDW8.js","_app/immutable/chunks/nMOs572-.js","_app/immutable/chunks/CaUj3mEh.js","_app/immutable/chunks/BU-RXIxO.js","_app/immutable/chunks/03pT3oY_.js","_app/immutable/chunks/CoSa2akO.js","_app/immutable/chunks/Cg7CmM2v.js","_app/immutable/chunks/CZzYgC2K.js"];
export const stylesheets = [];
export const fonts = [];

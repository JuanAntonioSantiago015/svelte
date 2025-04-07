const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DlXD-oQr.js",app:"_app/immutable/entry/app.CX0CBWyE.js",imports:["_app/immutable/entry/start.DlXD-oQr.js","_app/immutable/chunks/Cl2tfy-_.js","_app/immutable/chunks/CaUj3mEh.js","_app/immutable/chunks/C_d15Yp-.js","_app/immutable/entry/app.CX0CBWyE.js","_app/immutable/chunks/CaUj3mEh.js","_app/immutable/chunks/03pT3oY_.js","_app/immutable/chunks/nMOs572-.js","_app/immutable/chunks/CoSa2akO.js","_app/immutable/chunks/B9EL_IHQ.js","_app/immutable/chunks/CZzYgC2K.js","_app/immutable/chunks/C_d15Yp-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C7U-xrAb.js')),
			__memo(() => import('./chunks/1-BUb1CkS2.js')),
			__memo(() => import('./chunks/2-BrueiAkg.js')),
			__memo(() => import('./chunks/3-Dl4XbO0a.js')),
			__memo(() => import('./chunks/4-BmsteVs9.js')),
			__memo(() => import('./chunks/5-DN3w4Dwv.js')),
			__memo(() => import('./chunks/6-D3JmP7z5.js')),
			__memo(() => import('./chunks/7-BXO9d-3P.js')),
			__memo(() => import('./chunks/8-DqoqgJp6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/crud/create",
				pattern: /^\/crud\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: __memo(() => import('./chunks/_server.ts-WUnkL3CR.js'))
			},
			{
				id: "/crud/read",
				pattern: /^\/crud\/read\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: __memo(() => import('./chunks/_server.ts-CkuxH119.js'))
			},
			{
				id: "/crud/update/[muniid]",
				pattern: /^\/crud\/update\/([^/]+?)\/?$/,
				params: [{"name":"muniid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: __memo(() => import('./chunks/_server.ts-BJxdlcba.js'))
			},
			{
				id: "/mail",
				pattern: /^\/mail\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('./chunks/_server.ts-BWkxyKd0.js'))
			},
			{
				id: "/mail/loadData",
				pattern: /^\/mail\/loadData\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/mail/selectOne",
				pattern: /^\/mail\/selectOne\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

export const manifest = (() => {
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
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/crud/create/_server.ts.js'))
			},
			{
				id: "/crud/read",
				pattern: /^\/crud\/read\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: __memo(() => import('./entries/endpoints/crud/read/_server.ts.js'))
			},
			{
				id: "/crud/update/[muniid]",
				pattern: /^\/crud\/update\/([^/]+?)\/?$/,
				params: [{"name":"muniid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: __memo(() => import('./entries/endpoints/crud/update/_muniid_/_server.ts.js'))
			},
			{
				id: "/mail",
				pattern: /^\/mail\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('./entries/endpoints/mail/_server.ts.js'))
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

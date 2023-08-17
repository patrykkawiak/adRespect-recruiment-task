import viteImageMin from 'vite-plugin-imagemin';

export default () => {
	return {
		base: './',
		plugins: [
			viteImageMin({
				gifsicle: {
					optimizationLevel: 3,
					interlaced: false,
				},
				optipng: {
					optimizationLevel: 7,
				},
				mozjpeg: {
					quality: 80,
				},
				pngquant: {
					quality: [0.8, 0.9],
					speed: 4,
				},
				svgo: {
					plugins: [
						{
							name: 'removeViewBox',
						},
						{
							name: 'removeEmptyAttrs',
							active: false,
						},
					],
				},
				webp: {
					quality: 80,
				},
			}),
		],
		server: {
			port: 3000,
		},
	};
};

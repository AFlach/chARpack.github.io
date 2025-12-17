import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'/images/manual/': path.resolve('static/images/manual/')
		}
	}
};

export default config;

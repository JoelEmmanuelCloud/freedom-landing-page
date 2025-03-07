import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*'],
			handleHttpError: ({ path, status }) => {
				if (status === 404) {
					console.warn(`Skipping not found: ${path}`);
					return;
				}
				throw new Error(`${status} error on ${path}`);
			}
		}
	}
};	

export default config;

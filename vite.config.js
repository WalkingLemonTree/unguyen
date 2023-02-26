import path from "path";
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	resolve: {
		alias: {
			$data: path.resolve("src/data.ts")
		}
	}
};

export default config;

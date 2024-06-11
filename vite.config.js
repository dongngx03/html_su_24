// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				category: resolve(__dirname, "src/pages/category.html"),
				base: resolve(__dirname, "src/pages/base.html"),
				base: resolve(__dirname, "src/pages/products.html"),
			},
		},
	},
});

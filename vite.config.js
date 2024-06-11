// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                base: resolve(__dirname, 'src/pages/base.html'),
                Order: resolve(__dirname, 'src/pages/Order.html'),
            },
        },
    },
});


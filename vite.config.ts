import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/EduES/',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                orientacoes: resolve(__dirname, 'orientacoes.html'),
                videoaulas: resolve(__dirname, 'videoaulas.html'),
            },
        },
    },
});
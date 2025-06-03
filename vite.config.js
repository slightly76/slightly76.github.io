import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	base: '/slightly76.github.io/',
	plugins: [react(), svgr()],
});

import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "wireframe",
            project: "javascript-sveltekit-pc"
        }
    }), sveltekit(), Icons({
        compiler: "svelte"
    })],
	
});
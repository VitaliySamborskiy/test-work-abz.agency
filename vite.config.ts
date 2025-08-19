import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/test-work-abz.agency",
	server: {
		port: 3000,
	},
	build: {
		outDir: "dist",
		minify: "esbuild",
		target: "esnext",
		cssCodeSplit: true,
		sourcemap: false,
		reportCompressedSize: true,

		rollupOptions: {
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
					vendors: ["axios", "notiflix", "react-hook-form", "react-imask"],
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				additionalData: `@import "/src/scss/global/_vars.scss";
												 @import "/src/scss/global/_mixins.scss";`,
			},
		},
	},
});

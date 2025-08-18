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

import { defineConfig } from "vite";
import * as glob from 'glob';
import path, { resolve } from 'node:path'
import { ViteMinifyPlugin} from 'vite-plugin-minify'
import htmlPurge from 'vite-plugin-purgecss'
export default defineConfig({
    build: {
        
    }, 
    plugins: [
        htmlPurge({}),
        ViteMinifyPlugin({})
    ]
    
    base: "/updated_portfolio-pw2/"
})
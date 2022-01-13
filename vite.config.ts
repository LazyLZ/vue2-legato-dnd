import {defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [createVuePlugin()],
    root: path.resolve('test'),
})

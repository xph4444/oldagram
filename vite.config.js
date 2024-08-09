import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				// 如果有多个入口文件，可以在这里添加
			},
			output: {
				// 可以自定义输出文件的格式和路径
			}
		}
	}
})
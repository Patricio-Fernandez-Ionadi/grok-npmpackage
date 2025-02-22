import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: {
				index: path.resolve(__dirname, 'src/index.js'),
				components: path.resolve(__dirname, 'src/modules/components/index.js'),
				icons: path.resolve(__dirname, 'src/modules/icons/index.js'),
				date: path.resolve(__dirname, 'src/modules/date/index.js'),
			},
			name: 'Groker',
			fileName: (format, entryName) => {
				if (entryName === 'index') return `${entryName}.${format}.js`

				return `${entryName}/${entryName}.${format}.js`
			},
		},
		rollupOptions: {
			external: ['react', 'react-dom'], // Excluye React y ReactDOM del bundle
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./src/test/setup.js'],
		globals: true,
	},
})

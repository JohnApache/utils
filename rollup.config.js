import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'umd',
		name: 'JAUtils'
	},
	plugins: [
		resolve(),
		common(),
		json(),
		babel({
			exclude: ['node_modules/**'],
			runtimeHelpers: true
		})
	]
};
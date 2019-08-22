import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import os from 'os';
import path from 'path';

const cpuNums = os.cpus().length;

export default [
	{
		input: 'src/index.js',
		output: {
			file: path.resolve(__dirname, 'dist', 'JAUtils.js'),
			format: 'umd',
			name: 'JAUtils',
		},
		plugins: [
			resolve(),
			common(),
			babel({
				runtimeHelpers: true
			})
		]
	},
	{
		input: 'src/index.js',
		output: {
			file: path.resolve(__dirname, 'dist', 'JAUtils.min.js'),
			format: 'umd',
			name: 'JAUtils',
		},
		plugins: [
			resolve(),
			common(),
			babel({
				runtimeHelpers: true
			}),
			terser({
				output: {
					comments: false
				},
				include: [/^.+\.js$/],
				exclude: ['node_moudles/**'],
				numWorkers: cpuNums,
				sourcemap: false
			})
		]
	},
];
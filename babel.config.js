const presets = [
	[
		'@babel/env',
		{
			targets: {
				edge: '17',
				firefox: '60',
				chrome: '67',
				safari: '11.1',
				ie: '9'
			},
			useBuiltIns: 'usage',
		},
	],
];

const plugins = [
	'@babel/plugin-external-helpers'
];
  
module.exports = { presets, plugins };
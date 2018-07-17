import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const isProd = process.env.NODE_ENV === 'production';
const pkg = require('./package.json');

const babelrcConfig = babelrc({ addModuleOptions: false });

const plugins = [
  commonjs({
    include: [
      'node_modules/react/**',
      'node_modules/lodash/**'
    ]
  }),
  resolve({
    jsnext: true,
    module: true,
    extensions: ['.js'],
    main: true
  }),
  babel({
    babelrc: false,
    plugins: [
      'external-helpers'
    ],
    presets: [
      ['env', { modules: false }],
      'react'
    ],
  }),
];

if (isProd) {
	plugins.push(uglify())
}

const external = [
  "react"
];

export default {
	input: './src/index.js',
	plugins,
	external,
	context: 'window',
	output: {
		file: pkg.main,
		format: 'umd',
		sourcemap: true,
		name: 'actoservice-sdk'
	},
}

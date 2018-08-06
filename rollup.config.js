import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import image from 'rollup-plugin-image';
import commonjs from 'rollup-plugin-commonjs';
import { defineEnvPlugin } from './rollup.plugins';

const isProd = process.env.NODE_ENV === 'production';
const pkg = require('./package.json');

const babelrcConfig = babelrc({ addModuleOptions: false });

const plugins = [
  image(),
  commonjs({
    include: [
      'node_modules/react/**',
      'node_modules/lodash/**',
      'node_modules/react-popover',
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
    exclude: 'node_modules/**',
    plugins: [
      'transform-object-rest-spread',
      'external-helpers'
    ],
    presets: [
      ['env', { modules: false }],
      'react'
    ],
  }),
  defineEnvPlugin({
    __DEV__: process.env.NODE_ENV !== 'production'
  })
];

if (isProd) {
	plugins.push(uglify())
}

const external = [
  'react',
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

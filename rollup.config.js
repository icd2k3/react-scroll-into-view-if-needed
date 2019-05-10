import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

const IS_STANDALONE_BUILD = process.env.BUILD_TYPE === 'standalone';
const name = 'react-scroll-into-view-if-needed';
const external = Object.keys(pkg.peerDependencies)
  .concat(IS_STANDALONE_BUILD ? 'scroll-into-view-if-needed' : []);
const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
  'scroll-into-view-if-needed': 'scrollIntoViewIfNeeded',
};
const rootOutputProps = {
  exports: 'named',
  globals,
  name,
  sourcemap: true,
};
const output = IS_STANDALONE_BUILD
  ? [
    { ...rootOutputProps, file: 'dist/umd/standalone.js', format: 'umd' },
    { ...rootOutputProps, file: 'dist/es/standalone.js', format: 'es' },
  ]
  : [
    { ...rootOutputProps, file: pkg.main, format: 'umd' },
    { ...rootOutputProps, file: pkg.module, format: 'es' },
  ];

const config = {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
  external,
  output,
};

export default config;

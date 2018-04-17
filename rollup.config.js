import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

const external = Object.keys(pkg.peerDependencies);

const globals = {
  react: 'React',
};

const config = {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    resolve({
      module: true,
      jsnext: true,
      main: true,
    }),
    commonjs(),
  ],
  external,
  output: [
    {
      exports: 'named',
      file: pkg.main,
      format: 'umd',
      globals,
      name: 'react-scroll-into-view-if-needed',
      sourcemap: true,
    },
    {
      exports: 'named',
      file: pkg.module,
      format: 'es',
      globals,
      sourcemap: true,
    },
  ],
};

export default config;

import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify-es';
import replace from 'rollup-plugin-replace';
import buble from 'rollup-plugin-buble';
import vue from 'rollup-plugin-vue';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/entry.js',
  output: {
    name: 'vuefold',
    exports: 'named',
    globals: {
      'vue-observe-visibility': 'VueObserveVisibility',
    },
  },
  external: ['vue-observe-visibility'],
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true,
      },
    }),
    buble({ objectAssign: true }),
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;

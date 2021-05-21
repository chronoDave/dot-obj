import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const input = 'src/index.ts';
const outputFile = type => `dist/dotobj.${type}`;

export default [{
  input,
  plugins: [
    esbuild({
      target: 'esnext'
    })
  ],
  output: [{
    file: outputFile('cjs'),
    exports: 'auto',
    format: 'cjs',
  }, {
    file: outputFile('mjs'),
    exports: 'auto',
    format: 'es'
  }]
}, {
  input,
  plugins: [dts()],
  output: {
    file: outputFile('d.ts'),
    format: 'es'
  },
  external: ['fs']
}];

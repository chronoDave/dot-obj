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
    file: outputFile('js'),
    exports: 'auto',
    format: 'cjs',
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

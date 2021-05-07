import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  // preserveEntrySignatures is disabled due to caching issues,
  // as index.js would be cached in the browser.
  // preserveEntrySignatures: false,
  plugins: [
    dynamicImportVars({
      exclude: [
        'node_modules/@arcgis/core/core/workers/workers.js',
        'node_modules/@arcgis/core/core/workers/WorkerFallback.js',
      ],
    }),
    nodeResolve({
      mainFields: ['es2015', 'module', 'browser', 'jsnext:main', 'main'],
      extensions: ['.mjs', '.js'],
    }),
    commonjs(),
  ],
};

import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { RollupOptions } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import { dependencies, devDependencies } from '../package.json'

function getConfig(inputPath: string, outputPath: string): RollupOptions {
  return {
    input: inputPath,
    output: {
      file: outputPath,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    external: [
      ...Object.keys(dependencies),
      ...Object.keys(devDependencies),
      '@eslint/js',
      '@eslint/eslintrc',
      //   '@stylistic/eslint-plugin',
      //   '@typescript-eslint/eslint-plugin',
      //   '@typescript-eslint/parser',
      //   'eslint',
      //   'eslint-plugin-import',
      //   'eslint-plugin-jest',
      //   'eslint-plugin-react',
      //   'eslint-plugin-react-hooks',
      'globals',
    ],
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      json(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationDir: null,
            outDir: null,
          },
          exclude: [
            './src/**/*.test*',
          ],
        },
      }),
      commonjs(),
      terser(),
    ],
  }
}

const config: Array<RollupOptions> = [
  getConfig('./src/index.ts', './lib/index.js'),
  getConfig('./src/bundle-entry-point/base.ts', './base/lib/index.js'),
  getConfig('./src/bundle-entry-point/jest.ts', './jest/lib/index.js'),
  getConfig('./src/bundle-entry-point/react.ts', './react/lib/index.js'),
]

export default config

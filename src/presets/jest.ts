import type { Linter } from 'eslint'
import jestPlugin from 'eslint-plugin-jest'
import { Severity } from '../abstractions/public'

export interface JestConfigParams {
  remapOff: Severity,
  remapWarn: Severity,
  remapError: Severity
}

export function createJestConfig({
  remapOff,
}: JestConfigParams): Array<Linter.FlatConfig> {
  return [
    {
      ...jestPlugin.configs.recommended,
      settings: {
        version: require('jest/package.json').version,
      },
    },
    {
      plugins: {
        'jest': jestPlugin,
      },
      rules: {
        'jest/valid-title': remapOff,
      },
    },
  ]
}

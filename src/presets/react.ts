import type { Linter } from 'eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import { Severity } from '../abstractions/public'
import { compat } from '../utils/compat'
import { emphasize } from '../utils/emphasize'

export interface ReactConfigParams {
  remapOff: Severity,
  remapWarn: Severity,
  remapError: Severity
  isLibraryAuthoring?: boolean
}

export function createReactConfig({
  remapOff,
  remapWarn,
  remapError,
  isLibraryAuthoring,
}: ReactConfigParams): Array<Linter.FlatConfig> {
  return [
    compat.extends(reactPlugin.configs.recommended),
    compat.extends(reactHooksPlugin.configs.recommended),
    {
      name: '@glyph-cat/eslint-config (react)',
      plugins: {
        'react': reactPlugin,
        'react-hooks': reactHooksPlugin,
      },
      rules: {
        ...(isLibraryAuthoring ? {
          'no-restricted-imports': [remapError, {
            paths: [{
              name: 'react',
              importNames: ['useRef'],
              message: 'Please import from ' + emphasize('\'@glyph-cat/swiss-army-knife\'') + ' instead.'
            }],
          }],
        } : {}),
        'react/display-name': remapOff,
        'react/jsx-no-bind': remapWarn,
        'react/no-children-prop': remapError,
        'react/prop-types': remapOff,
        'react/react-in-jsx-scope': remapOff, // React ≥17 has new JSX transform
        'react-hooks/exhaustive-deps': [remapWarn, {
          additionalHooks: 'useInsertionEffect'
        }]
      },
      settings: {
        // See: https://github.com/benmosher/eslint-plugin-import/issues/1485#issuecomment-571597574
        'react': {
          pragma: 'React',
          fragment: 'Fragment',
          version: 'detect',
        },
      },
    }
  ]
}

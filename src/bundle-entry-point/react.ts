import { NumericSeverity, Severity, StringSeverity } from '../abstractions/public'
import { createReactConfig } from '../presets/react'

/**
 * @public
 */
export const recommended = createReactConfig({
  remapOff: Severity.OFF,
  remapWarn: Severity.WARN,
  remapError: Severity.ERROR,
})

/**
 * @public
 */
export const libraryAuthoring = createReactConfig({
  remapOff: Severity.OFF,
  remapWarn: Severity.ERROR,
  remapError: Severity.ERROR,
  isLibraryAuthoring: true,
})

/**
 * @public
 */
export const EXHAUSTIVE_DEPS_DEFAULT_ADDITIONAL_HOOKS: Readonly<Array<string>> = [
  'useInsertionEffect',
  'useIsomorphicLayoutEffect',
]

/**
 * @public
 */
export const BuildRule = {
  ReactHooks: {
    ExhaustiveDeps: (
      severity: Severity | NumericSeverity | StringSeverity,
      additionalHooks: Array<string>,
    ) => {
      return {
        'react-hooks/exhaustive-deps': [severity, {
          additionalHooks: `(${additionalHooks.join('|')})`,
        }],
      }
    },
  },
} as const

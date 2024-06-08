import { Severity } from '../abstractions/public'
import { createReactConfig } from '../presets/react'

/**
 * @public
 */
export const ReactRecommended = createReactConfig({
  remapOff: Severity.OFF,
  remapWarn: Severity.WARN,
  remapError: Severity.ERROR,
})

/**
 * @public
 */
export const ReactLibraryAuthoring = createReactConfig({
  remapOff: Severity.OFF,
  remapWarn: Severity.ERROR,
  remapError: Severity.ERROR,
  isLibraryAuthoring: true,
})

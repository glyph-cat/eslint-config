import { Severity } from './abstractions/public'
import { createBaseConfig } from './presets/base'
import { createReactConfig } from './presets/react'

/**
 * @public
 */
export const recommended = createBaseConfig({
  remapOff: Severity.OFF,
  remapWarn: Severity.WARN,
  remapError: Severity.ERROR,
})

export default recommended

/**
 * @public
 */
export const LibraryAuthoring = createBaseConfig({
  remapOff: Severity.OFF,
  remapWarn: Severity.ERROR,
  remapError: Severity.ERROR,
})

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

export * from './abstractions/public'
export * from './constants/public'
export { ALT_IMPORT_RESOLVER_SETTINGS } from './presets/base'

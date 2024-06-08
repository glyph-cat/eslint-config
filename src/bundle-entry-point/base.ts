import { Severity } from '../abstractions/public'
import { createBaseConfig } from '../presets/base'

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
export const libraryAuthoring = createBaseConfig({
  remapOff: Severity.OFF,
  remapWarn: Severity.ERROR,
  remapError: Severity.ERROR,
})

export * from '../abstractions/public'
export * from '../constants/public'
export { ALT_IMPORT_RESOLVER_SETTINGS } from '../presets/base'

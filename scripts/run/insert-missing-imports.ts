import { readFileSync, writeFileSync } from 'fs'
import { ENCODING_UTF_8 } from '../constants'

const dtsFilePath = './temp/tsc/types/index.d.ts'

let dtsFileContent = readFileSync(dtsFilePath, ENCODING_UTF_8)

dtsFileContent = 'import { FlatConfig, ClassicConfig } from \'@typescript-eslint/utils/ts-eslint\';\n' + dtsFileContent

writeFileSync(dtsFilePath, dtsFileContent, ENCODING_UTF_8)

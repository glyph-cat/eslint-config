set -e

# Cleanup old artifacts
rm -rf ./lib ./temp/tsc

# Generate bundle
rollup -c ./config/rollup.config.js

# Generate type definitions
yarn tsc --declaration
api-extractor run -c ./config/api-extractor.base.json --local --verbose
api-extractor run -c ./config/api-extractor.react.json --local --verbose

set -e

# Cleanup old artifacts
rm -rf ./temp/tsc ./base/lib ./react/lib

# Generate bundle
rollup -c ./config/rollup.config.js

# Generate type definitions
yarn tsc --declaration
api-extractor run -c ./config/api-extractor.base.json --local --verbose
api-extractor run -c ./config/api-extractor.react.json --local --verbose

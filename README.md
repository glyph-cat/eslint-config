## Installation

### Standard
```sh
yarn add -D @glyph-cat/eslint-config
```

### Jest
```sh
yarn add -D @glyph-cat/eslint-config eslint-plugin-jest
```

### React
```sh
yarn add -D @glyph-cat/eslint-config eslint-plugin-react eslint-plugin-react-hooks
```

### Everything (for easy of copy)
```sh
yarn add -D @glyph-cat/eslint-config eslint-plugin-jest eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

```js
const { recommended as baseRecommended } = require('@glyph-cat/eslint-config/base')
const { recommended as jestRecommended } = require('@glyph-cat/eslint-config/jest')
const { recommended as reactRecommended } = require('@glyph-cat/eslint-config/react')

module.exports = [
  ...recommended,
  ...jestRecommended, // optional, for projects that uses Jest
  ...reactRecommended, // optional, for React projects
]

```

## Troubleshooting

### Key "globals": Global "AudioWorkletGlobalScope " has leading or trailing whitespace.

Solution: Run `yarn why globals` to check the version. Make sure the version of [globals](https://www.npmjs.com/package/globals) is at least v14.X.X. The package can be updated to the latest version by running `yarn upgrade globals@latest`.

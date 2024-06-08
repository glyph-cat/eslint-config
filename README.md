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
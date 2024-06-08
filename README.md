## Installation

### Standard
```sh
yarn add -D @glyph-cat/eslint-config
```

### React
```sh
yarn add -D @glyph-cat/eslint-config eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

```js
const { recommended } = require('@glyph-cat/eslint-config/base')

module.exports = [
  ...recommended,
]

```
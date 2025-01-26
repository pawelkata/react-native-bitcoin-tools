# React-native-bitcoin-tools v0.2.0

A set of helpers for interacting with Bitcoin and Blockchain.

Mainly to be used in React Native apps, but should work on Web as well.

Initial version, not really stable or in final form, so please use with caution.

## Installation

```sh
npm install react-native-bitcoin-tools
```

## Usage


```js
import {
  getCurrentPrice,
  getAddressAmount,
  getCurrentBlockHeight,
  getLTHRealizedPrice,
  getSTHRealizedPrice,
} from 'react-native-bitcoin-tools';

// NOTE: Initial version. There's no proper docs right now.
```

## Known issues

If you stumble upon this error:

```
tsserver: Could not find a declaration file for module 'react-native-bitcoin-tools'. '/Users/pawelkata/Documents/code/OKR-2024-25/btc-test/node_modules/react-native-bitcoin-tools/lib/commonjs/index.js' implicitly has an 'any' type.
```

You may need to adjust `tsconfig.json` in your project by adding:

```
  "compilerOptions": {
    {...}
    "moduleResolution": "bundler"
  },
```

## Acknowledgements

This library uses api's supplied by:
- [Mempool.space](https://mempool.space)
- [Kibo.money](https://kibo.money)

Thanks!

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

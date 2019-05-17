## puffscoin-rpc-promise

[![npm package](https://nodei.co/npm/ethereum-rpc-promise.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ethereum-rpc-promise/)

[![NPM version][npm-image]][npm-url]



[downloads-image]: https://img.shields.io/npm/dm/ethereum-rpc-promise.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/ethereum-rpc-promise
[npm-image]: https://img.shields.io/npm/v/ethereum-rpc-promise.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ethereum-rpc-promise

A promise-based node.js library for communicating with PUFFScoin daemon.

## Install

```
npm install --save puffscoin-rpc-promise
```

## Usage

Start puffscoin daemon with rpc support:

```bash
./gpuffs --rpc
```

Connect to daemon endpoint and send rpc commands:

```js
const PuffscoinRpc = require('puffscoin-rpc-promise');

let eth = new PuffscoinRpc('http://localhost:11363');

// call named wrappers
eth.web3_sha3('0x12345678').then(result) => {
  console.log(result);
});

// or call raw commands
eth.call('web3_sha3', '0x12345678').then(result) => {
  console.log(result);
});

```

## Documentation

[Ethereum Wiki](https://github.com/ethereum/wiki/wiki/JSON-RPC)

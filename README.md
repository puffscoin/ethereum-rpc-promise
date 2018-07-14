## ethereum-rpc-promise

[Source Code](https://github.com/lovevialik/ethereum-rpc-promise.git)

A modern promise based node.js library for communicating with Ethereum daemon.

## Install

```
npm install --save ethereum-rpc-promise
```

## Usage

Start ethereum daemon with rpc support:

```bash
geth --rpc
```

Connect to daemon endpoint and send rpc commands:

```js
const EthereumRpc = require('ethereum-rpc-promise');

let eth = new EthereumRpc('http://localhost:8545');

eth.call('web3_sha3', ['0x12345678']).then(result) => {
  console.log(result);
});
```

## Documentation

[Ethereum Wiki](https://github.com/ethereum/wiki/wiki/JSON-RPC)

## puffscoin-rpc-promise

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

let puffs = new PuffscoinRpc('http://localhost:11363');

// call named wrappers
puffs.web3_sha3('0x12345678').then(result) => {
  console.log(result);
});

// or call raw commands
puffs.call('web3_sha3', '0x12345678').then(result) => {
  console.log(result);
});

```


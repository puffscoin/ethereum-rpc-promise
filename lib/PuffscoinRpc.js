const _ = require('lodash');
const request = require('request-promise-native');

class PuffscoinRpc {
  constructor(url) {
    this.url = url;
    this.id = 1;
  }
  
  async call() {
    let method = arguments[0];
    let params = [...arguments].splice(1);
    let response = await request({
      method: 'POST',
      url: this.url,
      json: true,
      body: {
        id: this.id++,
        method: method,
        params: params
      }
    });

    if (response.error) {
      throw new Error(response.error.message)
    }

    return response.result;
  }
}

// gpuffs 1.9.0
const methods = [
  'web3_clientVersion',
  'web3_sha3',
  'net_version',
  'net_peerCount',
  'net_listening',
  'puffs_protocolVersion',
  'puffs_syncing',
  'puffs_coinbase',
  'puffs_mining',
  'puffs_hashrate',
  'puffs_gasPrice',
  'puffs_accounts',
  'puffs_blockNumber',
  'puffs_getBalance',
  'puffs_getStorageAt',
  'puffs_getTransactionCount',
  'puffs_getBlockTransactionCountByHash',
  'puffs_getBlockTransactionCountByNumber',
  'puffs_getUncleCountByBlockHash',
  'puffs_getUncleCountByBlockNumber',
  'puffs_getCode',
  'puffs_sign',
  'puffs_sendTransaction',
  'puffs_sendRawTransaction',
  'puffs_call',
  'puffs_estimateGas',
  'puffs_getBlockByHash',
  'puffs_getBlockByNumber',
  'puffs_getTransactionByHash',
  'puffs_getTransactionByBlockHashAndIndex',
  'puffs_getTransactionByBlockNumberAndIndex',
  'puffs_getTransactionReceipt',
  'puffs_getUncleByBlockHashAndIndex',
  'puffs_getUncleByBlockNumberAndIndex',
  'puffs_getCompilers',
  'puffs_compileLLL',
  'puffs_compileSolidity',
  'puffs_compileSerpent',
  'puffs_newFilter',
  'puffs_newBlockFilter',
  'puffs_newPendingTransactionFilter',
  'puffs_uninstallFilter',
  'puffs_getFilterChanges',
  'puffs_getFilterLogs',
  'puffs_getLogs',
  'puffs_getWork',
  'puffs_submitWork',
  'puffs_submitHashrate',
  'db_putString',
  'db_getString',
  'db_putHex',
  'db_getHex',
  'shh_post',
  'shh_version',
  'shh_newIdentity',
  'shh_hasIdentity',
  'shh_newGroup',
  'shh_addToGroup',
  'shh_newFilter',
  'shh_uninstallFilter',
  'shh_getFilterChanges',
  'shh_getMessages',
];

for (let method of methods) {
  PuffscoinRpc.prototype[method] = _.partial(PuffscoinRpc.prototype.call, method);
}

module.exports = PuffscoinRpc;

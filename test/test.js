const EthereumRpc = require('../');

let rpc = new EthereumRpc('https://mainnet.infura.io');

describe('ethereum rpc', () => {
  it('should call succesfully', (done) => {
    rpc.call('web3_sha3', ['0x12345678']).then(result => done());
  });
  it('should throw error for invalid command', (done) => {
    rpc.call('invalid_command').catch(error => done());
  });
});

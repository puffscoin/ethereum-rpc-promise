const PuffscoinRpc = require('../');

let rpc = new PuffscoinRpc('https://mainnet.infura.io');

describe('puffscoin rpc', () => {
  it('should call without params succesfully', (done) => {
    rpc.call('web3_clientVersion').then(result => done());
  });
  it('should call with params succesfully', (done) => {
    rpc.call('web3_sha3', '0x12345678').then(result => done());
  });
  it('should call named wrapper succesfully', (done) => {
    rpc.web3_sha3('0x12345678').then(result => done());
  });
  it('should throw error for invalid command', (done) => {
    rpc.call('invalid_command').catch(error => done());
  });
});

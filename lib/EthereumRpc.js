const request = require('request-promise-native');

class EthereumRpc {
  constructor(url) {
    this.url = url;
    this.id = 1;
  }
  
  async call(method, params = []) {
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

module.exports = EthereumRpc;

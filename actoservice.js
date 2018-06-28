const assign = require('lodash/assign');

class Actoservice {
  constructor() {
    this.configMap = null;
  }

  updateConfig(configuration) {
    this.configMap = assign({}, this.configMap, configuration);
    console.log(configuration, this.configMap);
  }
}

module.exports = new Actoservice();
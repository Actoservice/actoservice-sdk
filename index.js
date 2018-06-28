/**
 * @flow
 */

const get = require('lodash/get');
const types = require('./types');
const actoservice = require('./actoservice');

export const bindValue = (key) =>
  get(
    get(actoservice.configMap, key),
    'defaultValue',
    get(actoservice.configMap, key)
  );

export default actoservice;
export const Types = types;
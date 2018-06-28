/**
 * @flow
 */

const set = require('lodash/set');
const cloneDeep = require('lodash/cloneDeep');
const get = require('lodash/get');
const theme = require('./theme');
const types = require('./types');

// type Options = {
//   type: string,
// };
// type ThemesOptions = {
//   name: string,
//   description?: string
// };

// type UploadParams = {
//   root?: *,
// } & ThemesOptions;

const dependencyGraph = {};
let configMap = null;

export const setConfigMap = (object) => {
  configMap = cloneDeep(object);
}

export const bindValue = (key) => get(configMap, key).defaultValue;

export const Types = types;
import get from 'lodash/get';

export const getValue = (key) =>
({ configMap }) =>
  get(
    get(configMap, key),
    'defaultValue',
    get(configMap, key)
  );
export const getType = (key) =>
  ({ configMap }) =>
    get(configMap, `${key}.type`);
export const getTitle = (key) =>
  ({ configMap }) =>
    get(configMap, `${key}.__title__`);
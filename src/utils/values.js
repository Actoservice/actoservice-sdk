import get from 'lodash/get';

export const getValue = (key) =>
({ configMap }) =>
  get(
    get(configMap, key),
    'defaultValue',
    get(configMap, key)
  );

import get from 'lodash/get';
import {
  valueKey,
  prodValueKey,
  titleKey,
  prodTitleKey,
  typeKey
} from '../constants';

console.log(
  valueKey,
  prodValueKey,
  titleKey,
  prodTitleKey,
  typeKey
);

export const getValue = (key) =>
({ configMap }) =>
  get(
    get(configMap, key),
    prodValueKey,
    get(configMap, `${key}.${valueKey}`)
  );

export const getType = (key) =>
  ({ configMap }) =>
    get(configMap, `${key}.${typeKey}`);

export const getTitle = (key) =>
  ({ configMap }) =>
    get(
      get(configMap, key),
      prodTitleKey,
      get(configMap, `${key}.${titleKey}`)
    );
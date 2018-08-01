import get from 'lodash/get';
import {
  valueKey,
  prodValueKey,
  titleKey,
  prodTitleKey,
  typeKey,
  maxKey,
  minKey
} from '../constants';

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

export const getMax = (key) =>
  ({ configMap }) =>
    get(configMap, `${key}.${maxKey}`);

export const getMin = (key) =>
  ({ configMap }) =>
    get(configMap, `${key}.${minKey}`);

export const getTitle = (key) =>
  ({ configMap }) =>
    get(
      get(configMap, key),
      prodTitleKey,
      get(configMap, `${key}.${titleKey}`)
    );
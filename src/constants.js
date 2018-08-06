export const isProd = !__DEV__;

export const API = !isProd
  ? 'https://www.actoservice.com/api/v1'
  : 'http://0.0.0.0:3000/api/v1';

export const titleKey = '__title__';
export const prodTitleKey = 'title';

export const typeKey = 'type';

export const valueKey = 'defaultValue';
export const prodValueKey = 'value';
export const maxKey = 'max';
export const minKey = 'min';
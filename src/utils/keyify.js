/**
 * @flow
 */
export default function keyify(obj: {}, prefix: string = '') {
  return Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return [
        ...res,
        prefix + el
      ];
    }
    if (obj[el] !== null && typeof obj[el] === 'object') {
      return [
        ...res,
        ...keyify(obj[el], `${prefix}${el}.`)
      ];
    }
    return [...res, prefix + el];
  }, []);
}

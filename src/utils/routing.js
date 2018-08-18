import { isInIframe } from './iframe';

export function generateRoutePath(path) {
  return isInIframe()
    ? `${window.location.pathname}${path}`
    : path;
}
export const defineEnvPlugin = (env) => {
  const stringified = JSON.stringify(env);

  return {
    intro() {
      return `
        var __env__ = ${stringified};
        if (window && !window.process) {
          window.process = {};
        }
        if (!process) {
          var process = window.process;
        }
        process.env = process.env || {};
        Object.keys(__env__).forEach(function (key) {
          process.env[key] = __env__[key];
          if (window) {
            window[key] = __env__[key];
          }
        });
      `;
    }
  }
}
import Raven from 'raven-js';

const sentry_key = '32ffb50d611d4ac2b39946917a2d212b';
const sentry_app = '1280741';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

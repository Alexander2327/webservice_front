/* eslint-disable no-console */
import Widget from './Widget';

const widget = new Widget(document.getElementById('main'));

widget.init();

(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register('./service-worker.js');
      console.log('Service worker register success');
    }
  } catch (err) {
    console.log('Error: ', err);
  }
})();

import { render } from './modules/renderer.mjs';
import { App } from './modules/components/App.mjs';

(async () => {
  render(await App(), document.querySelector('#root'));
})();

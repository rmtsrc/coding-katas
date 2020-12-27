import { createElement } from '../renderer.mjs';
import { fetchTabsWithFirstPage } from '../service.mjs';

import { renderTabs } from './Tabs.mjs';

export const App = async () => {
  const [tabData, contentData] = await fetchTabsWithFirstPage();

  const tabs = createElement('nav', {}, renderTabs(tabData));
  const content = createElement('article', { id: 'content' }, contentData);

  return createElement('main', {}, tabs, content);
};

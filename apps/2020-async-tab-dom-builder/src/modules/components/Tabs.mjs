import { createElement } from '../renderer.mjs';
import { fetchPage } from '../service.mjs';

const setActiveTab = (tab) => {
  document.querySelector('.active').removeAttribute('class');
  tab.className = 'active';
};

const updateContent = (content) => {
  const newContentEl = createElement('article', { id: 'content' }, content);
  const contentEl = document.querySelector('#content');
  contentEl.parentNode.replaceChild(newContentEl, contentEl);
};

const Tab = (tab, idx) =>
  createElement(
    'li',
    {
      id: idx,
      ...(idx === 0 ? { class: 'active' } : {}),
      onclick: async function () {
        setActiveTab(this);
        updateContent('Loading...');
        updateContent(await fetchPage(idx + 1));
      },
    },
    tab
  );

export const renderTabs = (tabs) => createElement('ul', {}, ...tabs.map(Tab));

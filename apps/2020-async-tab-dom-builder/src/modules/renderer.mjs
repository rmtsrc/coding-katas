export const render = (element, container) => {
  container.innerHTML = '';
  container.appendChild(element);
};

export const createElement = (tagName, attrs, ...children) => {
  const el = document.createElement(tagName);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      el[key] = value;
    } else {
      el.setAttribute(key, value);
    }
  });

  children.forEach((child) => {
    if (typeof child === 'string') {
      el.textContent = child;
    } else {
      el.appendChild(child);
    }
  });

  return el;
};

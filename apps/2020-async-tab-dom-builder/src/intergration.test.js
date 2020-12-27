import { getByRole, getByText, waitFor } from '@testing-library/dom';

import { App } from '../src/modules/components/App.mjs';

describe('Rendering the page and navigation', () => {
  it('renders Tab 1 on page load', async () => {
    const app = await App();

    const tab1 = getByText(app, 'Tab 1');
    expect(tab1).toHaveClass('active');

    const tab2 = getByText(app, 'Tab 2');
    expect(tab2).not.toHaveClass('active');

    const content = getByRole(app, 'article');
    expect(content.textContent).toContain('Page 1');
  });

  it('navigates to Tab 2', async () => {
    const app = await App();
    document.body.appendChild(app);

    getByText(app, 'Tab 2').click();

    await waitFor(() => {
      const tab1 = getByText(app, 'Tab 1');
      expect(tab1).not.toHaveClass('active');

      const tab2 = getByText(app, 'Tab 2');
      expect(tab2).toHaveClass('active');

      const content = getByRole(app, 'article');
      expect(content.textContent).toContain('Page 2');
    });
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('window-top-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<window-top-toolbar></window-top-toolbar>');

    const element = await page.find('window-top-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});

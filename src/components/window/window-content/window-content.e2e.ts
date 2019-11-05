import { newE2EPage } from '@stencil/core/testing';

describe('window-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<window-content></window-content>');

    const element = await page.find('window-content');
    expect(element).toHaveClass('hydrated');
  });
});

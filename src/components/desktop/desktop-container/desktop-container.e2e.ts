import { newE2EPage } from '@stencil/core/testing';

describe('desktop-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<desktop-container></desktop-container>');

    const element = await page.find('desktop-container');
    expect(element).toHaveClass('hydrated');
  });
});

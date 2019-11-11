import { newE2EPage } from '@stencil/core/testing';

describe('desktop-top-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<desktop-top-menu></desktop-top-menu>');

    const element = await page.find('desktop-top-menu');
    expect(element).toHaveClass('hydrated');
  });
});

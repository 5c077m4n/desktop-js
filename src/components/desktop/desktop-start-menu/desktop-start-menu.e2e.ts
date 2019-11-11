import { newE2EPage } from '@stencil/core/testing';

describe('desktop-start-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<desktop-start-menu></desktop-start-menu>');

    const element = await page.find('desktop-start-menu');
    expect(element).toHaveClass('hydrated');
  });
});

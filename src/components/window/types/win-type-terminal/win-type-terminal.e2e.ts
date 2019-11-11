import { newE2EPage } from '@stencil/core/testing';

describe('win-type-terminal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<win-type-terminal></win-type-terminal>');

    const element = await page.find('win-type-terminal');
    expect(element).toHaveClass('hydrated');
  });
});

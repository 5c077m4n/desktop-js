import { newE2EPage } from '@stencil/core/testing';

describe('window-container', () => {
	it('renders', async () => {
		const page = await newE2EPage();
		await page.setContent('<window-container></window-container>');

		const element = await page.find('window-container');
		expect(element).toHaveClass('hydrated');
	});
});

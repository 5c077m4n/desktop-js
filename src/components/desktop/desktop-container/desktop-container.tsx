import { Component, Host, h, Element } from '@stencil/core';

@Component({
	tag: 'desktop-container',
	styleUrl: 'desktop-container.css',
	shadow: true,
})
export class DesktopContainer {
	@Element() el: HTMLElement;

	public toggleTheme(): void {
		this.el.toggleAttribute('data-dark-theme');
	}
	render() {
		return (
			<Host>
				<desktop-top-menu />
				<main class="windows-area">
					<window-container />
				</main>
				<desktop-start-menu />
			</Host>
		);
	}
}

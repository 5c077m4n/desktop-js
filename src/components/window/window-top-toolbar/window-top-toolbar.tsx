import { Component, Host, h } from '@stencil/core';

@Component({
	tag: 'window-top-toolbar',
	styleUrl: 'window-top-toolbar.css',
	shadow: true,
})
export class WindowTopToolbar {
	render() {
		return (
			<Host>
				<button>+</button>
				<div class="spacer" />
				<slot name="additional-buttons" />
				<button class="top-toolbar__btn minimize">-</button>
				<button class="top-toolbar__btn maximize">O</button>
				<button class="top-toolbar__btn close">X</button>
			</Host>
		);
	}
}

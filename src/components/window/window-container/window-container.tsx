import { Component, Host, h, Element } from '@stencil/core';
import Moveable from 'moveable';

@Component({
	tag: 'window-container',
	styleUrl: 'window-container.css',
	shadow: true,
})
export class WindowContainer {
	@Element() private el: HTMLElement;
	private moveable;

	componentDidLoad() {
		this.moveable = new Moveable(document.body, {
			target: this.el,
			container: this.el.parentElement,
			draggable: true,
			resizable: true,
			scalable: true,
			pinchable: true,
			origin: true,
		})
			.on('drag', ({ target, transform, left, top }) => {
				target.style.left = `${left}px`;
				target.style.top = `${top}px`;
				target.style.transform = transform;
			})
			.on('resize', ({ target, width, height, delta }) => {
				delta[0] && (target.style.width = `${width}px`);
				delta[1] && (target.style.height = `${height}px`);
			});
	}

	render() {
		return (
			<Host>
				<window-top-toolbar />
				<slot name="secondary-toolbar" />
				<window-main-content />
				<slot name="footer-content" />
			</Host>
		);
	}

	componentWillUnload() {
		this.moveable.destroy();
	}
}

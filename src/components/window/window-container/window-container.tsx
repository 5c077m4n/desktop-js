import { Component, Host, h, Element } from '@stencil/core';
import interact from 'interactjs';

@Component({
	tag: 'window-container',
	styleUrl: 'window-container.css',
	shadow: true,
})
export class WindowContainer {
	@Element() private el: HTMLElement;

	componentDidLoad() {
		interact(this.el)
			.draggable({
				modifiers: [
					interact.modifiers.restrictRect({
						restriction: 'parent',
						endOnly: true,
					}),
				],
			})
			.resizable({
				edges: { right: true, bottom: true },
				modifiers: [
					interact.modifiers.restrictEdges({
						outer: 'parent',
						endOnly: true,
					}),
					interact.modifiers.restrictSize({
						min: { width: 300, height: 150 },
					}),
				],
			})
			.on('dragmove', event => {
				const { target } = event;
				const position: DOMRect = target.getBoundingClientRect() as DOMRect;
				const x = position.x + event.dx;
				const y = position.y + event.dy;

				target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;
			})
			.on('resizemove', event => {
				const {
					x,
					y,
				} = event.target.getBoundingClientRect() as DOMRect;

				Object.assign(event.target.style, {
					width: `${event.rect.width}px`,
					height: `${event.rect.height}px`,
					transform: `translate(${x + event.deltaRect.left}px, ${y +
						event.deltaRect.top}px)`,
				});
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
}

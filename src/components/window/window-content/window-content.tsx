import { Component, Host, h, Prop } from '@stencil/core';

@Component({
	tag: 'window-content',
	styleUrl: 'window-content.css',
	shadow: true,
})
export class WindowContent {
	@Prop({ reflect: true }) public windowType: string;

	render() {
		switch (this.windowType) {
			case 'terminal':
				return <win-type-terminal />;
			default:
				return (
					<Host>
						<slot></slot>
					</Host>
				);
		}
	}
}

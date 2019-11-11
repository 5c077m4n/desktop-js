import { Component, Host, h, Element } from '@stencil/core';
import { Terminal } from 'xterm';

@Component({
	tag: 'win-type-terminal',
	styleUrl: 'win-type-terminal.css',
	shadow: true,
})
export class WinTypeTerminal {
	@Element() private el: HTMLElement;
	private term;

	async componentDidLoad() {
		this.term = new Terminal();
		this.term.open(this.el);
		this.term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
	}

	render() {
		return (
			<Host>
				<slot></slot>
			</Host>
		);
	}
}

import '@stencil/redux';
import { Component, Host, Element, Prop, State, h } from '@stencil/core';
import { Store, Unsubscribe } from '@stencil/redux';

import { openWindow, focusWindow, closeWindow } from '../../../store/actions/window';
import { WindowState } from '../../../interfaces';

@Component({
	tag: 'desktop-container',
	styleUrl: 'desktop-container.css',
	shadow: true,
})
export class DesktopContainer {
	@Element() private el: HTMLElement;
	private storeUnsubscribe: Unsubscribe;
	@Prop({ context: 'store' }) private store: Store;

	@State() public windowList: WindowState[];
	public openWindow: typeof openWindow;
	public focusWindow: typeof focusWindow;
	public closeWindow: typeof closeWindow;

	async componentWillLoad() {
		this.store.mapDispatchToProps(this, { openWindow, focusWindow, closeWindow });
		this.storeUnsubscribe = this.store.mapStateToProps(this, state => ({
			windowList: state.windowReducer.windowList,
		}));
	}

	public toggleTheme(): void {
		this.el.toggleAttribute('data-dark-theme');
	}

	render() {
		return (
			<Host>
				<desktop-top-menu />
				<main class="windows-area">
					{this.windowList.map(windowItem => (
						<window-container {...windowItem} />
					))}
				</main>
				<desktop-start-menu />
			</Host>
		);
	}

	componentDidUnload() {
		this.storeUnsubscribe();
	}
}

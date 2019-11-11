import { Component, Host, h, Prop } from '@stencil/core';
import { Unsubscribe } from 'redux';
import { Store } from '@stencil/redux';

import { openWindow } from '../../../store/actions/window';

@Component({
	tag: 'desktop-top-menu',
	styleUrl: 'desktop-top-menu.css',
	shadow: true,
})
export class DesktopTopMenu {
	@Prop({ context: 'store' }) private store: Store;
	private storeUnsubscribe: Unsubscribe;

	public openWindow: typeof openWindow;

	async componentWillLoad() {
		this.store.mapDispatchToProps(this, { openWindow });
		this.storeUnsubscribe = this.store.mapStateToProps(this, state => ({}));
	}

	render() {
		return (
			<Host>
				<button onClick={() => this.openWindow('terminal', 'terminal')}>+</button>
			</Host>
		);
	}

	componentDidUnload() {
		this.storeUnsubscribe();
	}
}

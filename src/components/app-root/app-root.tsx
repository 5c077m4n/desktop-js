import '@stencil/redux';
import { Component, Prop, Host, h } from '@stencil/core';
import { Store } from '@stencil/redux';
import { configureStore } from '../../store';

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.css',
	shadow: true,
})
export class AppRoot {
	@Prop({ context: 'store' }) public store: Store;

	async componentWillLoad() {
		this.store.setStore(configureStore({}));
	}

	render() {
		return (
			<Host>
				<desktop-container />
			</Host>
		);
	}
}

import { Component, Host, Prop, h } from '@stencil/core';
import { Store, Unsubscribe } from '@stencil/redux';

import { closeWindow } from '../../../store/actions/window';

@Component({
	tag: 'window-top-toolbar',
	styleUrl: 'window-top-toolbar.css',
	shadow: true,
})
export class WindowTopToolbar {
	@Prop({ context: 'store' }) private store: Store;
	private storeUnsubscribe: Unsubscribe;

	public closeWindow: typeof closeWindow;

	async componentWillLoad() {
		this.store.mapDispatchToProps(this, { closeWindow });
		this.storeUnsubscribe = this.store.mapStateToProps(this, state => ({}));
	}

	render() {
		return (
			<Host>
				<div class="spacer" />
				<slot name="additional-buttons" />
				<button class="top-toolbar__btn close">X</button>
			</Host>
		);
	}

	componentDidUnload() {
		this.storeUnsubscribe();
	}
}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'desktop-top-menu',
  styleUrl: 'desktop-top-menu.css',
  shadow: true
})
export class DesktopTopMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

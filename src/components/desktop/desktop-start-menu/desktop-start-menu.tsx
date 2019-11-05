import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'desktop-start-menu',
  styleUrl: 'desktop-start-menu.css',
  shadow: true
})
export class DesktopStartMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

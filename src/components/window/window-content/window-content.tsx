import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'window-content',
  styleUrl: 'window-content.css',
  shadow: true
})
export class WindowContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

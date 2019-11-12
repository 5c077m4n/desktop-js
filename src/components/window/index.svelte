<script>
	import { onMount } from 'svelte';

	export let id = undefined;
	export let type = undefined;
	export let name = undefined;

	let winRef;
	let terminalRef;

	onMount(async () => {
		const { Terminal } = await import('xterm');
		const Moveable = await import('moveable');
	});
</script>

<style>
	.window-container {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		align-items: stretch;
		align-content: stretch;
	}
</style>

<div class="window-container" bind:this={winRef}>
	<slot name="window-top-toolbar">
		<div class="window-top-toolbar">
			<p>{name}|</p>
			<p>{type}|</p>
			<p>{id}</p>
			<div class="spacer" />
			<button>X</button>
		</div>
	</slot>
	<slot name="window-secondary-toolbar" />
	<slot name="window-main-content">
		<div class="terminal-container" bind:this={terminalRef} />
	</slot>
	<slot name="window-bottom-toolbar" />
</div>

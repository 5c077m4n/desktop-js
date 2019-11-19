<script>
	import { onMount } from 'svelte';

	export let type = undefined;
	export let name = undefined;

	let winRef;
	let terminalRef;
	let Moveable;
	let scale = [1, 1];

	onMount(async () => {
		Moveable = await import('svelte-moveable');

		if (terminalRef) {
			const { Terminal } = await import('xterm');
			const { FitAddon } = await import('xterm-addon-fit');

			const xterm = new Terminal();
			const fitAddon = new FitAddon();

			xterm.loadAddon(fitAddon);
			xterm.open(terminalRef);
			fitAddon.fit();

			xterm.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
		}
	});
</script>

<style lang="scss">
	.window-container {
		height: 150px;
		width: 300px;

		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		align-items: stretch;
		align-content: center;

		border: 1px solid black;
	}
	.window-top-toolbar {
		& > * {
			height: 100%;
		}
		& > h4 {
			text-align: center;
		}

		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		align-items: stretch;
		align-content: stretch;
	}
	.window-main-content {
		height: 100%;
	}
</style>

<section class="window-container" bind:this={winRef}>
	<slot name="window-top-toolbar">
		<div class="window-top-toolbar">
			<h4 class="spacer">{name} | {type}</h4>
			<button>X</button>
		</div>
	</slot>
	<slot name="window-secondary-toolbar" />
	<div class="window-main-content">
		<slot name="window-main-content">
			<div class="terminal-container" bind:this={terminalRef} />
		</slot>
	</div>
	<slot name="window-bottom-toolbar" />
</section>

{#if Moveable}
	<Moveable
		{winRef}
		origin={true}
		edge={true}
		draggable={true}
		throttleDrag={0}
		on:drag={({ detail: { top, left } }) => {
			Object.assign(winRef.style, { top: `${top}px`, left: `${left}px` });
		}}
		keepRatio={true}
		renderDirections={['nw', 'ne', 'sw', 'se', 'n', 'w', 's', 'e']}
		resizable={true}
		throttleResize={0}
		on:resize={({ detail: { target, width, height, dist } }) => {
			Object.assign(winRef.style, {
				height: `${height}px`,
				width: `${width}px`,
			});
		}}
		scalable={true}
		throttleScale={0}
		on:scale={({ detail: { target, delta } }) => {
			scale[0] *= delta[0];
			scale[1] *= delta[1];
			target.style.transform = `scale(${scale[0]}, ${scale[1]})`;
		}}
		rotatable={false} />
{/if}

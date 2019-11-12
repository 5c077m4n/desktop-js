<script>
	import WindowEl from '../window/index.svelte';
	import { windowList } from '../../stores/windows';
</script>

<style>
	.desktop-container {
		height: 100%;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		align-items: stretch;
		align-content: stretch;
	}
</style>

<div class="desktop-container">
	<slot name="top-menu-bar" />
	<slot name="desktop-content">
		{#each $windowList as { id, type, name }, i (id)}
			<WindowEl {id} {type} {name} />
		{/each}
	</slot>
	<slot name="bottom-menu-bar" />
</div>

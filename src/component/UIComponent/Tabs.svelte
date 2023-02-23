<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let items: Array<string>;
	export let activeItem: string;

	const dispatch = createEventDispatcher();
</script>

<ul class="tw-flex tw-items-center tw-justify-center">
	{#each items as item (item)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class="tw-py-3 tw-px-10 tw-cursor-pointer tw-border-b tw-border-gray-300"
			class:active={item === activeItem}
			on:click={() => dispatch('changeTab', item)}
		>
			{item}
		</li>
	{/each}
</ul>

<style>
	.active {
		color: rebeccapurple;
		border-color: rebeccapurple;
	}
</style>

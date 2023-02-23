<script>
	export let className = '';
	export let showModal = false;
</script>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="tw-fixed tw-top-0 tw-left-0 tw-bg-black tw-bg-opacity-30 tw-w-full tw-h-full tw-z-50 tw-text-center tw-flex tw-justify-center tw-items-center"
		on:click|self
	>
		<div class="tw-bg-white tw-rounded-lg tw-w-1/2 tw-p-4 tw-mx-auto {className}">
			<slot />
		</div>
	</div>
{/if}

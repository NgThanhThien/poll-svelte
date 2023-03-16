<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import PollStore from '../../stores/PollsStore';
	import PollDetail from './PollDetail.svelte';
</script>

<div class="tw-space-y-8">
	{#each $PollStore as poll (poll.id)}
		<div in:fade out:scale|local animate:flip={{ duration: 500 }}>
			<PollDetail {poll} />
		</div>
	{:else}
		<div class="tw-text-center tw-mt-40">No poll</div>
	{/each}
</div>

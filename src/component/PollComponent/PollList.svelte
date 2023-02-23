<script lang="ts">
	import Modal from '../UIComponent/Modal.svelte';

	import { scale, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import PollStore, { deletePoll } from '../../stores/PollsStore';
	import PollDetail from './PollDetail.svelte';
	let showModal = false;
	let pollIsDeleted: any = {};
	const dPoll = (e: any) => {
		pollIsDeleted = e.detail;
		toggleModal();
	};
	const toggleModal = () => (showModal = !showModal);
</script>

<div class="tw-space-y-8">
	{#each $PollStore as poll (poll.id)}
		<div in:fade out:scale|local animate:flip={{ duration: 500 }}>
			<PollDetail {poll} on:deletePoll={dPoll} />
		</div>
	{/each}
</div>

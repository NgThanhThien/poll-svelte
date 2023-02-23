<script lang="ts">
	import { goto } from '$app/navigation';
	import { formatTime } from '$lib/helpers/moment';
	import { tweened } from 'svelte/motion';
	import { writable } from 'svelte/store';
	import Card from '../../../component/UIComponent/Card.svelte';
	import Modal from '../../../component/UIComponent/Modal.svelte';
	import type { PollModel } from '../../../shared/question';
	import { deletePoll, loadPolls, updateVote } from '../../../stores/PollsStore';

	export let data: PollModel;
	let showModal = false;
	const pollStore = writable<PollModel>(data);
	$: totalVote = $pollStore.voteA + $pollStore.voteB;
	$: widthA = Math.floor((100 * $pollStore.voteA) / totalVote) || 0;
	$: widthB = Math.floor((100 * $pollStore.voteB) / totalVote) || 0;
	let tweenedA = tweened(0);
	let tweenedB = tweened(0);
	$: tweenedA.set(widthA);
	$: tweenedB.set(widthB);
	const handleVote = async (option: string, id: number) => {
		pollStore.update((currentPoll) => {
			let copiedPoll = { ...currentPoll };
			if (option === 'a') copiedPoll.voteA++;
			if (option === 'b') copiedPoll.voteB++;
			const payload = { data: { voteA: copiedPoll.voteA, voteB: copiedPoll.voteB }, id };
			updateVote(payload);
			return copiedPoll;
		});
	};

	const toggleModal = () => (showModal = !showModal);
	const removePoll = async () => {
		if ($pollStore.id) {
			const data = await deletePoll($pollStore.id);
			if (!data.error) {
				loadPolls();
				goto('/');
				toggleModal();
			}
		}
	};
</script>

<section class=" tw-py-10 tw-min-h-80-screen tw-bg-gray-50">
	<div class="tw-w-7/12 tw-mx-auto">
		<div class="tw-flex tw-items-center tw-justify-between">
			<h1 class="tw-text-gray-700 tw-font-medium tw-text-2xl">{$pollStore.question}</h1>
			<button
				class="tw-px-2 tw-py-1 tw-text-white tw-bg-red-500 tw-rounded tw-text-xs"
				on:click={toggleModal}>Delete</button
			>
		</div>

		{#if $pollStore.description}
			<h2 class="tw-text-sm tw-text-gray-400 tw-mt-1">{$pollStore.description}</h2>
		{/if}
		<span class="tw-text-sm tw-text-gray-400 tw-mt-1">{formatTime($pollStore.created_at)}</span>
		<div class="tw-mt-10">
			<Card>
				<div>Total Vote: {totalVote}</div>
				<div class="tw-mt-4 tw-w-full tw-space-y-3">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="tw-w-full tw-bg-gray-100 tw-h-8 tw-relative hover:tw-opacity-70 tw-cursor-pointer tw-flex tw-items-center  tw-overflow-hidden tw-border-l-2 tw-border-indigo-800"
						on:click={() => handleVote('a', $pollStore.id)}
					>
						<div
							class="tw-absolute tw-h-full tw-bg-indigo-400 tw-bg-opacity-30 tw-w-1/2"
							style="width: {$tweenedA}%"
						/>
						<div class="tw-text-gray-700 tw-mx-2 tw-text-sm">
							{$pollStore.answerA} ({$pollStore.voteA})
						</div>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="tw-w-full tw-bg-gray-100 tw-h-8 tw-relative hover:tw-opacity-70 tw-cursor-pointer tw-flex tw-items-center tw-overflow-hidden tw-border-l-2 tw-border-purple-800"
						on:click={() => handleVote('b', $pollStore.id)}
					>
						<div
							class="tw-absolute tw-h-full tw-bg-purple-400 tw-bg-opacity-30"
							style="width: {$tweenedB}%"
						/>
						<div class="tw-text-gray-700 tw-mx-2 tw-text-sm">
							{$pollStore.answerB} ({$pollStore.voteB})
						</div>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>
<Modal {showModal} on:click={toggleModal} className="!tw-w-80">
	<div class="tw-text-center tw-py-8">
		<h3 class="tw-text-lg">Bạn chắc chắn muốn xóa</h3>
		<div class="tw-mt-6 tw-space-x-4">
			<button
				class="tw-text-white tw-bg-red-400 tw-rounded-lg tw-w-24 tw-py-2 tw-text-center"
				on:click={removePoll}>Xác nhận</button
			>
			<button
				class="tw-text-white tw-bg-green-400 tw-rounded-lg tw-w-24 tw-py-2 tw-text-center"
				on:click={toggleModal}>Hủy</button
			>
		</div>
	</div>
</Modal>

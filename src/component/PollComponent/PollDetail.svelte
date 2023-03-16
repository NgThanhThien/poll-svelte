<script lang="ts">
	import type { PollModel } from '../../shared/question';
	import Tag from '../UIComponent/Tag.svelte';
	import { timeFromNow } from '$lib/helpers/moment';
	import Card from '../UIComponent/Card.svelte';
	export let poll: PollModel = {
		question: '',
		id: 0,
		answerA: '',
		answerB: '',
		voteA: 0,
		voteB: 0,
		topic: '',
		type: '',
		created_at: '',
		description: ''
	};
	$: totalVote = poll.voteA + poll.voteB;
</script>

<a href="/poll/{poll.id}" class="tw-w-full tw-relative">
	<Card>
		<div
			class="tw-absolute tw-px-3 tw-py-1 tw-border tw-rounded-full tw--right-4 tw--top-4 tw-bg-white tw-border-indigo-500"
		>
			{totalVote} Vote
		</div>
		<div><Tag type={poll.type}>{poll.topic}</Tag></div>
		<h3 class="tw-text-lg tw-text-semibold tw-text-gray-700 tw-mt-4">{poll.question}</h3>
		<span class="tw-text-sm tw-text-gray-400">{timeFromNow(poll.created_at)}</span>
	</Card>
</a>

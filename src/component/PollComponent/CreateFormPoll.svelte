<script>
	import { createEventDispatcher } from 'svelte';
	import { addPoll } from '../../stores/PollsStore';
	let dispatch = createEventDispatcher();
	let fields = { question: '', answerA: '', answerB: '', description: '', type: '', topic: '' };
	let errors = { question: '', answerA: '', answerB: '', description: '', type: '', topic: '' };
	let valid = false;
	const submitPoll = async () => {
		valid = true;
		if (fields.question.trim().length < 5) {
			valid = false;
			errors.question = 'Question is too short';
		} else {
			valid = true;
			errors.question = '';
		}
		if (fields.answerA.trim().length < 1) {
			valid = false;
			errors.answerA = 'AnswerA is too short';
		} else {
			valid = true;
			errors.answerA = '';
		}
		if (fields.description.trim().length < 1) {
			valid = false;
			errors.description = 'Description is too short';
		} else {
			valid = true;
			errors.description = '';
		}
		if (fields.type.trim().length < 1) {
			valid = false;
			errors.type = 'Type is too short';
		} else {
			valid = true;
			errors.type = '';
		}
		if (fields.topic.trim().length < 1) {
			valid = false;
			errors.topic = 'Topic is too short';
		} else {
			valid = true;
			errors.topic = '';
		}
		if (fields.answerB.trim().length < 1) {
			valid = false;
			errors.answerB = 'AnswerB is too short';
		} else {
			valid = true;
			errors.answerB = '';
		}
		if (valid) {
			let poll = { ...fields, voteA: 0, voteB: 0 };
			const data = await addPoll(poll);
			dispatch('addPoll');
		}
	};
</script>

<div class="tw-text-xl tw-font-semibold">Create Poll</div>
<form class="tw-text-left tw-mt-4 tw-space-y-4" on:submit|preventDefault={submitPoll}>
	<div class="tw-space-y-2 tw-flex tw-flex-col">
		<label for="question">Poll question:</label>
		<input
			class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
			type="text"
			id="question"
			placeholder="Question"
			bind:value={fields.question}
		/>
		{#if errors.question}
			<span class="tw-text-red-400 tw-mt-1">{errors.question}</span>
		{/if}
	</div>
	<div class="tw-space-y-2 tw-flex tw-flex-col">
		<label for="question">Poll description:</label>
		<input
			class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
			type="text"
			id="question"
			placeholder="Description"
			bind:value={fields.description}
		/>
		{#if errors.description}
			<span class="tw-text-red-400 tw-mt-1">{errors.description}</span>
		{/if}
	</div>
	<div class="tw-grid tw-grid-cols-2 tw-gap-4">
		<div class="tw-space-y-2 tw-flex tw-flex-col">
			<label for="type">Poll type:</label>
			<select
				name="type"
				id="type"
				class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
				bind:value={fields.type}
			>
				<option value="primary">Primary</option>
				<option value="success">Success</option>
				<option value="warning">Warning</option>
				<option value="danger">Danger</option>
			</select>
			{#if errors.type}
				<span class="tw-text-red-400 tw-mt-1">{errors.type}</span>
			{/if}
		</div>
		<div class="tw-space-y-2 tw-flex tw-flex-col">
			<label for="topic">Poll topic:</label>
			<input
				class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
				type="text"
				id="topic"
				placeholder="topic"
				bind:value={fields.topic}
			/>
			{#if errors.topic}
				<span class="tw-text-red-400 tw-mt-1">{errors.topic}</span>
			{/if}
		</div>
	</div>

	<div class="tw-space-y-2 tw-flex tw-flex-col">
		<label for="answer-a">Answer A:</label>
		<input
			class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
			type="text"
			id="answer-a"
			placeholder="Answer A"
			bind:value={fields.answerA}
		/>
		{#if errors.answerA}
			<span class="tw-text-red-400 tw-mt-1">{errors.answerA}</span>
		{/if}
	</div>
	<div class="tw-space-y-2 tw-flex tw-flex-col">
		<label for="answer-b">Answer B:</label>
		<input
			class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
			type="text"
			id="answer-b"
			placeholder="Answer B"
			bind:value={fields.answerB}
		/>
		{#if errors.answerB}
			<span class="tw-text-red-400 tw-mt-1">{errors.answerB}</span>
		{/if}
	</div>
	<div class="tw-flex tw-justify-center">
		<button
			class="tw-border tw-px-10 tw-py-2 tw-overflow-hidden tw-rounded-sm tw-inline-block tw-text-center tw-w-40 hover:tw-bg-indigo-500 hover:tw-text-white tw-transition-all tw-duration-200"
			>Add poll</button
		>
	</div>
</form>

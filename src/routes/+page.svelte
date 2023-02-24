<script lang="ts">
	import PollList from '../component/PollComponent/PollList.svelte';
</script>

<svelte:head>
	<title>SpeedVote</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section class=" tw-py-10 tw-min-h-80-screen tw-bg-gray-50">
	<div class="tw-w-7/12 tw-mx-auto">
		<h1 class="tw-text-gray-700 tw-font-medium tw-text-2xl">Polls</h1>
		<h2 class="tw-text-sm tw-text-gray-400">Below are polls create by SpeedVote member</h2>
		<div class="tw-mt-10">
			<PollList />
		</div>
	</div>
</section>

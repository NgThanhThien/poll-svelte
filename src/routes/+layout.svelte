<script>
	import Header from '../component/Header.svelte';
	import Footer from '../component/Footer.svelte';
	import './styles.css';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import { goto } from '$app/navigation';
	import { getUser } from '../stores/UserStore';
	onMount(async () => {
		const { data } = await supabaseClient.auth.getSession();
		if (data.session) getUser();
		if (!data.session) {
			goto('/');
		}
	});
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
</style>

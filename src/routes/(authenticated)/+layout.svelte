<script>
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { data } = await supabaseClient.auth.getSession();
		if (data.session) return goto('/');
	});
</script>

<slot />

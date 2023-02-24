<script>
	import { logOut } from '../stores/UserStore';
	import Fa from 'svelte-fa';
	import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
</script>

<button class="tw-text-gray-500 hover:tw-text-purple-600" on:click={logOut}
	><Fa icon={faSignOutAlt} size="3xl" /></button
>

<script>
	import Header from '../component/Header.svelte';
	import Footer from '../component/Footer.svelte';
	import './styles.css';
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

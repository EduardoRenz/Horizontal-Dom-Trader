<script lang="ts">
	import Head from './components/Head.svelte'
	import Footer from './components/Footer.svelte'
</script>

<Head/>
<main>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<Footer/>
<style>
	main {
		grid-area: main;
	}
</style>
<script>
	import "bootstrap/dist/js/bootstrap.min.js";
	import "$lib/styles/custom.scss";
	import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />

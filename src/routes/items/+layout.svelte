<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Arcane Odyssey API</title>
	<meta name="title" content="Arcane Odyssey API" />
	<meta name="description" content="Unofficial Items API for Arcane Odyssey." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://api.arcaneodyssey.net/items" />
	<meta property="og:title" content="Arcane Odyssey API" />
	<meta property="og:description" content="Unofficial Items API for Arcane Odyssey." />
	<meta
		property="og:image"
		content="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/favicon.png"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://api.arcaneodyssey.net/items" />
	<meta property="twitter:title" content="Arcane Odyssey API" />
	<meta property="twitter:description" content="Unofficial Items API for Arcane Odyssey." />
	<meta
		property="twitter:image"
		content="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/favicon.png"
	/>

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

<section class="bg-zinc-800 overflow-auto app">
	<main><slot /></main>
	<Footer></Footer>
</section>

<style>
	.app {
		display: flex;
		width: 100%;
		flex-direction: column;
		min-height: 100vh;
	}
</style>

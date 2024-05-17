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
	<meta property="og:url" content="https://api.arcaneodyssey.net/" />
	<meta property="og:title" content="Arcane Odyssey API" />
	<meta property="og:description" content="Unofficial Items API for Arcane Odyssey." />
	<meta
		property="og:image"
		content="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/favicon.png"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://api.arcaneodyssey.net/" />
	<meta property="twitter:title" content="Arcane Odyssey API" />
	<meta property="twitter:description" content="Unofficial Items API for Arcane Odyssey." />
	<meta
		property="twitter:image"
		content="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/favicon.png"
	/>

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

<div class="app bg-zinc-800">
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

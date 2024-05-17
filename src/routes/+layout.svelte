<script>
	import '../app.css';
	import { isMobile } from '$lib/mobileStore';
	import { onMount } from 'svelte';

	function checkMobile() {
		console.log(window.innerWidth);
		if (window.innerWidth < 1072) {
			$isMobile = true;
			console.log($isMobile);
		} else {
			$isMobile = false;
			console.log($isMobile);
		}
	}

	//Test device width to check for mobile conditions in the html
	onMount(() => {
		// Make sure this only works in browser
		if (typeof window !== 'undefined') {
			checkMobile();
			window.addEventListener('resize', () => {
				checkMobile();
			});
		}
	});
</script>

<svelte:head>
	<!-- Google Fonts Link -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
		rel="stylesheet"
	/>

	<!-- Primary Meta Tags -->
	<title>Arcane Odyssey API</title>
	<meta name="title" content="Arcane Odyssey API" />
	<meta name="description" content="Unofficial Items API for Arcane Odyssey." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://metatags.io/" />
	<meta property="og:title" content="Arcane Odyssey API" />
	<meta property="og:description" content="Unofficial Items API for Arcane Odyssey." />
	<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://metatags.io/" />
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
</section>

<style>
	.app {
		display: flex;
		width: 100%;
		flex-direction: column;
		min-height: 100vh;
	}
</style>

<script>
	import NavGrid from '$lib/components/NavGrid.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { navigating } from '$app/stores';

	let ready = false;

	onMount(() => {
		ready = true;

		const testData = getDataFromAPI();
		console.log(testData);
	});

	async function getDataFromAPI() {
		try {
			const response = await fetch('https://api.arcaneodyssey.net/items');
			const json = await response.json();
			return json;
		} catch (error) {
			console.error(error);
		}
	}
</script>

{#if ready && !$navigating}
	<div
		in:fly={{ y: 20, duration: 1000 }}
		out:fly={{ y: 20, duration: 100 }}
		class="text-center justify-center items-center flex flex-col"
	>
		<img
			class=" w-96 h-96"
			src="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/favicon.png"
			alt="Arcane Odyssey API"
		/>
		<h1 class="text-white text-6xl mt-10" style="font-family: Merriweather;">Arcane Odyssey API</h1>
		<p class="text-white text-2xl mt-10 w-2/3">
			Welcome to the Arcane Odyssey API. This is an unofficial API and is not affiliated with Vetex
			Games, the creator of Arcane Odyssey. This api is mainly used to get the data for items used
			in <a href="https://tools.arcaneodyssey.net/"
				><span class="text-yellow-300">https://tools.arcaneodyssey.net</span></a
			>
		</p>
		<p class="text-white text-2xl mt-10 w-2/3">
			To get started click on any of the buttons below to get started on any of the available API
			endpoints or to navigate this website.
		</p>
		<NavGrid showHome={false} showText={true}></NavGrid>
	</div>
{:else}
	<div
		style="
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		"
		class="items-center justify-center flex flex-col"
	>
		<video
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 100 }}
			width="300px"
			height="300px"
			autoplay
			loop
		>
			<track kind="captions" />
			<source src="/loading.mp4" />
		</video>
	</div>
{/if}

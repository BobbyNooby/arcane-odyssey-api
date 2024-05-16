<script>
	import NavGrid from '$lib/components/NavGrid.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div
		in:fly={{ y: 20, duration: 1000 }}
		class="text-center justify-center items-center flex flex-col"
	>
		<img
			class=" w-96 h-96"
			src="https://raw.githubusercontent.com/BobbyNooby/AOGearBuilderImages/main/favicon.png"
			alt="Arcane Odyssey API"
		/>
		<h1 class="text-white text-6xl mt-10" style="font-family: Merriweather;">Arcane Odyssey API</h1>
		<p class="text-white text-2xl mt-10">
			Welcome to the Arcane Odyssey API. This is an unofficial API and is not affiliated with vetex
			games. This api is mainly used to get the data for items used in <a
				href="https://tools.arcaneodyssey.net/">https://tools.arcaneodyssey.net</a
			>
		</p>
		<p class="text-white text-2xl mt-10">
			To get started click on any of the buttons below to get started on any of the available API
			endpoints or to navigate this website.
		</p>
		<NavGrid showHome={false} showText={true}></NavGrid>
	</div>
{/if}

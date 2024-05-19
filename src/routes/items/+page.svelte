<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import { fly } from 'svelte/transition';
	import BlackButton from '$lib/components/BlackButton.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';

	export let data: PageData;

	let ready = false;

	onMount(() => {
		ready = true;
		console.log(data.allData);
	});

	function saveToJsonFile() {
		const now = new Date();
		const fileName = `AOToolsItems_${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${now.getHours()}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}.json`;
		const json = data.allData;
		const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.download = fileName;
		document.body.appendChild(a);
		a.click();
		URL.revokeObjectURL(url);
	}
</script>

{#if ready}
	<div
		in:fly={{ y: 20, duration: 1000 }}
		class="text-center justify-center items-center flex flex-col w-full"
	>
		<h1 class="text-white text-6xl mt-32" style="font-family: Merriweather;">/items</h1>
		<p class="text-white text-2xl mt-10 w-2/3">
			This endpoint returns a single json collection with data for all the items used in Arcane
			Odyssey Tools. Currently, the data includes data for accessories, chestplates, pants, gems,
			enchants, modifiers, cannons, deckhands, hull armors, quartermsters, rams, sail materials,
			ship crews, ships, and siege weapons.
		</p>
		<p class="text-white text-2xl my-5 w-1/2">
			This API endpoint only accepts GET HTTP requests. Upon receiving a GET request, the API will
			return the JSON for all the items in the database.
		</p>
		<p class="text-white text-2xl my-5 w-1/2">
			If you would like to save all the item data to a JSON file, click the button below.
		</p>
		<BlackButton parentText="Download All Items" parentFunction={() => saveToJsonFile()}
		></BlackButton>

		<p class="text-white text-2xl mt-10">
			If you would like to implement the data in your website, shown below is are examples of what
			the code / response should look like.
		</p>

		<p class="text-white text-2xl mt-10">Sample Code (JavaScript)</p>
		<CodeBlock
			code={`async function getDataFromAPI() {
				try {
					const response = await fetch('https://api.arcaneodyssey.net/items', { method: 'GET' });
					const json = await response.json();
					return json;
				} catch (error) {
					console.error(error);
					return null;
				}
			}`}
			language={'javascript'}
			tailwindcss="text-md"
			isOverflow={false}
		></CodeBlock>

		<p class="text-white text-2xl">Sample Response</p>

		<CodeBlock
			code={JSON.stringify(data.randomData, null, 2)}
			language={'json'}
			tailwindcss="text-xs w-2/3 mx-5"
			isOverflow={true}
		></CodeBlock>
		<div class=" mb-36"></div>
	</div>
{/if}

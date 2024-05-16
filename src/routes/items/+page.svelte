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
	});

	async function getDataFromAPI() {
		try {
			const response = await fetch('https://api.arcaneodyssey.net/items');
			const json = await response.json();
			return json;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
	function saveToJsonFile() {
		const now = new Date();
		const fileName = `AOToolsItems_${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${now.getHours()}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}.json`;
		const json = data.data;
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
			Odyssey Tools. Currently, the data includes data for accessories, chestpaltes, pants, gems,
			enchants, modifiers, cannons, deckhands, hull armors, quartermsters, rams, sail materials,
			ship crews, ships, and siege weapons.
		</p>
		<p class="text-white text-2xl mt-10">
			This API endpoint only accepts GET HTTP requests. Upon receiving a GET request, the API will
			return the JSON for all the items in the database.
		</p>
		<BlackButton parentText="Save To JSON File" parentFunction={() => saveToJsonFile()}
		></BlackButton>

		<CodeBlock
			code={async function getDataFromAPI() {
				try {
					const response = await fetch('https://api.arcaneodyssey.net/items');
					const json = await response.json();
					return json;
				} catch (error) {
					console.error(error);
					return null;
				}
			}}
			language={'javascript'}
		></CodeBlock>

		<CodeBlock code={JSON.stringify(data.data, null, 2)} language={'json'}></CodeBlock>

		<div>
			<pre><code class="language-" lang="json">
		{JSON.stringify(data.data, null, 2)}
		</code>
		</pre>
		</div>
	</div>
{/if}

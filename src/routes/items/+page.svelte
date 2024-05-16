<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import { fly } from 'svelte/transition';
	import BlackButton from '$lib/components/BlackButton.svelte';

	export let data: PageData;

	let ready = false;

	onMount(() => {
		ready = true;
	});

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
		class="text-center justify-center items-center flex flex-col"
	>
		<h1 class="text-white text-6xl mt-32" style="font-family: Merriweather;">/items</h1>
		<p class="text-white text-2xl mt-10 w-2/3">
			This endpoint returns a single json collection with data for all the items used in Arcane
			Odyssey Tools. Currently, the data includes data for accessories, chestpaltes, pants, gems,
			enchants, modifiers, cannons, deckhands, hull armors, quartermsters, rams, sail materials,
			ship crews, ships, and siege weapons.
		</p>
		<p class="text-white text-2xl mt-10">
			To get started click on any of the buttons below to get started on any of the available API
			endpoints or to navigate this website.
		</p>
		<BlackButton parentText="Save To JSON File" parentFunction={() => saveToJsonFile()}
		></BlackButton>
		<div>
			<pre><code class="json text-white" lang="json">
		{JSON.stringify(data.data, null, 2)}
		</code>
		</pre>
		</div>
	</div>
{/if}

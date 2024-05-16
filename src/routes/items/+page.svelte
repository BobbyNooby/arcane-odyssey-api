<script lang="ts">
	import { onMount } from 'svelte';

	interface Item {
		id: number;
		name: string;
		description: string;
	}

	type DatabaseJSON = Array<any>;

	let databaseJSON: DatabaseJSON;
	onMount(() => {
		getData();
	});

	async function getData() {
		const response = await fetch('/items');
		databaseJSON = (await response.json()) as DatabaseJSON;
	}
</script>

<pre><code class="json" lang="json">
{JSON.stringify(databaseJSON, null, 2)}
</code>
</pre>

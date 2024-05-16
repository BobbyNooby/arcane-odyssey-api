<script lang="ts">
	import Prism from 'prismjs/prism.js'; // Import Prism.js
	import 'prismjs/themes/prism-okaidia.css'; // Import Prism.js CSS theme
	import { onMount } from 'svelte';

	export let code;
	export let language;

	onMount(() => {
		Prism.highlightAll();
	});

	// Ensure syntax highlighting is applied whenever code or language changes
	$: {
		Prism.highlightAll();
	}
</script>

<div class="rounded border-white border max-w-full flex">
	<pre><code class="language-{language}">{code}</code></pre>
</div>

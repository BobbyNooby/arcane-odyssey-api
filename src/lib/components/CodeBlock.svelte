<script lang="ts">
	import Prism from 'prismjs'; // Import Prism.js
	import 'prismjs/themes/prism-okaidia.css'; // Import Prism.js CSS theme
	import { onMount } from 'svelte';

	export let code, language, tailwindcss, isOverflow: boolean;

	onMount(() => {
		Prism.highlightAll();
	});

	// Ensure syntax highlighting is applied whenever code or language changes
	$: {
		Prism.highlightAll();
	}
</script>

<div
	class="rounded border-white border-2 w-auto max-w-full my-5 {tailwindcss} {isOverflow
		? 'overflow-auto'
		: ''}"
	style={isOverflow ? ' max-height: 700px' : ''}
>
	<pre class="pre-container"><code class="language-{language}">{code}</code></pre>
</div>

<!-- <div class="rounded border-white border max-w-full flex">
	<pre><code class="language-{language}">{code}</code></pre>
</div> -->
<style>
	.pre-container {
		padding: 1em;
		white-space: pre-wrap; /* Preserve formatting and wrap long lines */
	}
</style>

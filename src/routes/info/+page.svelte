<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';

	let ready = false;
	let menuIsActive = false;

	onMount(() => {
		ready = true;
	});
</script>

<section>
	{#if ready && !$navigating}
		<ul class="items-center justify-center flex flex-col">
			<p
				class=" text-7xl font-medium text-gray-300 text-center p-4"
				style="font-family: Merriweather;"
				in:fade={{ duration: 1000 }}
				out:fade={{ duration: 100 }}
			>
				Info
			</p>

			<li class="p-4">
				<button
					class=" border border-slate-300 bg-gray-900 hover:bg-gray-800 px-4 py-2 flex items-center text-xl font-medium text-gray-300 text-center rounded-lg"
					style="font-family: Merriweather;"
					in:fade={{ duration: 300 }}
					out:fade={{ duration: 100 }}
					on:click={() => {
						window.open('https://github.com/BobbyNooby/arcane-odyssey-api/');
					}}
				>
					Source Code
				</button>
			</li>

			<li class="p-4">
				<button
					class=" border border-slate-300 bg-gray-900 hover:bg-gray-800 px-4 py-2 flex items-center text-xl font-medium text-gray-300 text-center rounded-lg"
					style="font-family: Merriweather;"
					in:fade={{ duration: 300 }}
					out:fade={{ duration: 100 }}
					on:click={() => {
						window.open('https://discord.gg/wuczy67us7');
					}}
				>
					Discord Server
				</button>
			</li>
		</ul>
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
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>

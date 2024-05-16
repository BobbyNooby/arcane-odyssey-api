<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { navigating, page } from '$app/stores';
	import { goto } from '$app/navigation';
	export let showHome: boolean, showText: boolean;

	const navLinks = {
		home: {
			route: '/',
			svgPath: `<path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path>`,
			descText: 'Home'
		},
		gearBuilder: {
			route: '/items',
			svgPath: `
			<path d="M4 5H20V3H4V5ZM20 9H4V7H20V9ZM3 11H10V13H14V11H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V11ZM16 13V15H8V13H5V19H19V13H16Z"></path>	`,
			descText: '/items'
		},
		info: {
			route: '/info',
			svgPath: `<path
								d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
							/>`,
			descText: 'Extra Info'
		}
	};

	function navigateToUrl(url: string) {
		goto(url);
	}
</script>

{#if !$navigating}
	<div>
		<div
			class="flex flex-row p-4 z-50"
			in:fly={{ y: 20, duration: 300 }}
			out:fade={{ duration: 100 }}
		>
			{#each Object.keys(navLinks) as navKey}
				<!-- svelte-ignore a11y-missing-attribute -->
				{#if showHome && navKey == 'home'}<a
						aria-current={$page.url.pathname === navLinks[navKey].route}
						class="flex items-center justify-center"
					>
						<button
							on:click={() => {
								const currentRoute = location.pathname;
								console.log(location.pathname);
								const navLinkRoute = navLinks[navKey].route;
								if (currentRoute !== navLinkRoute) {
									navigateToUrl(navLinks[navKey].route);
								}
							}}
							class="border border-slate-300 bg-gray-900 hover:bg-gray-800 fill-slate-300 px-2 py-2 rounded-lg flex flex-col items-center justify-center"
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
								>{@html `${navLinks[navKey].svgPath}`}</svg
							>
							{#if showText}
								<p class="px-2 text-slate-300 text-xl font-bold" style="text-decoration: none;">
									{navLinks[navKey].descText}
								</p>
							{/if}
						</button>
					</a>{:else if navKey != 'home'}
					<a
						aria-current={$page.url.pathname === navLinks[navKey].route}
						class="flex items-center justify-center"
					>
						<button
							on:click={() => {
								const currentRoute = location.pathname;
								console.log(location.pathname);
								const navLinkRoute = navLinks[navKey].route;
								if (currentRoute !== navLinkRoute) {
									navigateToUrl(navLinks[navKey].route);
								}
							}}
							class="border border-slate-300 bg-gray-900 hover:bg-gray-800 fill-slate-300 px-2 py-2 rounded-lg flex flex-col items-center justify-center"
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
								>{@html `${navLinks[navKey].svgPath}`}</svg
							>
							{#if showText}
								<p class="px-2 text-slate-300 text-xl font-bold" style="text-decoration: none;">
									{navLinks[navKey].descText}
								</p>
							{/if}
						</button>
					</a>
				{/if}
			{/each}
		</div>
	</div>
{/if}

<style>
	svg {
		width: 3em;
		height: 3em;
	}

	a {
		font-family: 'Merriweather';
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

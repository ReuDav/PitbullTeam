<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { setupI18n } from '../lib/i18n';
	import "../app.css";
	import NavBar from './../components/NavBar.svelte';

	let ready = false;

	onMount(async () => {
		await setupI18n();

		const storedLocale = localStorage.getItem('user-locale');
		const currentPath = $page.url.pathname;
		const segments = currentPath.split('/').filter(Boolean);
		const firstSegment = segments[0];

		// ellenőrizzük, van-e prefix
		const isValidLocale = firstSegment === 'hu' || firstSegment === 'en' || firstSegment === 'assets';

		// ha nincs prefix vagy rootban vagy, irányítsuk át
		if (!isValidLocale) {
			const locale = storedLocale || 'hu';
			goto(`/${locale}`);
			return;
		}

		ready = true;
	});
</script>

{#if ready}
	<NavBar />
	<slot />
{/if}

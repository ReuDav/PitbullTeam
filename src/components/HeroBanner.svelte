<script lang="ts">
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";
	import { goto } from "$app/navigation";

	function goToTrain() {
		goto(`/${$locale}/${$_("links.contact")}`);
	}

	function goToTrainers() {
		goto(`/${$locale}/${$_("links.trainers")}`);
	}
</script>

<main class="relative h-[calc(100vh-100px)] overflow-hidden">
	<!-- 🎥 Háttérvideó -->
	<video
		src="src\lib\assets\videos\hero.webm#t=10"
		autoplay
		muted
		loop
		playsinline
		class="absolute inset-0 w-full h-full object-cover"
	></video> 

	<!-- 🖤 Sötét overlay a jobb olvashatóságért -->
	<div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

	<!-- 🧾 Szöveg és gombok -->
	<section
		class="relative z-10 text-center text-white h-full grid place-content-center container"
	>
		<div>
			<h1 class="md:text-5xl text-3xl mb-4 font-bold">{$_("hero.title")}</h1>
			<h2 class="md:text-4xl text-2xl mb-4">{$_("hero.subtitle")}</h2>
			<p class="md:text-2xl text-xl mb-8 max-w-3xl mx-auto">
				{$_("hero.text")}
			</p>
		</div>

		<div>
			<button
				on:click={goToTrain}
				class="p-4 text-xl w-56 md:mr-4 mb-4 bg-yellow-400 font-semibold rounded-md cursor-pointer hover:bg-yellow-300 transition"
			>
				{$_("hero.cta_train")}
			</button>

			<button
				on:click={goToTrainers}
				class="p-4 text-xl w-56 bg-gray-600 rounded-md cursor-pointer hover:bg-gray-500 transition"
			>
				{$_("hero.cta_trainers")}
			</button>
		</div>
	</section>
</main>

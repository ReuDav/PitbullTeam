<script lang="ts">
  import { _ } from "svelte-i18n";
  import { locale } from "svelte-i18n";
  import { Hamburger } from "svelte-hamburgers";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let open = false;

  // 🔁 párosítás a magyar és angol slugok között
  const slugMap = {
    hu: {
      galeria: "gallery",
      kapcsolat: "contact",
      edzok: "trainers",
      edzo: "trainer"
    },
    en: {
      gallery: "galeria",
      contact: "kapcsolat",
      trainers: "edzok",
      trainer: "edzo"
    }
  };

  function switchLocale() {
    const current = $locale;
    const next = current === "hu" ? "en" : "hu";

    const path = $page.url.pathname;
    const segments = path.split("/").filter(Boolean);

    // Ha nincs prefix, default legyen a hu
    const currentLocale = segments[0] === "en" || segments[0] === "hu" ? segments[0] : "hu";
    const rest = segments.slice(1);

    // slug fordítás
    const translated = rest.map((seg) => slugMap[currentLocale]?.[seg] || seg);
    const newPath = `/${next}${translated.length ? "/" + translated.join("/") : ""}`;

    // új nyelv beállítása és átirányítás
    $locale = next;
    goto(newPath);
  }
</script>

<header class="flex items-center p-4 justify-between h-[100px]">
  <a href="/{$locale}" class="w-20">
    <img
      src="https://www.pitbullteam.hu/assets/PitbullLogo-DoTHi51I.svg"
      alt="Logo"
    />
  </a>

  <!-- Menü -->
  <div
    id="grid"
    class="grid md:grid-rows-[1fr] grid-rows-[0fr] md:static absolute z-50 md:top-0 top-[100px] left-0 w-full transition-[grid-template-rows] duration-500 ease-in-out"
    class:grid-rows-[1fr]={open}
  >
    <div class="grid-inner bg-white md:bg-transparent md:p-0">
      <nav class="flex flex-col md:flex-row items-center justify-between gap-6 p-4  w-full">
        <ul class="flex flex-col md:flex-row items-center gap-6 w-full justify-end text-lg font-medium">
          <li><a href="/{$locale}">{$_("navbar.home")}</a></li>
          <li><a href="/{$locale}/{$_("links.trainers")}">{$_("navbar.trainers")}</a></li>
          <li><a href="/{$locale}/{$_("links.gallery")}">{$_("navbar.gallery")}</a></li>
          <li><a href="/{$locale}/{$_("links.contact")}">{$_("navbar.contact")}</a></li>
        </ul>

        <!-- 🌍 Nyelvváltó gomb -->
        <button
          class="p-2 text-2xl rounded hover:scale-110 transition-transform"
          on:click={switchLocale}
          aria-label="Change language"
        >
          {#if $locale === "hu"}🇬🇧{/if}
          {#if $locale === "en"}🇭🇺{/if}
        </button>
      </nav>
    </div>
  </div>

  <!-- Hamburger ikon -->
  <div class="md:hidden relative z-50">
    <Hamburger bind:open type="collapse" title="Toggle menu" />
  </div>
</header>

<style>
  .grid-inner {
    overflow: hidden;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
</style>

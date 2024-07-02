<script>
    import "../app.css"
    import Logo from "../assets/PitbullLogo.svg"

    let opened = false;
    let subOpened = false;
    const toggleMenu = () => {
        opened = !opened;
        console.log(opened)
        return opened;
    }

    const toggleSubMenu = () => {
        subOpened = !subOpened;
        console.log(subOpened)
        return subOpened;
    }
</script>

<nav class="bg-transparent PITBULL-FONT z-20 fixed w-full flex items-center justify-between px-4 py-2 h-[100px]">
    <a class="flex items-center gap-2.5 relative z-30" href="/static" id="Logo">
        <img alt="" class="size-20" src={Logo}>
        <p class="text-yellow text-3xl h-fit leading-1 md:block hidden TEXT-OUTLINE">PITBULL TEAM</p>
    </a>

    <div
            class={`GRID md:static absolute md:w-fit w-full left-0 top-0 md:top-[100px] transition-all duration-500 md:h-fit bg-inherit ${opened ? "OPENED z-20" : "!grid-rows-1 bg-transparent"}`}>
        <div class={`overflow-hidden flex items-center justify-center w-full transition-all duration-500 md:bg-transparent bg-black/70 md:h-fit ${opened ? "h-screen" : "h-0"}`}>
            <ul class="text-white flex md:flex-row items-center flex-col text-center md:gap-4 gap-8 md:text-base text-xl leading-1 w-full uppercase">
                <li>
                    <div class="md:w-auto w-screen text-slate-100">
                        <button class=" max-h-10 px-2 md:py-2 w-full block TEXT-OUTLINE" href="#Edzok" on:click={toggleSubMenu}>
                            EDZŐK
                        </button>
                        <div
                                class={`GRID bg-inherit md:absolute z-30 top-20 md:w-40 right-80 ${subOpened ? "OPENED" : "grid-rows-1"}`}>
                            <div class="overflow-hidden ">
                                <li class="flex items-center max-h-20"><a on:click={() => opened = false} class="px-2 py-4 pt-6 w-full block TEXT-OUTLINE"
                                                                          href="#Béla">Béla</a></li>
                                <li class="flex items-center max-h-20"><a
                                        on:click={() => opened = false} class="px-2 py-4 w-full block TEXT-OUTLINE" href="#Kami">Kami</a></li>
                                <li class="flex items-center max-h-20"><a on:click={() => opened = false} class="px-2 py-4 w-full block TEXT-OUTLINE"
                                                                          href="#Sosi">Sosi</a></li>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex items-center max-h-10"><a on:click={() => opened = false} class="px-2 md:py-2 w-full block TEXT-OUTLINE" href="#Galeria">Galéria</a></li>
                <li class="flex items-center max-h-10"><a on:click={() => opened = false} class="px-2 md:py-2 w-full block TEXT-OUTLINE" href="#Kapcsolat">Kapcsolat</a></li>
                <li class="flex items-center max-h-10"><a on:click={() => opened = false} class="px-2 md:py-2 w-full block TEXT-OUTLINE" href="#Gyik">GY.I.K</a></li>
            </ul>
        </div>
    </div>

    <button class="md:hidden relative z-30 text-white text-[40px] md:bg-transparent bg-yellow/50 size-16 rounded-xl transition-all duration-500"
            on:click={toggleMenu}>
        <span class={`bg-slate-100 absolute transition-all duration-500 h-1 left-4 top-5 w-8 block rounded-xl ${opened ? "!top-8 rotate-[45deg]" : ""}`}></span>
        <span class={`bg-slate-100 absolute inset-y-auto transition-all duration-500 h-1 left-4 w-8 block rounded-xl ${opened ? "!bg-transparent" : ""}`}></span>
        <span class={`bg-slate-100 absolute transition-all duration-500 h-1 left-4 bottom-4 w-8 block rounded-xl ${opened ? "!bottom-7 rotate-[135deg]" : ""}`}></span>
    </button>
</nav>

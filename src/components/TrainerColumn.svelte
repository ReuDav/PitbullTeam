<script>
    import Carousel from "svelte-carousel"
    export let name = '';
    export let image = [];
    export let content = '';
    export let phone = '';
    export let time = '';
    function formatPhoneNumber(phone) {
        if (!phone) return '';
        return `${phone.slice(0, 2)} ${phone.slice(2, 4)} ${phone.slice(4, 7)}-${phone.slice(7)}`;
    }
</script>

<div class="lg:w-1/3 mt-8 bg-yellow text-slate-800 rounded-xl max-h-fit h-fit" id={name}>
    <div class="flex flex-col">
        <div class="text-center p-4">
            <h3 class="text-2xl leading-1">{name}</h3>
        </div>
        {#if image.length > 1}
            <Carousel
                    arrows={false}
                    pauseOnFocus={true}
                    swiping={true}
                    initialPageIndex={0}
                    infinite={true}>
                {#each image as img}
                    <img src={img} alt={name} class="h-full object-cover">
                {/each}
            </Carousel>
        {/if}
        {#if image.length === 1}
            {#each image as img}
                <img src={img} alt={name} class="h-full object-cover">
            {/each}
        {/if}
        <div class="font-sans font-semibold p-2 flex flex-col gap-6">
            <p class="text-lg leading-[24px]">
                {content}
            </p>
            <button class="block mx-auto rounded-xl bg-slate-800 text-slate-100 p-4 md:max-w-80 w-full">
                <a href={`tel:${phone}`}>{formatPhoneNumber(phone)}</a>
            </button>
            <small class="text-base leading-[24px] text-center">
                {time}
            </small>
        </div>
    </div>
</div>
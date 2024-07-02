<script>
    import 'material-icons/iconfont/outlined.css';

    export let isOpen;
    export let question;
    export let answer;
    export let toggle;

    function handleClick(e) {
        e.preventDefault();
        toggle();
    }
</script>

<button type="button" on:click={handleClick} class="md:w-3/4 w-full p-2 my-2 block mx-auto PITBULL-FONT">
    <div class="text-left flex items-center justify-between p-4 border-b-2 border-yellow">
        <div>{question}</div>
        <div class={`transition-transform duration-500 rotate-45 ${isOpen ? "OPENED rotate-0" : ""}`}>
            <span class="material-icons-outlined">close</span>
        </div>
    </div>
    <div class={`GRID ${isOpen ? "OPENED" : ""}`}>
        <div class="overflow-hidden bg-slate-100 rounded-b-3xl">
            <p class="text-left p-6 !font-light"> - {answer}</p>
        </div>
    </div>
</button>

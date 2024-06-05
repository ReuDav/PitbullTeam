<script>
    import 'material-icons/iconfont/outlined.css'

    let open = false

    function toggle() {
        open = !open;
    }

    export let question;
    export let answer;
</script>

<button type="button" on:click={() => open = !open} class="md:w-3/4 w-full p-2 block mx-auto">
    <div class="text-left flex items-center justify-between p-4 border-b-2 border-yellow">
        <div>{question}</div>
        <div class={`transition-transform duration-500 rotate-45 ${open ? "OPENED rotate-0" : ""}`}>
            <span class="material-icons-outlined">close</span>
        </div>
    </div>
    <div class={`GRID ${open ? "OPENED" : ""}`}>
        <div class="overflow-hidden">
            <p class="text-left p-4"> - {answer}</p>
        </div>
    </div>
</button>
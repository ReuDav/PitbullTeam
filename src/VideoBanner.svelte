<script>
    import "./app.css"
    import Video from "./assets/MenniElore.mp4"
</script>
<div class="relative max-h-screen">
    <div class="absolute inset-0 h-full backdrop-blur-md z-10">
        <div class="relative w-full h-full">
            <div class="absolute md:inset-20 inset-4 flex flex-col justify-between text-center bg-black/50 rounded-xl z-30 md:top-40 top-40 PITBULL-FONT xl:p-20 md:p-10 p-5">
                <h1 class="text-yellow text-5xl text-center">PITBULL TEAM SOROKSÁR SE.</h1>
                <div class="w-full text-center">
                    <q class="text-slate-100 text-3xl">Ahol az igazi bajnokok és férfiak születnek</q>
                </div>
                <h2 class="text-slate-100 text-2xl">Cím: Soroksár, Vízisport út 33.</h2>
                <div class="flex md:flex-row flex-col gap-4 justify-center">
                    <a href="#Kapcsolat" class="bg-yellow/90 p-4 md:w-40 block rounded-xl cursor-pointer" >Kapcsolat</a>
                    <a href="#Edzők" class="bg-yellow/90 p-4 md:w-40 block rounded-xl cursor-pointer" >Edzők</a>
                </div>
            </div>
        </div>
    </div>
    <video src={`${Video}#t=9`} muted autoplay preload="auto" loop class="w-full h-screen object-cover"></video>
</div>

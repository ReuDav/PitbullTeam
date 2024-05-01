<script>
    import Carousel from "svelte-carousel"
    import Kami1 from "./assets/Kami/Kami-1.jpg"
    import Kami2 from "./assets/Kami/Kami-2.jpg"
    import Kami3 from "./assets/Kami/Kami-3.jpg"
    import Kami4 from "./assets/Kami/Kami-4.jpg"
    import Kami5 from "./assets/Kami/Kami-5.jpg"

    import Bela from "./assets/Bela/Bela.jpg"

    import Sosi from "./assets/Sosi/Sosi.jpg"
</script>

<section class="flex xl:flex-row xl:gap-4 mx-4 flex-col PITBULL-FONT">
    <div class="xl:w-1/3 mt-8 bg-yellow text-slate-800 rounded-xl">
        <div class="grid grid-rows-[60px_4fr_1fr] h-full">
            <div class="text-center p-4">
                <h3 class="text-2xl leading-1">Sándor Béla</h3>
            </div>
            <img src={Bela} alt="Béla" class="w-full h-full object-cover">
            <div class="POPPINS-FONT font-semibold p-2 flex flex-col justify-between gap-4">
                <p class="text-lg leading-[24px]">
                    Kick-Box,ökölvívás,Thai-box,MMA-ban szerzett tapasztalatait
                    adja át a növendékeknek,versenyre készülőknek.
                    WFC K-1,és WPK Low-kick öv birtokosa,és sok sok hazai és nemzetközi
                    mérkőzés van a háta mögött.
                </p>
                <small class="text-base leading-[24px] text-center">
                    Edzések .H.-P.18:00-19:30-ig
                </small>

            </div>
        </div>
    </div>
    <div class="xl:w-1/3 mt-4 h-full">
        <div class="bg-black/90 text-slate-100 rounded-xl">
            <div class="  text-center p-4 ">
                <h3 class="text-2xl leading-1">Kovács Kálmán</h3>
            </div>
            <div>
                <Carousel
                        arrows={false}
                        pauseOnFocus={true}
                        swiping={true}
                        initialPageIndex={0}
                        infinite={true}
                >
                    <img src={Kami1} alt="Kami1" class="w-full h-full object-cover">
                    <img src={Kami2} alt="Kami2" class="w-full h-full object-cover">
                    <img src={Kami3} alt="Kami3" class="w-full h-full object-cover">
                    <img src={Kami4} alt="Kami4" class="w-full h-full object-cover">
                    <img src={Kami5} alt="Kami5" class="w-full h-full object-cover">
                </Carousel>
            </div>
            <div class="POPPINS-FONT font-semibold p-2 flex flex-col justify-between gap-4">
                <p>MMA-ban,K.-3 -ban és Kempoban versenyzett ,sok sok mérkőzésen van túl idehaza és külföldön
                    egyaránt,többek között bírtokosa az Ózdon megrendezett Spartan gála,Profi MMA ban megszerzet bajnoki
                    övnek.
                    Edzési főleg erőnléti,és küzdelmi jellegűek.</p>
                <small class="text-base leading-[24px] text-center">Edzések déli ,kora délutáni időpontokban ,csoportosan előre egyeztetett időpontokban</small>
            </div>
        </div>
    </div>
    <div class="xl:w-1/3 mt-8 bg-yellow text-slate-800 rounded-xl">
        <div class="grid grid-rows-[60px_4fr_1fr] h-full">
            <div class="text-center p-4">
                <h3 class="text-2xl leading-1">Soós István</h3>
            </div>
            <img src={Sosi} alt="Sosi" class="w-full object-cover">
            <div class="POPPINS-FONT font-semibold p-2 flex flex-col justify-between gap-4">
                <p class="text-lg leading-[24px]">Az Ő világa a birkózó szőnyeg,régóta a "szakmában"van.
                    Sosi többszörös Országos és Magyar bajnok több súlycsoportban
                    és minden korosztályban,és veteránként is elnyerte a magyar bajnoki címet.
                    Edzésein a földharc és birkó elemeit vezeti át az MMA-ra.</p>
                <small class="text-base leading-[24px] text-center">Edzései minden csütörtökön 18:00-19:30</small>
            </div>
        </div>
    </div>
</section>

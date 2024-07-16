<script>
    import Kami1 from "../assets/Kami/Kami-1.jpg"
    import Kami2 from "../assets/Kami/Kami-2.jpg"
    import Kami3 from "../assets/Kami/Kami-3.jpg"
    import Kami4 from "../assets/Kami/Kami-4.jpg"
    import Kami5 from "../assets/Kami/Kami-5.jpg"

    import Bela from "../assets/Bela/Bela.jpg"

    import Sosi from "../assets/Sosi/Sosi.jpg"
    import TrainerColumn from "./TrainerColumn.svelte";

    const BelaKep = [Bela];
    const KamiKepek = [Kami1,
        Kami2,
        Kami3,
        Kami4,
        Kami5]
    const SosiKep = [Sosi];
</script>

<section class="flex lg:flex-row lg:gap-6 mx-4 flex-col PITBULL-FONT" id="Edzők">
    <TrainerColumn id="Béla" name="Sándor Béla" image={BelaKep} content="Kick-Box,ökölvívás,Thai-box,MMA-ban szerzett tapasztalatait
                    adja át a növendékeknek,versenyre készülőknek.
                    WFC K-1,és WPK Low-kick öv birtokosa,és sok sok hazai és nemzetközi
                    mérkőzés van a háta mögött." phone="06306527909"/>
    <TrainerColumn id="Kami" name="Kovács Kálmán" image={KamiKepek} content="MMA-ban,K.-3 -ban és Kempoban versenyzett ,sok sok mérkőzésen van túl idehaza és külföldön
                    egyaránt,többek között bírtokosa az Ózdon megrendezett Spartan gála, Profi MMA ban megszerzet bajnoki
                    övnek.
                    Edzési főleg erőnléti,és küzdelmi jellegűek." phone="0670881852"/>
    <TrainerColumn id="Sosi" name="Soós István" image={SosiKep} content="Az Ő világa a birkózó szőnyeg,régóta a 'szakmában' van.
    Sosi többszörös Országos és Magyar bajnok több súlycsoportban
    és minden korosztályban,és veteránként is elnyerte a magyar bajnoki címet.
    Edzésein a földharc és birkó elemeit vezeti át az MMA-ra." phone="06704287111"/>
</section>

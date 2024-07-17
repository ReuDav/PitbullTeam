<script>
    import FrequentlyAskedQuestions from './FrequentlyAskedQuestions.svelte';

    let openIndex = null;

    const questions = [
        {
            question: "Milyen lehetőségek vannak a Pitbull Team edzőtermében?",
            answer: `
                Küzdősportok, ökölvívás, k-1, kempo, mma, elsajátítása, és versenyzési lehetőség.
                <div>
                    <img src='./src/assets/assets/verseny1.webp' alt='Verseny 1' />
                    <img src='./src/assets/assets/verseny2.webp' alt='Verseny 2' />
                    <img src='./src/assets/assets/verseny3.webp' alt='Verseny 3' />
                </div>`
        },
        {
            question: "Mit lehet a Pitbull Team edzőinél megtanulni?",
            answer: "Box,k-1,kempo,MMA"
        },
        {
            question: "Mit jelent az hogy 'K1'?",
            answer: "Ökölvívó ütések,karate rúgások,térd rúgás, Full contact álló küzdelem."
        },
        {
            question: "Mit jelent az hogy 'K3'?",
            answer: "- Kick-box, -Kempo, -Ketrecharc álló és földhac vegyesen,a földharc időkorlátja 30 mp., van rászámolás,"
        },
        {
            question: "Mi az az MMA pontosan?",
            answer: "MMA Mixed Artial Arts,/vegyes harc művészet,álló és földharc ötvözete."
        }
    ];

    function toggle(index) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<section id="Gyik" class="py-10">
{#each questions as { question, answer }, index}
    <FrequentlyAskedQuestions
            question={question}
            answer={answer}
            isOpen={openIndex === index}
            toggle={() => toggle(index)}
    />
{/each}
</section>

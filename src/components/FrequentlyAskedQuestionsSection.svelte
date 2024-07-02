<script>
    import FrequentlyAskedQuestions from './FrequentlyAskedQuestions.svelte';

    let openIndex = null;

    const questions = [
        {
            question: "Milyen lehetőségek vannak a Pitbull Team edzőtermében?",
            answer: "Amit mi oktatunk, és versenyzési lehetőséget is biztosítunk"
        },
        {
            question: "Mit lehet a Pitbull Team edzőinél megtanulni?",
            answer: "Ökölvívás-klasszikus boksz ütések,védések."
        },
        {
            question: "Mit jelent az hogy 'K1'?",
            answer: "K-1 ökölvívó ütések, karate rugások és térd rúgás. (Álló harc)"
        },
        {
            question: "Mit jelent az hogy 'K3'?",
            answer: "K-3: Kick-Box, Kempo és Ketrecharc. (Álló harc és ketrec harc)"
        },
        {
            question: "Mi az az MMA pontosan?",
            answer: "MMA (Mixed Martial Arts / Kevet harcművészetek),  de itt az állóhacon kívül már van földharc is, korlátozott 30 mp. idővel és engedélyezett a rászámolás"
        }
    ];

    function toggle(index) {
        openIndex = openIndex === index ? null : index;
    }
</script>

{#each questions as { question, answer }, index}
    <FrequentlyAskedQuestions
            question={question}
            answer={answer}
            isOpen={openIndex === index}
            toggle={() => toggle(index)}
    />
{/each}

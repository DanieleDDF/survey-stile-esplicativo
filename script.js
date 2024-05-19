
function calculateResults() {
    const questions = [
        { id: 'q1', type: 'success', subType: 'PmG' },
        { id: 'q2', type: 'success', subType: 'PvG' },
        // Aggiungi le altre domande qui con il rispettivo tipo e subTipo
    ];

    let scores = {
        PmB: 0, PvB: 0, PsB: 0,
        PmG: 0, PvG: 0, PsG: 0
    };

    questions.forEach(question => {
        const answer = document.querySelector(`input[name="${question.id}"]:checked`);
        if (answer) {
            const value = answer.value === 'A' ? 1 : 0;
            scores[question.subType] += value;
        }
    });

    document.getElementById('results').innerText = `
        PmB: ${scores.PmB}, PvB: ${scores.PvB}, PsB: ${scores.PsB},
        PmG: ${scores.PmG}, PvG: ${scores.PvG}, PsG: ${scores.PsG}
    `;
}

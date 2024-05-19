function calculateResults() {
    const questions = [
        { id: 'q1', type: 'success', subType: 'PmG' },
        { id: 'q2', type: 'success', subType: 'PvG' },
        { id: 'q3', type: 'success', subType: 'PsG' },
        { id: 'q4', type: 'success', subType: 'PmG' },
        { id: 'q5', type: 'failure', subType: 'PmB' },
        { id: 'q6', type: 'success', subType: 'PsG' },
        { id: 'q7', type: 'success', subType: 'PmG' },
        { id: 'q8', type: 'failure', subType: 'PmB' },
        { id: 'q9', type: 'failure', subType: 'PvB' },
        { id: 'q10', type: 'success', subType: 'PvG' }
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
        } else {
            console.error(`No answer selected for question ${question.id}`);
        }
    });

    document.getElementById('results').innerText = `
        PmB: ${scores.PmB}, PvB: ${scores.PvB}, PsB: ${scores.PsB},
        PmG: ${scores.PmG}, PvG: ${scores.PvG}, PsG: ${scores.PsG}
    `;
}

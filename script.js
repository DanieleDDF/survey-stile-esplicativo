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
        { id: 'q10', type: 'success', subType: 'PvG' },
        { id: 'q11', type: 'success', subType: 'PsG' },
        { id: 'q12', type: 'success', subType: 'PmG' },
        { id: 'q13', type: 'failure', subType: 'PmB' },
        { id: 'q14', type: 'success', subType: 'PsG' },
        { id: 'q15', type: 'success', subType: 'PsG' },
        { id: 'q16', type: 'failure', subType: 'PvB' },
        { id: 'q17', type: 'failure', subType: 'PsB' },
        { id: 'q18', type: 'failure', subType: 'PsB' },
        { id: 'q19', type: 'failure', subType: 'PmB' },
        { id: 'q20', type: 'failure', subType: 'PvB' },
        { id: 'q21', type: 'failure', subType: 'PmB' },
        { id: 'q22', type: 'failure', subType: 'PsB' },
        { id: 'q23', type: 'success', subType: 'PsG' },
        { id: 'q24', type: 'success', subType: 'PvG' },
        { id: 'q25', type: 'failure', subType: 'PsB' },
        { id: 'q26', type: 'success', subType: 'PvG' },
        { id: 'q27', type: 'success', subType: 'PsG' },
        { id: 'q28', type: 'success', subType: 'PmG' },
        { id: 'q29', type: 'failure', subType: 'PmB' },
        { id: 'q30', type: 'failure', subType: 'PsB' },
        { id: 'q31', type: 'success', subType: 'PsG' },
        { id: 'q32', type: 'failure', subType: 'PvB' },
        { id: 'q33', type: 'failure', subType: 'PmB' },
        { id: 'q34', type: 'success', subType: 'PvG' },
        { id: 'q35', type: 'success', subType: 'PvG' },
        { id: 'q36', type: 'success', subType: 'PvG' },
        { id: 'q37', type: 'success', subType: 'PmG' },
        { id: 'q38', type: 'success', subType: 'PvG' },
        { id: 'q39', type: 'failure', subType: 'PsB' },
        { id: 'q40', type: 'success', subType: 'PmG' },
        { id: 'q41', type: 'failure', subType: 'PmB' },
        { id: 'q42', type: 'failure', subType: 'PsB' },
        { id: 'q43', type: 'success', subType: 'PsG' },
        { id: 'q44', type: 'failure', subType: 'PsB' },
        { id: 'q45', type: 'success', subType: 'PsG' },
        { id: 'q46', type: 'failure', subType: 'PsB' },
        { id: 'q47', type: 'failure', subType: 'PvB' },
        { id: 'q48', type: 'failure', subType: 'PmB' }
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

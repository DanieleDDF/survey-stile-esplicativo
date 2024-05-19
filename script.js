function calculateResults() {
    const questions = [
        { id: 'q1', type: 'success', subType: 'PmG' },
        { id: 'q2', type: 'success', subType: 'PvG' },
        { id: 'q3', type: 'failure', subType: 'PsB' },
        { id: 'q4', type: 'success', subType: 'PmG' },
        { id: 'q5', type: 'failure', subType: 'PmB' },
        { id: 'q6', type: 'success', subType: 'PvG' },
        { id: 'q7', type: 'success', subType: 'PmG' },
        { id: 'q8', type: 'failure', subType: 'PmB' },
        { id: 'q9', type: 'failure', subType: 'PvB' },
        { id: 'q10', type: 'success', subType: 'PvG' },
        { id: 'q11', type: 'success', subType: 'PsG' },
        { id: 'q12', type: 'success', subType: 'PsG' },
        { id: 'q13', type: 'failure', subType: 'PmB' },
        { id: 'q14', type: 'success', subType: 'PmG' },
        { id: 'q15', type: 'success', subType: 'PsG' },
        { id: 'q16', type: 'failure', subType: 'PmB' },
        { id: 'q17', type: 'failure', subType: 'PsB' },
        { id: 'q18', type: 'failure', subType: 'PvB' },
        { id: 'q19', type: 'failure', subType: 'PmB' },
        { id: 'q20', type: 'failure', subType: 'PvB' },
        { id: 'q21', type: 'failure', subType: 'PmB' },
        { id: 'q22', type: 'failure', subType: 'PsB' },
        { id: 'q23', type: 'success', subType: 'PsG' },
        { id: 'q24', type: 'success', subType: 'PvG' },
        { id: 'q25', type: 'failure', subType: 'PmB' },
        { id: 'q26', type: 'success', subType: 'PvG' },
        { id: 'q27', type: 'success', subType: 'PsG' },
        { id: 'q28', type: 'success', subType: 'PmG' },
        { id: 'q29', type: 'failure', subType: 'PmB' },
        { id: 'q30', type: 'failure', subType: 'PsB' },
        { id: 'q31', type: 'success', subType: 'PvG' },
        { id: 'q32', type: 'failure', subType: 'PsB' },
        { id: 'q33', type: 'failure', subType: 'PsB' },
        { id: 'q34', type: 'success', subType: 'PvG' },
        { id: 'q35', type: 'success', subType: 'PvG' },
        { id: 'q36', type: 'success', subType: 'PvG' },
        { id: 'q37', type: 'success', subType: 'PvG' },
        { id: 'q38', type: 'success', subType: 'PmG' },
        { id: 'q39', type: 'failure', subType: 'PmB' },
        { id: 'q40', type: 'success', subType: 'PmG' },
        { id: 'q41', type: 'failure', subType: 'PvB' },
        { id: 'q42', type: 'failure', subType: 'PsB' },
        { id: 'q43', type: 'success', subType: 'PvG' },
        { id: 'q44', type: 'failure', subType: 'PmB' },
        { id: 'q45', type: 'success', subType: 'PmG' },
        { id: 'q46', type: 'failure', subType: 'PmB' },
        { id: 'q47', type: 'failure', subType: 'PsB' },
        { id: 'q48', type: 'failure', subType: 'PmB' }
    ];

    let scores = {
        PmB: 0, PvB: 0, PsB: 0,
        PmG: 0, PvG: 0, PsG: 0
    };

    questions.forEach(question => {
        const answer = document.querySelector(`input[name="${question.id}"]:checked`);
        if (answer) {
            let value = 0;
            if (question.type === 'success') {
                value = answer.value === 'B' ? 1 : 0; // B = 1, A = 0 per successo
            } else {
                value = answer.value === 'A' ? 1 : 0; // A = 1, B = 0 per insuccesso
            }
            scores[question.subType] += value;
        } else {
            console.error(`No answer selected for question ${question.id}`);
        }
    });

    document.getElementById('results').innerHTML = `
        <table class="results-table">
            <thead>
                <tr>
                    <th></th>
                    <th colspan="3">INSUCCESSO</th>
                    <th colspan="3">SUCCESSO</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Elevato pessimismo</th>
                    <th>Moderato pessimismo</th>
                    <th>Medio</th>
                    <th>Moderato ottimismo</th>
                    <th>Elevato ottimismo</th>
                    <th>Elevato pessimismo</th>
                    <th>Moderato pessimismo</th>
                    <th>Medio</th>
                    <th>Moderato ottimismo</th>
                    <th>Elevato ottimismo</th>
                </tr>
                <tr>
                    <th></th>
                    <th>8</th>
                    <th>7</th>
                    <th>6</th>
                    <th>5</th>
                    <th>4</th>
                    <th>3</th>
                    <th>2</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Permanenza</th>
                    <td colspan="3">${scores.PmB}</td>
                    <td colspan="6"></td>
                    <td colspan="3">${scores.PmG}</td>
                </tr>
                <tr>
                    <th>Pervasività</th>
                    <td colspan="3">${scores.PvB}</td>
                    <td colspan="6"></td>
                    <td colspan="3">${scores.PvG}</td>
                </tr>
                <tr>
                    <th>Personalizzazione</th>
                    <td colspan="3">${scores.PsB}</td>
                    <td colspan="6"></td>
                    <td colspan="3">${scores.PsG}</td>
                </tr>
            </tbody>
        </table>
    `;
}

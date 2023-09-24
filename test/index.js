document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('assessmentForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Calculate the total score based on user's answers
        let totalScore = 0;

        // You can add more questions and their scoring logic here
        const q1Score = parseInt(document.querySelector('input[name="q1"]:checked').value);
        totalScore += q1Score;
        const q2Score = parseInt(document.querySelector('input[name="q2"]:checked').value);
        totalScore += q2Score;
        const q3Score = parseInt(document.querySelector('input[name="q3"]:checked').value);
        totalScore += q3Score;
        const q4Score = parseInt(document.querySelector('input[name="q4"]:checked').value);
        totalScore += q4Score;
        const q5Score = parseInt(document.querySelector('input[name="q5"]:checked').value);
        totalScore += q5Score;
        const q6Score = parseInt(document.querySelector('input[name="q6"]:checked').value);
        totalScore += q6Score;
        const q7Score = parseInt(document.querySelector('input[name="q7"]:checked').value);
        totalScore += q7Score;
        const q8Score = parseInt(document.querySelector('input[name="q8"]:checked').value);
        totalScore += q8Score;
        const q9Score = parseInt(document.querySelector('input[name="q9"]:checked').value);
        totalScore += q9Score;

        // Calculate the result and display it
        let result = '';
        if (totalScore >= 0 && totalScore <= 5) {
            result = 'You seem to be doing well.';
        } else if (totalScore >= 6 && totalScore <= 10) {
            result = 'You may be experiencing some mild mental health issues. Consider seeking help.';
        } else {
            result = 'You should definitely seek professional help.';
        }

        resultDiv.textContent = `Assessment Result: ${result}`;
    });
});

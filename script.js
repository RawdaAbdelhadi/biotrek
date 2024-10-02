function checkAnswers() {
    let correctAnswers = 0;
    let totalQuestions = 5;

    let answers = {
        q1: "Study eye health in microgravity",
        q2: "20",
        q3: "38 days",
        q4: "Arteries and veins",
        q5: "Eye health"
    };

    for (let i = 1; i <= totalQuestions; i++) {  //2
        let userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[`q${i}`]) {
            correctAnswers++;
        }
    }
console.log(correctAnswers);
    if (correctAnswers >= 3) {
        document.getElementById('quizForm').classList.add('hidden');
        document.getElementById('ph').classList.add('hidden');

        document.getElementById('resultMessage').classList.remove('hidden');
    } else {
        document.getElementById('quizForm').classList.add('hidden');
        document.getElementById('ph').classList.add('hidden');

        document.getElementById('failMessage').classList.remove('hidden');
    }
}
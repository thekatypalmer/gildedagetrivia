const questions = [
    {
        question: "What is George Russell's primary business?",
        answers: ["Banking", "Railroads", "Shipping", "Steel"],
        correctAnswer: "Railroads"
    },
    {
        question: "What is the name of George Russell's wife?",
        answers: ["Agnes", "Bertha", "Ada", "Aurora"],
        correctAnswer: "Bertha"
    }
];
let score = 0;
let currentQuestion = 0;

console.log(questions);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const playAgainButton = document.getElementById("play-again-button");

function showQuestion() {

    // Clear the previous question
    answerButtons.innerHTML = "";
    feedbackElement.textContent = "";

    // Disable Next until the player answers
    nextButton.disabled = true;

    // Display the current question
    questionElement.textContent = questions[currentQuestion].question;
    progressText.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

    // Calculate the progress percentage
    const progressPercent =
    ((currentQuestion + 1) / questions.length) * 100;

    // Change the width of the progress bar
    progressFill.style.width = `${progressPercent}%`;

    // Create the answer buttons
    questions[currentQuestion].answers.forEach(answer => {

        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-button");

        button.addEventListener("click", () => {

            if (answer === questions[currentQuestion].correctAnswer) {
                score = score + 1;
                console.log("Score:", score);
                feedbackElement.textContent = "Correct!";
            } else {
                feedbackElement.textContent = "Incorrect!";
            }

            for (const answerButton of answerButtons.children) {
                answerButton.disabled = true;
            }

       // The player has answered, so allow them to continue
        nextButton.disabled = false;

}); // closes the answer button click listener

        answerButtons.appendChild(button);

    });
}

function showResults() {

    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    finalScore.textContent =
        `${score} out of ${questions.length}`;

    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
        resultMessage.textContent = "A triumph worthy of New York society!";
    } else if (percentage >= 50) {
        resultMessage.textContent = "A respectable showing.";
    } else {
        resultMessage.textContent = "Perhaps another season in society is in order.";
    }

}

// Next Question button
nextButton.addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {
        currentQuestion = currentQuestion + 1;
        showQuestion();
    } else {
        showResults();
    }

}); // Next Question listener ends here


playAgainButton.addEventListener("click", () => {

    score = 0;
    currentQuestion = 0;
    
    resultsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    // Redraw Question 1 and clear the old feedback
    showQuestion();

}); // Play Again listener ends here

// ========================================
// START THE APPLICATION
// ========================================

// Start the game
showQuestion();

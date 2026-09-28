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


// Next Question button
nextButton.addEventListener("click", () => {
    currentQuestion = currentQuestion + 1;
    showQuestion();
});


// Start the game
showQuestion();

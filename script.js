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

function showQuestion() {

    // Clear the previous question
    answerButtons.innerHTML = "";
    feedbackElement.textContent = "";

    // Display the current question
    questionElement.textContent = questions[currentQuestion].question;

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

        });

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

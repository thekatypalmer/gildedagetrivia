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
    },
    {
        question: "Who is Marian Brook's aunt?",
        answers: ["Bertha Russell", "Agnes van Rhijn", "Peggy Scott", "Mrs. Astor"],
        correctAnswer: "Agnes van Rhijn"
    },
    {
        question: "What is Peggy Scott's profession?",
        answers: ["Teacher", "Journalist", "Actress", "Doctor"],
        correctAnswer: "Journalist"
    },
    {
        question: "What is the name of George and Bertha Russell's daughter?",
        answers: ["Gladys", "Marian", "Carrie", "Ada"],
        correctAnswer: "Gladys"
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

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(Math.random() * (i + 1));

        const temporaryValue = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function showQuestion() {

    // Clear the previous question
    answerButtons.innerHTML = "";
    feedbackElement.textContent = "";

    // Disable Next until the player answers
    nextButton.disabled = true;

    // Change the button text on the final question
if (currentQuestion === questions.length - 1) {
    nextButton.textContent = "See Results";
    } else {
    nextButton.textContent = "Next Question";
    }

    // Display the current question
    questionElement.textContent = questions[currentQuestion].question;
    progressText.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

    // Calculate the progress percentage
    const progressPercent =
    ((currentQuestion + 1) / questions.length) * 100;

    // Change the width of the progress bar
    progressFill.style.width = `${progressPercent}%`;

    const shuffledAnswers = [...questions[currentQuestion].answers];
    shuffleArray(shuffledAnswers);

    // Create the answer buttons
    shuffledAnswers.forEach(answer => {

        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-button");

        button.addEventListener("click", () => {

            if (answer === questions[currentQuestion].correctAnswer) {
                score = score + 1;
                console.log("Score:", score);
                feedbackElement.textContent = "Correct!";
                button.classList.add("correct");               
            } else {
                feedbackElement.textContent =
                    `Incorrect! The correct answer was ${questions[currentQuestion].correctAnswer}.`;
                button.classList.add("incorrect");
            }

            for (const answerButton of answerButtons.children) {

                if (answerButton.textContent === questions[currentQuestion].correctAnswer) {
                    answerButton.classList.add("correct");
            }

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
        resultMessage.textContent = "Perhaps you and Mr. McAllister might compare notes on life beyond society's gates.";
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

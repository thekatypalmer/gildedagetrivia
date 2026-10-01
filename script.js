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
    },
    {
        question: "What is the name of George and Bertha Russell's son?",
        answers: ["Larry", "Oscar", "Jack", "Watson"],
        correctAnswer: "Larry"
    },
    {
        question: "What profession does Larry Russell pursue?",
        answers: ["Lawyer", "Architect", "Journalist", "Banker"],
        correctAnswer: "Architect"
    },
    {
        question: "Which character represents the traditions of Old New York in the van Rhijn household?",
        answers: ["Agnes van Rhijn", "Bertha Russell", "Peggy Scott", "Gladys Russell"],
        correctAnswer: "Agnes van Rhijn"
    },
    {
        question: "Which family represents the ambitious new-money side of New York society?",
        answers: ["The Russells", "The van Rhijns", "The Scotts", "The Fanes"],
        correctAnswer: "The Russells"
    },
    {
        question: "Which character pursues a career in journalism?",
        answers: ["Peggy Scott", "Marian Brook", "Gladys Russell", "Ada Brook"],
        correctAnswer: "Peggy Scott"
    }
];

const QUESTIONS_PER_GAME = 5;

let score = 0;
let currentQuestion = 0;
let gameQuestions = [];
let playerAnswers = [];

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
const answerReview = document.getElementById("answer-review");
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

function startGame() {

    score = 0;
    currentQuestion = 0;
    playerAnswers = [];

    gameQuestions = [...questions];
    shuffleArray(gameQuestions);

    gameQuestions = gameQuestions.slice(0, QUESTIONS_PER_GAME);

    resultsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}

function showQuestion() {

    // Clear the previous question
    answerButtons.innerHTML = "";
    feedbackElement.textContent = "";

    // Disable Next until the player answers
    nextButton.disabled = true;

    // Change the button text on the final question
if (currentQuestion === gameQuestions.length - 1) {
    nextButton.textContent = "See Results";
    } else {
    nextButton.textContent = "Next Question";
    }

    // Display the current question
    questionElement.textContent = gameQuestions[currentQuestion].question;
    progressText.textContent =
    `Question ${currentQuestion + 1} of ${gameQuestions.length}`;

    // Calculate the progress percentage
    const progressPercent =
    ((currentQuestion + 1) / gameQuestions.length) * 100;

    // Change the width of the progress bar
    progressFill.style.width = `${progressPercent}%`;

    const shuffledAnswers = [...gameQuestions[currentQuestion].answers];
    shuffleArray(shuffledAnswers);

    // Create the answer buttons
    shuffledAnswers.forEach(answer => {

        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-button");

        button.addEventListener("click", () => {

        const isCorrect =
        answer === gameQuestions[currentQuestion].correctAnswer;

        playerAnswers.push({
            question: gameQuestions[currentQuestion].question,
            selectedAnswer: answer,
            correctAnswer: gameQuestions[currentQuestion].correctAnswer,
            isCorrect: isCorrect
        });

            if (isCorrect) {
                score = score + 1;
                console.log("Score:", score);
                feedbackElement.textContent = "Correct!";
                button.classList.add("correct");               
            } else {
                feedbackElement.textContent =
                    `Incorrect! The correct answer was ${gameQuestions[currentQuestion].correctAnswer}.`;
                button.classList.add("incorrect");
            }

            for (const answerButton of answerButtons.children) {

                if (answerButton.textContent === gameQuestions[currentQuestion].correctAnswer) {
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
    
    console.log(playerAnswers);
    answerReview.innerHTML = "";
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    finalScore.textContent =
        `${score} out of ${gameQuestions.length}`;

    const percentage = (score / gameQuestions.length) * 100;
    if (percentage === 100) {
        resultMessage.textContent = "A triumph worthy of New York society!";
    } else if (percentage >= 50) {
        resultMessage.textContent = "A respectable showing.";
    } else {
        resultMessage.textContent = "Perhaps you and Mr. McAllister might compare notes on life beyond society's gates.";
    }
    playerAnswers.forEach(playerAnswer => {

        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");

        if (playerAnswer.isCorrect) {
            reviewItem.classList.add("review-correct");
            } else {
            reviewItem.classList.add("review-incorrect");
            }

        const reviewQuestion = document.createElement("p");
        reviewQuestion.textContent = playerAnswer.question;
        reviewQuestion.classList.add("review-question");
        reviewItem.appendChild(reviewQuestion);

        const selectedAnswer = document.createElement("p");

            selectedAnswer.textContent =
                `Your answer: ${playerAnswer.selectedAnswer}`;
    
            reviewItem.appendChild(selectedAnswer);

        if (!playerAnswer.isCorrect) {

            const correctAnswer = document.createElement("p");

            correctAnswer.textContent =
                `Correct answer: ${playerAnswer.correctAnswer}`;

            reviewItem.appendChild(correctAnswer);
        }
        answerReview.appendChild(reviewItem);

        });

}

// Next Question button
nextButton.addEventListener("click", () => {

    if (currentQuestion < gameQuestions.length - 1) {
        currentQuestion = currentQuestion + 1;
        showQuestion();
    } else {
        showResults();
    }

}); // Next Question listener ends here


playAgainButton.addEventListener("click", () => {

    startGame();

}); // Play Again listener ends here

// ========================================
// START THE APPLICATION
// ========================================

// Start the game
startGame();

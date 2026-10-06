const questions = [
    {
        question: "What is George Russell's primary business?",
        answers: ["Banking", "Railroads", "Shipping", "Steel"],
        correctAnswer: "Railroads",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "What is George Russell's wife's first name?",
        answers: ["Bertha", "Agnes", "Ada", "Aurora"],
        correctAnswer: "Bertha",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "Who is Marian Brook's formidable aunt and head of the van Rhijn family at the start of the series?",
        answers: ["Agnes van Rhijn", "Ada Brook", "Aurora Fane", "Mrs. Astor"],
        correctAnswer: "Agnes van Rhijn",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "What profession does Peggy Scott pursue?",
        answers: ["Journalism", "Medicine", "Teaching", "Law"],
        correctAnswer: "Journalism",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "What are the names of George and Bertha Russell's children?",
        answers: ["Larry and Gladys", "Oscar and Marian", "Jack and Bridget", "Billy and Carrie"],
        correctAnswer: "Larry and Gladys",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "What profession does Larry Russell pursue?",
        answers: ["Architecture", "Law", "Medicine", "Journalism"],
        correctAnswer: "Architecture",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "Who does Ada marry in Season 2?",
        answers: ["Reverend Luke Forte", "Ward McAllister", "Mr. Watson", "Patrick Morris"],
        correctAnswer: "Reverend Luke Forte",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "Which Russell child marries the Duke of Buckingham?",
        answers: ["Gladys", "Larry", "Neither", "Both"],
        correctAnswer: "Gladys",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "What major New York cultural institution becomes the center of Bertha's Season 2 social battle?",
        answers: ["The Metropolitan Opera", "Carnegie Hall", "The Metropolitan Museum of Art", "The New York Public Library"],
        correctAnswer: "The Metropolitan Opera",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "Who becomes Marian's romantic partner by the end of Season 2?",
        answers: ["Larry Russell", "Oscar van Rhijn", "Billy Carlton", "Tom Raikes"],
        correctAnswer: "Larry Russell",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "What invention eventually makes Jack wealthy?",
        answers: ["An alarm clock", "A telephone component", "An electric lamp", "A railway brake"],
        correctAnswer: "An alarm clock",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "Who swindles Oscar out of the van Rhijn fortune?",
        answers: ["Maud Beaton and her accomplices", "The Russells", "Ward McAllister", "The Duke of Buckingham"],
        correctAnswer: "Maud Beaton and her accomplices",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "Where does Peggy travel in Season 2 to report on Black education?",
        answers: ["Tuskegee", "Atlanta", "New Orleans", "Washington, D.C."],
        correctAnswer: "Tuskegee",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "Who is Peggy's Season 3 love interest?",
        answers: ["Dr. William Kirkland", "Larry Russell", "Jack Trotter", "Oscar van Rhijn"],
        correctAnswer: "Dr. William Kirkland",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "Who is Gladys in love with before her marriage to the duke is arranged?",
        answers: ["Billy Carlton", "Jack Trotter", "Oscar van Rhijn", "John Adams"],
        correctAnswer: "Billy Carlton",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "Who paints Gladys's portrait in Season 3?",
        answers: ["John Singer Sargent", "James McNeill Whistler", "Thomas Eakins", "Winslow Homer"],
        correctAnswer: "John Singer Sargent",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "What is the name of the duke Gladys marries?",
        answers: ["Hector, Duke of Buckingham", "Charles, Duke of Marlborough", "Arthur, Duke of Bedford", "Henry, Duke of Norfolk"],
        correctAnswer: "Hector, Duke of Buckingham",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "Who becomes Gladys's chief adversary after she arrives at Sidmouth?",
        answers: ["Lady Sarah", "Lady Caroline", "Lady Beatrice", "Lady Eleanor"],
        correctAnswer: "Lady Sarah",
        category: "Show",
        difficulty: "Medium"
    },
    {
        question: "How much does Jack personally receive when his clock invention is sold?",
        answers: ["$300,000", "$30,000", "$100,000", "$1 million"],
        correctAnswer: "$300,000",
        category: "Show",
        difficulty: "Hard"
    },
    {
        question: "What valuable resource does Larry discover in the supposedly unpromising Arizona mines?",
        answers: ["Copper", "Gold", "Silver", "Oil"],
        correctAnswer: "Copper",
        category: "Show",
        difficulty: "Hard"
    },
    {
        question: "Where does Larry encounter Maud Beaton again in Season 3?",
        answers: ["The Haymarket", "The Metropolitan Opera", "Newport", "The Academy of Music"],
        correctAnswer: "The Haymarket",
        category: "Show",
        difficulty: "Hard"
    },
    {
        question: "What happens to John Adams in Season 3?",
        answers: [
            "He is struck by a horse-drawn carriage and dies",
            "He leaves New York for Europe",
            "He marries and moves to Boston",
            "He is killed in a railway accident"
        ],
        correctAnswer: "He is struck by a horse-drawn carriage and dies",
        category: "Show",
        difficulty: "Easy"
    },
    {
        question: "Who performs emergency surgery after George Russell is shot?",
        answers: ["Dr. William Kirkland", "Dr. Lewis", "Dr. Wilson", "Dr. Black"],
        correctAnswer: "Dr. William Kirkland",
        category: "Show",
        difficulty: "Hard"
    },
    {
        question: "What news does Gladys reveal to Bertha at the end of Season 3?",
        answers: ["She is pregnant", "She is leaving the duke", "She is returning permanently to New York", "She has inherited Sidmouth"],
        correctAnswer: "She is pregnant",
        category: "Show",
        difficulty: "Hard"
    },
    {
        question: "Which real-life nurse and humanitarian appears in Season 1?",
        answers: ["Clara Barton", "Florence Nightingale", "Dorothea Dix", "Mary Edwards Walker"],
        correctAnswer: "Clara Barton",
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "What organization did Clara Barton found?",
        answers: ["The American Red Cross", "The Salvation Army", "The American Nurses Association", "The Women's Trade Union League"],
        correctAnswer: "The American Red Cross",
        category: "History",
        difficulty: "Easy"
    },
    {
        question: "Which real-life writer makes an appearance in Season 2?",
        answers: ["Oscar Wilde", "Mark Twain", "Henry James", "Walt Whitman"],
        correctAnswer: "Oscar Wilde",
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which real-life educator does Peggy encounter through her Tuskegee reporting?",
        answers: ["Booker T. Washington", "W.E.B. Du Bois", "Frederick Douglass", "George Washington Carver"],
        correctAnswer: "Booker T. Washington",
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "The Season 2 'Opera War' pits the Academy of Music against what new institution?",
        answers: ["The Metropolitan Opera", "Carnegie Hall", "Radio City Music Hall", "The New York Philharmonic"],
        correctAnswer: "The Metropolitan Opera",
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Why were wealthy newcomers attracted to the new Metropolitan Opera in real life?",
        answers: [
            "They were excluded from coveted boxes at the Academy of Music",
            "The Academy of Music banned opera in Italian",
            "The Metropolitan Opera charged no admission",
            "The Academy of Music moved outside Manhattan"
        ],
        correctAnswer: "They were excluded from coveted boxes at the Academy of Music",
        category: "History",
        difficulty: "Medium"
    },
    {
        question: "Which real-life society leader is associated with New York's famous 'Four Hundred'?",
        answers: ["Ward McAllister", "J.P. Morgan", "Andrew Carnegie", "Cornelius Vanderbilt"],
        correctAnswer: "Ward McAllister",
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "Which Season 3 character was inspired in part by Rhode Island civil-rights leader Mahlon Van Horne?",
        answers: ["Frederick Kirkland", "Arthur Scott", "William Kirkland", "T. Thomas Fortune"],
        correctAnswer: "Frederick Kirkland",
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "Which Season 3 character parallels Mathias Van Horne, Rhode Island's first Black dentist?",
        answers: ["Dr. William Kirkland", "Frederick Kirkland", "Arthur Scott", "T. Thomas Fortune"],
        correctAnswer: "Dr. William Kirkland",
        category: "History",
        difficulty: "Hard"
    },
    {
        question: "Who created The Gilded Age?",
        answers: ["Julian Fellowes", "Ryan Murphy", "Shonda Rhimes", "Aaron Sorkin"],
        correctAnswer: "Julian Fellowes",
        category: "Behind the Scenes",
        difficulty: "Easy"
    },
    {
        question: "Which earlier period drama is creator Julian Fellowes especially famous for?",
        answers: ["Downton Abbey", "The Crown", "Bridgerton", "Upstairs, Downstairs"],
        correctAnswer: "Downton Abbey",
        category: "Behind the Scenes",
        difficulty: "Easy"
    },
    {
        question: "Which actor plays George Russell?",
        answers: ["Morgan Spector", "Blake Ritson", "Harry Richardson", "Nathan Lane"],
        correctAnswer: "Morgan Spector",
        category: "Behind the Scenes",
        difficulty: "Medium"
    },
    {
        question: "Which actor plays Bertha Russell?",
        answers: ["Carrie Coon", "Christine Baranski", "Cynthia Nixon", "Donna Murphy"],
        correctAnswer: "Carrie Coon",
        category: "Behind the Scenes",
        difficulty: "Medium"
    },
    {
        question: "What performing-arts background is unusually common among The Gilded Age cast?",
        answers: ["Broadway and theater", "Opera singing", "Ballet", "Stand-up comedy"],
        correctAnswer: "Broadway and theater",
        category: "Behind the Scenes",
        difficulty: "Hard"
    },
    {
        question: "What nickname do fans commonly use for George Russell?",
        answers: ["Railroad Daddy", "Wall Street Papa", "Steel King", "Robber Baron Beau"],
        correctAnswer: "Railroad Daddy",
        category: "Fandom",
        difficulty: "Easy"
    },
    {
        question: "What unusual problem affected Season 3, Episode 7 for some HBO Max viewers?",
        answers: [
            "It unexpectedly played in Spanish",
            "It played the episode backwards",
            "All dialogue audio was missing",
            "It accidentally showed the Season 3 finale"
        ],
        correctAnswer: "It unexpectedly played in Spanish",
        category: "Fandom",
        difficulty: "Hard"
    }
];

const QUESTIONS_PER_GAME = 5;

// ========================================
// APPLICATION STATE
// ========================================

let score = 0;
let currentQuestion = 0;
let gameQuestions = [];
let playerAnswers = [];

// ========================================
// DOM REFERENCES
// ========================================

const difficultyScreen = document.getElementById("difficulty-screen");
const difficultyButtons = document.querySelectorAll(".difficulty-button");

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

// ========================================
// FUNCTIONS
// ========================================

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(Math.random() * (i + 1));

        const temporaryValue = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function startGame(selectedDifficulty) {

    score = 0;
    currentQuestion = 0;
    playerAnswers = [];

    gameQuestions = questions.filter(question => {
        return question.difficulty === selectedDifficulty;
    });

    shuffleArray(gameQuestions);

    gameQuestions = gameQuestions.slice(0, QUESTIONS_PER_GAME);

    difficultyScreen.classList.add("hidden");
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

            if (
                answerButton.textContent === 
                gameQuestions[currentQuestion].correctAnswer
            ) {
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

function showAnswerReview() {

     playerAnswers.forEach(playerAnswer => {

        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");

        if (playerAnswer.isCorrect) {
            reviewItem.classList.add("review-correct");
        } else {
            reviewItem.classList.add("review-incorrect");
        }

        const resultLabel = document.createElement("p");
        resultLabel.classList.add("review-result");

        reviewItem.appendChild(resultLabel);
        
        const reviewQuestion = document.createElement("p");

        if (playerAnswer.isCorrect) {
            resultLabel.textContent = "Correct";
        } else {
            resultLabel.textContent = "Incorrect";
        }
        
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

function showResults() {
    
    console.log(playerAnswers);
    
    answerReview.innerHTML = "";
    
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    finalScore.textContent =
        `${score} out of ${gameQuestions.length}`;

    const percentage = 
        (score / gameQuestions.length) * 100;
    
    if (percentage === 100) {
        
        resultMessage.textContent = 
            "A triumph worthy of New York society!";
    
    } else if (percentage >= 50) {
        
        resultMessage.textContent = 
            "A respectable showing.";
    
    } else {
        
        resultMessage.textContent = 
            "Perhaps you and Mr. McAllister might compare notes on life beyond society's gates.";
    }

    showAnswerReview();
    
}

// ========================================
// EVENT LISTENERS
// ========================================

difficultyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedDifficulty = button.dataset.difficulty;

        startGame(selectedDifficulty);

    });

});

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

    resultsScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    difficultyScreen.classList.remove("hidden");

});

// ========================================
// START THE APPLICATION
// ========================================


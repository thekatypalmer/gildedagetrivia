const questions = [
    {
        question: "What is George Russell's primary business?",
        answers: ["Banking", "Railroads", "Shipping", "Steel"],
        correctAnswer: "Railroads"
    }
];
let score = 0;

console.log(questions);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const feedbackElement = document.getElementById("feedback");

questionElement.textContent = questions[0].question;

questions[0].answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-button");
    
    button.addEventListener("click", () => {
    if (answer === questions[0].correctAnswer) {
        score = score + 1;
        console.log("Score:", score);
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect!";
    }
}
                            
    for (const answerButton of answerButtons.children) {
    answerButton.disabled = true;
});

    answerButtons.appendChild(button);
});

const questions = [
    {
        question: "What is George Russell's primary business?",
        answers: ["Banking", "Railroads", "Shipping", "Steel"],
        correctAnswer: "Railroads"
    }
];

console.log(questions);

const questionElement = document.getElementById("question");

questionElement.textContent = questions[0].question;

const questions = [
{
    question: "What does HTML stand for?",
    options: 
[
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks Text Machine Language",
        "Hyper Transfer Markup Language"
],
    answer: "Hyper Text Markup Language"
},
{
    question: "Which language is used for styling web pages?",
    options: ["HTML", "Java", "CSS", "Python"],
    answer: "CSS"
},
{
    question: "Which language is used for web interactivity?",
    options: ["Java", "C++", "JavaScript", "PHP"],
    answer: "JavaScript"
},
{
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>"
},
{
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "background"],
    answer: "color"
}
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");

        btn.onclick = () => checkAnswer(option);

        optionsDiv.appendChild(btn);
    });

    startTimer();
}

function checkAnswer(selected) {
    clearInterval(timer);

    const correct = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");

    if (selected === correct) {
        score++;
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("feedback").textContent = "";

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent =
        score + " / " + questions.length;
}
function startQuiz() {
    currentQuestion = 0;
    score = 0;

    shuffleQuestions();

    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    displayQuestion();
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

startQuiz();
let questions = [
    {
        question: "What is 1 +1?",
        answers: ["A. 0", "B. 1", "C. 2", "D. 3"],
        correctAnswer: "C. 2"
    },
    {
        question: "What is 2 +1?",
        answers: ["A. 4", "B. 1", "C. 2", "D. 3"],
        correctAnswer: "D. 3"
    },
    {
        question: "What is 3 +1?",
        answers: ["A. 1", "B. 4", "C. 2", "D. 3"],
        correctAnswer: "B. 4"
    },
    {
        question: "What is 4 +1?",
        answers: ["A. 3", "B. 4", "C. 2", "D. 5"],
        correctAnswer: "D. 5"
    }

];

let startText = document.querySelector("#startText")
let answerButtons = document.querySelector(".answerButtons");
// let answers = document.querySelector("h2");
let questionText = document.querySelector("#question");
let timeEl = document.querySelector('#timer')
let scoreBtn = document.querySelector('#score')
let timerInterval;


let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
// let answer = document.querySelector("answer");
let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = 50;


answerButtons.addEventListener("click", function () {
    renderQuestion();
});


function renderQuestion() {
    let question = questions[currentQuestionIndex].question;
    questionText.innerHTML = question

    let answer = questions[currentQuestionIndex].answers
    A.innerHTML = answer[0]
    B.innerHTML = answer[1]
    C.innerHTML = answer[2]
    D.innerHTML = answer[3]
};

function checkCorrect(el) { //checks if answer is correct
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    console.log(correctAnswer);
    console.log(el.textContent);

    if (el.textContent === correctAnswer) {
        window.alert("correct + 1 ")
        score++;
    } else {
        //el.textContent !== correctAnswer
        window.alert("incorrect - 1 ")
        secondsLeft -= 5;
        score--;
    }
    // if (el.textContent !== correctAnswer) {
    //     secondsLeft -= 5;
    // }
    console.log(score)
    if (currentQuestionIndex < questions.length - 1) {
        console.log(currentQuestionIndex, questions.length - 1)
        currentQuestionIndex++;
        renderQuestion();
    }
    else if (currentQuestionIndex == questions.length - 1){
        endQuiz();
    }
}

function endQuiz() {
    timeEl.textContent = 0;
    clearInterval(timerInterval);
    scoreBtn.textContent = `SCORE: ${score}`;
}



function startQuiz() { //starts timer when start is clicked 
    startText.style.display = "none";

    renderQuestion();


    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        // if (currentQuestionIndex === 4) //when question  3 is answered timer stops 
        //     clearInterval(timerInterval)

        if (secondsLeft === 0) {
            // timer stops when seconds left hits 0 
            //clearInterval(timerInterval)
            endQuiz();
        }

    }, 1000);
}

start.addEventListener("click", startQuiz)


// function startIdleTimer() {

//     idleIntervalId = setInterval(function () {
//         idleTimer--;
//         console.log(idleTimer)
//         if (idleTimer === 0) {
//             nextImage();
//             //renderImage();
//             endQuiz();
//         }
//     }, 1000)


// }
// let imageEl = document.querySelector("img");
// let imageDescEl = document.querySelector("h1");
// let timerEl = document.querySelector("h4");


// let timer = 60;
// let idleTimer = 10;

// let intervalId;
// let idleIntervalId;

// let container = document.querySelector(".container");

// let currentImageIndex = 0;

// //();
// startOverallTimer();


// container.addEventListener("click", function(event){

//         if(event.target.matches("img") || event.target.matches("h1"))
//         {
//             clearInterval(idleIntervalId);

//             nextImage();

//             //();
//         }

// })

// function nextImage() {
//     if (currentImageIndex < images.length-1)
//         currentImageIndex++;

//     else
//     currentImageIndex = 0;
// }

// function startOverallTimer(){

//     intervalId = setInterval(function(){
//         timer--;
//         timerEl.textContent = timer;

//         if(timer === 0){
//             clearInterval(intervalId);
//         }


//     },1000)


// }




// function //(){
//     idleTimer= 10;
//     imageEl.src = images[currentImageIndex].img;
//     imageDescEl.textContent = images[currentImageIndex].description;
//     clearInterval(idleIntervalId);
//     startIdleTimer();
// }
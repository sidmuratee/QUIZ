let questions = [
    {question: "What is 1 +1?", answers: ["A. 0", "B. 1", "C. 2", "D. 3"]
correctAnswer: "C. 2"},
    {question: "What is 2 +1?", answers: ["A. 4", "B. 1", "C. 2", "D. 3"]
correctAnswer: "D. 3"},
    {question: "What is 3 +1?", answers: ["A. 1", "B. 4", "C. 2", "D. 3"]
correctAnswer: "B. 4"},
    {question: "What is 4 +1?", answers: ["A. 3", "B. 4", "C. 2", "D. 5"]
correctAnswer: "D. 5"},
    
];


let imageEl = document.querySelector("img");
let imageDescEl = document.querySelector("h1");
let timerEl = document.querySelector("h4");


let timer = 60;
let idleTimer = 10;

let intervalId;
let idleIntervalId;

let container = document.querySelector(".container");

let currentImageIndex = 0;

renderImage();
startOverallTimer();


container.addEventListener("click", function(event){

        if(event.target.matches("img") || event.target.matches("h1"))
        {
            clearInterval(idleIntervalId);

            nextImage();

            renderImage();
        }

})

function nextImage() {
    if (currentImageIndex < images.length-1)
        currentImageIndex++;

    else
    currentImageIndex = 0;
}

function startOverallTimer(){

    intervalId = setInterval(function(){
        timer--;
        timerEl.textContent = timer;

        if(timer === 0){
            clearInterval(intervalId);
        }


    },1000)


}

function startIdleTimer(){

    idleIntervalId = setInterval(function(){
        idleTimer--;
        console.log(idleTimer)
        if(idleTimer === 0){
            nextImage();
            clearInterval(idleIntervalId);
            renderImage();
        }
    },1000)


}



function renderImage(){
    idleTimer= 10;
    imageEl.src = images[currentImageIndex].img;
    imageDescEl.textContent = images[currentImageIndex].description;
    clearInterval(idleIntervalId);
    startIdleTimer();
}
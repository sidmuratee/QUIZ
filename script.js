let images = [
    {img: "./image-1.png", description: "content"},
    {img: "./image-2.png", description: "2"},
    {img: "./image-3.png", description: "3"},
    {img: "./image-4.png", description: "4"},
]


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
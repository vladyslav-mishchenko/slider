const slider = document.querySelector("#mainSlider");
const slides = document.querySelectorAll("#mainSlider .main-slider--slides > .slide");
const miniatures = document.querySelectorAll("#mainSlider .main-slider--miniatures > .miniature");
const leftBtn = document.querySelector("#mainSlider .left-btn");
const rightBtn = document.querySelector("#mainSlider .right-btn");

let slide = 0;
let firstStartTimeout = 7000;
let changeSlideTimeout = 5000;
let setTimeoutId = null;

leftBtn.addEventListener("click", prev);
rightBtn.addEventListener("click", next);

for(let i = 0; i < miniatures.length; i++){
    miniatures[i].addEventListener('click', function(e){
        console.log(this.getAttribute('data-slide'));
    });
}

setTimeoutId = setTimeout(start, firstStartTimeout);

function start(){
    run();
}

function stop(){
    clearTimeout(setTimeoutId);
}

function run(){
    animationOn();
    increment();
    changeSlide();
    setTimeoutId = setTimeout(run, changeSlideTimeout);
}

function next(){
    stop();
    animationOff();
    increment();
    changeSlide();
}

function prev(){
    stop();
    animationOff();
    decrement();
    changeSlide();
}

function changeSlide(){
    slides[slide].classList.add('active');
    miniatures[slide].classList.add('active');

    for(let i = 0; i < slides.length; i++){
        if(i != slide){
            slides[i].classList.remove('active');
            miniatures[i].classList.remove('active');
        }
    }
}

function increment(){
    slide++;

    if(slide > (slides.length - 1)){
        slide = 0;
    }
}

function decrement(){
    slide--;

    if(slide < 0){
        slide = (slides.length - 1);
    }
}

function animationOff(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.add('na');
    }
}

function animationOn(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('na');
    }
}
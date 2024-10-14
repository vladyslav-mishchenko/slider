const slider = document.querySelector("#mainSlider");
const slides = document.querySelectorAll("#mainSlider > .main-slider--slides > .slide");

let slide = 0;
let firstStartTimeout = 7000;
let changeSlideTimeout = 3000;

setTimeout(changeSlide, firstStartTimeout);

function changeSlide(){
    slide++;

    if(slide > (slides.length - 1)){
        slide = 0;
    }

    slides[slide].classList.add('show');

    for(let i = 0; i < slides.length; i++){
        if(i != slide){
            slides[i].classList.remove('show');
        }
    }

    setTimeout(changeSlide, changeSlideTimeout);
}
// scss
// import './style.scss';

// js
// import './js/slider';

import { Slider as Slider } from "./js/slider";

document.addEventListener('DOMContentLoaded', function(){
    new Slider({slider: "#sld1"}).start();
    new Slider({slider: "#sld2"}).start();
    new Slider({slider: "#sld3"}).start();
});
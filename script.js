//IMAGE SLIDER

const slider = document.querySelectorAll(".slider img");
let slideindex = 0;
let intervalid = null;

initializeslider();
document.addEventListener("DOMContentLoaded", initializeslider);
function initializeslider(){
   if(slider.length > 0){
    slider[slideindex].classList.add("displayslide");
    intervalid = setInterval(nextslide, 5000);
   } 
}
function showslide(index){
    if(index >= slider.length){
        slideindex = 0;
    }else if(index < 0){
        slideindex = slider.length - 1;
    }
    slider.forEach(slide => {
        slide.classList.remove("displayslide");
    });
    slider[slideindex].classList.add("displayslide");
}
function prevslide(){
    clearInterval(intervalid);
    slideindex--;
    showslide(slideindex);
}
function nextslide(){
    slideindex++;
    showslide(slideindex);
}

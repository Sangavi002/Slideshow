var slider = document.getElementsByClassName('slider');
var currentSlide = 0;
var slideshowInterval;
var isplaying = false;
function showSlide() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }

    if(currentSlide < slider.length){
        slider[currentSlide].style.display = "block";
    }
}

function incrementSlide() {
    currentSlide++;
    if (currentSlide >= slider.length ) {
        currentSlide = 0;
    } 
}

function decrementSlide() {
    currentSlide--;
    if (currentSlide < 0 ) {
        currentSlide = slider.length - 1;
    }
}

function nextSlide() {
    stopSlideshow();
    incrementSlide();
    showSlide();
}

function prevSlide() {
    stopSlideshow();
    decrementSlide();
    showSlide();
}
function startStopSlide(){
    if(isplaying){
        stopSlideshow();
        document.getElementById('startStopBtn').innerText = 'Start';
    } 
    else {
        startSlideshow();
        document.getElementById('startStopBtn').innerText = 'Stop';
    }
}
function stopSlideshow() {
    isplaying = false;
    clearInterval(slideshowInterval);
    document.getElementById('startStopBtn').innerText = 'Start';
}
function startSlideshow() {
    isplaying = true;
    slideshowInterval = setInterval(function(){
        showSlide();
        incrementSlide();
    },2000); // Change slide every 2 seconds
}


function showSlides(carouselId) {
  let carousel = document.getElementById(carouselId);
  let slides = carousel.getElementsByClassName("photos");
  let dots = carousel.getElementsByClassName("dots");
  let indicator = carousel.getAttribute("data-indicator") || 0; 

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indicator++;
  if (indicator > slides.length) {
    indicator = 1;
  }
  carousel.setAttribute("data-indicator", indicator); 
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[indicator - 1].style.display = "block";
  dots[indicator - 1].classList.add('active');
}

function prevSlide(carouselId) {
  let carousel = document.getElementById(carouselId);
  let slides = carousel.getElementsByClassName("photos");
  let dots = carousel.getElementsByClassName("dots");
  let indicator = parseInt(carousel.getAttribute("data-indicator")) || 0; 

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indicator--;
  if (indicator < 1) {
    indicator = slides.length;
  }
  carousel.setAttribute("data-indicator", indicator); 
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[indicator - 1].style.display = "block";
  dots[indicator - 1].classList.add('active');
}

function nextSlide(carouselId, n) {
  let carousel = document.getElementById(carouselId);
  let slides = carousel.getElementsByClassName("photos");
  let dots = carousel.getElementsByClassName("dots");
  let indicator = parseInt(carousel.getAttribute("data-indicator")) || 0; 

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indicator++;
  if (indicator > slides.length) {
    indicator = 1;
  }
  carousel.setAttribute("data-indicator", indicator); 
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[indicator - 1].style.display = "block";
  dots[indicator - 1].classList.add('active');
}

function currentSlide(carouselId, imageNumber) {
  let carousel = document.getElementById(carouselId);
  let slides = carousel.getElementsByClassName("photos");
  let dots = carousel.getElementsByClassName("dots");
  let indicator = parseInt(carousel.getAttribute("data-indicator")) || 0; 

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  indicator = imageNumber;
  carousel.setAttribute("data-indicator", indicator); 
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[indicator - 1].style.display = "block";
  dots[indicator - 1].classList.add('active');
}

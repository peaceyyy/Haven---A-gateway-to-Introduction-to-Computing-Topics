const arrow_forward = document.querySelector(".carousel .arrow-right");
const arrow_backward = document.querySelector(".carousel .arrow-left");
const carouselImage = document.querySelector(".carousel-track img");

const images = [
  "images/Slide1.PNG",
  "images/Slide2.PNG",
  "images/Slide3.PNG",
  "images/Slide4.PNG",
  "images/Slide5.PNG",
  "images/Slide6.PNG",
  "images/Slide7.PNG",
  "images/Slide8.PNG",
  "images/Slide9.PNG",
  "images/Slide10.PNG",
  "images/Slide11.PNG",
  "images/Slide12.PNG",
  "images/Slide13.PNG",
  "images/Slide14.PNG",

];

let currentSlideIndex = 0;

function updateImage() {
  carouselImage.src = images[currentSlideIndex];
}

arrow_forward.addEventListener("click", () => {
  console.log("forward");
  currentSlideIndex = (currentSlideIndex + 1) % images.length;
  updateImage();
});

arrow_backward.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
  updateImage();
});

updateImage();

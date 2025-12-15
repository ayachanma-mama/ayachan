const slides = document.querySelector(".episode-slides");
const cards = document.querySelectorAll(".episode-card");
const prevBtn = document.querySelector(".episode-prev");
const nextBtn = document.querySelector(".episode-next");

let index = 0;
const maxIndex = cards.length - 1;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (index < maxIndex) {
    index++;
    updateSlide();
  }
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (index > 0) {
    index--;
    updateSlide();
  }
});


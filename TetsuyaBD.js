const slides = document.querySelector(".episode-slides");
const cards = document.querySelectorAll(".episode-card");
const prevBtn = document.querySelector(".episode-prev");
const nextBtn = document.querySelector(".episode-next");

let index = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function getMaxIndex() {
  // PCは最後の1枚を表示するため -1
  return window.innerWidth >= 768
    ? cards.length - 2
    : cards.length - 1;
}

nextBtn.addEventListener("click", () => {
  const max = getMaxIndex();
  if (index < max) {
    index++;
    updateSlide();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlide();
  }
});

window.addEventListener("resize", () => {
  const max = getMaxIndex();
  if (index > max) index = max;
  updateSlide();
});

updateSlide();

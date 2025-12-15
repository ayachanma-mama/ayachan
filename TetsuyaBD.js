const slides = document.querySelector(".episode-slides");
const cards = document.querySelectorAll(".episode-card");
const prevBtn = document.querySelector(".episode-prev");
const nextBtn = document.querySelector(".episode-next");

let index = 0;

function getVisibleCount() {
  return window.innerWidth >= 768 ? 2 : 1;
}

function updateSlide() {
  const visible = getVisibleCount();
  slides.style.transform = `translateX(-${index * (100 / visible)}%)`;
}

function getMaxIndex() {
  return cards.length - getVisibleCount();
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

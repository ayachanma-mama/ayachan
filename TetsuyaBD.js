const slides = document.querySelector(".episode-slides");
const cards = document.querySelectorAll(".episode-card");
const prevBtn = document.querySelector(".episode-prev");
const nextBtn = document.querySelector(".episode-next");

let index = 0;

function getCardWidth() {
  return cards[0].getBoundingClientRect().width;
}

function getMaxIndex() {
  const visibleCount = window.innerWidth >= 768 ? 2 : 1;
  return cards.length - visibleCount;
}

function updateSlide() {
  const moveX = index * getCardWidth();
  slides.style.transform = `translateX(-${moveX}px)`;

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


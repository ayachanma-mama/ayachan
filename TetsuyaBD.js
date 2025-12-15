const slides = document.querySelector(".episode-slides");
const cards = document.querySelectorAll(".episode-card");
const nextBtn = document.querySelector(".episode-next");
const prevBtn = document.querySelector(".episode-prev");

if (!slides || !cards.length || !nextBtn || !prevBtn) {
  console.error("スライダー要素が取得できていません");
}

let index = 0;

function updateSlide() {
  const slideWidth = cards[0].offsetWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === cards.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (index < cards.length - 1) {
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


let startX = 0;

slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) < 50) return;

  if (diff > 0 && index < cards.length - 1) {
    index++;
  } else if (diff < 0 && index > 0) {
    index--;
  }

  updateSlide();
});

updateSlide();

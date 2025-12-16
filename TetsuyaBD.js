document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".episode-slides");
  const cards = document.querySelectorAll(".episode-card");
  const prevBtn = document.querySelector(".episode-prev");
  const nextBtn = document.querySelector(".episode-next");

  let index = 0;

  function visibleCount() {
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function maxIndex() {
    return cards.length - visibleCount();
  }

  function update() {
    const movePercent = 100 / visibleCount();
    slides.style.transform = `translateX(-${index * movePercent}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < maxIndex()) {
      index++;
      update();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  window.addEventListener("resize", () => {
    if (index > maxIndex()) {
      index = maxIndex();
    }
    update();
  });

  update();
});

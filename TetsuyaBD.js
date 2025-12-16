document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".episode-slides");
  const slideItems = document.querySelectorAll(".episode-slide");
  const prevBtn = document.querySelector(".episode-prev");
  const nextBtn = document.querySelector(".episode-next");

  let currentIndex = 0;

  function getVisibleCount() {
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function getSlideWidth() {
    const slide = slideItems[0];
    const style = getComputedStyle(slide);

    const width = slide.offsetWidth;
    const margin =
      parseFloat(style.marginLeft) + parseFloat(style.marginRight);

    return width + margin;
  }

  function updatePosition() {
    const slideWidth = getSlideWidth();
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  function getMaxIndex() {
    return slideItems.length - getVisibleCount();
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < getMaxIndex()) {
      currentIndex++;
      updatePosition();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updatePosition();
    }
  });

  window.addEventListener("resize", () => {
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    updatePosition();
  });

  updatePosition();
});

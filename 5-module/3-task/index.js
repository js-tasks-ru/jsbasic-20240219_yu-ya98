function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselWidth;
  let counter = 0;

  carouselArrowLeft.style.display = 'none';

  carouselArrowRight.addEventListener('click', carouselRightClick);
  carouselArrowLeft.addEventListener('click', carouselLeftClick);

  function carouselRightClick() {
    carouselWidth = carouselInner.offsetWidth;
    counter++;
    changeSlide();
  }

  function carouselLeftClick() {
    carouselWidth = carouselInner.offsetWidth;
    counter--;
    changeSlide();
  }

  function changeSlide() {
    carouselInner.style.transform = `translateX(${-carouselWidth * counter}px)`;

    if (counter === 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }

    if (counter === 3) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }
  }
}

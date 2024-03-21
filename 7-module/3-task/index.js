export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
    this.sliderChange();
  }

  render() {
    let slider = document.createElement('div');
    slider.innerHTML = `
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
      </div>
    `;
    slider.classList.add('slider');

    let sliderSteps = slider.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i++) {
      sliderSteps.innerHTML += '<span></span>';
    }

    sliderSteps.querySelector('span').classList.add('slider__step-active');

    let progress = slider.querySelector('.slider__progress');
    progress.style.width = '0';

    this.elem = slider;
  }

  sliderChange() {
    let changeSlide = (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      let valuePercents = this.value / segments * 100;

      this.elem.querySelector('.slider__value').innerHTML = `${this.value}`;

      this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
      let steps = this.elem.querySelectorAll('.slider__steps span');
      steps[this.value].classList.add('slider__step-active');

      let thumb = this.elem.querySelector('.slider__thumb');
      thumb.style.left = `${valuePercents}%`;

      let progress = this.elem.querySelector('.slider__progress');
      progress.style.width = `${valuePercents}%`;


      let sliderChangeCustom = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      });
      this.elem.dispatchEvent(sliderChangeCustom);
    };

    this.elem.addEventListener('click', changeSlide);
  }
}

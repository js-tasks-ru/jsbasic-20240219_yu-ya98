import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    // Базовые компоненты
    let carousel = new Carousel(slides);
    document.querySelector('[data-carousel-holder]').append(carousel.elem);

    let ribbonMenu = new RibbonMenu(categories);
    document.querySelector('[data-ribbon-holder]').append(ribbonMenu.elem);

    let stepSlider = new StepSlider({steps: 5, value: 3});
    document.querySelector('[data-slider-holder]').append(stepSlider.elem);
    stepSlider.initialPosition();

    let cartIcon = new CartIcon();
    document.querySelector('[data-cart-icon-holder]').append(cartIcon.elem);

    let cart = new Cart(cartIcon);

    // Список товаров
    let response = await fetch('products.json');
    this.products = await response.json();

    let productsGrid = new ProductsGrid(this.products);
    let productsGridHolder = document.querySelector('[data-products-grid-holder]');
    productsGridHolder.innerHTML = '';
    productsGridHolder.append(productsGrid.elem);

    // Начальная фильтрация товаров
    productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: stepSlider.value,
      category: ribbonMenu.value
    });

    // События
    document.body.addEventListener('product-add', (event) => {
      for (let product of this.products) {
        if (product.id === event.detail) {
          cart.addProduct(product);
        }
      }
    });

    document.body.addEventListener('slider-change', (event) => {
      productsGrid.updateFilter({
        maxSpiciness: event.detail
      });
    });

    document.body.addEventListener('ribbon-select', (event) => {
      productsGrid.updateFilter({
        category: event.detail
      });
    });

    document.querySelector('#nuts-checkbox').addEventListener('change', (event) => {
      productsGrid.updateFilter({
        noNuts: event.target.checked
      });
    });

    document.querySelector('#vegeterian-checkbox').addEventListener('change', (event) => {
      productsGrid.updateFilter({
        vegeterianOnly: event.target.checked
      });
    });
  }
}

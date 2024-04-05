export default class Cart {
  cartItems = [];

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let cartItem;

    if (product === undefined || product === null) {
      return;
    } else {
      let counter = 0;
      for (let item of this.cartItems) {
        if (item.product.id === product.id) {
          counter++;
          item.count++;
          cartItem = item;
        }
      }

      if (counter === 0) {
        cartItem = {product: product, count: 1};
        this.cartItems.push(cartItem);
      }
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem;

    for (let item of this.cartItems) {
      if (item.product.id === productId) {
        if (amount === 1) {
          item.count++;
        } else if (amount === -1) {
          item.count--;
        }

        if (item.count === 0) {
          let index = this.cartItems.indexOf(item);
          this.cartItems.splice(index, 1);
        }
      }

      cartItem = item;
    }

    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return(true);
    } else {
      return(false);
    }
  }

  getTotalCount() {
    let totalCount = 0;
    for (let item of this.cartItems) {
      totalCount += item.count;
    }
    return(totalCount);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.cartItems) {
      totalPrice += item.product.price * item.count;
    }
    return(totalPrice);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}


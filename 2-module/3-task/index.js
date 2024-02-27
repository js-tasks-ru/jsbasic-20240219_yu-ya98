let calculator = {
  read: function(a, b) {
    this.firstNum = a;
    this.secondNum = b;
  },
  sum: function() {
    return this.firstNum + this.secondNum;
  },
  mul: function() {
    return this.firstNum * this.secondNum;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

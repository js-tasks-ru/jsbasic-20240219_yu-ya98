/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
    this.addEventListeners();
  }

  render() {
    let table = document.createElement('table');
    table.innerHTML = '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody></tbody>';

    let tBody = table.tBodies[0];
    tBody.innerHTML = this.rows
      .map(({name, age, salary, city}) => `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`)
      .join('');

    this.elem = table;
  }

  addEventListeners() {
    this.elem.addEventListener('click', event => {
      let btn = event.target.closest('button');

      if (btn) {
        btn.closest('tr').remove();
      }
    });
  }
}

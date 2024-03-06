function highlight(table) {
  let body = table.tBodies[0];
  let rows = body.rows;
  
  for (let row of rows) {
    if (row.cells[3].getAttribute('data-available') === 'true') {
      row.classList.add('available');
    } else {
      row.classList.add('unavailable');
    }
    
    if (!row.cells[3].hasAttribute('data-available')) {
      row.hidden = true;
    }
    
    if (row.cells[2].innerHTML === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }
    
    if (row.cells[1].innerHTML < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}

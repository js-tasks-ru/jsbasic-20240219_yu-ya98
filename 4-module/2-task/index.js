function makeDiagonalRed(table) {
  let rows = table.rows;
      
  for (let row of rows) {
    row.cells[row.rowIndex].style.backgroundColor = 'red';
  }
}

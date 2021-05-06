// function chessBoardCellColor(cell1, cell2) {
//     return asd(cell1) && asd(cell2);
// }

// function asd(s) {
//     let odd = ['A', 'C', 'E', 'F'],
//     [z, n] = s.split('');

//     if(odd.includes(z))
//         return (n % 2 == 1) ? true : false; 
//     return (n % 2 == 0) ? true : false;

// }

////////////// ??
  function chessBoardCellColor(cell1, cell2) {
    return squareColor(cell1) == squareColor(cell2);
  }
  
  function squareColor(name) {
    return name.charCodeAt(0) + name.charCodeAt(1) & 1;
  }

  console.log(chessBoardCellColor('E7', 'F2'));
  console.log(chessBoardCellColor('C3', 'H8'));


function generateHash(matrix) {
  var hash = {};//将json模拟为hashtable
  for (var i=0; i<matrix.length; i++) {
    for (var j=0; j<matrix[0].length; j++) {
      hash[matrix[i][j]] = true;
    }
  }
  return function (target) {
    return hash[target] || false;
  };
}

var m = [
  [2,   4,  8,  9],
  [10, 13, 15, 21],
  [23, 31, 33, 51]
];

var search = generateHash(m);

console.log(search(3));
console.log(search(4));
console.log(search(4));
console.log(search(3));

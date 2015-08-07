
function find(matrix, target) {
  //把矩阵考虑为数组
  var x = matrix.length;
  var y = matrix[0].length;

  var left = 0;
  var right = x*y;
  var pre;
  var current = null;
  while (true) {
    pre = current;
    current = parseInt((left+right)/2);
    if (pre === current) return false;
    var c_x = parseInt(current/y);
    var c_y = parseInt(current%y);

    if (matrix[c_x][c_y] === target) {
      return true;
    } else if (matrix[c_x][c_y] > target){
      right = c_x * y + c_y;
    } else {
      left = c_x * y + c_y;
    }
  }
}

var m = [
  [2,   4,  8,  9],
  [10, 13, 15, 21],
  [23, 31, 33, 51]
];
console.log(find(m, 4));
console.log(find(m, 3));
console.log(find(m, 21));
console.log(find(m, 3));
console.log(find(m, 51));
console.log(find(m, 2));

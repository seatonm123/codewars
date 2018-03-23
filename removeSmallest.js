var arr = [5, 4, 2, 3, 1];

function removeSmallest(numbers){
  var oArr = [];
  var rArr = [];
  numbers.map(function(n){
    oArr.push({val: numbers[numbers.indexOf(n)], ind: numbers.indexOf(n)});
  });
  oArr.shift(oArr.sort(function(a, b){return a.val - b.val}));
  oArr.map(function(r){
    if (r !== ' ' && r !== undefined && r !== null) {
      rArr[r.ind] = r.val;
    }
  });
  return rArr;
}

console.log(removeSmallest(arr));

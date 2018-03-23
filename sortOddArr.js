const arr = [];
const arr2 = [5, 3, 1, 8, 0];

function sortOddArr(array){
  let rArr = [];
  let oArr = [];
  array.map(function(i){
    i % 2 === 0 ? oArr.push({val:i, ind:array.indexOf(i)}) : rArr.push(i);
  });
  rArr.sort(function(a,b){return a-b});
  oArr.map(function(r){
    rArr.splice(r.ind, 0, r.val);
  });
  return rArr;
}

console.log(sortOddArr(arr));
console.log(sortOddArr(arr2));

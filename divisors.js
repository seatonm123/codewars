let n = 12;
let n2 = 13;

function divisors(integer){
  let accum = [];
  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) {
      accum.push(i);
    }
  }
  if (accum.length != 0) {
    return accum;
  } else {
    return integer.toString() + ' is prime';
  }
}

console.log(divisors(n));
console.log(divisors(n2));

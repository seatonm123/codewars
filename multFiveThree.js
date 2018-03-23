let n = 10;
let n2 = 23

function solution(number){
  let accum = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      accum += i;
    }
  }
  return accum;
}

console.log(solution(n));
console.log(solution(n2));

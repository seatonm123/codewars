let str = 'testing';
let str2 = 'middle';

function getMiddle(s){
  return s.length % 2 === 0 ? s.split('').splice(s.length/2 - 1, 2).join('') : s[Math.floor(s.length/2)];
}

console.log(getMiddle(str));
console.log(getMiddle(str2));

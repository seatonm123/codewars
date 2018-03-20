let str = 'loopingisfunbutdangerous';
let str2 = 'lessdangerousthancoding';

function longest(s, s2) {
  var con = s.split('').concat(s2.split(''));
  var arr = [];
  while (con.length > 0) {
    var foist = con.shift();
    if (arr.indexOf(foist) === -1) {
      arr.push(foist);
    }
  }
  return arr.sort().join('');
}

console.log(longest(str, str2));

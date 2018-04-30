let a = 'The quick brown fox jumps over the lazy dog.';

function reverseWords(str){
  let s = str.split(' ');
  let rStr = '';
  s.map(function(a){
    rStr += a.split('').reverse().join('') + ' ';
  });
  return rStr;
}

console.log(reverseWords(a));

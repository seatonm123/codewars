let a = ['Alex', 'Jacob', 'Mark', 'Max'];

function likes(names){
  let rStr = '';
  if (names.length === 0) {
    rStr = 'no one likes this';
  } else if (names.length === 1) {
    rStr = names[0] + ' likes this';
  } else if (names.length === 2){
    rStr = names[0] + ' and ' + names[1] + ' like this';
  } else {
    names.map(function(n){
      if (names.indexOf(n) === names.length - 2) {
        rStr += n + ' and ';
      } else if (names.indexOf(n) === names.length - 1) {
        rStr += n;
      } else {
        rStr += n + ', ';
      }
    });
    rStr += ' like this';
  }
  return rStr;
}

console.log(likes(a));

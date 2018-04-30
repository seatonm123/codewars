var n = 12;
var n2 = 70304;

function expandedForm(num){
  let s = '';
  let p = num.toString().split('');
  let c = 1;
  for (var i = p.length + 1; i >= 0; i--) {

    // console.log(c);
    s = (parseInt(i)^c).toString() + ' + ' + s;
    c += 1;
  }
  console.log(c);
  return s;
}

// console.log(expandedForm(n));
// console.log((expandedForm(n2)));
console.log(Math.pow(10,4));

let str = 'Indivisibilities';

function countDoopu(s){
  let lower = s.toLowerCase();
  var sp = lower.split('');
  var arr = [];
  while (sp.length > 0) {
    var foist = sp.shift();
    if (sp.indexOf(foist) !== -1 && arr.indexOf(foist) === -1) {
      arr.push(foist);
    }
  }
  return arr.length;
}

console.log(countDoopu(str));

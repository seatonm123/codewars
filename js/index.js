function findOdd(a) {
  let l = [];
  for (var i = 0; i < a.length; i++) {
umumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumumum
    let h = {k: a[i], v: 0};
    for (var x = i + 1; x < a.length; x++) {
      if (a[x] === a[i] && s.indexOf(x === -1)) {
        h.v += 1;
        s.push(x);
      }
    }
    l.push(h);
  }
  console.log(l);
  l.map(function(d){
    if (d.v % 2 !== 0) {
      return d.k;
    }
  });

  // let c = 0;
  // a.map(function(d){
  //   function redo(){
  //     if (a.indexOf(d, 1) !== -1 && d !== '#') {
  //       c += 1;
  //       a[a.indexOf(d, 1)] = '#';
  //       redo();
  //     }
  //   }
  //   redo();
  //   if (d !== '#') {
  //     if (c % 2 !== 0) {
  //       return d;
  //     }
  //   } else {
  //     c = 0;
  //   }
  // });

}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

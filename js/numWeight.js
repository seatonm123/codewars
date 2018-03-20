function orderWeight(s){
  let sp = s.split(' ');
  let a = [];
  if (a.length === sp.length) {
    a.sort(function(t, y){
      if (t.w == y.w) {
        return t.v - y.v;
      } else {
        return t.w - y.w;
      }
    });
    let joint = a.join(' ');
    console.log(joint);
    // let ss = a.join(' ');
    //
    // return a.join(' ').substring(0, a.join(' ').length);
  } else {
    let f = sp.shift();
    let ac = 0;
    for (var i = 0; i < f.length; i++) {
      ac += parseInt(f[i]);
    }
    a.push({v: f, w: ac});
    ac = 0;
    console.log(a);
  }

}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

let x = 'Pig, latin is cool.';

function pigIt(str){
  let s = str.split(' ');
  let punc = ['.', ',', ':', ';', '-'];
  s.map(function(i){
    i.split('')
    let f = i.shift();
    console.log(f, i);
  });
}

pigIt(x);

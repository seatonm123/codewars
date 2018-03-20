function GetSum( a,b )
{
   let uA = [a,b]
   let sA = uA.sort(function(a, b){ return a - b });
   let z = sA[0];
   for (i = sA[0] + 1; i <= sA[1]; i++){
     z += i;
   }
   return z;
}

//====INPUT====//

var n=76;

//xử lý//

//var chuc= Math.ceil(n/10) ;
var chuc= Math.floor(n/10);
var donVi= n% 10;

var sum = chuc + donVi;

//====OUTPUT====//

console.log("Tổng 2 ký số của số N:", sum);


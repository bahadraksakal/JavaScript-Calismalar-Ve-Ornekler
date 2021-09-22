/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var sehirler = ["Bursa","İzmir","İstanbul","Ankara","Antalya","Mersin"];
for (var i = 0; i < sehirler.length; i++) {
    console.log(sehirler[i]);
}
var j=0;
while (j<10) {
    console.log(j);
}
do{
    console.log("do while: "+j);
}while(j>12);

sehirler.forEach(function(sehir){
        console.log(sehir);
});
// sehirlerin içinde her elemanı gezer ve sehir referansına atar.


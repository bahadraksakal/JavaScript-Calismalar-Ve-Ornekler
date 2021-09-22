document.getElementById("bio").innerHTML="22.09.2021 Hava güneşli. Bio gitti.";

var p1 = document.getElementById("p1");
var mesaj = document.getElementById("mesaj");
mesaj.innerHTML = p1.innerHTML;

var tumListeler=document.getElementsByTagName("ul"); // tüm ul lere ulaşırız , dönüştipi bir arraydir.
var sehirler=tumListeler[0];
var tumElemanlar=sehirler.getElementsByTagName("li");
for (var i = 0; i < tumElemanlar.length; i++) {
    console.log(tumElemanlar[i].innerHTML); // innerHTML demez isek bize komple li yi verir.
}

var classElemanlari= document.getElementsByClassName("intro1");
console.log(classElemanlari[0].innerHTML);
console.log(classElemanlari[1].innerHTML);


var isimElemanları=document.getElementsByName("musteriAdi");// name musteri adi olan elementlere ulaşır
console.log("getElementsByName:  "+isimElemanları[0].value);


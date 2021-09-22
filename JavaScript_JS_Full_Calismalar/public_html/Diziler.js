/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sayilar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// sayiler[0]===1  true
// sayiler[2]===3  true
// javadaki gibi
var randDizi = ["Bursa",12,true,false,"Edirne"];
// hepsi kendi cinsinde tutulur ve hata almayız
// randDizi[1] === "Bursa" true
// randDizi[2]=== 12 true
// randDizi[3]===true   true 
var FonksiyonDizisi = [
    function selamVer(){
        console.log("selamlar");
    },
    function topla(a,b){
        return a+b;
    },
    function sehirlerYaz(){
        console.log("bursa");
        console.log("ankara");
        console.log("izmir");
    }
    // fonksiyonların arasına virgül koyulur.    
];
// FonksiyonDizi[1]; dersek topla fonksiyonun kendisine komple ulaşırız
//FonksiyonDizisi[1])(); dersek topla fonksiyonu çalışır a+b yi döndürür.
var sehirler = ["bursa","istanbul","izmir","ankara"];
sehirler.pop(); // bize ankrayı verir ve ankrayı diziden siler
sehirler.shift(); // diziyi sola kaydır en solu bana ver
//yani popun zıttı ilk elemanı bize verir ve diziden siler.
sehirler.push("adana"); //dizinin sonuna ekler
//ve bize dizinin lenght ini döndürür
//
//iki diziyi birbirine eklemek
sehirler.concat(["mersin","antalya","muğla"]);
//içeri verilen diziyi sona ekler ve yeni bir dizi döndürür sehirler içeriği değişmez
// atama operatörü lazım
sehirler=sehirler.concat(["mersin","antalya","muğla"]); // normal kullanımı
sehirler.sort();// isme göre küçükten büyüğe sıralar ve dizinin içeriğini değiştir. 
sehirler.length; // lenght bir fonksiyon değildir bir özelliktir. // bize eleman sayısını verir




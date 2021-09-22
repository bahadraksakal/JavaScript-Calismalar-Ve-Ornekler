/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var kisi = {
    name : "Bahadır",
    surname : "Aksakal",
    old : 20,
    email : "bahadraksakal201@gmal.com",
    friends : ["emirhan","furkan","emirali"],
    selamver : function(){
        console.log("fonksiyon çalıştı");
    }
    
};
//kisi.old bize 20 yi verir;
kisi.friends[1]; // bize furkanı verir
kisi.name="Bahox"; // name artık Bahox
console.log(kisi); // yaparsak  {süslü parantezler içinde sırayla he rşeyi detaylıca yazar}.
kisi.selamver();// ile fonskiyonu çalıştırabiliriz.


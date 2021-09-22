console.log("---index2.js---");
var kullanilar=[
    {usarname : "Bahadr",sifre: "12345"},
    {usarname : "Levent",sifre: "11111"},
    {usarname : "Emirhan",sifre: "3333"},
    {usarname : "Furkan",sifre: "7777777"},
    {usarname : "Emirali",sifre: "22"}    
];
var twitler = [
    {usarname : "Bahadr", twit: "BAHOX"},
    {usarname : "Levent", twit: "Benim adım levent"},
    {usarname : "Emirhan",twit: "Merhaba, ben emirhan"},
    {usarname : "Furkan", twit: "Merhaba ben furkan"},
    {usarname : "Emirali",twit: "Selam Ben Emirali"}      
];

var usarname = prompt("Usarnami giriniz");
var password = prompt("Sifre giriniz");

function giris(usarname,password){
    for (var i = 0; i < kullanilar.length; i++) {
        if ((usarname === kullanilar[i].usarname && password===kullanilar[i].sifre)) {
            console.log(twitler);
            return true;            
        }
    }
    console.log("kullanıcı adı yada sifre hatalı");
}

giris(usarname,password);


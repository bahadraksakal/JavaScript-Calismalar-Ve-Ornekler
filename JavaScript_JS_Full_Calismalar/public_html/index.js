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
    if ((usarname === kullanilar[0].usarname && password===kullanilar[0].sifre) ||
        (usarname === kullanilar[1].usarname && password===kullanilar[1].sifre) ||
        (usarname === kullanilar[2].usarname && password===kullanilar[2].sifre) ||
        (usarname === kullanilar[3].usarname && password===kullanilar[3].sifre) ||
        (usarname === kullanilar[4].usarname && password===kullanilar[4].sifre) ) {
        console.log(twitler);
    }else {
        console.log("kullanıcı adı yada sifre hatalı");
    }

}

giris(usarname,password);

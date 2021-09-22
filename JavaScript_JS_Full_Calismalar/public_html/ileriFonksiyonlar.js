var selamFonksiyonu=function selam(){
    console.log("Selamlar JS");
};
// selam(); dersek hata alırız çünki fonksiyonu referans bir değişkene atadık
// artık fonksiyona o referans ile ulaşırız.
//fonksiyonlarda referans tiptir.
selamFonksiyonu(); // bu kullanım doğrudur

const selamFonksiyonu2= ()=>{
    console.log("Selamlar JS--2");
};
selamFonksiyonu2();
// yeni nesil fonksiyon yazımı.
//fonk refransları genelde const tanımlanır
const selamFonksiyonu3= ()=>console.log("Selamlar JS--3");
//bir satırdan fazla ise curly bracket kullanılır.
selamFonksiyonu3();
// bu kullanımda doğrudur çalışır
let metin="mesaj: Hello JS";
const selamFonksiyonu4= (mesaj)=>console.log("Selamlar JS--4 ||  "+mesaj);
selamFonksiyonu4(metin);

let Topla= (sayi1,sayi2) => {
    return sayi1+sayi2;
};
console.log("return olan sonuc: "+Topla(3,14+5));
console.log("Fonksiyonun refransı olan değişken: "+Topla);

//Dizler

const dizi=[1,2,3,4,5,6];
const kareDizisi=[];
dizi.forEach((sayi)=>{
   console.log("dizi: "+sayi);
   kareDizisi.push(sayi*sayi);
});

kareDizisi.forEach(sayi=>{
    console.log("kareDizisi: "+sayi); 
});

//MAP

const mapDizi = dizi.map( sayi => sayi*3 ); // map fonk. içinde curly bracket kullanamayız.
console.log("MapDizi: "+mapDizi);

//FİLTER

const filteredDizi= dizi.filter(sayi => sayi>3); // bunda da curly bracket açamayız
// her bir elemanı tek tek gez
// eğer sayi büyük ise 3 ten onu yeni diziye ata.
console.log("filteredDizi:  "+filteredDizi); 

//reduce kümülatif toplama
// burada acc fonksiyonun ikinci değeridir default olarak sıfırdır.
const dizininToplami=dizi.reduce( (acc,sayi) =>{
    return acc+sayi; 
});
//2. parametre ye denk gelir deault değeri 0 dır.
console.log("dizi reduce: "+dizininToplami);





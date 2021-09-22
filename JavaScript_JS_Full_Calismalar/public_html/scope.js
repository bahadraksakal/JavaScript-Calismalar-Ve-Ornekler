var sayi=10;
var sayi=12; 
// iki kere sayi tanımlayınca hata almayız ve büyük projelerde ciddi sorunlara sebep olur
//bu sorundan kurtuşmak için var yerine let keyword ünü kullanırız.
let sehir="Bursa";
// let sehir="İzmir";   --hata alırız js dosyası komple patlar
// bu durumda consolda bir hata mesajı alırız ve  aynı referansı iki kere tanımladığımızı anlamış oluruz
// bir js sayfasının hepsi sanki main metodunda tanımlanmış gibi davranır // yani aynı scope içinde bulunur.
function mesajver(){
    let mesaj="hello world";
}
// buradaki mesaja dışardan erişemeyiz scope bitince mesaj yok olur normal scope mantığı burda da geçerli


//Enterasan bir durum -1
for (var i = 0; i < 10; i++) {
    // var - let farkı
}
console.log(i);
// burada i ye ulaşabiliriz i sanki main içinde tanımlanmış yani ana scope da (document-scope) tanımlanmış gibi davranır.

//Enterasan bir durum -2
for (let i = 0; i < 10; i++) {
     // var - let farkı
}
// ---   console.log(i);   // erişemeyiz
// let key-word ü ile i yi tanımlarsak for bitince i nin yaşam döngüsü biter. i ye dışardan erişemeyiz.

//-Const yapısı    değer ve referans farkı
const url="bahadraksakal@gmail.com";
// url="anthings";  yaparsam hata alırım cont değişemez.
const sehirler=["Bursa","Ankara"];
sehirler.push("İzmir"); // hata vermez çünkü sehirler referans tiptir // diziler ve nesneler referans tiplerdir.
//sehirler bellekte hala aynı yeri refrans ediyor.
//sehirler=["Bursa"]; // dediğimiz zaman bellekte yeni bir yere dizi oluştururuz pointerin ereferans ettiği nokta değişir
//referans edilen nokta değiştiği için hata alırız.
sehirler[0]="Elma"; // pointerin işaret ettiği adres değişmeyeceği için burda da hata almayız.
console.log(sehirler);




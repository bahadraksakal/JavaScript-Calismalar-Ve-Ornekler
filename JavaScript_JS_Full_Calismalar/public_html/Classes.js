class Personel{
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }
    kaydet(){
        console.log(`Personel Kaydedildi ${this.ad} ${this.soyad}`);
    }
}

let personel_0 = new Personel("bahadr","aksakal");
personel_0.kaydet();
//personel_0.numara=05350330000 //  bu şekilde bir atama yaparsak personelin içinde otomatik bir veri tipi daha oluşturulur-.
// ve bundan sonra personel_0.numara diyerek o değişkene ulaşabiliriz. bu esneklik JS için ciddi bri dezavantajdır.
console.log(personel_0.ad);
console.log(personel_0.soyad);

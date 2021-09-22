var node=document.getElementById("mesaj1");
console.log(node.childNodes[0].nodeValue);

var baslik=document.createElement("h2");
var node= document.createTextNode("Merhaba JS ");
baslik.appendChild(node);
var div0=document.getElementById("div0");
div0.insertBefore(baslik,document.getElementById("mesaj1")); // before ile ekliyoruz  mesaj1 id değişkenin onune ekle
alert("mesaj id li element siliniyor...");
div0.removeChild(document.getElementById("mesaj1"));

var baslik2=document.createElement("h2");
var node2= document.createTextNode("Merhaba JS 2");
baslik2.appendChild(node2);
var mesaj2=document.getElementById("mesaj2");
div0.replaceChild(baslik2,mesaj2); // basligi mesaj 2 nin yerine koy oto remove.
        



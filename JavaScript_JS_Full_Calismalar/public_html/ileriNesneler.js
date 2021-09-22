/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var dizi0=[1,2];
//var dizi1=[1,2];
//dizi0===dizi1; // bunun cevabı false dir. Çünki dizilerde nesneler gibi refrans odaklıdır.
//dizi0==dizi1; // true dir.
//
//this===window // truedir  main class ımız window
//
//this.alert("merhaba");
//alert("merhaba2");
//window.alert("Merhaba3"); // hepsi aynıdır  window  oto gelir  çünkü çalıştığımız class window class i  .

const productService ={
    ekle : ()=> {
        console.log("this: "+this);
    },
    ekle2 : function(){
      console .log("this2: "+this); 
    }
};
productService.ekle(); // neden ekle - 0  için değişkeni bi göremedi
productService.ekle2();


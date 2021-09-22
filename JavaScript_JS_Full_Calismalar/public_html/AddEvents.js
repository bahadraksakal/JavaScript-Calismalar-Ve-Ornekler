var bahadrh1=document.getElementById("MyName").addEventListener("click",rengiDegistir);
// metot parantezlerino koyarsak oto çalışır  bi anlamı kalmaz // dont put (); :)
var sayac=0;
function rengiDegistir(){    
    sayac++;
    if (sayac===2) {
        document.getElementById("p1DIV").style.color="black";
        sayac=0;
        return 0;
    }
     document.getElementById("p1DIV").style.color="green";
     return 0;    
}

var bahadrh1_2=document.getElementById("MyName").addEventListener("mouseover",uzerinde);
function uzerinde(){
    document.getElementById("MyName").style.backgroundColor="orange";
}
var bahadrh1_3=document.getElementById("MyName").addEventListener("mouseout",Nouzerinde);
function Nouzerinde(){
    document.getElementById("MyName").style.backgroundColor="gray";
}




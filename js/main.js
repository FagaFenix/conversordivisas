var monedas=["dolar","peso mexicano","peso colombiano","euro","libra esterlina"];

function captura1(){
    moneda1=Number(prompt(`Por favor digita el numero correspondiente a la divisa a convertir 
    1.Dolar
    2.Peso Mexicano
    3.Peso Colombiano
    4.Euro
    5.Libra Esterlina`))
    
    if (moneda1==1){
        moneda1=monedas[0]
        console.log(moneda1)
    }else if(moneda1==2){
        moneda1=monedas[1]
        console.log(moneda1)
    }else if(moneda1==3){
        moneda1=monedas[2]
        console.log(moneda1)
    }else if(moneda1==4){
        moneda1=monedas[3]
        console.log(moneda1)
    }else if(moneda1==5){
        moneda1=monedas[4]
        console.log(moneda1)
    }else{
        alert(`Por favor ingresa una moneda a convertir`)
    }
}

function captura2(){
    moneda2=Number(prompt(`Por favor digita el numero correspondiente a la divisa a convertir 
    1.Dolar
    2.Peso Mexicano
    3.Peso Colombiano
    4.Euro
    5.Libra Esterlina`))
    
    if (moneda2==1){
        moneda2=monedas[0]
        console.log(moneda2)
    }else if(moneda2==2){
        moneda2=monedas[1]
        console.log(moneda2)
    }else if(moneda2==3){
        moneda2=monedas[2]
        console.log(moneda2)
    }else if(moneda2==4){
        moneda2=monedas[3]
        console.log(moneda2)
    }else if(moneda2==5){
        moneda2=monedas[4]
        console.log(moneda2)
    }else{
        alert(`Por favor ingresa una moneda a convertir`)
    }
}

function convertir(){
    var valor=document.getElementById(valor);
    var resultado=0;    

    if(moneda1==1 && moneda2==1){
        alert(`Haz ingresado convertir de dolar a dolar`)
    }else((moneda1==1 && moneda2==2))
       resultado=valor*20.71
       console.log(valor)
       alert(resultado)    
    }

    

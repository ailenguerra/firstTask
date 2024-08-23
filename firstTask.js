let nombre1 = prompt("Ingrese el primer nombre");
let nombre2 = prompt("Ingrese el segundo nombre");
let nombre3 = prompt("Ingrese el tercer nombre");
let nombre4 = prompt("Ingrese el cuarto nombre");
let nombre5 = prompt("Ingrese el quinto nombre");

let mensaje = "Los nombres ingresados son:" + nombre1 + ", " + nombre2 + ", " + nombre3 + ", " + nombre4 + ", " + nombre5;

alert(mensaje);

let nombres = [nombre1, nombre2, nombre3, nombre4, nombre5];

 function mezclarArray(array) {
     for (let i = array.length -1;i >= 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         let temp = array[i];
         array[i] = array[j];
         array[j] = temp;
     }
     return array;
 }

 nombres = mezclarArray(nombres);

 let mensajeMezclado = "Los nombres mezclados son " + nombres.join(" ");

 alert(mensajeMezclado);





























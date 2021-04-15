//var cifra = "";
//var acumulado = 0;
//var sumar = false;
//var restar = false;
//var multiplicacion = false;
//var p_operacion = true;
//
//function agregarNumeros(numero) {
//    document.getElementById("result").value = cifra + numero;
//    cifra = document.getElementById("result").value;
//}
//
//function suma() {
//    if (restar) {
//        acumulado = acumulado - parseInt(cifra);
//        document.getElementById("result").value = acumulado;
//
//    } else {
//        acumulado = acumulado + parseInt(cifra);
//        document.getElementById("result").value = acumulado;
//    }
//
//    cifra = "";
//    sumar = true;
//    restar = false;
//    multiplicacion = false;
//    p_operacion = false;
//}
//
//function resta() {
//    if (p_operacion == false) {
//        if (sumar) {
//            acumulado = acumulado + parseInt(cifra);
//            document.getElementById("result").value = acumulado;
//
//        } else {
//            acumulado = acumulado - parseInt(cifra);
//            document.getElementById("result").value = acumulado;
//        }
//
//    } else {
//        acumulado = parseInt(cifra);
//        p_operacion = false;
//    }
//    
//    cifra = "";
//    sumar = false;
//    restar = true;
//    multiplicacion = false;
//}
//
//function multiplicar() {
//    if (restar) {
//        acumulado = acumulado - parseInt(cifra);
//        document.getElementById("result").value = acumulado;
//
//    } else {
//        acumulado = acumulado * parseInt(cifra);
//        document.getElementById("result").value = acumulado;
//    }
//    
//    cifra = "";
//    sumar = false;
//    restar = false;
//    multiplicacion = true;
//    p_operacion = false;
//}
//
//function result() {
//    if (sumar == true) {
//        document.getElementById("result").value = acumulado + parseInt(cifra);
//    } else if (restar) {
//        document.getElementById("result").value = acumulado - parseInt(cifra);
//    } else if (multiplicacion) {
//        document.getElementById("result").value = acumulado * parseInt(cifra);
//    }
//    acumulado = parseInt(document.getElementById("result").value);
//    cifra = 0;
//}
//
//function borrar() {
//    p_operacion = true;
//    cifra = "";
//    acumulado = 0;
//    document.getElementById("result").value = 0;
//}
//
//

var operandoa;
var operandob;
var operacion;

function init(){
  //variables
  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
}
//Eventos de click
  uno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
  }
  reset.onclick = function(e){
      resetear();
  }
  suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
  }
  function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}
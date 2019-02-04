document.getElementById("btn-encriptar").addEventListener("click", encriptar);
document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
document.getElementById("friend").addEventListener("click",mostarSegundaPantalla );
document.getElementById("family").addEventListener("click",mostarSegundaPantalla);
document.getElementById("cople").addEventListener("click",mostarSegundaPantalla );
document.getElementById("partner").addEventListener("click", mostarSegundaPantalla);



//valores y variables para encriptar mensaje
function encriptar() {
  var message = document.getElementById("text").value.toUpperCase();

  var key = Number(document.getElementById("key").value);
  var output = document.getElementById("output");

  var result = cipher.encode(key, message);

  output.value = result;
}


//valores y variables para desencriptar
function desencriptar() {
  var message = document.getElementById("text").value.toUpperCase();

  var key = Number(document.getElementById("key").value);
  var output = document.getElementById("output");

  var result = cipher.decode(key, message);
  output.value = result;
}


//funcion para mostrar una segunda seccion
function mostarSegundaPantalla() {
    var secondEscreen = document.getElementById("second-screen")
    secondEscreen.hidden = false
    

}
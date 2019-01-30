document.getElementById("btn-encriptar").addEventListener("click", encriptar);
document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);

function encriptar() {
  var message = document.getElementById("text").value.toUpperCase();

  var key = Number(document.getElementById("key").value);
  var output = document.getElementById("output");

  var result = window.cipher.encode(message, key);

  output.value = result;
}

function desencriptar() {
  var message = document.getElementById("text").value.toUpperCase();

  var key = Number(document.getElementById("key").value);
  var output = document.getElementById("output");

  var result = window.cipher.decode(message, key);
  output.value = result;
}

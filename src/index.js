document.getElementById("btn-encriptar").addEventListener("click", encriptar);
document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
document.getElementById("friend").addEventListener("click",() => {
    mostrarSegundaPantalla(5);
});
document.getElementById("family").addEventListener("click",() => {
    mostrarSegundaPantalla(6);
});
document.getElementById("couple").addEventListener("click",() => {
    mostrarSegundaPantalla(7); 
} );
document.getElementById("partner").addEventListener("click", () => {
    mostrarSegundaPantalla(8); 
});
document.getElementById("crear").addEventListener("click",mostarPantallaA );
document.getElementById("descubrir").addEventListener("click", mostarPantallaB);


var codigoDeNivelDeConocido;


//valores y variables para encriptar mensaje
function encriptar() {
  var message = document.getElementById("text").value.toUpperCase();
  var nombreParaCodigo = document.getElementById("text-name").value.toUpperCase();
  
  var codigoCompleto = convertirNombreYObtenerCodigo(nombreParaCodigo);

  var output = document.getElementById("output");

  var result = cipher.encode(codigoCompleto, message);
    

  output.value = result;


}


//valores y variables para desencriptar
function desencriptar() {
  var message = document.getElementById("text2").value.toUpperCase();
  var nombreParaCodigo = document.getElementById("name-decode").value.toUpperCase();
  
  var codigoCompleto = convertirNombreYObtenerCodigo(nombreParaCodigo);
    console.log(codigoCompleto);
 
  var output = document.getElementById("output-partB");

  var result = cipher.decode(codigoCompleto, message);
  output.value = result;
}


//funcion para mostrar una segunda seccion
function mostrarSegundaPantalla(codigoDeNivelDeConocidoPorBoton) {
    codigoDeNivelDeConocido = codigoDeNivelDeConocidoPorBoton;
    var secondEscreen = document.getElementById("second-screen");
    secondEscreen.hidden = false;
    
}
//Mostrar parte A 
function mostarPantallaA() {
    var thirdEscreenA = document.getElementById("third-PartA");
    thirdEscreenA.hidden = false;
    var thirdEscreenB = document.getElementById("third-PartB");
    thirdEscreenB.hidden = true;
    

}

//Mostrar parte B
function mostarPantallaB() {
    var thirdEscreenA = document.getElementById("third-PartA");
    thirdEscreenA.hidden = true;
    var thirdEscreenB = document.getElementById("third-PartB");
    thirdEscreenB.hidden = false;
    

}

function convertirNombreYObtenerCodigo(nombreParaElCodigo) {

    var codigoDeNombre = 0;
    for (let index = 0; index !== nombreParaElCodigo.length; index++) {
        codigoDeNombre += nombreParaElCodigo.charCodeAt(index);
    }
    
    var codigoCompleto = codigoDeNivelDeConocido + codigoDeNombre;

    if(codigoCompleto % 26 == 0){
        codigoCompleto = 1;
    } else {
        codigoCompleto = codigoCompleto % 26
    }

    return codigoCompleto;
    
}
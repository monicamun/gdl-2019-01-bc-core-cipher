var buttons = {
 friend: document.getElementById("friend"),
 family: document.getElementById("family"),
 couple: document.getElementById("couple"),
 partner:document.getElementById("partner")

};

document.getElementById("btn-encriptar").addEventListener("click", encriptar);
document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
buttons.friend.addEventListener("click",() => {
    changeButtonClass(buttons.friend);
    mostrarSegundaPantalla(5);
});
buttons.family.addEventListener("click",() => {
    changeButtonClass(buttons.family);
    mostrarSegundaPantalla(6);
});
buttons.couple.addEventListener("click",() => {
    changeButtonClass(buttons.couple);
    mostrarSegundaPantalla(7); 
} );
buttons.partner.addEventListener("click", () => {
    changeButtonClass(buttons.partner);
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
    document.getElementById("third-PartB").reset();

    

}

//Mostrar parte B
function mostarPantallaB() {
    var thirdEscreenA = document.getElementById("third-PartA");
    thirdEscreenA.hidden = true;
    var thirdEscreenB = document.getElementById("third-PartB");
    thirdEscreenB.hidden = false;
    document.getElementById("third-PartA").reset();
    

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
        codigoCompleto = codigoCompleto % 26;
    }

    return codigoCompleto;
    
}
function changeButtonClass(currentButton){
    buttons.friend.classList.remove("active");
    buttons.family.classList.remove("active");
    buttons.couple.classList.remove("active");
    buttons.partner.classList.remove("active");

    currentButton.classList.add("active");

   



}
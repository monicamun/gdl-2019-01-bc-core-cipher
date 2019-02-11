//creo un objeto para poder reutilizar los id de mis botones
var buttons = {
 friend: document.getElementById("friend"),
 family: document.getElementById("family"),
 couple: document.getElementById("couple"),
 partner:document.getElementById("partner")

};
// se escuchan todos los eventos del DOM
document.getElementById("btn-encriptar").addEventListener("click", code);
document.getElementById("btn-desencriptar").addEventListener("click", decode);

buttons.friend.addEventListener("click",() => {
    changeButtonClass(buttons.friend);
    secondScreen(5);
});
buttons.family.addEventListener("click",() => {
    changeButtonClass(buttons.family);
    secondScreen(6);
});
buttons.couple.addEventListener("click",() => {
    changeButtonClass(buttons.couple);
    secondScreen(7); 
} );
buttons.partner.addEventListener("click", () => {
    changeButtonClass(buttons.partner);
    secondScreen(8); 
});
document.getElementById("crear").addEventListener("click",mostarPantallaA );
document.getElementById("descubrir").addEventListener("click", screenB);


var codigoDeNivelDeConocido;


//valores y variables para encriptar mensaje
function code() {
  var message = document.getElementById("text").value.toUpperCase();
  var nameCode = document.getElementById("text-name").value.toUpperCase();
  
  var codeComplete = convertNameCode(nameCode);

  var output = document.getElementById("output");


  var result = cipher.encode(codeComplete, message);

  
    

  output.value = result;

  



}


//valores y variables para desencriptar
function decode() {
  var message = document.getElementById("text2").value.toUpperCase();
  var nameCode = document.getElementById("name-decode").value.toUpperCase();
  
  var codeComplete = convertNameCode(nameCode);
    console.log(codeComplete);
 
  var output = document.getElementById("output-partB");

  var result = cipher.decode(codeComplete, message);
  output.value = result;
}


//funcion para mostrar una segunda seccion
function secondScreen(codigoDeNivelDeConocidoPorBoton) {
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
function screenB() {
    var thirdEscreenA = document.getElementById("third-PartA");
    thirdEscreenA.hidden = true;
    var thirdEscreenB = document.getElementById("third-PartB");
    thirdEscreenB.hidden = false;
    document.getElementById("third-PartA").reset();
    

}


//funcion que toma un string y un numero predeterminado en los botones para convertirlos en el offset
function convertNameCode(nameForCode) {

    var nameCode = 0;
    for (let index = 0; index !== nameForCode.length; index++) {
        nameCode += nameForCode.charCodeAt(index);
    }
    
    var completeCode = codigoDeNivelDeConocido + nameCode;

    if(completeCode % 26 == 0){// en esta parte de la funcion corregimos el error que se peuda generar al seleccionar un numero que te lleve a posicionarte en el indice 0 o 65
        completeCode = 1;
    } else {
        completeCode = completeCode % 26;
    }

    return completeCode;
    

 //funcion para mantener seleccionado uno de los botones   
}
function changeButtonClass(currentButton){
    buttons.friend.classList.remove("active");
    buttons.family.classList.remove("active");
    buttons.couple.classList.remove("active");
    buttons.partner.classList.remove("active");

    currentButton.classList.add("active");

   



}
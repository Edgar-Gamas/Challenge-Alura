/* 
a - ai
e - enter
i - imes
o - ober
u - ufat
*/


function encriptado(){
    var texto = document.querySelector("#frase").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace
    (/i/gi, "imes").replace(
    /a/gi, "ai").replace
    (/o/gi, "ober").replace
    (/u/gi, "ufat");
    document.querySelector(".respuesta").value = textoCifrado;
    document.querySelector("#frase").value;
}

function desencriptar(){
    var texto = document.querySelector("#frase").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace
    (/imes/gi, "i").replace
    (/ai/gi, "a").replace
    (/ober/gi, "o").replace
    (/ufat/gi, "u");
    document.querySelector(".respuesta").value = textoCifrado;
    document.querySelector("#frase").value;
    }

    function copiar(){
        var contenido = document.querySelector("#respuesta");
        contenido.select();
        document.execCommand("copy");
    
    }
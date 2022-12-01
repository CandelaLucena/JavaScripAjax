window.onload = function(){
    var opciones = document.getElementById("idboton");
    opciones.addEventListener("click", sacardatos);
}

function sacardatos(){
    var XMLHttpRequestObject = false;  

    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "fichero.json");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objetojavascript = JSON.parse(XMLHttpRequestObject.responseText);
                objeto.innerHTML = objetojavascript.rojo+" "+objetojavascript.verde;
            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
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
        XMLHttpRequestObject.open("GET", "fichero.js");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                eval(XMLHttpRequestObject.responseText);
            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
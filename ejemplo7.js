var XMLHttpRequestObject = false;  

if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        ruta = "fichero2.php?dni=123456789L"
        XMLHttpRequestObject.open("GET", ruta);
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
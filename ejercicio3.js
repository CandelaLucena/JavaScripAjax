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
        var texto = "texto=Esto es texto";
        XMLHttpRequestObject.open("POST", "fichero3.php");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }   

        }
        XMLHttpRequestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XMLHttpRequestObject.send(texto);
    }
}
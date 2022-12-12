window.onload = function(){
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", iniciarPrograma);
}
function iniciarPrograma(){
    var XMLHttpRequestObject = false;  

    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        XMLHttpRequestObject.open("POST", "fichero1.php");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
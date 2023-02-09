$(document).ready(function(){

    $("#color").mouseover(function(){
        $("#contenedor").cambiarcolor();
    })

    $("#imagen").mouseover(function(){
        $('#imagen').fadeOut(1200);
        $('#imagen').fadeIn(1200);
    })

})
window.onload = function(){
    llamadasacardatos();
}
var llamadasacardatos = function sacardatos(){
    var XMLHttpRequestObject = false;  

    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "fichero.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
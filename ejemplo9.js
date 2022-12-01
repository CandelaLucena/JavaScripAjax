var XMLHttpRequestObject = false;  

if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "fichero3.php");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
window.onload = function(){
    var opciones = document.getElementById("idboton");
    opciones.addEventListener("click", sacardatos);
    opciones.addEventListener("click", carga);
}

async function sacardatos(){
    setTimeout(() => {
        var XMLHttpRequestObject = false;  

        if (window.XMLHttpRequest) {
            XMLHttpRequestObject = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
        }

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
    }, 1000);
}

async function carga(){
    var objeto = document.getElementById("imagen").src="carga.gif";
}
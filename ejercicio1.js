window.onload = function(){
    var formulario = document.getElementById("botonEnviar");
    formulario.addEventListener("click", iniciarPrograma);
}
function iniciarPrograma(){
    var XMLHttpRequestObject = false;  
    var nombre = document.getElementById("stringNombre").value;
    var correo = document.getElementById("stringCorreo").value;
    var datos = "nombre="+nombre+"&"+"correo="+correo;

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
        XMLHttpRequestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XMLHttpRequestObject.send(datos);
    }
    document.getElementById("stringNombre").value="";
    document.getElementById("stringCorreo").value="";
}
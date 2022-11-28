var XMLHttpRequestObject = false;  

if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(datos, idDiv){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById(idDiv);
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = function(){
            alert("hola");
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                XMLHttpRequestObject = peticionHttp.responseXML; 
                var root = XMLHttpRequestObject.getElementsByTagName("Catalog")[0];
                var tope = root.getElementsByTagName("Book")[0].length;
                for(var i = 0; i < tope; i++){
                    libro = root.getElementsByTagName("Book")[i];
                    autor = libro.getElementsByTagName("Author")[0].firstChild.nodeValue;
                    titulo = libro.getElementsByTagName("Title")[0].firstChild.nodeValue;
                    genero = libro.getElementsByTagName("Genre")[0].firstChild.nodeValue;
                    precio = libro.getElementsByTagName("Price")[0].firstChild.nodeValue;
                    publicado = libro.getElementsByTagName("PublishDate")[0].firstChild.nodeValue;
                    descripcion = libro.getElementsByTagName("Description")[0].firstChild.nodeValue;
                    var respuesta = "Autor: "+autor+" Titulo: "+titulo+" Genero: "+genero+" Precio: "+precio+" Fecha: "+publicado+" Descripcion: "+descripcion;
                    objeto.innerHTML += respuesta;
                }
            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
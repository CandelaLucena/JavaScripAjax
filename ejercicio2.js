$(document).ready(function(){
    $("#boton").click(function(){
        $("#primerDiv").load("programa.html",function(){
            alert("Has cargado la pagina");
          });
    });
})
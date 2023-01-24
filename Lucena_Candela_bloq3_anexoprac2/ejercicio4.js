$(document).ready(function(){
    $("#botonEnviar").click(function(){
        var datos = $("#formulario").serialize();
        $.get("comprobar.php", datos, function (data){
            $("#primerDiv").append(data);
        });
    });
})

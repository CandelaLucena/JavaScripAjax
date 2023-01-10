$(document).ready(function(){
    $("#boton").click(function(){
        $.ajax({
            type: "POST",
            url: "programa.php",
            data: "nombre=Maria&apellido=Garcia",
            success: respuestacorrecta
        });
    });
})
$(document).ready(function(){
    $("#boton").click(function(){
        $.ajax({
            type: "POST",
            url: "programa.txt",
            success: function(texto){
                $("#primerDiv").html(texto);
            },
            error: function(){
                alert("Error");
            },
        });
    });
})
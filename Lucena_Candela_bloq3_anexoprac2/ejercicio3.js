$(document).ready(function(){
    $("#boton").click(function(){
        $.ajax({
            type: "POST",
            url: "programa.js",
            success: function(){
            },
            error: function(){
                alert("Error");
            },
        });
    });
})
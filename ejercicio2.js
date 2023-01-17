$(document).ready(function(){
    $("#boton").click(function(){
        $.ajax({
            type: "POST",
            url: "programa.php",
            data: "data",
            success: function(data){
                $("#primerDiv").html(data);
            },
            error: function(){
                alert("Error");
            },
        });
    });
})
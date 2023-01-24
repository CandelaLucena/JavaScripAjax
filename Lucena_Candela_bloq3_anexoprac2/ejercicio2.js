$(document).ready(function(){
    $("#boton").click(function(){
        setTimeout(function () {
            $('#imagen').hide();
            $.ajax({
                type: "POST",
                url: "programa.php",
                data: "text",
                success: function(data){
                    $("#primerDiv").html(data);
                },
                error: function(errorThrown){
                    alert("Error codigo:"+errorThrown.status);
                },
            });
        }, 2500);
    });

    $("#boton").click(function(){
        $('#imagen').attr('src','cargar.gif');
    });
})
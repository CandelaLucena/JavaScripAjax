$(document).ready(function(){
    $("#boton").click(function(){
        setTimeout(function () {
            $.ajax({
                type: "POST",
                url: "programa.php",
                data: "text",
                success: function(data){
                    $("#primerDiv").html(data);
                },
                error: function(){
                    alert("Error");
                },
            });
        }, 2500);
    });

    $("#boton").click(function(){
        async function cargar() {
            $('#imagen').attr('src','cargar.gif');
        }
    });
})
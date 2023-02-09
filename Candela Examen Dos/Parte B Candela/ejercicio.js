$(document).ready(function(){
    $('body').append('<div id="precio"></div>');   
    if($("#oferta1").is(":checked")==true){
        var precio = 600;
    }else if($("#oferta2").is(":checked")==true){
        var precio = 1000;
    }
    $("#precio").html(precio);
    $("#oferta1").click(function(){
        if($("#oferta1").is(":checked")==true){
            var precio = 600;
            $("#precio").html(precio);
        }
    });
    $("#oferta2").click(function(){
        if($("#oferta2").is(":checked")==true){
            var precio = 1000;
            $("#precio").html(precio);
        }
    });
    
    $.ajax({
        type: "POST",
        url: "fichero.txt",
        success: function(texto){
            $("#informacion").html(texto);
        },
    });
    $("#informacion").hide();        
    if($("#extra").is(":checked")==true){
        $("#informacion").show();
    }else if($("#extra").is(":checked")==false){
        $("#informacion").hide();
    }$("#extra").click(function(){
        if($("#extra").is(":checked")==true){
            $("#informacion").show();
        }else if($("#extra").is(":checked")==false){
            $("#informacion").hide();
        }
    });

    $("#informacion").animate({
        fontSize: "25pt",
        borderWidth: "20px",
    });
    $("#yourElement").css({ top: '100px' });
})


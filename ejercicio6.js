$(document).ready(function(){
    $( function() {
        $( "#accordion" ).accordion();
    } );
    $("#comenzar").click(function(){
        $("p").cambiartamaño();
    });
}) 
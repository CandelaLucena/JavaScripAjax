$(document).ready(function() {
    //basico
    $("#basico").click(function() {
        $("#imagen").hide( "slow" );
        $("#imagen").show( "slow" );
    });
    //animacion
    $("#animacion").click(function() {
        $("#imagen").animate({
            height: "20px",
            width: "10px",
        }, 1000);
        $("#imagen").animate({
            height: "50px",
            width: "400px"
        }, 1000);
    });
    //fundido
    $("#fundido").click(function() {
        $('#imagen').fadeOut(1200);
        $('#imagen').fadeIn(1200);
    });
    //deslizamiento
    $("#deslizamiento").click(function(){
        $("#imagen").hide( "slow" );
        $("#imagen").slideDown("slow");
    });
});
$(document).ready(function(){
    $("#cambiar").click(function() {
        $("#imagen").animate({
            height: "20px",
            width: "10px",
        }, 1000);
    });
})
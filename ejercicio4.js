$(document).ready(function(){
    $("#cambiar").click(function() {
        $("h1").animate({
            color: "#FFC0CB",
            fontSize: "100px",
            backgroundColor: "#000000",
        }, 1000);
    });
})
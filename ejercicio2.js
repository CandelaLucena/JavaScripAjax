$(document).ready(function(){
    $("#saludo").click(function() {
        $('p').fadeIn(1200);
    });
    $("#despedida").click(function() {
        $('p').fadeOut(1200);
    });
})
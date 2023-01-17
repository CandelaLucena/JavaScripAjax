$(document).ready(function(){
    $("#boton").click(function(){
        $.post("programa.php", {nombre:"Candela"}, function (data) {
            $("#primerDiv").append(data);
        })
        //.done(function(){})
        //.error(function(){})
    });
})
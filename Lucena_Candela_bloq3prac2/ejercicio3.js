$(document).ready(function(){
    $("#boton").click(function(){
        $.get("programa.xml", function (xml) {
            $(xml).find("blog").each(function () {
               var name = $(this).attr('name');
               var description = $(this).attr('description');
               var url = $(this).attr('url');
               $("#primerDiv").append(name+" "+description+" "+url+"<br>");
            });
        });
    });
})


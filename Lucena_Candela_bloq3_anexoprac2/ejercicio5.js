$(document).ready(function(){
    $("#boton").click(function(){
        $.getJSON("https://reqres.in/api/users?page=1", function(data){
            $.each( data, function(index, element) {
                if(index=="data"){
                    for (let i = 0; i < element.length; i++) {
                        $("#primerDiv").append(element[i].id+" "+element[i].email+" "+element[i].first_name+" "+element[i].last_name+" "+element[i].avatar+"<br>");
                    }
                }else{
                    $("#primerDiv").append(index);
                    $("#primerDiv").append(element+"<br>");
                }
            });
        });
    });
})
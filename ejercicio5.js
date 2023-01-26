$(document).ready(function(){
    $("#comenzar").click(function() {
        $("div")
            .animate({ left: "+=200" }, 5000 )
            .queue(function() {
                $( this ).addClass( "newcolor" ).dequeue();
            })
            .animate({ left: '-=200' }, 1500 )
            .queue(function() {
                $( this ).removeClass( "newcolor" ).dequeue();
            });
    });
})
$("#comenzar").click(function moverse() {
    $("div")
        .animate({ left: "200" }, 1000 )
        .animate({ top: "200" }, 1000 )
        .animate({ left: "0" }, 1000 )
        .animate({ top: "0" }, 1000);
        moverse();

});

$("#parar").click(function() {
    $("div").stop(true);
});

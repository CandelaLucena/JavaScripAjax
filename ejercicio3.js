$("#comenzar").click(function() {
    $("div")
        .animate({ left: "+=200" }, 1000 )
        .animate({ top: "+=200" }, 1000 )
        .animate({ left: "-=200" }, 1000 )
        .animate({ top: "-=200" }, 1000 )
});

$("#parar").click(function() {
    $("div").stop();
});

jQuery.fn.cambiarcolor = function() {
    this.each(function(){
       $(this).animate({
        color: "#FFC0CB",
    }, 1000);
    });
    return this;
}; 
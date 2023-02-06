jQuery.fn.ocultar = function() {
    this.each(function(){
       elem = $(this);
       elem.hide();
    });
    return this;
}; 
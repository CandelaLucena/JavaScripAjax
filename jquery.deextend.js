$.extend({
    aumentar: function() {
        this.each(function(){
            elem = $(this);
            elem.css("fontSize", "32px");
         });
         return this;
    }
}); 
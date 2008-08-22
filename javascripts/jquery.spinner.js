(function($){
  $.extend({
    Spinner: {
      className:  "spinner",
      spinnerID:  "_spinner_div",
      debug:      false,
      hasFirebug: "console" in window && "firebug" in window.console,
      logger:     function(msg){
                    if(this.debug){
                      msg = "Spinner: " + msg;
                      this.hasFirebug ? console.log(msg) : alert(msg);
                    }
                  }
    }
  });
  
  $.fn.spin = function(options){
    return this.each(function(){
      var spun = $(this);
      if( (spinner = $("#"+spun.attr("id")+$.Spinner.spinnerID+"."+$.Spinner.className)) && spinner.get(0) ){
        $.Spinner.logger("Already spinning.");
        spinner.show();
        return jQuery;
      }
      $(document.createElement('div'))
        .attr({id: spun.attr("id")+$.Spinner.spinnerID, className: $.Spinner.className})
        .css({
          position: "absolute",
          top: spun.offset().top, 
          width: spun.outerWidth(), 
          height: spun.outerHeight()
        })
        .insertBefore(spun);
    });
  };
  
  $.fn.unspin = function(options){
    return this.each(function(){
      $("#"+$(this).attr("id")+$.Spinner.spinnerID+"."+$.Spinner.className).hide();
    });
  };
})(jQuery);
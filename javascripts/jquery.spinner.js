(function($){
  $.extend({
    Spinner: {
      className:    "spinner",
      spinnerID:    "_spinner_div",
      debug:        false,
      hasFirebug:   "console" in window && "firebug" in window.console,
      logger:       function(msg){
                      if(this.debug){
                        msg = "Spinner: " + msg;
                        this.hasFirebug ? console.log(msg) : alert(msg);
                      }
                    },
      unspin:       function(reset) {
                      if(reset){
                        this.logger("Hard reset. Removing all spinning spinners.");
                        $("."+this.className).remove();
                      }
                      else{
                        this.logger("Soft reset. Hiding all spinners");
                        $("."+this.className).hide();
                      }
                    }
      }
    });
    
  $.fn.spin = function(options){
    return this.each(function(){
      var spun = $(this);
      // if( (spinner = $("#"+spun.attr("id")+$.Spinner.spinnerID+"."+$.Spinner.className)) && spinner.get(0) ){
      //   $.Spinner.logger("Already spinning.");
      //   spinner.show();
      //   return jQuery;
      // }
      // (spun.attr("spinning")==true && $.Spinner.logger("Already spinning."))
      
      if((spinner = $("#"+spun.attr("spinner"))) && spinner.get(0)){
        spinner.show();
        $.Spinner.logger("Already spinning.");
        return jQuery;
      }
        
      var spinnerID = $.Spinner.spinnerID + String(Math.random()).substring(2);
      spun.attr({spinner: spinnerID});
      $.Spinner.logger("SpinnerID: "+spinnerID + " Check: " + spun.attr("spinner"));
      $(document.createElement('div'))
        .attr({id: spinnerID, className: $.Spinner.className})
        .css({
          position: "absolute",
          top: spun.offset().top, 
          left: spun.offset().left, 
          width: spun.outerWidth(), 
          height: spun.outerHeight()
        })
        .appendTo($("body"));
    });
  };
  
  $.fn.unspin = function(options){
    return this.each(function(){
      $("#"+$(this).attr("spinner")).hide();
    });
  };
})(jQuery);
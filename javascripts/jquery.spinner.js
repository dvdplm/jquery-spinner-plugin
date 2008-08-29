$(document).ready(function(){
  $("body").spin().unspin(); // Weird "image not showing" bug. :-( Need a better solution
})
if (typeof jQuery == 'undefined') throw("jQuery could not be found.");

(function($){
  $.extend({
    Spinner: {
      debug:        false,          // should print log messages?
      unspinOthers: true,           // should unspin all spinners before spinning new ones?
      className:    "spinner",      // spinner class; if an element is spun using a custom class, the "unspinOthers" will not pick it up. Such elements has to be unspun explicitly.
      spinnerID:    "_spinner_div", // spinner divs have random IDs prefixed with this
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
    
  $.fn.spin = function(){
    var defaults = {
      className:    $.Spinner.className,
      unspinOthers: $.Spinner.unspinOthers,
      spinnerID:    $.Spinner.spinnerID
      }
    var settings = $.extend(defaults, arguments.length != 0 ? arguments[0] : {});

    (settings.unspinOthers && $.Spinner.unspin());
    
    return this.each(function(){
      var spun = $(this);
      if((spinner = $("#"+spun.attr("spinner"))) && spinner.get(0)){
        spinner.show();
        $.Spinner.logger("Already spinning.");
        return jQuery;
      }
        
      var spinnerID = $.Spinner.spinnerID + String(Math.random()).substring(2);
      $("body")
        .append(
          $('<div id="'+spinnerID+'" class="'+settings.className+'"></div"')
          .css({
            position: "absolute",
            top: spun.offset().top, 
            left: spun.offset().left, 
            width: spun.outerWidth(), 
            height: spun.outerHeight()
          })
        );
      spun.attr({spinner: spinnerID}); // Keep track of the spinner for the element
    });
  };
  
  $.fn.unspin = function(){
    return this.each(function(){
      $("#"+$(this).attr("spinner")).hide();
    });
  };
})(jQuery);
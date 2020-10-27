function camera(){
    $(".camera").css("color","#111");
    $(".white-select").css("transform","scale(1)");
    $(".lock").fadeOut("fast");
    $(".phone").fadeOut("fast");
    $("#unlock").text("Swipe left to the camera");

    setTimeout(function(){
      $(".camera").css("color","white");
      $(".white-select").css("transform","scale(0)");
      $(".lock").fadeIn("slow");
      $(".phone").fadeIn("slow");
      $("#unlock").text("Swipe up to unlock");
    }, 1700);
}

function phone(){
    $(".phone").css("color","#111");
    $(".white-select-left").css("transform","scale(1)");
    $(".lock").fadeOut("fast");
    $(".camera").fadeOut("fast");
    $("#unlock").text("Swipe left to the dialer");
  
    setTimeout(function(){
      $(".phone").css("color","white");
      $(".white-select-left").css("transform","scale(0)");
      $(".lock").fadeIn("slow");
      $(".camera").fadeIn("slow");
      $("#unlock").text("Swipe up to unlock");
    }, 1700);
}


element = document.getElementById("screen");

// reset the transition by...
element.addEventListener("click", function(e) {
  e.preventDefault;
   if(e.target.id == "dialer")
     return;
   if(e.target.id == "camera")
     return;
  
  cont = document.getElementById("cont");
  
  //time = document.getElementById("time");
  //date = document.getElementById("date");
  text = document.getElementById("unlock");
  
  // -> removing the class
  //time.classList.remove("run-animation");
  //date.classList.remove("run-animation");
  text.classList.remove("text-animation");
  cont.classList.remove("run-animation");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  //time.offsetWidth = time.offsetWidth;
  //date.offsetWidth = date.offsetWidth;
  text.offsetWidth = text.offsetWidth;
  cont.offsetWidth = cont.offsetWidth;
  
  // -> and re-adding the class
  //time.classList.add("run-animation");
  cont.classList.add("run-animation");
  //date.classList.add("run-animation");
  text.classList.add("text-animation");
}, false);




// Swipe down and up touch event 

(function() {
    var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {
            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });

})();

$('#screen').on('swipeup',function(){
  $("#cont").css("transform","scale(0)");
  setTimeout(function(){
    $("#lockscreen").fadeOut(200);
  }, 300);
} );



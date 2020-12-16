jQuery(document).ready(function(){
    "use strict"
    var typed = new Typed('.text', {
        strings: [" <strong>Welcome</strong>", "<strong>lets</strong> <strong class='primary'>dive</strong> <strong>in</strong>"],
        typeSpeed: 80,
        loop:true
      });


    $(window).scroll(function(){
         var top = $(window).scrollTop();
         if(top>=60)
         {
             $("nav").addClass("secondary");
         }
         else 
         if($("nav").hasClass("secondary"))
         {
            $("nav").removeClass("secondary");
         }
    });

    $('.work').magnificPopup({
        delegate: 'a',  
        type: 'image',
        gallery:
        {
            enabled: true
        }
    });

    $("#team-members").owlCarousel({
        items:3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive:
        {
            0:{
                items:1
              },
            480:{
                items:2
                },
            768:{
                items:3
                }
        } 
         
    });

    $('.counter').counterUp({
        delay:10,
        time: 1000
    });

    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");

        $('html, body').animate({
         scrollTop: $(section).offset().top - -2
        },1250, "easeInOutExpo");

    });

    


});
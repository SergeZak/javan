(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $('.single_item').matchHeight();
        $('.content_height').matchHeight();
        $("#toTop").scrollToTop();

        $(".grey-checkbox input[checked]").click(function(){
            $(".text").css("color","#fff");
        });
        
        /* Home Page Inner Scroll */
        $('.movies_poster_section').slimScroll({
            height: '330px',
            railVisible: true,
            alwaysVisible: true
        });
        
        /* Home Page Inner Scroll */
        $('.tv_show').slimScroll({
            height: '160px',
            railVisible: true,
            alwaysVisible: true
        });
        
          $(".live_tv_carousel").owlCarousel({
 
              autoPlay: 3000, //Set AutoPlay to 3 seconds

              items : 5,
              itemsDesktop : [1199,5],
              itemsDesktopSmall : [979,4],
              itemsTablet :	[768,3],
              itemsMobile : [479,2]

          });
        



    });


    jQuery(window).load(function(){

        $('#rounding_based').find('.nstSlider').nstSlider({
            "rounding": {
                "1": "1900",
                "10": "1910",
                "2016": "2016"
            },
            "left_grip_selector": ".leftGrip",
            "right_grip_selector": ".rightGrip",
            "value_bar_selector": ".bar",
            "value_changed_callback": function (cause, leftValue, rightValue) {
                var $container = $(this).parent();
                $container.find('.leftLabel').text(leftValue);
                $container.find('.rightLabel').text(rightValue);
            }
        });

        $('#rounding_based_two').find('.nstSlider').nstSlider({
            "rounding": {
                "1": "10",
                "10": "10",
                "100": "100"
            },
            "left_grip_selector": ".leftGrip",
            "right_grip_selector": ".rightGrip",
            "value_bar_selector": ".bar",
            "value_changed_callback": function (cause, leftValue, rightValue) {
                var $container = $(this).parent();
                $container.find('.leftLabel').text(leftValue);
                $container.find('.rightLabel').text(rightValue);
            }
        });
        
    });


}(jQuery));	
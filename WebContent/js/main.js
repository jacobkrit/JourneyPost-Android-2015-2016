/*function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* 
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();
*/
jQuery(document).ready(function ($) {
    $('.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(window).scroll(function () {
        var showMenu = $('#showMenu').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $('.sticky-navigation').css({"top": '0px'});
        } else {
            $('.sticky-navigation').css({"top": '-600px'});
        }
        if (scroll >= showMenu - 200) {
            $(".mobileScreen").css({'background-position': 'center top'});
        }
        return false;
    });

    $( '.newsletter' ).addClassWhenEmail(
    {
        className:  'newsletter--active',
        email:      'input[type="email"]'
    });

});

// $(function() {
//     var form = $('#contact22');
//     $(form).submit(function() {
//         $.ajax({
//             type: 'POST',
//             url: 'contact.php',
//             data: $(form).serialize();
//         });
//         return false;
//     }); 
// })

$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});


$('.index-image').css("background-attachment", "scroll");
$('header[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    
    $(window).scroll(function() {
        var yPos = -( ($(window).scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
        var coords = '50% '+ yPos + 'px';

        if ($(window).width() > 1024){
            $(".index-image").css("background-attachment", "fixed");
            $bgobj.css({ backgroundPosition: coords });
        }
        else {
            $('.index-image').css("background-attachment", "scroll");
        }
    }); 
});  


        

// $(window).resize(function(){
//     if ($(window).width() <= 800){  
//         $("#faq-image").css("backgroundPosition","center top");
//     }   
// });

// $(document).scroll(function() {
//     $('#background').css('background-position', '0px ' + $(document).scrollTop() + 'px');
// });



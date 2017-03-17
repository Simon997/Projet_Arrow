$(document).ready(function() {

    $(document).ready(function(){
        $('.page-scroll').click(function(){
            var offset = $('#page-top:first').offset();
            $('html,body').animate({scrollTop: offset.top}, 1000);
        });
    });

    // changer couleur mainnav
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10 && $(this).scrollTop()<770) {
                $("#mainNav").css("background-color","white");
                $("#mainNav a").css("color","#F05F40");
                $("#mainNav a").css("font-size","17px");
                $("#mainNav").css("border-bottom","4px solid #F05F40");
                $("#mainNav a").css("font-weight","bold");
            }
            else{
                $("#mainNav").css("background-color","black");
                $("#mainNav a").css("font-size","15px");
                $("#mainNav ul ul a").css("font-size","14px");
                $("#mainNav").css("border-bottom","2px solid #F05F40");
                $("#mainNav a, #mainNav a:focus").css("color","rgba(255, 255, 255, 0.5)");
                $(".navbar-default .navbar-header .navbar-brand").css("color","rgba(255, 255, 255, 0.5)");
                $("#mainNav a:hover,#mainNav a:focus:hover").css("color","white");

            }
        });
    });

    $(function(){
      setInterval(function(){
         $(".slideshow ul").animate({marginLeft:-350},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, 3500);
   });

(function($, Modernizr) {
    $(function() {
        $('.jcarousel').jcarousel({
            wrap: 'circular',
            transitions: Modernizr.csstransitions ? {
                transforms:   Modernizr.csstransforms,
                transforms3d: Modernizr.csstransforms3d,
                easing:       'ease'
            } : false
        });

        $('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'
        });
    });


})(jQuery, Modernizr);


(function($) {

    $.LoadingBox = function(options) {

        var defaults = {
            mainElementID: 'loading-box', /*if the element doesn't exist, it will create a one new with the predefined html structure and css*/
            fadeInSpeed: 'normal',
            fadeOutSpeed: 'normal',
            opacity: 0.8,
            backgroundColor: "#000",
            loadingImageWitdth: "60px",
            loadingImageHeigth: "60px",
            loadingImageSrc: ""
        };

        var plugin = this;
        plugin.settings = {};

        function getCSS() {
            return {
                outerDiv: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    "background-color": plugin.settings.backgroundColor,
                    filter: "alpha(opacity=" + plugin.settings.opacity * 100 + ")",
                    "-moz-opacity": plugin.settings.opacity,
                    "-khtml-opacity": plugin.settings.opacity,
                    "opacity": plugin.settings.opacity,
                    "z-index": "10000",
                    "cursor": "pointer",
                    "display": "none",
                    "text-align": "center"
                },
                innerDiv: {
                    margin: "auto",
                    width: plugin.settings.loadingImageWitdth,
                    "height": plugin.settings.loadingImageHeigth,
                    "position": "relative",
                    "top": "50%",
                    "transform": "translateY(-50%)"
                },
                img: {
                    "width": "100%",
                    "height": "100%"
                }
            };
        }

        var init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.css = getCSS();

            var imgSrc = plugin.settings.loadingImageSrc;
            if(imgSrc == ""){
                imgSrc = "loading.gif"
            }

            plugin.selector = "#"+plugin.settings.mainElementID;

            if(!$(plugin.selector).length){
                $('body').append('<div id="' + plugin.settings.mainElementID + '"><div></div></div>');

                var img = $("<img/>")
                    .attr("src", imgSrc)
                    .css(plugin.css.img);

                $(plugin.selector).css(plugin.css.outerDiv)
                    .children().css(plugin.css.innerDiv)
                    .append(img);
            }

            $(plugin.selector).fadeIn(plugin.settings.fadeInSpeed);
        };

        plugin.close = function() {
            $(plugin.selector).fadeOut(plugin.settings.fadeOutSpeed);
        };

        init();
    }

})(jQuery);

$("#mainNav").mouseover(function(e) {
        e.stopPropagation();
        //$(this).addClass("active");
        $("#mainNav").animate({height:80}, 100);
        $("#mainNav ul .saison").fadeIn(1000);
        $("#mainNav ul .perso").fadeIn(1000);
});
/*$("#mainNav li.personnages a.page-scroll").mouseover(function(e) {
        e.stopPropagation();
        $("#mainNav").animate({height:80}, 100);
        //$(this).addClass("active");
        $("#mainNav ul .perso").fadeIn(1000);
});*/
$('html:not(#mainNav').mouseover(function() {
        //$("#mainNav li") .removeClass();
        $("#mainNav").animate({height:34}, 150);
        $("#mainNav ul .saison").fadeOut(500);
        $("#mainNav ul .perso").fadeOut(500);
});




/*var el = document.getElementsByTagName("body")[0];
    el.className = "";

    (function($){
        var nav = $("#topNav");
        nav.find("li").each(function() {
            if ($(this).find("ul").length > 0) {
                $("<span>").text("^").appendTo($(this).children(":first"));
                $(this).mouseenter(function() {
                $(this).find("ul").stop(true, true).slideDown();});
                $(this).mouseleave(function() {
                $(this).find("ul").stop(true, true).slideUp();});
            }
        });
    })(jQuery);*/


});

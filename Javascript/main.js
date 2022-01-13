/* CALCULATE BIRTHDAY */

const birthday = new Date('02/20/1984');
const today = new Date();
const diffInMs = Math.abs(today - birthday);
var result = parseInt(diffInMs / (1000 * 60 * 60 * 24 * 365));
document.getElementById("myAge").innerHTML = result;

/* FLICKITY SLIDER */

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true, 
    prevNextButtons: false,
    pageDots: false,
});

var flkty = new Flickity( '.carousel', {
    // options go here, check documentation
});

//Cache reference to window and animation items
var $animation_elements = $('.hidden');
var $portrait_elements = $('.portraitTrigger');
var $stat_container = $('#statContainer');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.removeClass('hidden');
        $element.addClass('fade-in-element');
    } else {
        $element.addClass('hidden');
        $element.removeClass('fade-in-element');
    }
  });

  $.each($portrait_elements, function() { 
    var interval = 50;  
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                // identify the elements by ID
                //console.log("The element is in view port window")
                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait1" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, 0) 

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait2" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval) 

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait3" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 2) 

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait4" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 3)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait5" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 4)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait6" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 5)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait7" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 6)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait8" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 7) 

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait9" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 8)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait10" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 9)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait11" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 10)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait12" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 11)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait13" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 12)
                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait14" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 13)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait15" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 14) 

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait16" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 15)

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait17" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 16) 

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait18" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 17)
                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait19" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 18) 

                setTimeout(function () {
                    $( "#portraitContainer" ).find( "#portrait20" ).css({
                        '-webkit-transform' : 'translateX(0%)',
                        '-moz-transform'    : 'translateX(0%)',
                        '-ms-transform'     : 'translateX(0%)',
                        '-o-transform'      : 'translateX(0%)',
                        'transform'         : 'translateX(0%)'
                    });
                }, interval * 19)
                // animate each | by changing the color
                // there are 20 rows, 1 - 20, starting from left to right
                // they all need to light up in succession
                // total 2 seconds animation time 100ms per |
    } else {

    }
  });

 $.each($stat_container, function() {
     
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    //check to see if this current container is within viewport

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {

        const cssElements = document.getElementsByClassName("css");
        const htmlElements = document.getElementsByClassName("html");
        const javascriptElements = document.getElementsByClassName("javascript");
        const reactElements = document.getElementsByClassName("react");
        const reduxElements = document.getElementsByClassName("redux");
        const reactReduxElements = document.getElementsByClassName("react-redux");
        const reduxToolkitElements = document.getElementsByClassName("redux-toolkit");
        const nodeElements = document.getElementsByClassName("node");
        const gitElements = document.getElementsByClassName("git");

        let cssStatMax = 15;
        var cssCounter = 0;
        var cssInterval = setInterval(function(){
            cssElements[cssCounter].style.opacity = "1";
            cssCounter++;
            if(cssCounter === cssStatMax) {
                clearInterval(cssInterval);   
            }
        }, 100);

    
        let htmlStatMax = 14;
        var htmlCounter = 0;
        var htmlInterval = setInterval(function(){
            htmlElements[htmlCounter].style.opacity = "1";
            htmlCounter++;
                if(htmlCounter === htmlStatMax) {
                    clearInterval(htmlInterval);
            }
        }, 100);

        let javascriptStatMax = 12;
        var javascriptCounter = 0;
        var javascriptInterval = setInterval(function(){
            javascriptElements[javascriptCounter].style.opacity = "1";
            javascriptCounter++;
                if(javascriptCounter === javascriptStatMax) {
                    clearInterval(javascriptInterval);
            }
        }, 100);

        let reactStatMax = 7;
        var reactCounter = 0;
        var reactInterval = setInterval(function(){
            reactElements[reactCounter].style.opacity = "1";
            reactCounter++;
                if(reactCounter === reactStatMax) {
                    clearInterval(reactInterval);
            }
        }, 100);

        let reduxStatMax = 4;
        var reduxCounter = 0;
        var reduxInterval = setInterval(function(){
            reduxElements[reduxCounter].style.opacity = "1";
            reduxCounter++;
                if(reduxCounter === reduxStatMax) {
                    clearInterval(reduxInterval);
            }
        }, 100);

        let reactReduxStatMax = 5;
        var reactReduxCounter = 0;
        var reactReduxInterval = setInterval(function(){
            reactReduxElements[reactReduxCounter].style.opacity = "1";
            reactReduxCounter++;
                if(reactReduxCounter === reactReduxStatMax) {
                    clearInterval(reactReduxInterval);
            }
        }, 100);

        let reduxToolkitStatMax = 6;
        var reduxToolkitCounter = 0;
        var reduxToolkitInterval = setInterval(function(){
            reduxToolkitElements[reduxToolkitCounter].style.opacity = "1";
            reduxToolkitCounter++;
                if(reduxToolkitCounter === reduxToolkitStatMax) {
                    clearInterval(reduxToolkitInterval);
            }
        }, 100);

        let nodeStatMax = 4;
        var nodeCounter = 0;
        var nodeInterval = setInterval(function(){
            nodeElements[nodeCounter].style.opacity = "1";
            nodeCounter++;
                if(nodeCounter === nodeStatMax) {
                    clearInterval(nodeInterval);
            }
        }, 100);

        let gitStatMax = 12;
        var gitCounter = 0;
        var gitInterval = setInterval(function(){
            gitElements[gitCounter].style.opacity = "1";
            gitCounter++;
                if(gitCounter === gitStatMax) {
                    clearInterval(gitInterval);
            }
        }, 100);

    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



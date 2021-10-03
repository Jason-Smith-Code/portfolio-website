/* CALCULATE BIRTHDAY */

const birthday = new Date('02/20/1984');
const today = new Date();
const diffInMs = Math.abs(today - birthday);
var result = parseInt(diffInMs / (1000 * 60 * 60 * 24 * 365));
console.log(result);
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


/* ANIMATE ELEMENTS IN VIEW */

(function() {

    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
    
})();
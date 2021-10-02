function animateText() {
        const characterList = [
        "a", "A", "1", "#",
        "b", "B", "2", "~",
        "c", "C", "3", "/",
        "d", "D", "4", '"',
        "e", "E", "5", "|",
        "f", "F", "6", ",",
        "g", "G", "7", ".",
        "h", "H", "8", "?",
        "i", "I", "9",
        "j", "J", "0",
        "k", "K", "!",
        "l", "L", '"',
        "m", "M", "£",
        "n", "N", "%",
        "o", "O", "^",
        "p", "P", "&",
        "q", "Q", "*",
        "r", "R", "(",
        "s", "S", ")",
        "t", "T", "[",
        "u", "U", "]",
        "v", "V", "{",
        "w", "W", "}",
        "x", "X", ";",
        "y", "Y", ":",
        "z", "Z", "@"
    ];

        var cycles = 25;
        var interval = 100;
        const leftBracket = document.querySelector("#left-bracket");
        const rightBracket = document.querySelector("#right-bracket");
        const letterJ = document.querySelector("#j");
        const letterS = document.querySelector("#s");
        let countRight = 0;
        let countleft = 0;
        let countJ = 0;
        let countS = 0;

        for (var i = 0; i < (cycles-15); i++) {  
        setTimeout(function () {
            if (leftBracket) {
                var randomCharacter = characterList[Math.floor(Math.random()*characterList.length)];
                leftBracket.innerHTML = randomCharacter;
                countleft ++;
                if (countleft == (cycles-15)) {
                leftBracket.innerHTML = "[";
                }
            }
            
        }, i * interval)  
    }

    for (var i = 0; i < (cycles-10); i++) {  
        setTimeout(function () {
            if (letterJ) {
                var randomCharacter = characterList[Math.floor(Math.random()*characterList.length)];
                letterJ.innerHTML = randomCharacter;
                countJ ++;
                if (countJ == (cycles-10)) {
                    letterJ.innerHTML = "J";
                }
            }
            
        }, i * interval)  
    }

    for (var i = 0; i < (cycles-5); i++) {  
        setTimeout(function () {
            if (letterS) {
                var randomCharacter = characterList[Math.floor(Math.random()*characterList.length)];
                letterS.innerHTML = randomCharacter;
                countS ++;
                if (countS == (cycles-5)) {
                    letterS.innerHTML = "S";
                }
            }
            
        }, i * interval)  
    }

    for (var i = 0; i < cycles; i++) {  
        setTimeout(function () {
            var randomCharacter = characterList[Math.floor(Math.random()*characterList.length)];
            rightBracket.innerHTML = randomCharacter;
            countRight ++;
            if (countRight == cycles) {
                rightBracket.innerHTML = "]";
            }
        }, i * interval)  
    }
    
}

function removeBrackets() {
    var divPosition = $("#leftBracketContainer").offset();
    if(divPosition.left <= 0 )
    { 
    $("#leftBracketContainer").animate({
    "left": 0
    },1000);
    }else{
    $("#leftBracketContainer").animate({
    "left": -1500
    },1000);   
};

if(divPosition.right <= 0 ){ 
    $("#rightBracketContainer").animate({
    "left": 0
    },1000);
    }else{
    $("#rightBracketContainer").animate({
    "right": -1500
    },1000);   
    };
}

function fadeOutText(){
    $(".animated-logo").fadeOut("slow");
    $(".animated-logo2").fadeOut("slow");
}

$(document).ready(function() {
    animateText();

    function timeOutOne() {  
        removeBrackets();
    }

    function timeOutFour() {  
        fadeOutText();
    }

    function moveLocation() {
        window.location.replace("main.html");
    }
    setTimeout(timeOutOne, 3000);
    setTimeout(timeOutFour, 4000);
    setTimeout(moveLocation, 5000);

});
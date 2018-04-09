/* func.js        */
/* Gregory Norton */
/* 500766165      */
/* CPS621         */

/*
 * button ->
 * intro1 ->
 * intro2 ->
 * terminology ->
 * 

/**
 * Variable to keep track of the duration
 * of the animation
 * @type {int}
 */
var duration = 0;

/**
 * Link begin button to start first animation secuence once document is loaded
 */
$(document).ready(function() {
    $("#begin").click(function() {
        $("#begin").css({"display": "none"});
        intro1();
    });
});

/**
 * Animates the intro scene
 * 
 * intro -> terminology
 */
function intro1() {
    console.log("intro1 frame");
    
    var div = $("#intro1");
    var title = $("#intro1 #title");
    
    /* enabling the animation and waiting for it to end */
    div.css({"display": "block"});
    title.css({"animation-play-state": "running"});
    title.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("finished intro animation");
        div.css({"display": "none"});
        intro2();
        //credits();
        duration += parseInt($("#title").css("animation-duration").slice(0, -1));
        console.log(duration);
    });
}

/**
 * Animate the first scene
 * 
 * terminology -> scene1 -> scene2
 */
function intro2() {
    console.log("scene1");
    
    /* variables in this div */
    var div = $("#intro2");
    var title = $("#intro2 #title");
    
    div.css({"display": "block"});
    div.css({"animation-play-state": "running"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("finished scene1");
        div.css({"display": "none"});
        
        var delay = 5000;
        setTimeout(function() {
            terminology();
        }, delay);
        duration += delay / 1000;
        duration += parseInt(title.css("animation-duration").slice(0, -1));
        console.log(duration);
    });
}

/**
 * Animates the terminology scene
 * 
 * intro -> terminology -> scene1
 */
function terminology() {
    console.log("terminology");
    
    var div = $("#terminology");
    
    div.css({"display": "block"});
    
    div.css({"display": "none"});
}

/**
 * Animate the second scene
 * 
 * scene1 -> scene2 -> scene3
 */
function scene2() {
    console.log("scene2");
    credits();
}

/**
 * Animate the credits
 */
function credits() {
    console.log("credits");
}

function changeBackground() {
    var body = document.body;
    console.log(body.style.backgroundImage);
    if(body.style.backgroundImage === ""
        || body.style.backgroundImage === 'url("src/oscar/oscar.jpg")') {
        document.body.style.backgroundImage = "url('src/tank/tank_crop.jpg')";
    }
    else {
        document.body.style.backgroundImage = "url('src/oscar/oscar.jpg')";
    }
    //document.body.style.backgroundImage = "url('src/oscar/oscar.jpg')";
}

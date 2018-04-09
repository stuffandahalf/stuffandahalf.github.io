/* func.js        */
/* Gregory Norton */
/* 500766165      */
/* CPS621         */

/*
 * button ->
 * intro1 ->
 * intro2 ->
 * terminology ->
 * variety ->
 * smart ->
 * 
 * friends ->
 * credits
 */

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
        //intro1();
        //variety();
        friends();
        //credits();
    });
});

/**
 * Animates the intro scene
 * 
 * intro1 -> intro2
 */
function intro1() {
    console.log("started intro1");
    
    var div = $("#intro1");
    var title = $("#intro1 #title");
    
    /* enabling the animation and waiting for it to end */
    div.css({"display": "block"});
    title.css({"animation-play-state": "running"});
    title.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("ended intro1");
        div.css({"display": "none"});
        intro2();
        duration += parseInt($("#title").css("animation-duration").slice(0, -1));
        //console.log(duration);
    });
}

/**
 * Animate the first scene
 * 
 * intro1 -> intro2 -> terminology
 */
function intro2() {
    console.log("started intro2");
    
    /* variables in this div */
    var div = $("#intro2");
    var title = $("#intro2 #title");
    
    div.css({"display": "block"});
    div.css({"animation-play-state": "running"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("ended intro2");
        div.css({"display": "none"});
        
        duration += parseInt(title.css("animation-duration").slice(0, -1));
        //console.log(duration);
        
        //terminology();
        variety();
    });
}

/**
 * Animates the terminology scene
 * 
 * intro2 -> terminology -> variety
 */
function terminology() {
    console.log("terminology");
    
    var div = $("#terminology");
    
    div.css({"display": "block"});
    div.css({"display": "none"});
    variety();
}

/**
 * Animate the varieties section
 * 
 * terminology -> variety ->
 */
function variety() {
    console.log("started variety");
    var div = $("#variety");
    
    div.css({"display": "block"});
    div.css({"animation-play-state": "running"});
    
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("ended variety");
        div.css({"display": "none"});
        // tmp
        credits();
    });
}

/**
 * Animate the intelligence section
 */
function smart() {
    
}

/**
 * Animate the friends frame
 * 
 * -> friends -> credits
 */
function friends() {
    console.log("friends");
    
    var div = $("#friends");
    
    div.css({"display": "block"});
    div.css({"animation-play-state": "running"});
    
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("ended friends");
        credits();
    });
}

/**
 * Animate the credits
 * 
 * friends -> credits
 */
function credits() {
    console.log("credits");
    var div = $("#credits");
    var text = $("#credits #text");
    
    div.css({"display": "block"});
    text.css({"animation-play-state": "running"});
    console.log("end");
    console.log(duration);
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

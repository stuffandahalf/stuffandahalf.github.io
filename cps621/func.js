/* func.js        */
/* Gregory Norton */
/* 500766165      */
/* CPS621         */

/*
 * button ->
 * intro1 ->
 * intro2 ->
 * variety ->
 * active1 ->
 * active2 ->
 * relax ->
 * playful
 * smart ->
 * trick1 ->
 * trick2 ->
 * concern ->
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
        //active1();
        //active2();
        //variety();
        //relax();
        //playful();
        //smart();
        //trick1();
        trick2();
        //concern();
        //friends();
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
    title.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("ended intro1");
        div.css({"display": "none"});
        duration += parseInt(title.css("animation-duration").slice(0, -1));
        intro2();
    });
}

/**
 * Animate the first scene
 * 
 * intro1 -> intro2 -> variety
 */
function intro2() {
    console.log("started intro2");
    var div = $("#intro2");
    //var title = $("#intro2 #title");
    
    div.css({"display": "block"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended intro2");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
        variety();
    });
}

/**
 * Animate the varieties section
 * 
 * terminology -> variety -> active1
 */
function variety() {
    console.log("started variety");
    var div = $("#variety");
    
    div.css({"display": "block"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended variety");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
        active1();
    });
}

/**
 * Animate the activities
 * 
 * variety -> active1 -> active2
 */
function active1() {
    console.log("started active1");
    var div = $("#active1");
    var title = $("#active1 #title");
    var hiro = $("#active1 #hiro");
    
    div.css({"display": "block"});
    title.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended active1");
        duration += parseInt(title.css("animation-duration").slice(0, -1));
        active2();
    });
}

/**
 * active1 -> active2 -> relax
 */
function active2() {
    console.log("started active2");
    var div = $("#active2");
    var title = $("#active2 #title");
    var hiro = $("#active2 #hiro");
    
    div.css({"display": "block"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended active2");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
        relax();
    });
}

/**
 * active2 -> relax -> playful
 */
function relax() {
    console.log("started relax");
    var div = $("#relax");
    
    div.css({"display": "block"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended active2");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
        playful();
    });
}

/**
 * Animate the playful section
 * 
 * relax -> playful ->smart
 */
function playful() {
    console.log("started playful");
    var div = $("#playful");
    
    div.css({"display": "block"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended playful");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
        smart();
    });
}

/**
 * Animate the intelligence section
 * 
 * playful -> smart -> trick1
 */
function smart() {
    console.log("started smart");
    var div = $("#smart");
    var hiro = $("#smart #hiro");
    
    div.css({"display": "block"});
    hiro.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended smart");
        duration += parseInt(hiro.css("animation-duration").slice(0, -1));
        trick1();
    });
}

/**
 * animate the tricks
 * 
 * smart -> trick1 -> trick2
 */
function trick1() {
    console.log("started trick1");
    var div = $("#trick1");
    
    div.css({"display": "block"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended trick1");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
        trick2();
    });
}

/**
 * animate the second trick
 * 
 * trick1 -> trick2 -> concern
 */
function trick2() {
    console.log("started trick1");
    var div = $("#trick2");
    
    div.css({"display": "block"});
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        div.css({"display": "none"});
        console.log("ended trick2");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
        concern();
    });
}

/**
 * animate concern
 * 
 * tricks -> concern -> friends
 */
function concern() {
    console.log("started concern");
    
    console.log("ended concern");
    friends();
}

/**
 * Animate the friends frame
 * 
 * concern-> friends -> credits
 */
function friends() {
    console.log("friends");
    
    var div = $("#friends");
    
    div.css({"display": "block"});
    div.css({"animation-play-state": "running"});
    
    div.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("ended friends");
        duration += parseInt(div.css("animation-duration").slice(0, -1));
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
    duration += parseInt(text.css("animation-duration").slice(0, -1));
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

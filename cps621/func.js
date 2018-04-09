/**
 * Variable to keep track of the duration
 * of the animation
 * @type {int}
 */
var duration = 0;

/**
 * different scenes
 */
/*var intro_scene = {
    div: $("#intro"),
    title: $("#intro #title")
};

var scene1 = {
    div: $("#scene1"),
    title: $("#scene1 #title")
};*/

/**
 * Link begin button to start first animation secuence once document is loaded
 */
$(document).ready(function() {
    $("#begin").click(function() {
        $("#begin").css({"display": "none"});
        // new Intro();
        //Intro.intro();
        intro();
    });
});

/**
 * Animates the intro scene
 */
function intro() {
    console.log("intro frame");
    
    var div = $("#intro");
    var title = $("#intro #title");
    
    /* enabling the animation and waiting for it to end */
    div.css({"display": "block"});
    title.css({"animation-play-state": "running"});
    title.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("finished intro animation");
        div.css({"display": "none"});
        scene1();
        //credits();
        
    });
    
    duration += parseInt($("#title").css("animation-duration").slice(0, -1));
    console.log(duration);
}

/**
 * Animate the first scene
 */
function scene1() {
    console.log("scene1");
    
    /* variables in this div */
    var div = $("#scene1");
    var title = $("#scene1 #title");
    
    div.css({"display": "block"});
    title.css({"animation-play-state": "running"});
    title.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("finished scene1");
        div.css({"display": "none"});
        scene2();
    });
    duration += parseInt(title.css("animation-duration").slice(0, -1));
    console.log(duration);
}

/**
 * Animate the second scene
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

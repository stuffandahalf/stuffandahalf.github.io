$(document).ready(function() {
    $("#begin").click(function() {
        $("#begin").css({"display": "none"});
        animate();
    });
});

function animate() {
    console.log("animate");
    title();
    frame1();
}

function title() {
    var div = $("#intro");
    var title = $("#title");
    div.css({"display": "block"});
    title.css({"animation-play-state": "running"});
    title.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e) {
        console.log("finished animation");
        div.css({"display": "none"});
    });
    //delay += parseInt($("#title").css("animation-duration").slice(0, -1));
    //console.log(delay);
    
    
}

/*function fill() {
    var str = ""
    for(i = 0; i < 100; i++) {
        str += "<br>";
    }
    document.getElementById("test").innerHTML = str;
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
}*/

//function title() {
function tmp() {
    $("#intro").addClass("animated");
    
    /*$("#intro").css("animation-duration: 5s");
    $("#intro").addClass("bounceIn");
    $("#intro").css("animation-duration: 3s");
    $("#intro").addClass("bounceOut");*/
    $("#intro").animateCss("bounceIn", function() {
        $("#intro").animateCss("bounceOut");
    });
}

function frame1() {
    console.log("hello");
    //$("#scene1").addClass("animated bounceIn");
}

/*$.fn.extend({
    animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});*/

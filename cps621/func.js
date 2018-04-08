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

function title() {
    $("#intro").addClass("animated");
    $("#intro").css("animation-duration: 5s");
    $("#intro").addClass("bounceIn");
    $("#intro").css("animation-duration: 3s");
    $("#intro").addClass("bounceOut");
}

function frame1() {
    $("#scene1").addClass("animated bounceIn");
}

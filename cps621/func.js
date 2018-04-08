function fill() {
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
}

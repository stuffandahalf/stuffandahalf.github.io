function fill() {
    var str = ""
    for(i = 0; i < 100; i++) {
        str += "<br>";
    }
    document.getElementById("test").innerHTML = str;
}

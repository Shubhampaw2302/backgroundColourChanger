function random_hex_generator() {
    var a = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + a.slice(0, 6);
}


$("button").click(function() {
    $("body").css("background-color", random_hex_generator());
});
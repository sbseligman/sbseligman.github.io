$(document).ready(function () {

    for (var i = 0; i < 75; i++) {
        $(".starsky").append("<div class='star'></div>");
    };
    $(".star").each(function(){
        var randtop = Math.floor(Math.random() * window.innerHeight * 1.3) + 0.05 + "px";
        var randleft = Math.floor(Math.random() * window.innerWidth) + 0.05 + "px";
        $(this).css("top", randtop);
        $(this).css("left", randleft);
    });

    $(window).mousemove(function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var opac = e.clientY/$(window).height();
        $("#mount1").css("opacity", opac);
        $("#mount2").css("opacity", opac);
        $("#mount3").css("opacity", opac);
        $("#tree1").css("opacity", opac);
        $("#mount4").css("opacity", opac);
        var newbg = "rgba(34,59,103," + e.clientY/$(window).height() + ")";
        $(".sky").css("background-color",newbg)
        $("#mount1").css("left", - 300 -  x * 0.05 );
        $("#mount1b").css("left", - 300 -  x * 0.05 );
        $("#mount2").css("left", - 150 -  x * 0.03 );
        $("#mount2b").css("left", - 150 -  x * 0.03 );
        $("#mount3").css("right", - 250 +  x * 0.1 );
        $("#mount3b").css("right", - 250 +  x * 0.1 );
        $("#mount4").css("right", - 400 +  x * 0.03 );
        $("#mount4b").css("right", - 400 +  x * 0.03 );
        var suntop = y +"px"
        $(".sun").css("top", suntop);
        $(".sunb").css("top", suntop);
        $(".moon").css("bottom", y*0.9 + "px");
        $(".sun").css("opacity", opac);
        $(".star").css("opacity", opac);
        $(".moon").css("opacity", opac + 0.25);
        $(".starsky").css("height", window.innerHeight + "px");
        $(".starsky").css("width", window.innerWidth + "px");
        var angle = (e.clientX/window.innerWidth)*135 + "deg";
        console.log(angle);
        $(".starsky").css("transform", "rotate(" + angle + ")");
    });

});


document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    var x = touch.clientX;
    var y = touch.clientY;
    var opac = y/$(window).height();
    $("#mount1").css("opacity", opac);
    $("#mount2").css("opacity", opac);
    $("#mount3").css("opacity", opac);
    $("#tree1").css("opacity", opac);
    $("#mount4").css("opacity", opac);
    var bgopac = y/$(window).height() + 15;
    var newbg = "rgba(34,59,103," + bgopac + ")";
    $(".sky").css("background-color",newbg)
    $("#mount1").css("left", - 300 -  x * 0.05 );
    $("#mount1b").css("left", - 300 -  x * 0.05 );
    $("#mount2").css("left", - 150 -  x * 0.03 );
    $("#mount2b").css("left", - 150 -  x * 0.03 );
    $("#mount3").css("right", - 250 +  x * 0.1 );
    $("#mount3b").css("right", - 250 +  x * 0.1 );
    $("#mount4").css("right", - 400 +  x * 0.03 );
    $("#mount4b").css("right", - 400 +  x * 0.03 );
    var suntop = y +"px"
    $(".sun").css("top", suntop);
    $(".sunb").css("top", suntop);
    $(".moon").css("bottom", y*0.9 + "px");
    $(".sun").css("opacity", opac);
    $(".star").css("opacity", opac);
    $(".moon").css("opacity", opac + 0.25);
    $(".starsky").css("height", window.innerHeight + "px");
    $(".starsky").css("width", window.innerWidth + "px");
    var angle = (x/window.innerWidth)*135 + "deg";
    console.log(angle);
    $(".starsky").css("transform", "rotate(" + angle + ")");
}, false);
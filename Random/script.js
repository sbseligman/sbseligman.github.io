


$(window).mousemove(function(e) {
    var x = event.clientX;
    var y = event.clientY;
   var opac = e.clientY/$(window).height();
   $("#mount1").css("opacity", opac);
   $("#mount2").css("opacity", opac);
   $("#mount3").css("opacity", opac);
   $("#tree1").css("opacity", opac);
    $("#mount4").css("opacity", opac);
    var newbg = "rgba(34,59,103," + e.clientY/$(window).height() + ")";
    $(".sky").css("background-color",newbg)
    $(".mouse").css("left", x - 15 + "px");
    $(".mouse").css("top", y - 15 + "px");
    $(".mouse").html("<img src='sun.png' class='sun'>");
    $(".sun").css("position", "relative");
    $(".sun").css("top", - 80 + "px");
    $(".sun").css("left", - 80 + "px");
    $("#mount1").css("left", - 300 -  x * 0.025 );
    $("#mount1b").css("left", - 300 -  x * 0.025 );
    $("#mount2").css("left", - 50 -  x * 0.01 );
    $("#mount2b").css("left", - 50 -  x * 0.01 );
    $("#mount3").css("left", + 300 -  x * 0.05 );
    $("#mount3b").css("left", + 300 -  x * 0.05 );
    $("#mount4").css("left", + 900 -  x * 0.01 );
    $("#mount4b").css("left", + 900 -  x * 0.01 );

});

for (var i = 0; i < 50; i++) {
    $(".starsky").append("<div class='star'></div>");
};
$(".star").each(function(){
         var randtop = Math.floor(Math.random() * window.innerHeight) + 0.05 + "px";
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
    $("#mount2").css("left", - 50 -  x * 0.03 );
    $("#mount2b").css("left", - 50 -  x * 0.03 );
    $("#mount3").css("right", + 50 +  x * 0.1 );
    $("#mount3b").css("right", + 50 +  x * 0.1 );
    $("#mount4").css("right", - 400 +  x * 0.03 );
    $("#mount4b").css("right", - 400 +  x * 0.03 );
    var suntop = y +"px"
    $(".sun").css("top", suntop);
    $(".sunb").css("top", suntop);
    $(".moon").css("bottom", y*0.8 - 100 + "px");
    $(".sun").css("opacity", opac);
    $(".star").css("opacity", opac);
    $(".moon").css("opacity", opac + 0.25);
    $(".starsky").css("height", window.innerHeight + "px");
    $(".starsky").css("width", window.innerWidth + "px");
    var angle = (e.clientX/window.innerWidth)*135 + "deg";
    console.log(angle);
    $(".starsky").css("transform", "rotate(" + angle + ")");
    
});

for (var i = 0; i < 30; i++) {
    $(".starsky").append("<div class='star'></div>");
};
$(".star").each(function(){
         var randtop = Math.floor(Math.random() * window.innerHeight) + "px";
         var randleft = Math.floor(Math.random() * window.innerWidth) + "px";
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
    $("#mount1").css("left", - 300 -  x * 0.035 );
    $("#mount1b").css("left", - 300 -  x * 0.035 );
    $("#mount2").css("left", - 50 -  x * 0.01 );
    $("#mount2b").css("left", - 50 -  x * 0.01 );
    $("#mount3").css("left", + 300 -  x * 0.08 );
    $("#mount3b").css("left", + 300 -  x * 0.08 );
    $("#mount4").css("left", + 900 -  x * 0.01 );
    $("#mount4b").css("left", + 900 -  x * 0.01 );
    var suntop = y +"px";
    $(".sun").css("top", suntop);
    $(".sunb").css("top", suntop);
    $(".sun").css("opacity", opac);
    $(".star").css("opacity", opac);
    
    
    
});



var hue = ["#ff8875", "#ff8875","#ff8875", "#fea367", "#fba46a", "#f7a56e",  "#f4a571", "#f0a675", "#eca779", "#e8a87d", "#e4a981", "#e0a985", "#ddaa88", "#d9ab8c", "#d5ac90", "#d1ac94", "#cdad98", "#c9ae9c", "#c6af9f", "#c2afa3", "#beb0a7", "#bab1ab", "#b6b2af", "#b3b3b3"]
var shape=["oval", "oval", "oval", "circle", "circle", "egg", ]
function funcoval() {
    $(".oval").each(function() {
     var randradius = Math.floor(Math.random() * 400);
   $(this).css("border-radius", randradius + "px" + "/" + randradius/2 + "px" );
});
}

$(window).mousemove(function(e) {
   var opac = e.clientY/$(window).height();
   $("#mount1").css("opacity", opac);
   $("#mount2").css("opacity", opac);
   for (var i = 0; i < 3; i++){
   $("body").append("<div class='box'></div>")};
   var randshape = shape[Math.floor(Math.random() * shape.length)];
   $(".box").addClass(randshape);
     $(".box").each(function() {
        var randtop = Math.floor(Math.random() * 2000) - 10 + "px";
        var randleft = Math.floor(Math.random() * 2000) -10 + "px";
        var randsize = Math.floor(Math.random() * 200) + "px";
        var randhue = hue[Math.floor(Math.random() * hue.length)];
        var z = Math.ceil(Math.random() * 6);
        $(this).css("top", randtop);
        $(this).css("left", randleft);
        $(this).css("width", randsize);
        $(this).css("height", randsize);
        $(this).css("opacity", 1 - opac);
        $(this).css("background-color", randhue);
        $(this).css("z-index", z);
    });
    var newbg = "rgba(34,59,103," + e.clientY/$(window).height() + ")";
    $(".sky").css("background-color",newbg)
    var x = event.clientX - 15 + "px";
    var y = event.clientY - 15 + "px";
    $("body").append("<div class='mouse'></div>");
    $(".mouse").css("left", x);
    $(".mouse").css("top", y);
    $(".mouse").html("<img src='sun.png' class='sun'>");
    $(".sun").css("position", "relative");
    $(".sun").css("top", - 80 + "px");
    $(".sun").css("left", - 80 + "px");
});

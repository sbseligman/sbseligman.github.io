$(".area").css("background-color", "#ff8875");

var shape = ["square", "circle", "triangle"]
var hue = ["#ff8875", "#ff8875","#ff8875", "#fea367", "#fba46a", "#f7a56e",  "#f4a571", "#f0a675", "#eca779", "#e8a87d", "#e4a981", "#e0a985", "#ddaa88", "#d9ab8c", "#d5ac90", "#d1ac94", "#cdad98", "#c9ae9c", "#c6af9f", "#c2afa3", "#beb0a7", "#bab1ab", "#b6b2af", "#b3b3b3"]


function sizeposcolor() {
    $(".box").each(function() {
        var randtop = Math.floor(Math.random() * 1000) - 10 + "px";
        var randleft = Math.floor(Math.random() * 1000) -10 + "px";
        var randsize = Math.floor(Math.random() * 100) -10 + "px";
        var randhue = hue[Math.floor(Math.random() * hue.length)];
        $(this).css("top", randtop);
        $(this).css("left", randleft);
        $(this).css("width", randsize);
        $(this).css("height", randsize);
        $(this).css("background-color", randhue);
    });
};



$(".area").mousemove(function() {
   for (var i = 0; i < 15; i++){
   $("body").append("<div class='box'></div>")
   };
   sizeposcolor();
    var x = event.clientX - 15 + "px";
    var y = event.clientY - 15 + "px";
    $("body").append("<div class='circle'></div>");
    $(".circle").css("left", x);
    $(".circle").css("top", y);
    $(".circle").html("<img src='sun.png' class='sun'>");
    $(".sun").css("position", "relative");
    $(".sun").css("top", - 80 + "px");
    $(".sun").css("left", - 80 + "px");
});

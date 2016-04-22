// JavaScript File
$("body").css("background-color", " #F4476B");

var covers = ["P_2000_SP3.png","P_2000_SP4.png","P_2001_SP2.png","P_2003_FA2.png","P_2003_FA3.png","P_2007_FA.png","P_2007_FA2.png","P_2007_SP.png","P_2014_FA3.png","P_2015_FA1.png","P_2015_FA2a.png","P_2015_FA2b.png","P_2015_SP2.png","P_2016_SP1.png"];

var currentcover = false;

$(".button").mousedown(function(){
    $(this).css("background-color", "yellow");
});
$(".button").mouseup(function(){
    $(this).css("background-color", "white");
});

$(".tab").click(function(){
    $(".tab").css("background-color", "white");
    $(this).css("background-color", "red");
});


$("#randmbutton").click(function(){
    //var countTotal = 0;
    $(".stage").html("");
    var currentcover = false;
    for (var i = 0; i < 7; i++){
        var temp_array = covers.slice(0);
        //console.log(temp_array);
        $(".stage").append("<div class='prattler'></div>");
    };
    $(".prattler").each(function() {
            
        var randtop = Math.floor(Math.random() * 500) + "px";
        var randleft = Math.floor(Math.random() * 1200) + "px";
        var randz = Math.floor(Math.random()*30);
        $(this).css("top", randtop);
        $(this).css("left", randleft);
        $(this).css("z-index", randz);
            
        var selected = Math.floor(Math.random()*temp_array.length);
        //console.log(selected);
        //countTotal++;
        //console.log(countTotal);
        var randomcover = temp_array[ selected ];
        console.log(randomcover);
        $(this).html("<img src='img/covers/" + randomcover + "'>");
        temp_array.splice(selected, 1);
           
        });

});

$(".prattler").click(function(){
    var w = window.innerWidth + "px";
    var h = window.innerHeight + "px";
    $(".shadowbox").css("width", w);
    $(".shadowbox").css("height", h);
    $(".shadowbox").css("background-color", "black");   
});
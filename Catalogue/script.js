// JavaScript File
$("body").css("background-color", " #F4476B");

var w = window.innerWidth;
var navleft = (w - 180)/2;
//console.log(navleft);
$(".nav").css("left", navleft);
$(".footer").css("width", w + "px");

var covers = ["P_2000_SP3.png","P_2000_SP4.png","P_2001_SP2.png","P_2003_FA2.png","P_2003_FA3.png","P_2007_FA.png","P_2007_FA2.png","P_2007_SP.png","P_2014_FA3.png","P_2015_FA1.png","P_2015_FA2a.png","P_2015_FA2b.png","P_2015_SP2.png","P_2016_SP1.png"];

var currentcover = false;

$(".tab").mouseenter(function(){
    $(this).css("color", "##F4476B");
});
$(".tab").mouseleave(function(){
    $(this).css("color", "black");
});
$(".button").mouseenter(function(){
    $(this).css("background-color", "#CCF1FF");
});
$(".button").mouseleave(function(){
    $(this).css("background-color", "white");
});
$(".button").mousedown(function(){
    $(this).css("background-color", "yellow");
});
$(".button").mouseup(function(){
    $(this).css("background-color", "white");
});


$("#currentpage").css("background-color","rgb(244, 71, 107)");

$(".tab").click(function(){
    $(".tab").css("background-color", "white");
    $(this).css("background-color", "rgb(244, 71, 107)");
});


$("#randmbutton").click(function(){
    //var countTotal = 0;
    $(".stage").html("");
    var currentcover = false;
    var temp_array = covers.slice(0);
    for (var i = 0; i < 7; i++){
        //console.log(temp_array);
        $(".stage").append("<div class='prattler'></div>");
    };
    $(".prattler").each(function() {
            
        var randtop = Math.floor(Math.random() * 500) + "px";
        var randleft = Math.floor(Math.random() * 1200) + "px";
        var randz = Math.floor(Math.random()*30);
        var counter = covers.length - temp_array.length;
        var z = counter + "px";
        $(this).css("top", randtop);
        $(this).css("left", randleft);
        $(this).css("z-index", z);
            
        var selected = Math.floor(Math.random()*temp_array.length);
        //console.log(selected);
        //countTotal++;
        //console.log(countTotal);
        var randomcover = temp_array[ selected ];
        //console.log(randomcover);
        $(this).html("<img src='img/covers/" + randomcover + "'>");
        temp_array.splice(selected, 1);
           
        });

});

$("#timebutton").click(function(){
    //var countTotal = 0;

    $(".stage").html(" ");
    var temp_array = covers.slice(0);
    for (var i = 0; i < covers.length - 1; i++){
        //countTotal++;
        //console.log(countTotal);
        $(".stage").append("<div class='prattler'></div>");

    };
    
    $(".prattler").each(function() {
        
        var selectedcover = temp_array[0]
        temp_array.splice(0, 1);
        //console.log(selectedcover);
        //console.log(temp_array);
        $(this).html("<img src='img/covers/" + selectedcover + "'>");
        
        var counter = covers.length - temp_array.length;
        //console.log(counter);
        var posleft = (counter * 200) - 200 + "px";
        var z = 30 + counter + "px";
        
        $(this).css("top", 200 + "px");
        $(this).css("left", posleft);
        $(this).css("z-index", z);
        
    });
});

$("#searchbutton").click(function() {
    $(".nav").html(" ");
    $(".nav").append("<h3>Search</h3><div class='searchbox'><select><option value='smart'>Keyword</option><option value='title'>Title</option><option value='Contributor'>Contributor</option><option value='year'>Year</option><option value='subject'>Subject</option></select><input type='text' role='textbox' size='30'><input alt='Search'  type='button' value='Search' autofocus><input type='button' value='Return' onclick='location.href='index.html'></button></div>");
    $(".nav").css("width", "300px");
});

var w = window.innerWidth + "px";
var h = window.innerHeight + "px";
//console.log(w, h);
$(".shadowbox").css("width", w);
$(".shadowbox").css("height", h);
$("body").append("<div id='testbutton>Test</div>;");
$(".title").click(function(){
    var countTotal = 0;
    countTotal++;
    console.log(countTotal);
    $(".reader").fadeIn();
    $(".reader").css("display","flex");
});
$("#exit").click(function() {
   $(".reader").css("display","none");
});

culture = ["Culture_0.png","Culture_1.png","Culture_2.png","Culture_3.png","Culture_4.png","Culture_5.png"];

    var num = 1;
    var totalpgs = culture.length;
    var pgsleft = culture.length - num;
    var currentpgright = totalpgs - pgsleft;
    

    
    console.log(currentpgright);
    
$(".rightpg").click(function() {
    $(".rightpg").css("background-color", "yellow");
    var num = num + 2;
    var leftpage = culture[currentpgright-1];
    var rightpage = culture[currentpgright];
    console.log(leftpage);
    console.log(rightpage);
});
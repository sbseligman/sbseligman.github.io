// JavaScript File
$("body").css("background-color", " #F4476B");

var covers = ["P_2000_SP3.png","P_2000_SP4.png","P_2001_SP2.png","P_2003_FA2.png","P_2003_FA3.png","P_2007_FA.png","P_2007_FA2.png","P_2007_SP.png","P_2014_FA3.png","P_2015_FA1.png","P_2015_FA2a.png","P_2015_FA2b.png","P_2015_SP2.png","P_2016_SP1.png"];

var currentcover = false;


$("#randmbutton").click(function(){
    $("#randmbutton").css("background-color", "yellow");
    $(".prattler").remove();
    for (var i = 0; i < 5; i++){
        $("body").append("<div class='prattler'></div>");
        $(".prattler").each(function() {
            var randtop = Math.floor(Math.random() * 500) + "px";
            var randleft = Math.floor(Math.random() * 1200) + "px";
            var randz = Math.floor(Math.random()*30);
            $(this).css("top", randtop);
            $(this).css("left", randleft);
            $(this).css("z-index", randz);
            
            var randomcover = covers[Math.floor(Math.random()*covers.length)];
            while (randomcover == currentcover) {
                randomcover = covers[Math.floor(Math.random()*covers.length)];
            };
            currentcover = randomcover;
            $(this).html("<img src='img/covers/" + randomcover + "'>");
           
        });
    };
});
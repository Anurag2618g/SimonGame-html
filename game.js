var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern =[]

var level = 0;

var started = false;

$(document).keypress(function(){
    if(!started){
        nextSequence();
        started = true;
    }
})

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");    
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
})


function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

    level++;

    $(".level-title").text("Level" + level);

}

function playSound(color){
    var audio = new Audio("./sounds/" +color+ ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass(".pressed");
    
    setTimeout(function(){
        $("#" + currentColor).removeClass(".pressed");
    },100);
}
var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern =[]

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");    
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
})


function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

}

function playSound(color){
    var audio = new Audio("./sounds/" +color+ ".mp3");
    audio.play();
}

// getting the initials and scores from local storage
var summonScore = JSON.parse(localStorage.getItem('highScore')) || [];
// variables that get elements from scores.html
var scoreHolder = document.getElementById("here");
var noScores = document.getElementById("clear");

// a for loop that creates a list item in the ordered list for every set of initials and score submitted
for (i = 0; i < summonScore.length; i++) {
    var postScore = document.createElement("li")
    postScore.textContent = (i + 1) + ". " + summonScore[i].name + "-" + summonScore[i].endScore;
    postScore.setAttribute("Class", "my-2 py-1 pl-1");
    scoreHolder.appendChild(postScore);
}


// a click evet listener for the clear highscores buton
/*when clicked it will delete all list items and all initials and scores from local storage*/
noScores.addEventListener("click", function() {
    for (i = 0; i < summonScore.length; i++) {
        localStorage.removeItem("highScore");
        scoreHolder.innerHTML = "";
    }
});

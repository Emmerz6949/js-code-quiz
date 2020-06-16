var summonScore = JSON.parse(localStorage.getItem('highScore')) || [];
var scoreHolder = document.getElementById("here");
var noScores = document.getElementById("clear");

for (i = 0; i < summonScore.length; i++) {
    var postScore = document.createElement("li")
    postScore.textContent = (i + 1) + ". " + summonScore[i].name + "-" + summonScore[i].endScore;
    postScore.setAttribute("Class", "my-2 py-1 pl-1");
    scoreHolder.appendChild(postScore);
}

noScores.addEventListener("click", function() {
    for (i = 0; i < summonScore.length; i++) {
        localStorage.removeItem("highScore");
        scoreHolder.innerHTML = "";
    }
});

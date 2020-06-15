// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

var startBut = document.getElementById("start");
var hOne = document.querySelector("h1");
var pgraph = document.querySelector("p");
var sect = document.querySelector("#container");
var timerSpan = document.getElementById("timer");

startBut.addEventListener("click", function() {
    pgraph.style.display = "none";
    startBut.style.display = "none";
    hOne.style.display = "none";
    countdown();
    axQ(questions);
    
});

var i = 0;
var gameOver = false;
var wrongAns = false;
var score = 0;


function axQ (arr) {
    
    var hThree = document.createElement("h3");
    hThree.textContent = arr[i].title;
    hThree.setAttribute("class", "text-md-left mb-3");
    sect.appendChild(hThree);

    var butOne = document.createElement("button");
    butOne.textContent = arr[i].choices[0];
    sect.appendChild(butOne);
    butOne.setAttribute("class", "btn d-md-block m-2 choice");

    var butTwo = document.createElement("button");
    butTwo.textContent = arr[i].choices[1];
    sect.appendChild(butTwo);
    butTwo.setAttribute("class", "btn d-md-block m-2 choice");

    var butThree = document.createElement("button");
    butThree.textContent = arr[i].choices[2];
    sect.appendChild(butThree);
    butThree.setAttribute("class", "btn d-md-block m-2 choice");

    var butFour = document.createElement("button");
    butFour.textContent = arr[i].choices[3];
    sect.appendChild(butFour);
    butFour.setAttribute("class", "btn d-md-block m-2 choice");

    var userPick = document.querySelectorAll(".choice");
    for (a = 0; a < userPick.length; a++) {
        userPick[a].addEventListener("click", function() {
            var pick = event.target;
            if (pick.textContent === arr[i].answer) {
                setTimeout(function(){
                    var line = document.createElement("hr");
                    sect.appendChild(line);

                    var yes = document.createElement("p");
                    yes.textContent = "Previous answer: CORRECT!";
                    sect.appendChild(yes);

                    setTimeout(function(){
                        line.style.display = "none";
                        yes.style.display = "none";
                    }, 1000);
                }, 100);
            }
            else {
                wrongAns = true;
                setTimeout(function(){
                    var lined = document.createElement("hr");
                    sect.appendChild(lined);

                    var no = document.createElement("p");
                    no.textContent = "Previous answer: WRONG!";
                    sect.appendChild(no);

                    setTimeout(function(){
                        lined.style.display = "none";
                        no.style.display = "none";
                    }, 1000);

                }, 100);
            }
            sect.innerHTML = "";
            i++;
            if (i < arr.length) {
                axQ(questions);
            }
            else {
                var endHThree = document.createElement("h3");
                endHThree.textContent = "All done!";
                endHThree.setAttribute("class", "text-md-left mb-3");
                sect.appendChild(endHThree);

                gameOver = true;
            }
        });
    }
}

function countdown() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      timerSpan.textContent = "Time: " + timeLeft;
      timeLeft--;

      if (wrongAns === true) {
          timeLeft = timeLeft - 10;
          wrongAns = false;
      }
  
      if (timeLeft <= 0) {
        sect.innerHTML = "";

        timerSpan.textContent = "Time: 0";

        var sadEndHThree = document.createElement("h3");
        sadEndHThree.textContent = "You Ran Out Of Time!";
        sadEndHThree.setAttribute("class", "text-md-left mb-3");
        sect.appendChild(sadEndHThree);

        var userScore = document.createElement("p");
        userScore.textContent = "Your final score is " + score;
        userScore.setAttribute("class", "text-md-left");
        sect.appendChild(userScore);  

        var pity = document.createElement("p");
        pity.textContent = "To save you from embaressment we won't require you to enter your initials.";
        pity.setAttribute("class", "text-md-left");
        sect.appendChild(pity); 


        clearInterval(timeInterval);
      }
      else if (gameOver === true) {
          var lines = document.querySelector("hr");
          lines.style.display = "none";

          var newPGraph = document.querySelector("p");
          newPGraph.style.display = "none";

          score = timeLeft;

          var userScore = document.createElement("p");
          userScore.textContent = "Your final score is " + score;
          userScore.setAttribute("class", "text-md-left");
          sect.appendChild(userScore);  

          var initials = document.createElement("p");
          initials.textContent = "Enter Initials: ";
          initials.setAttribute("class", "text-md-left");
          sect.appendChild(initials);

          var userName = document.createElement("input");
          userName.setAttribute("type", "text");
          initials.appendChild(userName);

          var done = document.createElement("button");
          done.textContent = "Submit";
          done.setAttribute("class", "btn m-2");
          initials.appendChild(done);
         

          timerSpan.textContent = "Time: 0";

          clearInterval(timeInterval);
      }
    }, 1000);
  }

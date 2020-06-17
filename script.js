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

// variables that get elements from index.html
var startBut = document.getElementById("start");
var hOne = document.querySelector("h1");
var pgraph = document.querySelector("p");
var sect = document.querySelector("#container");
var timerSpan = document.getElementById("timer");

//a click event listener for the start button
/*when clicked it will set the display property to "none" for the h1 tag, p tag, and 
itself (itself being the sart button), and it will call the countdown function and axQ function*/
startBut.addEventListener("click", function() {
    pgraph.style.display = "none";
    startBut.style.display = "none";
    hOne.style.display = "none";
    countdown();
    axQ(questions);
    
});

// variables for the functions to use
var i = 0;
var gameOver = false;
var wrongAns = false;
var score = 0;

//the axQ function in all its glory
/*when called it asks the first question in the questions array via creating an h3 containing 
the question and creating 4 buttons that contain the answer choices, it applies an event listener to 
the 4 buttons and checks if the user clicked the right answer or not and will create an hr and paragraph at 
the bottom of the page to infor them which it was, if it was wrong it sets wrongAns to true, and regardless of 
right or wrong, if they click any of the answer choice buttons it will clear the section tag's content and create 
the next question in the same manor, when there are no more questions it wil create 
the "All done!" h3 and set gameover to true*/
function axQ (arr) {
    //creates h3
    var hThree = document.createElement("h3");
    hThree.textContent = arr[i].title;
    hThree.setAttribute("class", "text-md-left mb-3");
    sect.appendChild(hThree);

    //creates first button
    var butOne = document.createElement("button");
    butOne.textContent = arr[i].choices[0];
    sect.appendChild(butOne);
    butOne.setAttribute("class", "btn d-md-block m-2 choice");

    //creates second button
    var butTwo = document.createElement("button");
    butTwo.textContent = arr[i].choices[1];
    sect.appendChild(butTwo);
    butTwo.setAttribute("class", "btn d-md-block m-2 choice");

    //creates third button
    var butThree = document.createElement("button");
    butThree.textContent = arr[i].choices[2];
    sect.appendChild(butThree);
    butThree.setAttribute("class", "btn d-md-block m-2 choice");

    //creates fourth button
    var butFour = document.createElement("button");
    butFour.textContent = arr[i].choices[3];
    sect.appendChild(butFour);
    butFour.setAttribute("class", "btn d-md-block m-2 choice");

    /*userPick = all answer choice buttons, the for loop assigns the event listener to each button, and 
    checks if the button clicked is the right answer and creates an hr and paragraph to 
    inform the user, wrong answers set wrongAns to true*/
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
            //clears the section tag's content
            sect.innerHTML = "";
            //i was declared as 0 earlier, this increments it by one each time the function is called
            i++;
            /*this checks if there are anymore questions, if there are then it will run the function again, else it will
            create the "All done!" h3 and set gameover to true*/
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

//the countdown funcion in all its glory as well
/*when called it sets the timer to 75 and visibly countsdown on index.html via creating a variable called 
timeLeft that is equal to 75 and creating a timeInterval variable that decrements the
timeLeft value every second, timeInterval also checks 
if wrongAns has been set to true, if it has then 
it subtracts 10 from timeLeft and sets wrongAns back to false, if timeLeft is less than or equal to 0 it clears the 
section content and sets the visible time to 0 and creates an h3, two paragraphs and 
a button which essentially say "you ran out of time and your score is zero, to save you from 
embarrassment you don't have to submit initials" and the button says "okay" and if clicked 
redirects the user back to the quiz page, otherwise if gameOver is set to true it will set score = timeLeft and create 
two paragraphs, an input, and a button which 
essentially says "your final score is (the value of timeLeft), enter your initials" which is followed by 
the input box, the button says "submit" and if clicked will 
save the initials and score into the local storage and redirect the user to the highscores page*/
function countdown() {
    //creates the timeLeft variable that is equal to 5
    var timeLeft = 75;

    /*every second this will decrement the timeLeft value by 1, check if wrongAns is set to 
    true and if it is it will subtract 10 from timeLeft then set wrongAns to false, check if timeLeft is 
    less than or equal to 0 if it is then it tells the user 
    they ran out of time, their score is zero, no initials neccesary and the only button available will take 
    them back to the start quiz page, if timeLeft is greater than 0 it checks if gameOver is set 
    to true, if it is it will tell the user their score and ask for 
    their initials, when the user clicks the submit button it will 
    save their score and initials to local storage and redrict the user to scores.html*/
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
        pity.textContent = "To save you from embarrassment we won't require you to enter your initials.";
        pity.setAttribute("class", "text-md-left");
        sect.appendChild(pity); 

        var sad = document.createElement("button");
        sad.textContent = "Okay";
        sad.setAttribute("class", "btn m-2");
        sect.appendChild(sad);
        
        sad.addEventListener("click", function() {
            event.preventDefault()
            window.location.assign('index.html');
        });

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

          var summonScore = JSON.parse(localStorage.getItem('highScore')) || [];

          done.addEventListener("click", function() {
            event.preventDefault()
            var leScore = {
                endScore: score,
                name: userName.value.toUpperCase()
            };
            summonScore.push(leScore);
            summonScore.sort(function(a, b) {
                return b.endScore - a.endScore;
            });
        
            localStorage.setItem('highScore', JSON.stringify(summonScore));

            window.location.assign('highscore/scores.html');
        });
         

          timerSpan.textContent = "Time: 0";

          clearInterval(timeInterval);
      }
    }, 1000);
}

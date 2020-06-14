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

startBut.addEventListener("click", function() {
    pgraph.style.display = "none";
    startBut.style.display = "none";
    hOne.style.display = "none";
    axQ(questions[0]);
      
});

 function axQ (arrIndex) {
    var hThree = document.createElement("h3");
    hThree.textContent = arrIndex.title;
    hThree.setAttribute("class", "text-md-left mb-3");
    sect.appendChild(hThree);
    var butOne = document.createElement("button");
    butOne.textContent = arrIndex.choices[0];
    sect.appendChild(butOne);
    butOne.setAttribute("class", "btn d-md-block m-2 choice");

    var butTwo = document.createElement("button");
    butTwo.textContent = arrIndex.choices[1];
    sect.appendChild(butTwo);
    butTwo.setAttribute("class", "btn d-md-block m-2 choice");

    var butThree = document.createElement("button");
    butThree.textContent = arrIndex.choices[2];
    sect.appendChild(butThree);
    butThree.setAttribute("class", "btn d-md-block m-2 choice");

    var butFour = document.createElement("button");
    butFour.textContent = arrIndex.choices[3];
    sect.appendChild(butFour);
    butFour.setAttribute("class", "btn d-md-block m-2 choice");
}

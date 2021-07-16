//global variables

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var counter = document.getElementById("counter")
var timeGuage = document.getElementById("timeGuage");
var answer = document.getElementById("answer");
var scoreDiv = document.getElementById("scoreContainer");

//questions

var question = [
   { question : "what does HTML stand for?",
    choiceA : "Happy Times Mean Laughter",
    choiceB : "His Temper Might Linger",
    choiceC : "Hypertext Markup Language",
    choiceD : "trick question, it doesn't mean anything",
    correct : "c"
},

    { question : "what does CSS stand for?",
    choiceA : "Cascading Style Sheets",
    choiceB : "Cant Stop Smiling",
    choiceC : "Card Style's Sharp",
    choiceD : "Common Stunt Starts",
    correct : "a"
},

 { question : "what does JS stand for?",
    choiceA : "Jorts",
    choiceB : "Justice Served",
    choiceC : "JavaScript",
    choiceD : "Just Sayin'",
    correct : "c"
},

    { question : "The condition in an if / else statement is enclosed with ___________.",
    choiceA : "Quotes",
    choiceB : "Curly brackets",
    choiceC : "Parenthesis",
    choiceD : "Square brackets",
    correct : "c"
},

    { question : "Arrays in Javascript can be used to store _____________.",
    choiceA : "Numbers and strings.",
    choiceB : "Other arrays",
    choiceC : "Booleans",
    choiceD : "All of the above.",
    correct : "d"
}
];
//global variables

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionDiv = document.getElementById("question");
var choiceA = document.getElementById("choiceAA");
var choiceB = document.getElementById("choiceBB");
var choiceC = document.getElementById("choiceCC");
var choiceD = document.getElementById("choiceDD");
var counterEl = document.getElementById("counter");
var timerEl = document.getElementById("time"); 
var timeGuage = document.getElementById("timeGuage");
var answer = document.getElementById("answer");
var scoreDiv = document.getElementById("scoreContainer");
var score = 0;
var timerId;

//questions

var questions = [
   { question : "what does HTML stand for?",
    choiceAA : "Happy Times Mean Laughter",
    choiceBB : "His Temper Might Linger",
    choiceCC: "Hypertext Markup Language",
    choiceDD : "trick question, it doesn't mean anything",
    correct : "choiceCC"
},

    { question : "what does CSS stand for?",
    choiceAA : "Cascading Style Sheets",
    choiceBB : "Cant Stop Smiling",
    choiceCC : "Card Style's Sharp",
    choiceDD : "Common Stunt Starts",
    correct : "choiceAA"
},

 { question : "what does JS stand for?",
    choiceAA : "Jorts",
    choiceBB : "Justice Served",
    choiceCC : "JavaScript",
    choiceDD : "Just Sayin'",
    correct : "choiceCC"
},

    { question : "The condition in an if / else statement is enclosed with ___________.",
    choiceAA : "Quotes",
    choiceBB : "Curly brackets",
    choiceCC : "Parenthesis",
    choiceDD : "Square brackets",
    correct : "choiceCC"
},

    { question : "Arrays in Javascript can be used to store _____________.",
    choiceAA : "Numbers and strings.",
    choiceBB : "Other arrays",
    choiceCC : "Booleans",
    choiceDD : "All of the above.",
    correct : "choiceDD"
}
];
var time = questions.length * 15;
start.addEventListener("click", startQuiz);

var lastQuestion = question.length - 1;
var runningQuestion = 0;
var count = 0;

function quizEnd() {
    clearInterval(timerId);
    console.log("done!");

}

function startCountdown() {
     time--;
     timerEl.textContent = time;

        if (time <= 0) {
          quizEnd();  
        }
}


//start quiz
function startQuiz() {
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
timerId = setInterval(startCountdown, 1000);
}


function renderQuestion(){
   if(questions[runningQuestion]){ let q = questions[runningQuestion];

    questionDiv.innerHTML = "<p>" + q.question + "</p>";

    choiceA.innerHTML = q.choiceAA;
    choiceB.innerHTML = q.choiceBB;
    choiceC.innerHTML = q.choiceCC;
    choiceD.innerHTML = q.choiceDD;
    }
};

function questionClick() {
    /*check to see if answer are right or wrong 
    if statement for wrong take away time from timer
     quiz end will display high score */
    /*Feedback for right or wrong (setTimeEl) to disapear after a second*/
    /*increment quesiton counter [runningQuestion]= questions.length*/
    /* check to see if at end of questions */

}

choiceA.addEventListener("click", function(event){
    let q = questions[runningQuestion]; 
    console.log(event.target.id);
    console.log(q.correct); 
    if (event.target.id == q.correct) {
        score++;
        console.log(score);
        runningQuestion++;
        renderQuestion();
    }
    else{
        runningQuestion++;
        renderQuestion();
    }
});
choiceB.addEventListener("click", function(event){
    let q = questions[runningQuestion]; 
    console.log(event.target.id);
    console.log(q.correct); 
    if (event.target.id == q.correct) {
        score++;
        console.log(score);
        runningQuestion++;
        renderQuestion();
    }
    else{
        runningQuestion++;
        renderQuestion();
    }
});
choiceC.addEventListener("click", function(event){
    let q = questions[runningQuestion]; 
    console.log(event.target.id);
    console.log(q.correct); 
    if (event.target.id == q.correct) {
        score++;
        console.log(score);
        runningQuestion++;
        renderQuestion();
    }
    else{
        runningQuestion++;
        renderQuestion();
    }
});
choiceD.addEventListener("click", function(event){
    let q = questions[runningQuestion]; 
    console.log(event.target.id);
    console.log(q.correct); 
    if (event.target.id == q.correct) {
        score++;
        console.log(score);
        runningQuestion++;
        renderQuestion();
    }
    else{
        runningQuestion++;
        renderQuestion();
    }
});





// //render progress
// function renderProgress (){
//     for(let qIndex = 0; qIndex <= lastQuestion;
//         qIndex++){
//             ProgressEvent.innerHTML += "<div class ='prog' id=" + qIndex + "></div>";
//         }
// }















// renderQuestion();

// runningQuestionIndex++;
// renderQuestion();

// const questionTime = 10;
// // const guageWidth = 150;
// let count = 0;
// const guageProgressUnit = gugageWidth/ questionTime;

// let TIMER = setInterval(counterRender, 1000);


// function counterRender(){
//     if(count <= questionTime){
//         counter.innerHTML = count;
//         timeGuage.style.width = guageProgressUnit * count + "px";
//         count++;
//     }
//     else{
//         count = 0;
//         answerIsWrong();
//         if(runningQuestionIndex < lastQuestionIndex){
//             runningQuestionIndex++;
//             questionRender();
//         }
//         else{
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// };

// function checkAnswer(answer){
//     if(question[runningQuestionIndex].correct == answer){
//         score++;
//         answerIsCorrect(); 
//     }
//     else{
//         answerIsWrong();
//     }
//     if(runningQuestionIndex < lastQuestionIndex){
//         count = 0;
//         runningQuestionIndex++;
//         questionRender();
//     }
//     else{
//         clearInterval(TIMER);

//         scoreRender();
//     }
// };

// const start = document.getElementById("start");

// start.addEventListener("click",startQuiz);

// let TIMER;

// function startQuiz(){
//     start.style.display = "none";
//     counterRender();
//     TIMER = setInterval(counterRender,1000);
//     progressRender();
//     questionRender();
//     quiz.style.display = "block";
// };

// function scoreRender(){
//     ServiceWorkerContainer.style.display = "block";
//     let scorePerCent = Math.round(100 * score/ questions.length);
// }

// 

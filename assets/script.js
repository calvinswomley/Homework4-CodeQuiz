//scores and initials
var score;
var initials = document.querySelector("#initials");
var time = document.querySelector(".timeleft")
var secondsLeft = 60;
var answeredQuestions = 0;
var finalScore = document.querySelector("#finalScore");
var participantScores = {
    storedInitials: [],
    storedScore: []
};


//time function
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = "Time Remaining:" + secondsLeft;
        if (answeredQuestions >= 5) {
            score += secondsLeft;
            clearInterval(timerInterval);
        }
        if(secondsLeft === 0) {
            score += secondsLeft;
            clearInterval(timerInterval);
            
            question1.setAttribute("style", "visibility: hidden;");
            question2.setAttribute("style", "visibility: hidden;");
            question3.setAttribute("style", "visibility: hidden;");
            question4.setAttribute("style", "visibility: hidden;");
            question5.setAttribute("style", "visibility: hidden;");
            yourscore.setAttribute("style", "visibility: visible;");
        }
        finalScore.textContent = "Your Score: " + secondsLeft;
        score = secondsLeft;
    }, 1000);
    
}



//Page variables
var startquiz = document.querySelector("#startquiz");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var yourscore = document.querySelector("#yourscore");
var highscores = document.querySelector("#highscores");

//Button: startquiz and question1
var startButt = document.querySelector("#startbutton");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
//Button: question2 and question3
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var b4 = document.querySelector("#b4");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");
//Button: question 4 and 5
var d1 = document.querySelector("#d1");
var d2 = document.querySelector("#d2");
var d3 = document.querySelector("#d3");
var d4 = document.querySelector("#d4");
var e1 = document.querySelector("#e1");
var e2 = document.querySelector("#e2");
var e3 = document.querySelector("#e3");
var e4 = document.querySelector("#e4");
//Button: submit initials, clear scores
var submitinitials = document.querySelector("#submitinitials");
var backtostart = document.querySelector("#backtostart");
var clearscores = document.querySelector("#clearscores");


//Listener and function for transition 1
startButt.addEventListener("click", function() {
    startquiz.setAttribute("style", "visibility: hidden;");
    question1.setAttribute("style", "visibility: visible;");
    setTimer();
});
//Listener and function for transition 2
a1.addEventListener("click", function() {
    question1.setAttribute("style", "visibility: hidden;");
    question2.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
a2.addEventListener("click", function() {
    question1.setAttribute("style", "visibility: hidden;");
    question2.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
a3.addEventListener("click", function() {
    question1.setAttribute("style", "visibility: hidden;");
    question2.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
});
a4.addEventListener("click", function() {
    question1.setAttribute("style", "visibility: hidden;");
    question2.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
//Listener and function for transition 3
b1.addEventListener("click", function() {
    question2.setAttribute("style", "visibility: hidden;");
    question3.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
b2.addEventListener("click", function() {
    question2.setAttribute("style", "visibility: hidden;");
    question3.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
b3.addEventListener("click", function() {
    question2.setAttribute("style", "visibility: hidden;");
    question3.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
});
b4.addEventListener("click", function() {
    question2.setAttribute("style", "visibility: hidden;");
    question3.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
//Listener and function for transition 4
c1.addEventListener("click", function() {
    question3.setAttribute("style", "visibility: hidden;");
    question4.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
c2.addEventListener("click", function() {
    question3.setAttribute("style", "visibility: hidden;");
    question4.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
c3.addEventListener("click", function() {
    question3.setAttribute("style", "visibility: hidden;");
    question4.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
c4.addEventListener("click", function() {
    question3.setAttribute("style", "visibility: hidden;");
    question4.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
});
//Listener and function for transition 5
d1.addEventListener("click", function() {
    question4.setAttribute("style", "visibility: hidden;");
    question5.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
d2.addEventListener("click", function() {
    question4.setAttribute("style", "visibility: hidden;");
    question5.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
d3.addEventListener("click", function() {
    question4.setAttribute("style", "visibility: hidden;");
    question5.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
});
d4.addEventListener("click", function() {
    question4.setAttribute("style", "visibility: hidden;");
    question5.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
//Listener and function for transition 6
e1.addEventListener("click", function() {
    question5.setAttribute("style", "visibility: hidden;");
    yourscore.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
e2.addEventListener("click", function() {
    question5.setAttribute("style", "visibility: hidden;");
    yourscore.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
e3.addEventListener("click", function() {
    question5.setAttribute("style", "visibility: hidden;");
    yourscore.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
    secondsLeft -= 10;
});
e4.addEventListener("click", function() {
    question5.setAttribute("style", "visibility: hidden;");
    yourscore.setAttribute("style", "visibility: visible;");
    answeredQuestions++;
});
//Back to Start and Clear Scores listener
backtostart.addEventListener("click", function() {
    highscores.setAttribute("style", "visibility: hidden;");
    startquiz.setAttribute("style", "visibility: visible;");
    secondsLeft = 60;
    answeredQuestions = 0;   
});


//Display High Scores
var highScoresList = document.querySelector("#high-scores-list");

function displayHighScores() {
    highScoresList.innerHTML = "";
    var storedParticipantScores = JSON.parse(localStorage.getItem("participantScores"));
    for (var i = 0; i < storedParticipantScores.storedScore.length; i++) {
        var partInitials = storedParticipantScores.storedInitials[i];
        var partScore = storedParticipantScores.storedScore[i];

        var listItem = document.createElement("li");
        listItem.textContent = partInitials + ":  " + partScore;
        listItem.setAttribute("data-index", i);

        highScoresList.appendChild(listItem);
    }
}

//Submit initials and score listener
submitinitials.addEventListener("click", function(event) {
    event.preventDefault();
    getScoresFromStorage()
});

function getScoresFromStorage() {
        var storedParticipantScores = JSON.parse(localStorage.getItem("participantScores"));
        if (storedParticipantScores !== null) {
            participantScores = storedParticipantScores;
        }
         //storedParticipantScores = JSON.parse(localStorage.getItem("participantScores"));
    
        participantScores.storedInitials.push(initials.value);
        participantScores.storedScore.push(score);
        localStorage.setItem("participantScores", JSON.stringify(participantScores));
        yourscore.setAttribute("style", "visibility: hidden;");
        highscores.setAttribute("style", "visibility: visible;");

        document.querySelector('#initials').value = '';
        displayHighScores();
    }


//Clear Scores button
clearscores.addEventListener("click", function() {
    localStorage.clear();
    participantScores = {
        storedInitials: [],
        storedScore: []
    };
    document.getElementById("high-scores-list").innerHTML = "";
});



//Storing score and initials to browser as object
/* Here is a helpful link for this section:  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_copy  */



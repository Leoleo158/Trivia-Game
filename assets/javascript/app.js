//var for timer

var counter = 60;
var intervalId;

//var creation

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//Questions and then anwser list array

var questions = [{
    quesion: "What franchise has played in the most NBA finals since 1947?",
    answerList: ["San Antonio Spurs", "Boston Celtics", "Los Angeles Lakers", "Chicago Bulls"],
    answer: 2
},{
    question: "What NBA team has the most championships?",
    answerList: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
    answer: 1
},{
    question: "Who is the silhoutte of the NBA logo?",
    answerList: ["Lebron James", "Kobe Bryant", "Michael Jordan", "Jerry West"],
    answer: 3
},{
    question: "Who is the only NBA player to ever score 100 points in one game?",
    answerList: ["Lebron James", "Kobe Bryant", "Michael Jordan", "Kareem Abdul-Jabbar", "Wilt Chamberlain"],
    answer: 4
},{
    question: "Which NBA player stars in Space Jame?",
    answerList: ["Lebron James", "Kobe Bryant", "Michael Jordan", "Tim Duncan"],
    answer: 2
},{
    question: "Which NBA team has the most consecutive playoff appreances?",
    answerList: ["San antonio Spurs", "Los Angeles Lakers", "Los Angeles Clippers", "Boston Celtics"],
    answer: 0
},{
    question: "Which NBA player was the MVP of the regular season in 2011?",
    answerList: ["Lebron James", "Kobe Bryant", "Tim Duncan", "Derick Rose"],
    answer: 3
},{
    question: "How many Championship rings does Bill Russell have?",
    answerList: ["5", "11", "8", "2"],
    answer: 1
}];

//have start button start after it's clicked

$("#start").on("click"), function() {
    //hide start button after it's clicked
    $(this).hide();

    //display initial counter
    $("#timer").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");
    //run countown
    countdown();
    // Display questions
    // Question 1
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );
    //Question 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );
    //Question 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );
    //Q4
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[4] + "</label><br><br>"
         
    );

}

//countown function for timer to countdown
var countdown = setInterval(function(){
    if(counter <= 0){
      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = "Times up!";
    } else {
      document.getElementById("timer").innerHTML = counter + " seconds remaining";
    }
    counter -= 1;
  }, 1000);
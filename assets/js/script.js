var points = 0



const startButtonEl= document.getElementById("start-btn");
const nextButtonEl= document.getElementById("next-btn");
const questionContainerEl= document.getElementById('question-container');
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

const countDownEl = document.getElementById('countdown')

const rightWrongEl = document.getElementById("rightwrong");

let shuffledQestions, currentQuestionIndex


startButtonEl.addEventListener("click", startGame);
nextButtonEl.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
    rightWrongEl.innerText = ""
}
 )

function startGame(){
console.log('started')
startButtonEl.classList.add('hide')
shuffledQestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerEl.classList.remove('hide')
setNextQuestion()

//start timer 
setInterval(startTimer, 1000);
var time = 60;

    function startTimer() {
    countDownEl.innerHTML=  `${time}`
    time--; 
    }

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQestions[currentQuestionIndex])
}

function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {

    //will probably need to reset score in here 


    nextButtonEl.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
   // showCorrect(document.querySelector(#))
   if (correct){
       rightWrongEl.innerText = "THAT'S RIGHT!";
       rightWrongEl.className = "correct"
       points= points + 10;
       console.log(points)
       
   }else {
       rightWrongEl.innerText = "INCORRECT"
       rightWrongEl.className = "incorrect"
       

   }

    
    //need to call function to keep score and subtract time when wrong


    if (shuffledQestions.length > currentQuestionIndex +1) {

    nextButtonEl.classList.remove('hide')
    }else {
        startButtonEl.innerText = 'RESTART'
        startButtonEl.classList.remove('hide')
        //need to change the box to display hight scores at end of quiz
        questionEl.innerText = "Highscores:"
        questionEl.className = "finished"
        answerButtonsEl.className = "hide";


    }

    

}



     






    // add points to score when correct subtract time when incorrect
    // need to have right or wrong notification underneath the next button

    //figure out how to end the quiz when time is up







const questions = [
    {
     question: 'What language primarily controls the way your webpage looks?',   
     answers: [
         {text: 'CSS', correct: true},
         {text: 'HTML', correct: false},
         {text: 'Python', correct: false},
         {text: 'Javascript', correct: false}
        ]
    },
    {
        question: 'What does console.log do?',   
        answers: [
            {text: 'Prints text on your webpage', correct: false},
            {text: 'Adds an element to HTML', correct: false},
            {text: 'prints text in the browsers console', correct: true},
            {text: 'all of the above', correct: false}
           ]
       },
       {
        question: 'What comes last in a if/else statement?',   
        answers: [
            {text: 'if', correct: false},
            {text: 'else', correct: true},
            {text: 'else if', correct: false},
            {text: 'if else', correct: false}
           ]
       },
       {
        question: 'What is the correct way to declare a function?',   
        answers: [
            {text: 'function name(parameters) {action}', correct: true},
            {text: 'function name(parameters) = {action}', correct: false},
            {text: 'function name(action()={parameters}', correct: false},
            {text: "Order doesn't matter as long as all elements are there", correct: false}
           ]
       },
       {
        question: 'Will Neil make a great developer?',   
        answers: [
            {text: 'hopefully', correct: false},
            {text: 'who knows', correct: false},
            {text: 'not a chance', correct: false},
            {text: 'will probably be the greatest of all time', correct: true}
           ]
       },
]

// make link for highscores show the previous highscores

//add up total points and store 
    //take variable (score) and add to local storage
    //be able to view local storage after the quiz function is over and when view high score is clicked

    /*localStorage.setItem("Highscores", points);
    renderLastScores()
        console.log(points)
    }
*/
    


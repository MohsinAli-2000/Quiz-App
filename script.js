const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue-Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the capital of Pakistan?",
    answers: [
      { text: "Lahore", correct: false },
      { text: "Karachi", correct: false },
      { text: "Islamabad", correct: true },
      { text: "Multan", correct: false },
    ],
  },
  {
    question: "What is the national drink of Pakistan?",
    answers: [
      { text: "Milk", correct: false },
      { text: "Sugar Cane juice", correct: true },
      { text: "Lemon Water", correct: false },
      { text: "Soda", correct: false },
    ],
  },
  {
    question: "Which is our national animal?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Markhor", correct: true },
      { text: "Cow", correct: false },
      { text: "Eagle", correct: false },
    ],
  },
  {
    question: "Which colors are in the Pakistan flag?",
    answers: [
      { text: "Blue and Green", correct: false },
      { text: "Green and White", correct: true },
      { text: "Black and Green", correct: false },
      { text: "Blue and White", correct: false },
    ],
  },
];
let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let startQuiz = ()=>{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
let showQuestion = ()=>{
    resetState();
    let currentQuestion = questions[currentQuestionIndex ];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text ;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    })
}
let resetState = ()=>{
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
let selectAnswer = (e)=>{
      const selectedButton = e.target;
      const isCorrect = selectedButton.dataset.correct === "true";
      if (isCorrect){
        selectedButton.classList.add("correct");
        score++;
      }else {
        selectedButton.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true"){
          button.classList.add("correct")
        }
        button.disabled = true ;
      });
      nextButton.style.display = "block" ;
} 

let showScore = ()=>{
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!.`;
    nextButton.innerHTML = "Quiz Again";
    nextButton.style.display = "block";
}

let handleNextButton = ()=>{
    currentQuestionIndex++ ;
    if (currentQuestionIndex < questions.length){
      showQuestion();
    }else{
      showScore();
    }
}


nextButton.addEventListener("click" , ()=>{
  if (currentQuestionIndex < questions.length){
      handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();

























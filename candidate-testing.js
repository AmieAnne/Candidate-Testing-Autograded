const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer = "1017";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers = '1017';
let candidateAnswers;

runProgram ();
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = (input.question("What is your name? "))} 

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
this.candidateAnswer = (input.question("How many Pokemon are there? "))



}

function gradeQuiz(candidateAnswer) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log(candidateAnswer)
  if (candidateAnswer == correctAnswer) {
    console.log("YES! Good job," + candidateName +"! You're on your way to becoming a Pokemon master! 😍");
  }
  else if (candidateAnswer != correctAnswer){
    console.log("No! Sorry," + candidateName + ", you'll never be a Pokemon Master. 😓");
  }
  

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hi," + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswer);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

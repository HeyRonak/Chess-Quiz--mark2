var print = console.log;
const chalk = require("chalk");
const readlineSync = require("readline-sync");

var userScore = 0;

print(chalk.green.underline("Hey,Welcome to my chess quiz : \n"))

print(chalk.green.underline("--------INSTRUCTIONS--------\n" + "For each correct answer you got 1 point.\n"));

var userName = readlineSync.question(chalk.green("Please enter your name : "));

function answerChecker(question,answer,op1,op2,op3){

    print( "\n"+ question + "\n" + op1 + "\n" + op2 + "\n" + op3);
    var userAnswer = readlineSync.question("\nEnter your choice (1-3): ");

    if(userAnswer === answer){
      print(chalk.green("Hurrah ! You got 1 point"));  
      userScore++;
    }else{
      print(chalk.red("Sorry ! wrong answer.\n"));  
      print(chalk.red("Correct answer is option : " + answer));
    }

}


var questions = [
    {
      question : "How many squares does the chess gameboard have ? :" ,
      answer : "1",
      option1: "(1)64" ,
      option2: "(2)80",
      option3: "(3)62"
    },

    {
      question : "How many pieces does each player need to start the game ? :" ,
      answer : "3",
      option1: "(1)18",
      option2: "(2)14",
      option3: "(3)16"
    },

    {
      question : "How many pawns does the game have ? :" ,
      answer : "1",
      option1: "(1)8",
      option2: "(2)9",
      option3: "(3)7"
    },
    
    {
      question : "What is the most powerful piece of the game ? :" ,
      answer : "3",
      option1: "(1)pawn",
      option2: "(2)king",
      option3: "(3)queen"
    },
    
    {
      question : "What colors do the chess pieces have ? :" ,
      answer : "2",
      option1: "(1)Blue and white",
      option2: "(2)Black and white",
      option3: "(3)Yellow and green"
    }
];


for(i=0;i<questions.length;++i){
  answerChecker( questions[i].question,questions[i].answer,questions[i].option1,questions[i].option2 ,questions[i].option3 );
}

print("----------------------------------");

print(chalk.bgBlack.bold( "\n" +userName +" your final score is : " + userScore + "\n\n"));

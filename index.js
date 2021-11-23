var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log("Quiz Rules: ")
console.log(chalk.blue("1.All questions are compulsary"))
console.log(chalk.blue("2.Each question carries 4 marks"))
console.log(chalk.blue("3.Wrog question will takeaway 1 mark\n"))



console.log("HOW MUCH YOU KNOW ABOUT Datastructure and algo?")
var userName = readlineSync.question("May i know your name? \n")


console.log("Hello " + chalk.green(userName+"!") + "  Welcome..." );
console.log("Test your knowledge of ds&algo?")
console.log("----------------------------------------------\n")


initialScore = 0;

let quiz = [{
  question : " 1. What Datastructure used for depth first search traversal graph?",
  a : "[a] Queue",
  b : "[b] Stack",
  c : "[c] List",
  correctAnswer : "b"
},
 {
  question : "2.Searching and sorting algo are best implimented with which Datastructure?",
  a : "[a] An array based list",
  b : "[b] a linkedlist",
  c : "[c] both a and b",
  correctAnswer : "c"
},
{
  question : "3.which search algo is best for large list?",
  a : "[a] sequential searcch",
  b : "[b] binary search",
  c : "[c] linear search",
  correctAnswer : "b"
},
{
   question : "4. Stack is also called?",
  a : "[a] Last in first out",
  b : "[b] First in last out  ",
  c : "[c] Last in last out",
  correctAnswer : "a"
},
{
   question : "5. Which data structure allows deleting data elements from and inserting at rear?",
  a : "[a] Stacks",
  b : "[b] Queues ",
  c : "[c] Dequeues",
  correctAnswer : "b"
}
]



function playQuiz() {
for (var i=0; i<quiz.length; i++) {
  var questions = quiz[i].question;
  var optionOne = quiz[i].a;
  var optionTwo = quiz[i].b;
  var optionThree = quiz[i].c;

  console.log(chalk.red(questions))
  console.log(optionOne)
  console.log(optionTwo)
  console.log(optionThree)
  var answer = readlineSync.question("whats your answer? (a/b):  ")
  if (answer === quiz[i].correctAnswer) {
    console.log(chalk.green("You are Right!"))
    initialScore = initialScore + 4;
    console.log("Your Score is: " + chalk.blue(initialScore)+"\n")
  }
  else {
    console.log(chalk.red("Oops! Wrong Answer"))
    initialScore = initialScore - 1;
    console.log("CurrentScore is: " + chalk.blue(initialScore)+"\n")
  }
}
console.log("-----------------------------------------\n")
console.log(chalk.yellow("Congragulations! You Scored :", initialScore))
console.log("Thanks for playing!, CheckOut the High scores below. If you want to be there ping me, I'll update.\n")

console.log(chalk.yellow("Ayush : 20"))
console.log(chalk.yellow("roopa : 15"))
}





playQuiz();
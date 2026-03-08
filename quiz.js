const readline = require("readline");
const questions = require("./questions");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let index = 0;

function askQuestion() {

  if (index >= questions.length) {
    console.log("Finished");
    console.log("Score:", score);
    rl.close();
    return;
  }

  let q = questions[index];

  console.log("\n" + q.question);

  q.options.forEach((o, i) => {
    console.log(i + ": " + o);
  });

  rl.question("Answer: ", (input) => {

    if (parseInt(input) === q.answer) {
      console.log("Correct");
      score++;
    } else {
      console.log("Wrong");
    }

    index++;
    askQuestion();
  });
}

askQuestion();
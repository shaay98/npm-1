"use stict"

import inquirer from "inquirer";

async function askUserName() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "userName",
        message: "What is your name?",
      },
    ]);
    console.log(`Hello, ${answers.userName}!`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

askUserName();

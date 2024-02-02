import inquirer from "inquirer";
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "userSentence",
            message: "Kindly enter your sentence to count the words",
        },
    ]);
    const words = answer.userSentence.trim().split(" ");
    const totalwords = words.length;
    console.log(`the total words of your sentances are: ${totalwords}`);
    let answers = await inquirer.prompt([
        {
            type: "confirm",
            name: "again",
            message: "Do you wantto count the words of sentence",
        },
    ]);
    loop = answers.again;
}

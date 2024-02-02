import inquirer from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";
(async () => {
    await showBanner("Word Counter", "Word Counter is used count the words of your Given Sentences", "red", "blue");
})();
async function fun() {
    let loop = true;
    while (loop) {
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "userSentence",
                message: gradient.rainbow("Kindly enter your sentence to count the words"),
            },
        ]);
        const words = answer.userSentence.trim().split(" ");
        const totalwords = words.length;
        console.log(gradient.rainbow(`the total words of your sentances are: ${totalwords}`));
        let answers = await inquirer.prompt([
            {
                type: "confirm",
                name: "again",
                message: gradient.rainbow("Do you wantto count the words of sentence"),
            },
        ]);
        loop = answers.again;
    }
    console.log(gradient.rainbow("Thanks for using our Word Conter App"));
}
setTimeout(() => {
    fun();
}, 1000);

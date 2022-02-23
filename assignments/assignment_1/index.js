function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const arr = process.argv;
    const name = arr[arr.length-1];
    return name
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require('readline')
    const r1 = readline.createInterface({
        input: stdin,
        output: stdout
    })
    r1.question('What is your name?',(ans)=>{
        console.log(`hello ${ans}`);
        r1.close();
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}
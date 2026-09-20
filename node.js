const fs = require('fs/promises');
const path = require('path');

let name = process.argv[2];
const code = process.argv[3];
const rate = process.argv[4];
const messi = process.argv[5];
let joey = "yehor"
if(name == undefined){
    name = "yehor"
}
async function secretGame(){
    try{
        const data = `\n Name: ${name} | Password: ${code} | Rate: ${rate} | messi: ${messi}`;
        await fs.appendFile('robloxFile.txt', data );
        console.log('File RobloxFile created ');
    }catch(error){
        console.log("error", error.message);
    }
}
secretGame()
let numb = 0
async function scam(){
numb = numb +1
console.log(numb)
scam()
}
scam()
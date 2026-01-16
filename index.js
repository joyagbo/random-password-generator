const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate-btn")
let output1El = document.getElementById("output1")
let output2El = document.getElementById("output2")




function getRandomChar(){
    let randomIndex = Math.floor(Math.random()*characters.length)
    return (characters[randomIndex])
}

function generatePassword(){
    let password = ""
    for(let i=0; i < 15; i++){
        password += getRandomChar()
    }
    return password
}

function generatePasswords(){
    output1El.textContent = generatePassword(15)
    output2El.textContent = generatePassword(15)
}
generateBtn.onclick = generatePasswords






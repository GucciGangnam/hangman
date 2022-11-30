let chosenWord = 'BANNAS'; 
let wordLength = chosenWord.length; 

var result = 'wikk'
let lives = 5


// Create a Div for each letter in the chosenWord
function createWordChars() { 
for (let i = 0; i < wordLength; i++) {
    let charSpace = document.createElement("div");
    let word = document.querySelector('.word')
    charSpace.classList.add('mysterychar')
    charSpace.id=i
    word.appendChild(charSpace);
    }
}
createWordChars();




// on click of any of the buttons, check if the inner HTML of that button is in any of the chars of ChosenWord and inner HTML of mysterychar[i] be same as chosenword[i]
let allLetterButtons = document.getElementsByClassName("letterbutton")
Array.prototype.forEach.call(allLetterButtons, (e) => e.addEventListener('click', guess));

function guess() { 
    if (chosenWord.includes(this.innerHTML)){
    for (let i = 0; i < chosenWord.length; i++){
        if (this.innerHTML == chosenWord[i]){
            document.getElementById(i).innerHTML = chosenWord[i];} 
            }
    }else{ lives --;
    }
    this.remove();
    console.log(lives)
}

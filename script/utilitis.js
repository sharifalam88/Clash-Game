// hidden home
function hiddenElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show play ground 
function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
} 

// set background color
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// remove background color by id
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// update game score
function getTextElementValue(elementId){
    const element = document.getElementById(elementId);
    const textValue = element.innerText;                                                       
    const value = parseInt(textValue);
    return value;
}
function setTextElementValue(elementId, value){
    const element = document.getElementById(elementId,);
    element.innerText = value;
}
//get Element by id function
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;

    return text;
};

// generate random alphabet number
function getRandomAphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomAlphabet = Math.random() * 25;
    const index = Math.round(randomAlphabet);
    const alphabet = alphabets[index];

    return alphabet;
}





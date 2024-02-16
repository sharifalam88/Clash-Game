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
// generate random alphabet number
function getRandomAphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomAlphabet = Math.random() * 25;
    const index = Math.round(randomAlphabet);
    const alphabet = alphabets[index];

    return alphabet;
}





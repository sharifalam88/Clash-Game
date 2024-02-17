// function playNow(){
//     const homeScreen = document.getElementById('home');
    
//         homeScreen.classList.add('hidden');
//     const openPlayGround = document.getElementById('play-ground');
//         openPlayGround.classList.remove("hidden");
// }

function playTheGame(){
    const alphabet = getRandomAphabet();
    // console.log("Your alphabet is : ", alphabet);
    const currentAphabet = document.getElementById('current-alphabet');
    currentAphabet.innerText=alphabet;
    setBackgroundColorById(alphabet);
}
// handle keybord button press
function keybordButtonPress(event){
     const playerPressed = event.key;
     // Exit from the game
     if( playerPressed === 'Escape'){
        gameOver();
     }
     const currentAlphabet = document.getElementById('current-alphabet');
     const targetAlphabet = currentAlphabet.innerText;
     const toLowerCase = targetAlphabet.toLocaleLowerCase();
    //  console.log('yor value is ',result);
    
    if( toLowerCase === playerPressed){
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScore = currentScoreElement.innerText;
        // const score = parseInt(currentScore);
        // const newScore = score + 1;
        // currentScoreElement.innerText = newScore;
        removeBackgroundColorById(toLowerCase);
        playTheGame();
        const currentScore = getTextElementValue('current-score');
        const score = currentScore + 1;
        setTextElementValue('current-score', score);
     
    }else{
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLife = currentLifeElement.innerText;
        // const Life = parseInt(currentLife);
        // const newLife = Life - 1;
        // currentLifeElement.innerText = newLife;

        const currentLife = getTextElementValue('current-life');
        const life = currentLife - 1;
        setTextElementValue('current-life', life);

        if( life === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', keybordButtonPress);

// start the game
function play(){
    hiddenElement('home');
    hiddenElement('score');
    showElement('play-ground');
    // set again life and score
    setTextElementValue('current-life', 5);
    setTextElementValue('current-score', 0);
     playTheGame();
}
// finished the Game
function gameOver(){
    hiddenElement('play-ground');
    showElement('score');
    // final score output
    const finalOutput = getTextElementValue('current-score');
     setTextElementValue('final-result', finalOutput);

     const currentAlphabet = getElementTextById('current-alphabet');
     removeBackgroundColorById(currentAlphabet);  
}



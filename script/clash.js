// function playNow(){
//     const homeScreen = document.getElementById('home');
    
//         homeScreen.classList.add('hidden');
//     const openPlayGround = document.getElementById('play-ground');
//         openPlayGround.classList.remove("hidden");
// }

function playTheGame(){
    const alphabet = getRandomAphabet();
    console.log("Your alphabet is : ", alphabet);
}

function play(){
    hiddenElement('home');
    showElement('play-ground');
    playTheGame();
   
}
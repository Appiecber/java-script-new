let startTime, endTime;

function startGame() {
    document.getElementById("startButton").style.display = "none";
    let gameScreen = document.getElementById("gameScreen");
    gameScreen.style.backgroundColor = "red";
    gameScreen.classList.remove("hidden");
    
    let randomTime = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
        gameScreen.style.backgroundColor = "green";
        startTime = new Date().getTime();
        gameScreen.onclick = stopTimer;
    }, randomTime);
}

function stopTimer() {
    if (!startTime) return;
    endTime = new Date().getTime();
    let reactionTime = endTime - startTime;
    document.getElementById("result").innerText = `Je reactietijd: ${reactionTime} ms`;
    resetGame();
}

function resetGame() {
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("startButton").style.display = "block";
    startTime = null;
}

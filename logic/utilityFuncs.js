import { AddAliensAndShields } from "./addAliensAndShields.js";
import { gameAction, gameArea, gameOver, player, scene, startGame } from "./main.js";
import { sounds } from "./sounds.js";

// collision detector 
export function isCollision(firstElement, secondElement) {
    let firstRect = firstElement.getBoundingClientRect();
    let secondRect = secondElement.getBoundingClientRect();

    return !(firstRect.top > secondRect.bottom ||
            firstRect.bottom < secondRect.top ||
            firstRect.right < secondRect.left ||
            firstRect.left > secondRect.right);
}

// game over checker
export function gameOverAction() {
    scene.isActive = false;
    gameOver.classList.remove('hidden');
}

// start game
export function onGameStart() {
    startGame.classList.add('hidden');

    const defender = document.createElement('div');
    defender.classList.add('defender');
    defender.style.left = player.x + 'px';
    defender.style.top = player.y + 'px';
    gameArea.appendChild(defender);

    player.height = defender.offsetHeight;
    player.width = defender.offsetWidth;
    AddAliensAndShields.addAliens(0);
    AddAliensAndShields.addShields();
    sounds.backgroundMusic.play();

    let lives = document.querySelector('.lives-counter');
    for(let i = 0; i < 3; i++) { 
        let live = document.createElement('div');
        live.classList.add('one-live');
        lives.appendChild(live);
    }

    window.requestAnimationFrame(gameAction);
}

// restat game option
export function gameRestart() {

    gameOver.classList.add('hidden');
    let alienCluster = document.querySelector('.alien-cluster');
    alienCluster.remove();
    let lazerShots = document.querySelectorAll('.lazer-shot');
    lazerShots.forEach(lazerShot =>lazerShot.remove());

    const defender = document.querySelector('.defender');
    defender.remove();

    let alienLazerShots = document.querySelectorAll('.alien-lazer-shot');
        alienLazerShots.forEach(alienLazerShot => alienLazerShot.remove());

    let lives = document.querySelectorAll('.one-live');
    lives.forEach(live => live.remove());
    
        player.x =  100;
        player.y =  gameArea.offsetHeight - 50;
        player.width =  0;
        player.height =  0;
        player.lastTimeShot =  0;
        player.lives =  3;

        scene.score =  0;
        scene.lastAlienSpriteInterval = 0;
        scene.lastAlienLazerShotSpriteInterval =  0;
        scene.lastAlienLazerShot =  0;
        scene.lastSpawnMothership = 0;
        scene.isActive = true;

    onGameStart();
}
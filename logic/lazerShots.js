import { gameArea } from "./main.js";

export class LazerShotMaker { 

    static addDefenderLazerShot(player) { 
        let lazerShot = document.createElement('div');
        lazerShot.classList.add('lazer-shot');
        lazerShot.y = player.y - player.height -25;
        lazerShot.style.top =  lazerShot.y + 'px';
    
        lazerShot.style.left = (player.x + player.width / 2 - 12) + 'px';
        gameArea.appendChild(lazerShot);
    }

    static addAlienLazerShot(alien) { 
        if (alien === undefined) {
            return;
        }
    
        let alienLazerShot = document.createElement('div');
        alienLazerShot.classList.add('alien-lazer-shot');
        alienLazerShot.y = alien.getBoundingClientRect().y;
        alienLazerShot.style.top =  alienLazerShot.y + 'px';
    
        alienLazerShot.style.left = (alien.getBoundingClientRect().x + alien.offsetWidth / 2 - 12) + 'px';
    
        gameArea.appendChild(alienLazerShot);
    }

}
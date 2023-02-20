import { game, gameArea } from "./main.js";

export class AddAliensAndShields { 

    static addAliens(x) { 
        const alientCluster = document.createElement('div');
        alientCluster.classList.add('alien-cluster');
    
        for(let i = 0; i < 55; i++) { 
            const alien = document.createElement('div');
            alien.classList.add('alien');
           
            if (i < 11) {
                alien.classList.add('alien-40pts');
            } else if(i < 33) { 
                alien.classList.add('alien-20pts');
            } else { 
                alien.classList.add('alien-10pts');
            }
            alientCluster.appendChild(alien);
        }
        alientCluster.style.top = game.offsetHeight + 'px'
        alientCluster.x = x;
        alientCluster.style.left = alientCluster.x + 'px'
        gameArea.appendChild(alientCluster);
    }

    static addShields() { 
        const shieldField = document.createElement('div');
        shieldField.classList.add('shield-field');
    
        for(let i = 0; i < 4; i++) { 
            let shield = document.createElement('div');
            shield.classList.add('shield', 'shield-full-hp');
            shieldField.appendChild(shield);
        }
    
        shieldField.style.width = gameArea.offsetWidth / 1.25 + 'px';
        shieldField.style.top = (gameArea.offsetHeight - 200) + 'px';
        shieldField.style.left = gameArea.offsetWidth / 10 + 'px';
    
        gameArea.appendChild(shieldField);
    }
}


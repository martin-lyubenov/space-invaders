const startGame = document.querySelector('.start-game');
const startButton = document.querySelector('.start-button')
const scoreScreen = document.querySelector('.score-screen');
let gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const points = document.querySelector('.points');
const lives = document.querySelector('.lives-counter');

// sounds
const defenderShooting = new Audio('./sounds/shoot.wav');
const alienDeathSound = new Audio('./sounds/invaderkilled.wav');
const backgroundMusic = new Audio('./sounds/spaceinvaders1.mpeg');
const mothershipSoundHighPitch = new Audio('./sounds/ufo_highpitch.wav');
const mothershipSoundLowPitch = new Audio('./sounds/ufo_lowpitch.wav');
let mothershipCurrentSound;


// backgournd music loop
backgroundMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
});



// start game button event listener
startButton.addEventListener('click', onGameStart);

// game over and restart game event listener
gameOver.addEventListener('click', gameRestart);

// starting game
function onGameStart() {
    startGame.classList.add('hidden');

    const defender = document.createElement('div');
    defender.classList.add('defender');
    defender.style.left = player.x + 'px';
    defender.style.top = player.y + 'px';
    gameArea.appendChild(defender);

    player.height = defender.offsetHeight;
    player.width = defender.offsetWidth;

    addAliens(0);
    addShields();
    backgroundMusic.play();

    let lives = document.querySelector('.lives-counter');
    for(let i = 0; i < 3; i++) { 
        let live = document.createElement('div');
        live.classList.add('one-live');
        lives.appendChild(live);
    }

    window.requestAnimationFrame(gameAction);

}


// player movement 
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let keys = {};
function onKeyDown(e) {
    keys[e.code] = true;
}

function onKeyUp(e) {
    keys[e.code] = false;
   
}

let player = {
    x: 100,
    y: gameArea.offsetHeight - 50,
    width: 0,
    height: 0,
    lastTimeShot: 0,
    lives: 3,
    
}

// general game info
let game = { 
    speed: 2,
    playerMovementMultiplier: 2,
    lazerShotMovementMultiplier: 3,
    alienClusterMultiplier: 0.4,
    alienPos: 0,
    alienDirection: 1,
    alienSpriteChangeInterval: 500,
    alienLazerShotSpriteChangeInterval: 50,
    alienFireInterval: 2000,
    fireInterval: 800,
    extraLivesCounter: 1,
    mothershipSpawnInterval: 50000,
    mothershipMovementMultiplier: 5,

}

let scene = { 
    score: 0,
    lastAlienSpriteInterval:0,
    lastAlienLazerShotSpriteInterval: 0,
    lastAlienLazerShot: 0,
    lastSpawnMothership:0,
    isActive: true,
}



// game engine
function gameAction(timestamp) { 

    const defender = document.querySelector('.defender');

    // movement keys
 
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.playerMovementMultiplier;
    }

    if (keys.ArrowRight && player.x + player.width +20 < gameArea.offsetWidth) {
        player.x += game.speed * game.playerMovementMultiplier;
    }

    // apply movement
    defender.style.left = player.x + 'px';
    defender.style.top = player.y - player.height + 'px';

    // shooting
    if (keys.Space && timestamp - player.lastTimeShot > game.fireInterval) {
        addDefenderLazerShot(player);
        defenderShooting.play()
        player.lastTimeShot = timestamp;

        
    }

    // add lazer movement
    let lazerShots = document.querySelectorAll('.lazer-shot');
    lazerShots.forEach( lazerShot => { 
        lazerShot.y -= game.speed; 
        lazerShot.style.top = lazerShot.y + 'px';

        if (lazerShot.y + lazerShot.offsetHeight < 0) {
            lazerShot.remove();
        }

         // if the lazer shot hits a shield, the shot is removed 
        let shields = document.querySelectorAll('.shield')
        shields.forEach(shield => { 
            if (isCollision(lazerShot, shield) && shield.classList.contains('shield-destroyed') === false) {
                lazerShot.remove();
            } 

        })
    
    })

    // adding alient cluster movment
    let alienCluster = document.querySelector('.alien-cluster');
    if(game.alienPos + alienCluster.offsetWidth > gameArea.offsetWidth -100) {
        game.alienDirection = - game.speed
    } else if (game.alienPos < 100) {
        game.alienDirection = game.speed 
    }
    game.alienPos +=  game.alienDirection * game.alienClusterMultiplier
    alienCluster.style.left =  game.alienPos + 'px';
        

    // alien death and points
    let aliens = document.querySelectorAll('.alien')
    aliens.forEach(alien => { 
        lazerShots.forEach(lazerShot => {
            if (isCollision(lazerShot, alien) && alien.classList.contains('dead-alien') === false) {
                alien.style.backgroundImage = "url('./images/aliens/death-animation.jpg')";
                setTimeout( () => {
                alien.classList.add('dead-alien')
                },50)
                lazerShot.remove();
                alienDeathSound.play();
                if (alien.classList.contains('alien-40pts')) {
                    scene.score+= 40;
                } else if (alien.classList.contains('alien-20pts')) { 
                    scene.score+= 20;
                } else if (alien.classList.contains('alien-10pts')) { 
                    scene.score+= 10;
                } else if (alien.classList.contains('mothership')) { 
                    scene.score+= 300;
                }
            }
        })
    })

    
    // respawn aliens
    let alienRespawnChecker = Array.from(aliens).filter(alien => alien.classList.contains('dead-alien'));
    if (alienRespawnChecker.length === 55) {
        aliens.forEach(alien => { 
            alien.classList.remove('dead-alien');
        })
    }

    // aliens sprite animation 
    if (timestamp - scene.lastAlienSpriteInterval > game.alienSpriteChangeInterval) {
        aliens.forEach(alien => { 
            if (alien.classList.contains('alien-40pts')) {
                    if (alien.style.backgroundImage.includes('-40pts-1')) {
                        alien.style.backgroundImage = "url('./images/aliens/enemy-40pts-2.png')";
                    } else if(alien.style.backgroundImage.includes('-40pts-2')) { 
                        alien.style.backgroundImage = "url('./images/aliens/enemy-40pts-1.png')";
                    } else { 
                        alien.style.backgroundImage = "url('./images/aliens/enemy-40pts-2.png')";
                    }
            } 
          
            if (alien.classList.contains('alien-20pts')) {
                if (alien.style.backgroundImage.includes('-20pts-1')) {
                    alien.style.backgroundImage = "url('./images/aliens/enemy-20pts-2.png')";
                } else if(alien.style.backgroundImage.includes('-20pts-2')) { 
                    alien.style.backgroundImage = "url('./images/aliens/enemy-20pts-1.png')";
                } else { 
                    alien.style.backgroundImage = "url('./images/aliens/enemy-20pts-2.png')";
                }
            } 
            
            if (alien.classList.contains('alien-10pts')) {  
                if (alien.style.backgroundImage.includes('-10pts-1')) {
                    alien.style.backgroundImage = "url('./images/aliens/enemy-10pts-2.png')";
                } else if(alien.style.backgroundImage.includes('-10pts-2')) { 
                    alien.style.backgroundImage = "url('./images/aliens/enemy-10pts-1.png')";
                } else { 
                    alien.style.backgroundImage = "url('./images/aliens/enemy-10pts-2.png')";
                }
            } 

            scene.lastAlienSpriteInterval = timestamp;
        })
    }

        // aliens firing back (in self defence)
        let remainingAliens = Array.from(aliens).filter(alien => alien.classList.contains('dead-alien') === false);
        let randomAlienPosition = Math.round(remainingAliens.length * Math.random());
        if (timestamp - scene.lastAlienLazerShot > game.alienFireInterval) { 
                    addAlienLazerShot(remainingAliens[randomAlienPosition]);
                    scene.lastAlienLazerShot = timestamp;
                }

        // add movment and collision to alien lazer shots
        let alienLazerShots = document.querySelectorAll('.alien-lazer-shot');
            alienLazerShots.forEach(alienLazerShot => { 
                alienLazerShot.y += game.speed;
                alienLazerShot.style.top = alienLazerShot.y + 'px';
                if (timestamp - scene.lastAlienLazerShotSpriteInterval > game.alienLazerShotSpriteChangeInterval) {

                    if (alienLazerShot.style.backgroundImage.includes('type-1')) {
                        alienLazerShot.style.backgroundImage = "url('./images/aliens/attack-type-2.png')";
                    }else if(alienLazerShot.style.backgroundImage.includes('type-2')) { 
                        alienLazerShot.style.backgroundImage = "url('./images/aliens/attack-type-1.png')";
                    }else { 
                        alienLazerShot.style.backgroundImage = "url('./images/aliens/attack-type-2.png')";
                    }

                    scene.lastAlienLazerShotSpriteInterval = timestamp;
                }

                if (alienLazerShot.y + alienLazerShot.offsetHeight > gameArea.offsetHeight - (alienLazerShot.offsetHeight / 2)) {
                    alienLazerShot.remove();
                }

                
                if (isCollision(defender, alienLazerShot)) {
                    let lives = document.querySelectorAll('.one-live');
                    alienLazerShot.remove();
                    if (lives.length > 1) {
                        player.x = 100;
                        player.y = gameArea.offsetHeight - 50;
                        defender.style.left = player.x + 'px';
                        defender.style.top = player.y + 'px';
                        lives[lives.length-1].remove();
                    } else { 
                        lives[lives.length-1].remove();
                        gameOverAction();
                    }  
                }

                let shields = document.querySelectorAll('.shield')
                shields.forEach(shield => { 
                    if (isCollision(shield, alienLazerShot) && shield.classList.contains('shield-destroyed') === false) {
                      
                        if (shield.classList.contains('shield-full-hp')) {
                            shield.classList.remove('shield-full-hp')
                            shield.classList.add('shield-1hit')
                        } else if(shield.classList.contains('shield-1hit')) { 
                            shield.classList.remove('shield-1hit')
                            shield.classList.add('shield-2hits')
                        } else if(shield.classList.contains('shield-2hits')) { 
                            shield.classList.remove('shield-2hits')
                            shield.classList.add('shield-3hits')
                        } else if(shield.classList.contains('shield-3hits')) { 
                            shield.classList.add('shield-destroyed');
                        }
                        alienLazerShot.remove();
                    }
                })
            })




            

        // add mothership
        if (timestamp - scene.lastSpawnMothership > game.mothershipSpawnInterval + 50000 * Math.random()) {
            let mothership = document.createElement('div');
            mothership.classList.add('alien', 'mothership');
            mothership.x = gameArea.offsetWidth;
            mothership.style.left = mothership.x + 'px';
            mothership.style.top = 0 + 'px';
            if (Math.round(Math.random()) === 0) {
                mothershipCurrentSound = mothershipSoundHighPitch;
            } else { 
                mothershipCurrentSound = mothershipSoundLowPitch;
            }
            gameArea.appendChild(mothership);
    
            scene.lastSpawnMothership = timestamp;
        }

        // add mothership movement
        let motherships = document.querySelectorAll('.mothership');
            motherships.forEach(mothership => { 
                mothership.x -= game.speed;
                mothership.style.left = mothership.x + 'px';
              
                if (mothership.classList.contains('dead-alien') === false) {
                    mothershipCurrentSound.play();
                }   

            if (mothership.x + mothership.offsetWidth <= 0) {
                mothership.remove();
            }
            })
    

    points.textContent = scene.score;
    // adding extra live
    if (scene.score / 1000 >= game.extraLivesCounter) {
        let livesCounter = document.querySelector('.lives-counter')
        let live = document.createElement('div');
        live.classList.add('one-live');
        livesCounter.appendChild(live);
        game.extraLivesCounter++;
    }

    if (scene.isActive) {
        window.requestAnimationFrame(gameAction);
    }
    
}


// add lazer shot
function addDefenderLazerShot(player) {
    let lazerShot = document.createElement('div');
    lazerShot.classList.add('lazer-shot');
    lazerShot.y = player.y - player.height -25;
    lazerShot.style.top =  lazerShot.y + 'px';

    lazerShot.style.left = (player.x + player.width / 2 - 12) + 'px';

    
    gameArea.appendChild(lazerShot);
}

// add enemy lazer shot
function addAlienLazerShot(alien) {

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

// add enemies
function addAliens(x) {
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

function addShields() {
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

// collision detector 
function isCollision(firstElement, secondElement) {
    let firstRect = firstElement.getBoundingClientRect();
    let secondRect = secondElement.getBoundingClientRect();

    return !(firstRect.top > secondRect.bottom ||
            firstRect.bottom < secondRect.top ||
            firstRect.right < secondRect.left ||
            firstRect.left > secondRect.right);
}

function gameOverAction() {
    scene.isActive = false;
    gameOver.classList.remove('hidden');
}

// restat game option
function gameRestart() {
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
    
    player = {
        x: 100,
        y: gameArea.offsetHeight - 50,
        width: 0,
        height: 0,
        lastTimeShot: 0,
        lives: 3,
    }
    scene = { 
        score: 0,
        lastAlienSpriteInterval:0,
        lastAlienLazerShotSpriteInterval: 0,
        lastAlienLazerShot: 0,
        lastSpawnMothership:0,
        isActive: true,
    }
    onGameStart();
}

// split into modules

// Bug fixes:
// respawn aliens animation gets fuck up after respawning - may have to give remove alien cluster and add it again



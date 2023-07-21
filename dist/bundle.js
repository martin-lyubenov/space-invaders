/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./logic/addObjects/addAlienCluster.ts":
/*!*********************************************!*\
  !*** ./logic/addObjects/addAlienCluster.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAlienCluster: () => (/* binding */ AddAlienCluster)
/* harmony export */ });
const gameArea = document.querySelector(".game-area");
// class to render a single Alien
class AddSingleAlien {
    constructor() {
        this.render();
    }
    render() {
        this.alien = document.createElement("div");
        this.alien.classList.add("alien");
    }
}
// class to render the whole alien cluster
class AddAlienCluster {
    constructor(game) {
        this.render(game);
    }
    render(game) {
        this.alienCluster = document.createElement("div");
        this.alienCluster.classList.add("alien-cluster");
        for (let i = 0; i < game.maxAlienClusterSize; i++) {
            const alienInstance = new AddSingleAlien();
            const alien = alienInstance.alien;
            if (i < 11) {
                alien.classList.add("alien-40pts");
            }
            else if (i < 33) {
                alien.classList.add("alien-20pts");
            }
            else {
                alien.classList.add("alien-10pts");
            }
            this.alienCluster.appendChild(alien);
        }
        this.alienCluster.style.top = gameArea.offsetHeight + "px";
        this.alienCluster.style.top = 0 + "px";
        gameArea.appendChild(this.alienCluster);
    }
}


/***/ }),

/***/ "./logic/addObjects/addAlienLazerShot.ts":
/*!***********************************************!*\
  !*** ./logic/addObjects/addAlienLazerShot.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAlienLazerShot: () => (/* binding */ AddAlienLazerShot)
/* harmony export */ });
const gameArea = document.querySelector(".game-area");
class AddAlienLazerShot {
    constructor(alien) {
        this.render(alien);
    }
    render(alien) {
        if (alien === undefined) {
            return;
        }
        this.alienLazerShot = document.createElement("div");
        this.alienLazerShot.classList.add("alien-lazer-shot");
        this.alienLazerShot.y = alien.getBoundingClientRect().y;
        this.alienLazerShot.style.top = this.alienLazerShot.y + "px";
        this.alienLazerShot.style.left =
            alien.getBoundingClientRect().x + alien.offsetWidth / 2 - 12 + "px";
        gameArea.appendChild(this.alienLazerShot);
    }
}


/***/ }),

/***/ "./logic/addObjects/addDefender.ts":
/*!*****************************************!*\
  !*** ./logic/addObjects/addDefender.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDefender: () => (/* binding */ AddDefender)
/* harmony export */ });
const gameArea = document.querySelector(".game-area");
class AddDefender {
    constructor(player) {
        this.render(player);
    }
    render(player) {
        this.defender = document.createElement("div");
        this.defender.classList.add("defender");
        this.defender.style.left = player.x + "px";
        this.defender.style.top = player.y + "px";
        gameArea.appendChild(this.defender);
    }
}


/***/ }),

/***/ "./logic/addObjects/addDefenderLazerShot.ts":
/*!**************************************************!*\
  !*** ./logic/addObjects/addDefenderLazerShot.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDefenderLazerShot: () => (/* binding */ AddDefenderLazerShot)
/* harmony export */ });
const gameArea = document.querySelector(".game-area");
class AddDefenderLazerShot {
    constructor(player) {
        this.render(player);
    }
    render(player) {
        this.lazerShot = document.createElement("div");
        this.lazerShot.classList.add("lazer-shot");
        this.lazerShot.y = player.y - player.height - 25;
        this.lazerShot.style.top = this.lazerShot.y + "px";
        this.lazerShot.style.left = player.x + player.width / 2 - 12 + "px";
        gameArea.appendChild(this.lazerShot);
    }
}


/***/ }),

/***/ "./logic/addObjects/addMothership.ts":
/*!*******************************************!*\
  !*** ./logic/addObjects/addMothership.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMothership: () => (/* binding */ AddMothership)
/* harmony export */ });
class AddMothership {
    constructor(gameArea, sounds) {
        this.render(gameArea, sounds);
    }
    render(gameArea, sounds) {
        this.mothership = document.createElement("div");
        this.mothership.classList.add("alien", "mothership");
        this.mothership.x = gameArea.offsetWidth;
        this.mothership.style.left = this.mothership.x + "px";
        this.mothership.style.top = 0 + "px";
        if (Math.round(Math.random()) === 0) {
            this.mothershipCurrentSound = sounds.mothershipSoundHighPitch;
        }
        else {
            this.mothershipCurrentSound = sounds.mothershipSoundLowPitch;
        }
        gameArea.appendChild(this.mothership);
    }
}



/***/ }),

/***/ "./logic/addObjects/addShields.ts":
/*!****************************************!*\
  !*** ./logic/addObjects/addShields.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddShields: () => (/* binding */ AddShields)
/* harmony export */ });
const gameArea = document.querySelector(".game-area");
// class to render a single shield, private class used only in this module
class AddSingleShield {
    constructor() {
        this.render();
    }
    render() {
        this.singleShield = document.createElement("div");
        this.singleShield.classList.add("shield", "shield-full-hp");
    }
}
// class to render all 4 shields
class AddShields {
    constructor() {
        this.render();
    }
    render() {
        this.shieldField = document.createElement("div");
        this.shieldField.classList.add("shield-field");
        for (let i = 1; i <= 4; i++) {
            const singleShieldInstance = new AddSingleShield();
            const singleShield = singleShieldInstance.singleShield;
            this.shieldField.appendChild(singleShield);
        }
        this.shieldField.style.width = gameArea.offsetWidth / 1.25 + "px";
        this.shieldField.style.top = gameArea.offsetHeight - 200 + "px";
        this.shieldField.style.left = gameArea.offsetWidth / 10 + "px";
        gameArea.appendChild(this.shieldField);
    }
}


/***/ }),

/***/ "./logic/alienDeathAndPoints/alienDeathAndPoints.ts":
/*!**********************************************************!*\
  !*** ./logic/alienDeathAndPoints/alienDeathAndPoints.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alienDeathAndPoints: () => (/* binding */ alienDeathAndPoints)
/* harmony export */ });
function alienDeathAndPoints({ isCollision, sounds, scene, }) {
    let aliens = document.querySelectorAll(".alien");
    aliens.forEach((alien) => {
        let lazerShots = document.querySelectorAll(".lazer-shot");
        lazerShots.forEach((lazerShot) => {
            if (isCollision(lazerShot, alien) &&
                alien.classList.contains("dead-alien") === false) {
                alien.style.backgroundImage =
                    "url('./images/aliens/death-animation.jpg')";
                setTimeout(() => {
                    alien.classList.add("dead-alien");
                }, 50);
                lazerShot.remove();
                sounds.alienDeathSound.play();
                if (alien.classList.contains("alien-40pts")) {
                    scene.score += 40;
                }
                else if (alien.classList.contains("alien-20pts")) {
                    scene.score += 20;
                }
                else if (alien.classList.contains("alien-10pts")) {
                    scene.score += 10;
                }
                else if (alien.classList.contains("mothership")) {
                    scene.score += 300;
                }
            }
        });
    });
}


/***/ }),

/***/ "./logic/alienFiringCycle/alienFiringCycle.ts":
/*!****************************************************!*\
  !*** ./logic/alienFiringCycle/alienFiringCycle.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alienFiringCycle: () => (/* binding */ alienFiringCycle)
/* harmony export */ });
function alienFiringCycle({ scene, game, AddAlienLazerShot, }, timestamp) {
    const aliens = document.querySelectorAll(".alien");
    let remainingAliens = Array.from(aliens).filter((alien) => alien.classList.contains("dead-alien") === false);
    // picks a random postion to make sure a random alien fires every time
    let randomAlienPosition = Math.round(remainingAliens.length * Math.random());
    if (timestamp - scene.lastAlienLazerShot > game.alienFireInterval) {
        new AddAlienLazerShot(remainingAliens[randomAlienPosition]);
        scene.lastAlienLazerShot = timestamp;
    }
}


/***/ }),

/***/ "./logic/animations/alienSprites.ts":
/*!******************************************!*\
  !*** ./logic/animations/alienSprites.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alienSpriteAnimation: () => (/* binding */ alienSpriteAnimation)
/* harmony export */ });
function alienSpriteAnimation({ scene, game }, timestamp) {
    const aliens = document.querySelectorAll(".alien");
    if (timestamp - scene.lastAlienSpriteInterval >
        game.alienSpriteChangeInterval) {
        aliens.forEach((alien) => {
            if (alien.classList.contains("alien-40pts")) {
                if (alien.style.backgroundImage.includes("-40pts-1")) {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-40pts-2.png')";
                }
                else if (alien.style.backgroundImage.includes("-40pts-2")) {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-40pts-1.png')";
                }
                else {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-40pts-2.png')";
                }
            }
            if (alien.classList.contains("alien-20pts")) {
                if (alien.style.backgroundImage.includes("-20pts-1")) {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-20pts-2.png')";
                }
                else if (alien.style.backgroundImage.includes("-20pts-2")) {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-20pts-1.png')";
                }
                else {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-20pts-2.png')";
                }
            }
            if (alien.classList.contains("alien-10pts")) {
                if (alien.style.backgroundImage.includes("-10pts-1")) {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-10pts-2.png')";
                }
                else if (alien.style.backgroundImage.includes("-10pts-2")) {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-10pts-1.png')";
                }
                else {
                    alien.style.backgroundImage =
                        "url('./images/aliens/enemy-10pts-2.png')";
                }
            }
            scene.lastAlienSpriteInterval = timestamp;
        });
    }
}


/***/ }),

/***/ "./logic/collisionChecker/defenderAlienLazerShot.ts":
/*!**********************************************************!*\
  !*** ./logic/collisionChecker/defenderAlienLazerShot.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defenderAlienLazerShotCollisionChecker: () => (/* binding */ defenderAlienLazerShotCollisionChecker)
/* harmony export */ });
function defenderAlienLazerShotCollisionChecker(defender, isCollision, alienLazerShot, player, gameArea, gameOver, scene) {
    function gameOverAction(gameOver) {
        scene.isActive = false;
        gameOver.classList.remove("hidden");
    }
    if (isCollision(defender, alienLazerShot)) {
        let lives = document.querySelectorAll(".one-live");
        alienLazerShot.remove();
        if (lives.length > 1) {
            player.x = 100;
            player.y = gameArea.offsetHeight - 50;
            defender.style.left = player.x + "px";
            defender.style.top = player.y + "px";
            lives[lives.length - 1].remove();
        }
        else {
            lives[lives.length - 1].remove();
            gameOverAction(gameOver);
        }
    }
}


/***/ }),

/***/ "./logic/collisionChecker/shieldAlienLazerShot.ts":
/*!********************************************************!*\
  !*** ./logic/collisionChecker/shieldAlienLazerShot.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shieldAlienLazerShotCollisionChecker: () => (/* binding */ shieldAlienLazerShotCollisionChecker)
/* harmony export */ });
function shieldAlienLazerShotCollisionChecker(alienLazerShot, isCollision) {
    let shields = document.querySelectorAll(".shield");
    shields.forEach((shield) => {
        if (isCollision(shield, alienLazerShot) &&
            shield.classList.contains("shield-destroyed") === false) {
            if (shield.classList.contains("shield-full-hp")) {
                shield.classList.remove("shield-full-hp");
                shield.classList.add("shield-1hit");
            }
            else if (shield.classList.contains("shield-1hit")) {
                shield.classList.remove("shield-1hit");
                shield.classList.add("shield-2hits");
            }
            else if (shield.classList.contains("shield-2hits")) {
                shield.classList.remove("shield-2hits");
                shield.classList.add("shield-3hits");
            }
            else if (shield.classList.contains("shield-3hits")) {
                shield.classList.add("shield-destroyed");
            }
            alienLazerShot.remove();
        }
    });
}


/***/ }),

/***/ "./logic/generalGameInfo/generalInfo.ts":
/*!**********************************************!*\
  !*** ./logic/generalGameInfo/generalInfo.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   scene: () => (/* binding */ scene)
/* harmony export */ });
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
    maxAlienClusterSize: 55,
};
let scene = {
    score: 0,
    lastAlienSpriteInterval: 0,
    lastAlienLazerShotSpriteInterval: 0,
    lastAlienLazerShot: 0,
    lastSpawnMothership: 0,
    isActive: true,
};


/***/ }),

/***/ "./logic/objectMovement/alienCluster.ts":
/*!**********************************************!*\
  !*** ./logic/objectMovement/alienCluster.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alienClusterMovement: () => (/* binding */ alienClusterMovement)
/* harmony export */ });
function alienClusterMovement({ game, gameArea, }) {
    const alienCluster = document.querySelector(".alien-cluster");
    if (game.alienPos + alienCluster.offsetWidth > gameArea.offsetWidth - 100) {
        game.alienDirection = -game.speed;
    }
    else if (game.alienPos < 100) {
        game.alienDirection = game.speed;
    }
    game.alienPos += game.alienDirection * game.alienClusterMultiplier;
    alienCluster.style.left = game.alienPos + "px";
}


/***/ }),

/***/ "./logic/objectMovement/alienLazerShots.ts":
/*!*************************************************!*\
  !*** ./logic/objectMovement/alienLazerShots.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alienLazerShotsMovmentAndCollisionChecker: () => (/* binding */ alienLazerShotsMovmentAndCollisionChecker)
/* harmony export */ });
function alienLazerShotsMovmentAndCollisionChecker({ game, scene, player, gameArea, isCollision, defenderAlienLazerShotCollisionChecker, shieldAlienLazerShotCollisionChecker, gameOver, }, timestamp) {
    const defender = document.querySelector(".defender");
    let alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
    alienLazerShots.forEach((alienLazerShot) => {
        alienLazerShot.y += game.speed;
        alienLazerShot.style.top = alienLazerShot.y + "px";
        if (timestamp - scene.lastAlienLazerShotSpriteInterval >
            game.alienLazerShotSpriteChangeInterval) {
            if (alienLazerShot.style.backgroundImage.includes("type-1")) {
                alienLazerShot.style.backgroundImage =
                    "url('./images/aliens/attack-type-2.png')";
            }
            else if (alienLazerShot.style.backgroundImage.includes("type-2")) {
                alienLazerShot.style.backgroundImage =
                    "url('./images/aliens/attack-type-1.png')";
            }
            else {
                alienLazerShot.style.backgroundImage =
                    "url('./images/aliens/attack-type-2.png')";
            }
            scene.lastAlienLazerShotSpriteInterval = timestamp;
        }
        // removes the lazer shot from the dom when it reaches the end of the screen
        if (alienLazerShot.y + alienLazerShot.offsetHeight >
            gameArea.offsetHeight - alienLazerShot.offsetHeight / 2) {
            alienLazerShot.remove();
        }
        // checks if the alien lazer shot has hit the defender
        defenderAlienLazerShotCollisionChecker(defender, isCollision, alienLazerShot, player, gameArea, gameOver, scene);
        // checks if the alien lazer shot has hit a shield
        shieldAlienLazerShotCollisionChecker(alienLazerShot, isCollision);
    });
}


/***/ }),

/***/ "./logic/objectMovement/lazerShots.ts":
/*!********************************************!*\
  !*** ./logic/objectMovement/lazerShots.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lazerShotsMovement: () => (/* binding */ lazerShotsMovement)
/* harmony export */ });
function lazerShotsMovement({ game, isCollision, }) {
    let lazerShots = document.querySelectorAll(".lazer-shot");
    lazerShots.forEach((lazerShot) => {
        lazerShot.y -= game.speed;
        lazerShot.style.top = lazerShot.y + "px";
        if (lazerShot.y + lazerShot.offsetHeight < 0) {
            lazerShot.remove();
        }
        // if the lazer shot hits a shield, the shot is removed
        let shields = document.querySelectorAll(".shield");
        shields.forEach((shield) => {
            if (isCollision(lazerShot, shield) &&
                shield.classList.contains("shield-destroyed") === false) {
                lazerShot.remove();
            }
        });
    });
}


/***/ }),

/***/ "./logic/objectMovement/mothership.ts":
/*!********************************************!*\
  !*** ./logic/objectMovement/mothership.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mothershipMovement: () => (/* binding */ mothershipMovement)
/* harmony export */ });
// TODO must fix problem with mothership sound
function mothershipMovement({ game, mothershipCurrentSound, }) {
    let motherships = document.querySelectorAll(".mothership");
    motherships.forEach((mothership) => {
        mothership.x -= game.speed;
        mothership.style.left = mothership.x + "px";
        if (mothership.classList.contains("dead-alien") === false) {
            mothershipCurrentSound.play();
        }
        if (mothership.x + mothership.offsetWidth <= 0) {
            mothership.remove();
        }
    });
}


/***/ }),

/***/ "./logic/objectMovement/player.ts":
/*!****************************************!*\
  !*** ./logic/objectMovement/player.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playerMovement: () => (/* binding */ playerMovement)
/* harmony export */ });
function playerMovement({ player }) {
    const defender = document.querySelector(".defender");
    defender.style.left = player.x + "px";
    defender.style.top = player.y - player.height + "px";
}


/***/ }),

/***/ "./logic/player/player.ts":
/*!********************************!*\
  !*** ./logic/player/player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
const gameArea = document.querySelector(".game-area");
let player = {
    x: 100,
    y: gameArea.offsetHeight - 50,
    width: 0,
    height: 0,
    lastTimeShot: 0,
    lives: 3,
};


/***/ }),

/***/ "./logic/player/playerMovementControlls.ts":
/*!*************************************************!*\
  !*** ./logic/player/playerMovementControlls.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playerMovementControlls: () => (/* binding */ playerMovementControlls),
/* harmony export */   playerShootingControlls: () => (/* binding */ playerShootingControlls)
/* harmony export */ });
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
let keys = {};
function onKeyDown(e) {
    keys[e.code] = true;
}
function onKeyUp(e) {
    keys[e.code] = false;
}
// movement controlls
function playerMovementControlls({ player, game, gameArea, }) {
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.playerMovementMultiplier;
    }
    if (keys.ArrowRight && player.x + player.width + 20 < gameArea.offsetWidth) {
        player.x += game.speed * game.playerMovementMultiplier;
    }
}
// shooting controlls
function playerShootingControlls({ player, game, sounds, AddDefenderLazerShot, }, timestamp) {
    if (keys.Space && timestamp - player.lastTimeShot > game.fireInterval) {
        new AddDefenderLazerShot(player);
        sounds.defenderShooting.play();
        player.lastTimeShot = timestamp;
    }
}


/***/ }),

/***/ "./logic/points/pointsUpdate.ts":
/*!**************************************!*\
  !*** ./logic/points/pointsUpdate.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pointsUpdate: () => (/* binding */ pointsUpdate)
/* harmony export */ });
function pointsUpdate({ points, scene, game, }) {
    points.textContent = scene.score.toString();
    // adding extra live
    if (scene.score / 1000 >= game.extraLivesCounter) {
        let livesCounter = document.querySelector(".lives-counter");
        let live = document.createElement("div");
        live.classList.add("one-live");
        livesCounter.appendChild(live);
        game.extraLivesCounter++;
    }
}


/***/ }),

/***/ "./logic/respwan/aliens.ts":
/*!*********************************!*\
  !*** ./logic/respwan/aliens.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   respawnAliens: () => (/* binding */ respawnAliens)
/* harmony export */ });
function respawnAliens({ game }) {
    const aliens = document.querySelectorAll(".alien");
    let alienRespawnChecker = Array.from(aliens).filter((alien) => alien.classList.contains("dead-alien"));
    if (alienRespawnChecker.length === game.maxAlienClusterSize) {
        aliens.forEach((alien) => {
            alien.classList.remove("dead-alien");
        });
    }
}


/***/ }),

/***/ "./logic/sounds/sounds.ts":
/*!********************************!*\
  !*** ./logic/sounds/sounds.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sounds: () => (/* binding */ sounds)
/* harmony export */ });
const sounds = {
    defenderShooting: new Audio('./sounds/shoot.wav'),
    alienDeathSound: new Audio('./sounds/invaderkilled.wav'),
    backgroundMusic: new Audio('./sounds/spaceinvaders1.mpeg'),
    mothershipSoundHighPitch: new Audio('./sounds/ufo_highpitch.wav'),
    mothershipSoundLowPitch: new Audio('./sounds/ufo_lowpitch.wav'),
};


/***/ }),

/***/ "./logic/util/utilityFuncs.ts":
/*!************************************!*\
  !*** ./logic/util/utilityFuncs.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameRestart: () => (/* binding */ gameRestart),
/* harmony export */   isCollision: () => (/* binding */ isCollision),
/* harmony export */   onGameStart: () => (/* binding */ onGameStart)
/* harmony export */ });
const startGame = document.querySelector(".start-game");
// collision detector
function isCollision(firstElement, secondElement) {
    let firstRect = firstElement.getBoundingClientRect();
    let secondRect = secondElement.getBoundingClientRect();
    return !(firstRect.top > secondRect.bottom ||
        firstRect.bottom < secondRect.top ||
        firstRect.right < secondRect.left ||
        firstRect.left > secondRect.right);
}
// start game
function onGameStart({ gameAction, player, game, AddAlienCluster, AddShields, sounds, AddDefender, }) {
    startGame.classList.add("hidden");
    const defenderInstance = new AddDefender(player);
    const defender = defenderInstance.defender;
    player.height = defender.offsetHeight;
    player.width = defender.offsetWidth;
    new AddAlienCluster(game);
    new AddShields();
    sounds.backgroundMusic.play();
    let lives = document.querySelector(".lives-counter");
    for (let i = 0; i < 3; i++) {
        let live = document.createElement("div");
        live.classList.add("one-live");
        lives.appendChild(live);
    }
    window.requestAnimationFrame(gameAction);
}
// restat game option
function gameRestart({ gameArea, gameOver, player, scene, onGameStartConfigObj, }) {
    gameOver.classList.add("hidden");
    const alienCluster = document.querySelector(".alien-cluster");
    alienCluster.remove();
    let lazerShots = document.querySelectorAll(".lazer-shot");
    lazerShots.forEach((lazerShot) => lazerShot.remove());
    const defender = document.querySelector(".defender");
    defender.remove();
    const alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
    alienLazerShots.forEach((alienLazerShot) => alienLazerShot.remove());
    const lives = document.querySelectorAll(".one-live");
    lives.forEach((live) => live.remove());
    const shields = document.querySelector(".shield-field");
    shields.remove();
    player.x = 100;
    player.y = gameArea.offsetHeight - 50;
    player.width = 0;
    player.height = 0;
    player.lastTimeShot = 0;
    player.lives = 3;
    scene.score = 0;
    scene.lastAlienSpriteInterval = 0;
    scene.lastAlienLazerShotSpriteInterval = 0;
    scene.lastAlienLazerShot = 0;
    scene.lastSpawnMothership = 0;
    scene.isActive = true;
    onGameStart(onGameStartConfigObj);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./logic/main.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addObjects_addAlienLazerShot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addObjects/addAlienLazerShot */ "./logic/addObjects/addAlienLazerShot.ts");
/* harmony import */ var _addObjects_addDefenderLazerShot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addObjects/addDefenderLazerShot */ "./logic/addObjects/addDefenderLazerShot.ts");
/* harmony import */ var _addObjects_addMothership__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addObjects/addMothership */ "./logic/addObjects/addMothership.ts");
/* harmony import */ var _animations_alienSprites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/alienSprites */ "./logic/animations/alienSprites.ts");
/* harmony import */ var _collisionChecker_defenderAlienLazerShot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collisionChecker/defenderAlienLazerShot */ "./logic/collisionChecker/defenderAlienLazerShot.ts");
/* harmony import */ var _collisionChecker_shieldAlienLazerShot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collisionChecker/shieldAlienLazerShot */ "./logic/collisionChecker/shieldAlienLazerShot.ts");
/* harmony import */ var _alienDeathAndPoints_alienDeathAndPoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alienDeathAndPoints/alienDeathAndPoints */ "./logic/alienDeathAndPoints/alienDeathAndPoints.ts");
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");
/* harmony import */ var _objectMovement_alienCluster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objectMovement/alienCluster */ "./logic/objectMovement/alienCluster.ts");
/* harmony import */ var _objectMovement_alienLazerShots__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objectMovement/alienLazerShots */ "./logic/objectMovement/alienLazerShots.ts");
/* harmony import */ var _objectMovement_lazerShots__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./objectMovement/lazerShots */ "./logic/objectMovement/lazerShots.ts");
/* harmony import */ var _objectMovement_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./objectMovement/player */ "./logic/objectMovement/player.ts");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player/player */ "./logic/player/player.ts");
/* harmony import */ var _player_playerMovementControlls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player/playerMovementControlls */ "./logic/player/playerMovementControlls.ts");
/* harmony import */ var _points_pointsUpdate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./points/pointsUpdate */ "./logic/points/pointsUpdate.ts");
/* harmony import */ var _respwan_aliens__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./respwan/aliens */ "./logic/respwan/aliens.ts");
/* harmony import */ var _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sounds/sounds */ "./logic/sounds/sounds.ts");
/* harmony import */ var _util_utilityFuncs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./util/utilityFuncs */ "./logic/util/utilityFuncs.ts");
/* harmony import */ var _alienFiringCycle_alienFiringCycle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./alienFiringCycle/alienFiringCycle */ "./logic/alienFiringCycle/alienFiringCycle.ts");
/* harmony import */ var _objectMovement_mothership__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./objectMovement/mothership */ "./logic/objectMovement/mothership.ts");
/* harmony import */ var _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./addObjects/addAlienCluster */ "./logic/addObjects/addAlienCluster.ts");
/* harmony import */ var _addObjects_addShields__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./addObjects/addShields */ "./logic/addObjects/addShields.ts");
/* harmony import */ var _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./addObjects/addDefender */ "./logic/addObjects/addDefender.ts");























const startButton = document.querySelector(".start-button");
let gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const points = document.querySelector(".points");
// backgournd music loop
_sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds.backgroundMusic.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});
const test = _addObjects_addAlienLazerShot__WEBPACK_IMPORTED_MODULE_0__.AddAlienLazerShot;
// done to reduce types and easy of adding new parameters to the gameAction
const gameActionAssetsConfigObject = {
    playerMovementControlls: { player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, gameArea },
    playerMovement: { player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player },
    playerShootingControlls: { player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, sounds: _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds, AddDefenderLazerShot: _addObjects_addDefenderLazerShot__WEBPACK_IMPORTED_MODULE_1__.AddDefenderLazerShot },
    lazerShotsMovement: { game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, isCollision: _util_utilityFuncs__WEBPACK_IMPORTED_MODULE_17__.isCollision },
    alienClusterMovement: { game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, gameArea },
    deathAndPoints: { isCollision: _util_utilityFuncs__WEBPACK_IMPORTED_MODULE_17__.isCollision, sounds: _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds, scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene },
    respawnAliens: { game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game },
    alienSpriteAnimation: { scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game },
    alienLazerShotsMovmentAndCollisionChecker: {
        game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game,
        scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene,
        player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player,
        gameArea,
        isCollision: _util_utilityFuncs__WEBPACK_IMPORTED_MODULE_17__.isCollision,
        defenderAlienLazerShotCollisionChecker: _collisionChecker_defenderAlienLazerShot__WEBPACK_IMPORTED_MODULE_4__.defenderAlienLazerShotCollisionChecker,
        shieldAlienLazerShotCollisionChecker: _collisionChecker_shieldAlienLazerShot__WEBPACK_IMPORTED_MODULE_5__.shieldAlienLazerShotCollisionChecker,
        gameOver,
    },
    alienFiringCycle: { scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, AddAlienLazerShot: _addObjects_addAlienLazerShot__WEBPACK_IMPORTED_MODULE_0__.AddAlienLazerShot },
    mothershipMovement: { game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, mothershipCurrentSound: new Audio() },
    pointsUpdate: { points, scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game },
};
const gameButtonsConfigObj = {
    onGameStart: {
        gameAction,
        player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player,
        game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game,
        AddDefender: _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_22__.AddDefender,
        AddAlienCluster: _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_20__.AddAlienCluster,
        AddShields: _addObjects_addShields__WEBPACK_IMPORTED_MODULE_21__.AddShields,
        sounds: _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds,
    },
    gameRestart: {
        gameArea,
        gameOver,
        player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player,
        scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene,
        onGameStartConfigObj: {
            gameAction,
            player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player,
            game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game,
            AddDefender: _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_22__.AddDefender,
            AddAlienCluster: _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_20__.AddAlienCluster,
            AddShields: _addObjects_addShields__WEBPACK_IMPORTED_MODULE_21__.AddShields,
            sounds: _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds,
        },
    },
};
// start game button event listener
startButton.addEventListener("click", () => {
    return (0,_util_utilityFuncs__WEBPACK_IMPORTED_MODULE_17__.onGameStart)(gameButtonsConfigObj.onGameStart);
});
// game over and restart game event listener
gameOver.addEventListener("click", () => {
    return (0,_util_utilityFuncs__WEBPACK_IMPORTED_MODULE_17__.gameRestart)(gameButtonsConfigObj.gameRestart);
});
// game engine
function gameAction(timestamp) {
    // movement keys
    (0,_player_playerMovementControlls__WEBPACK_IMPORTED_MODULE_13__.playerMovementControlls)(gameActionAssetsConfigObject.playerMovementControlls);
    // shooting
    (0,_player_playerMovementControlls__WEBPACK_IMPORTED_MODULE_13__.playerShootingControlls)(gameActionAssetsConfigObject.playerShootingControlls, timestamp //timestam must always be added as it comes from the gameAction func itself
    );
    // apply player movement
    (0,_objectMovement_player__WEBPACK_IMPORTED_MODULE_11__.playerMovement)(gameActionAssetsConfigObject.playerMovement);
    // add lazer movement
    (0,_objectMovement_lazerShots__WEBPACK_IMPORTED_MODULE_10__.lazerShotsMovement)(gameActionAssetsConfigObject.lazerShotsMovement);
    // add alient cluster movement
    (0,_objectMovement_alienCluster__WEBPACK_IMPORTED_MODULE_8__.alienClusterMovement)(gameActionAssetsConfigObject.alienClusterMovement);
    // alien death and points
    (0,_alienDeathAndPoints_alienDeathAndPoints__WEBPACK_IMPORTED_MODULE_6__.alienDeathAndPoints)(gameActionAssetsConfigObject.deathAndPoints);
    // respawn aliens
    (0,_respwan_aliens__WEBPACK_IMPORTED_MODULE_15__.respawnAliens)(gameActionAssetsConfigObject.respawnAliens);
    // aliens sprite animation
    (0,_animations_alienSprites__WEBPACK_IMPORTED_MODULE_3__.alienSpriteAnimation)(gameActionAssetsConfigObject.alienSpriteAnimation, timestamp);
    // aliens firing back (in self defence)
    (0,_alienFiringCycle_alienFiringCycle__WEBPACK_IMPORTED_MODULE_18__.alienFiringCycle)(gameActionAssetsConfigObject.alienFiringCycle, timestamp);
    // add movment and collision to alien lazer shots
    (0,_objectMovement_alienLazerShots__WEBPACK_IMPORTED_MODULE_9__.alienLazerShotsMovmentAndCollisionChecker)(gameActionAssetsConfigObject.alienLazerShotsMovmentAndCollisionChecker, timestamp);
    // add mothership
    if (timestamp - _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene.lastSpawnMothership >
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game.mothershipSpawnInterval + 50000 * Math.random()) {
        const mothership = new _addObjects_addMothership__WEBPACK_IMPORTED_MODULE_2__.AddMothership(gameArea, _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds);
        gameActionAssetsConfigObject.mothershipMovement.mothershipCurrentSound =
            mothership.mothershipCurrentSound;
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene.lastSpawnMothership = timestamp;
    }
    // add mothership movement
    (0,_objectMovement_mothership__WEBPACK_IMPORTED_MODULE_19__.mothershipMovement)(gameActionAssetsConfigObject.mothershipMovement);
    (0,_points_pointsUpdate__WEBPACK_IMPORTED_MODULE_14__.pointsUpdate)(gameActionAssetsConfigObject.pointsUpdate);
    if (_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene.isActive) {
        window.requestAnimationFrame(gameAction);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMxQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FkZE9iamVjdHMvYWRkQWxpZW5DbHVzdGVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRBbGllbkxhemVyU2hvdC50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FkZE9iamVjdHMvYWRkRGVmZW5kZXIudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZERlZmVuZGVyTGF6ZXJTaG90LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRNb3RoZXJzaGlwLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRTaGllbGRzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWxpZW5EZWF0aEFuZFBvaW50cy9hbGllbkRlYXRoQW5kUG9pbnRzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWxpZW5GaXJpbmdDeWNsZS9hbGllbkZpcmluZ0N5Y2xlLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYW5pbWF0aW9ucy9hbGllblNwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9jb2xsaXNpb25DaGVja2VyL2RlZmVuZGVyQWxpZW5MYXplclNob3QudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9jb2xsaXNpb25DaGVja2VyL3NoaWVsZEFsaWVuTGF6ZXJTaG90LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvZ2VuZXJhbEdhbWVJbmZvL2dlbmVyYWxJbmZvLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvYWxpZW5DbHVzdGVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvYWxpZW5MYXplclNob3RzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvbGF6ZXJTaG90cy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L21vdGhlcnNoaXAudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9vYmplY3RNb3ZlbWVudC9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9wbGF5ZXIvcGxheWVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvcGxheWVyL3BsYXllck1vdmVtZW50Q29udHJvbGxzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvcG9pbnRzL3BvaW50c1VwZGF0ZS50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3Jlc3B3YW4vYWxpZW5zLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvc291bmRzL3NvdW5kcy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3V0aWwvdXRpbGl0eUZ1bmNzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBjbGFzcyB0byByZW5kZXIgYSBzaW5nbGUgQWxpZW5cclxuY2xhc3MgQWRkU2luZ2xlQWxpZW4ge1xyXG4gIGFsaWVuITogSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYWxpZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5hbGllbi5jbGFzc0xpc3QuYWRkKFwiYWxpZW5cIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjbGFzcyB0byByZW5kZXIgdGhlIHdob2xlIGFsaWVuIGNsdXN0ZXJcclxuZXhwb3J0IGNsYXNzIEFkZEFsaWVuQ2x1c3RlciB7XHJcbiAgLy8gVE9ETywgY2hlY2sgaWYgeW91IGNhbiBleHRlbmQgdGhlIEhUTUxkaXZFbGVtZW50IGludGVyZmFjZSBpbiBUUyB0byByZW1vdmUgdGhlIHggZG9lcyBub3QgZXhpc3RcclxuICAvLyB0aGlzIGlzIEhUTUxEaXZFbGVtZW50LCBob3dldmVyIFRTIGRvZXMgbm90IHN1cHBvcnQgZWxlbWVudC54IHZhbHVlIGZvciBzb21lIHJlYXNvblxyXG4gIGFsaWVuQ2x1c3RlciE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lOiBJR2FtZU9iamVjdCkge1xyXG4gICAgdGhpcy5yZW5kZXIoZ2FtZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcihnYW1lOiBJR2FtZU9iamVjdCkge1xyXG4gICAgdGhpcy5hbGllbkNsdXN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5hbGllbkNsdXN0ZXIuY2xhc3NMaXN0LmFkZChcImFsaWVuLWNsdXN0ZXJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLm1heEFsaWVuQ2x1c3RlclNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBhbGllbkluc3RhbmNlID0gbmV3IEFkZFNpbmdsZUFsaWVuKCk7XHJcbiAgICAgIGNvbnN0IGFsaWVuID0gYWxpZW5JbnN0YW5jZS5hbGllbjtcclxuXHJcbiAgICAgIGlmIChpIDwgMTEpIHtcclxuICAgICAgICBhbGllbi5jbGFzc0xpc3QuYWRkKFwiYWxpZW4tNDBwdHNcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA8IDMzKSB7XHJcbiAgICAgICAgYWxpZW4uY2xhc3NMaXN0LmFkZChcImFsaWVuLTIwcHRzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsaWVuLmNsYXNzTGlzdC5hZGQoXCJhbGllbi0xMHB0c1wiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFsaWVuQ2x1c3Rlci5hcHBlbmRDaGlsZChhbGllbik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5zdHlsZS50b3AgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5zdHlsZS50b3AgPSAwICsgXCJweFwiO1xyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5hbGllbkNsdXN0ZXIpO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRBbGllbkxhemVyU2hvdCB7XHJcbiAgYWxpZW5MYXplclNob3QhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoYWxpZW46IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJlbmRlcihhbGllbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcihhbGllbjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIGlmIChhbGllbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYWxpZW5MYXplclNob3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5hbGllbkxhemVyU2hvdC5jbGFzc0xpc3QuYWRkKFwiYWxpZW4tbGF6ZXItc2hvdFwiKTtcclxuICAgIHRoaXMuYWxpZW5MYXplclNob3QueSA9IGFsaWVuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90LnN0eWxlLnRvcCA9IHRoaXMuYWxpZW5MYXplclNob3QueSArIFwicHhcIjtcclxuXHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90LnN0eWxlLmxlZnQgPVxyXG4gICAgICBhbGllbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54ICsgYWxpZW4ub2Zmc2V0V2lkdGggLyAyIC0gMTIgKyBcInB4XCI7XHJcblxyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5hbGllbkxhemVyU2hvdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYXllclwiO1xyXG5cclxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRGVmZW5kZXIge1xyXG4gIGRlZmVuZGVyITogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBsYXllcjogSVBsYXllcikge1xyXG4gICAgdGhpcy5yZW5kZXIocGxheWVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKHBsYXllcjogSVBsYXllcikge1xyXG4gICAgdGhpcy5kZWZlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmRlZmVuZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWZlbmRlclwiKTtcclxuICAgIHRoaXMuZGVmZW5kZXIuc3R5bGUubGVmdCA9IHBsYXllci54ICsgXCJweFwiO1xyXG4gICAgdGhpcy5kZWZlbmRlci5zdHlsZS50b3AgPSBwbGF5ZXIueSArIFwicHhcIjtcclxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKHRoaXMuZGVmZW5kZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbmNvbnN0IGdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWFyZWFcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkZERlZmVuZGVyTGF6ZXJTaG90IHtcclxuICBsYXplclNob3QhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICB0aGlzLnJlbmRlcihwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICB0aGlzLmxhemVyU2hvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmxhemVyU2hvdC5jbGFzc0xpc3QuYWRkKFwibGF6ZXItc2hvdFwiKTtcclxuICAgIHRoaXMubGF6ZXJTaG90LnkgPSBwbGF5ZXIueSAtIHBsYXllci5oZWlnaHQgLSAyNTtcclxuICAgIHRoaXMubGF6ZXJTaG90LnN0eWxlLnRvcCA9IHRoaXMubGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcblxyXG4gICAgdGhpcy5sYXplclNob3Quc3R5bGUubGVmdCA9IHBsYXllci54ICsgcGxheWVyLndpZHRoIC8gMiAtIDEyICsgXCJweFwiO1xyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5sYXplclNob3QpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU291bmRzIH0gZnJvbSBcIi4uL21vZGVscy9zb3VuZHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRNb3RoZXJzaGlwIHtcclxuICBtb3RoZXJzaGlwITogSFRNTERpdkVsZW1lbnQ7XHJcbiAgbW90aGVyc2hpcEN1cnJlbnRTb3VuZCE6IEhUTUxBdWRpb0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudCwgc291bmRzOiBJU291bmRzKSB7XHJcbiAgICB0aGlzLnJlbmRlcihnYW1lQXJlYSwgc291bmRzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudCwgc291bmRzOiBJU291bmRzKSB7XHJcbiAgICB0aGlzLm1vdGhlcnNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5tb3RoZXJzaGlwLmNsYXNzTGlzdC5hZGQoXCJhbGllblwiLCBcIm1vdGhlcnNoaXBcIik7XHJcbiAgICB0aGlzLm1vdGhlcnNoaXAueCA9IGdhbWVBcmVhLm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5tb3RoZXJzaGlwLnN0eWxlLmxlZnQgPSB0aGlzLm1vdGhlcnNoaXAueCArIFwicHhcIjtcclxuICAgIHRoaXMubW90aGVyc2hpcC5zdHlsZS50b3AgPSAwICsgXCJweFwiO1xyXG5cclxuICAgIGlmIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwKSB7XHJcbiAgICAgIHRoaXMubW90aGVyc2hpcEN1cnJlbnRTb3VuZCA9IHNvdW5kcy5tb3RoZXJzaGlwU291bmRIaWdoUGl0Y2g7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdGhlcnNoaXBDdXJyZW50U291bmQgPSBzb3VuZHMubW90aGVyc2hpcFNvdW5kTG93UGl0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5tb3RoZXJzaGlwKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBjbGFzcyB0byByZW5kZXIgYSBzaW5nbGUgc2hpZWxkLCBwcml2YXRlIGNsYXNzIHVzZWQgb25seSBpbiB0aGlzIG1vZHVsZVxyXG5jbGFzcyBBZGRTaW5nbGVTaGllbGQge1xyXG4gIHNpbmdsZVNoaWVsZCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgIHRoaXMuc2luZ2xlU2hpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuc2luZ2xlU2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGRcIiwgXCJzaGllbGQtZnVsbC1ocFwiKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGNsYXNzIHRvIHJlbmRlciBhbGwgNCBzaGllbGRzXHJcbmV4cG9ydCBjbGFzcyBBZGRTaGllbGRzIHtcclxuICBzaGllbGRGaWVsZCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgIHRoaXMuc2hpZWxkRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkLWZpZWxkXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzaW5nbGVTaGllbGRJbnN0YW5jZSA9IG5ldyBBZGRTaW5nbGVTaGllbGQoKTtcclxuICAgICAgY29uc3Qgc2luZ2xlU2hpZWxkID0gc2luZ2xlU2hpZWxkSW5zdGFuY2Uuc2luZ2xlU2hpZWxkO1xyXG4gICAgICB0aGlzLnNoaWVsZEZpZWxkLmFwcGVuZENoaWxkKHNpbmdsZVNoaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaGllbGRGaWVsZC5zdHlsZS53aWR0aCA9IGdhbWVBcmVhLm9mZnNldFdpZHRoIC8gMS4yNSArIFwicHhcIjtcclxuICAgIHRoaXMuc2hpZWxkRmllbGQuc3R5bGUudG9wID0gZ2FtZUFyZWEub2Zmc2V0SGVpZ2h0IC0gMjAwICsgXCJweFwiO1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZC5zdHlsZS5sZWZ0ID0gZ2FtZUFyZWEub2Zmc2V0V2lkdGggLyAxMCArIFwicHhcIjtcclxuXHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLnNoaWVsZEZpZWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5pbXBvcnQgeyBJSXNDb2xsaXNpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2lzQ29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IElTb3VuZHMgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdW5kc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuRGVhdGhBbmRQb2ludHMoe1xyXG4gIGlzQ29sbGlzaW9uLFxyXG4gIHNvdW5kcyxcclxuICBzY2VuZSxcclxufToge1xyXG4gIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb247XHJcbiAgc291bmRzOiBJU291bmRzO1xyXG4gIHNjZW5lOiBJU2NlbmVPYmplY3Q7XHJcbn0pIHtcclxuICBsZXQgYWxpZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGFsaWVucy5mb3JFYWNoKChhbGllbikgPT4ge1xyXG4gICAgbGV0IGxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5sYXplci1zaG90XCJcclxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgICBsYXplclNob3RzLmZvckVhY2goKGxhemVyU2hvdCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaXNDb2xsaXNpb24obGF6ZXJTaG90LCBhbGllbikgJiZcclxuICAgICAgICBhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWFkLWFsaWVuXCIpID09PSBmYWxzZVxyXG4gICAgICApIHtcclxuICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9kZWF0aC1hbmltYXRpb24uanBnJylcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGFsaWVuLmNsYXNzTGlzdC5hZGQoXCJkZWFkLWFsaWVuXCIpO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgICBsYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICAgICAgc291bmRzLmFsaWVuRGVhdGhTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTQwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSA0MDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTIwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAyMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTEwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAxMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcIm1vdGhlcnNoaXBcIikpIHtcclxuICAgICAgICAgIHNjZW5lLnNjb3JlICs9IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0LCBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxpZW5GaXJpbmdDeWNsZShcclxuICB7XHJcbiAgICBzY2VuZSxcclxuICAgIGdhbWUsXHJcbiAgICBBZGRBbGllbkxhemVyU2hvdCxcclxuICB9OiB7XHJcbiAgICBzY2VuZTogSVNjZW5lT2JqZWN0O1xyXG4gICAgZ2FtZTogSUdhbWVPYmplY3Q7XHJcbiAgICBBZGRBbGllbkxhemVyU2hvdDogYW55OyAvL1RPRE8gY2hlY2sgd2h5IGl0IHdvdWxkIG5vdCBhY2NwZXQgdHlwZW9mIEFkZEFsaWVuTGF6ZXJTaG90XHJcbiAgfSxcclxuICB0aW1lc3RhbXA6IG51bWJlclxyXG4pIHtcclxuICBjb25zdCBhbGllbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFsaWVuXCIpO1xyXG4gIGxldCByZW1haW5pbmdBbGllbnMgPSBBcnJheS5mcm9tKGFsaWVucykuZmlsdGVyKFxyXG4gICAgKGFsaWVuKSA9PiBhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWFkLWFsaWVuXCIpID09PSBmYWxzZVxyXG4gICk7XHJcbiAgLy8gcGlja3MgYSByYW5kb20gcG9zdGlvbiB0byBtYWtlIHN1cmUgYSByYW5kb20gYWxpZW4gZmlyZXMgZXZlcnkgdGltZVxyXG4gIGxldCByYW5kb21BbGllblBvc2l0aW9uID0gTWF0aC5yb3VuZChyZW1haW5pbmdBbGllbnMubGVuZ3RoICogTWF0aC5yYW5kb20oKSk7XHJcbiAgaWYgKHRpbWVzdGFtcCAtIHNjZW5lLmxhc3RBbGllbkxhemVyU2hvdCA+IGdhbWUuYWxpZW5GaXJlSW50ZXJ2YWwpIHtcclxuICAgIG5ldyBBZGRBbGllbkxhemVyU2hvdChyZW1haW5pbmdBbGllbnNbcmFuZG9tQWxpZW5Qb3NpdGlvbl0pO1xyXG4gICAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90ID0gdGltZXN0YW1wO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuU3ByaXRlQW5pbWF0aW9uKFxyXG4gIHsgc2NlbmUsIGdhbWUgfTogeyBzY2VuZTogSVNjZW5lT2JqZWN0OyBnYW1lOiBJR2FtZU9iamVjdCB9LFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyXHJcbikge1xyXG4gIGNvbnN0IGFsaWVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5hbGllblwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICBpZiAoXHJcbiAgICB0aW1lc3RhbXAgLSBzY2VuZS5sYXN0QWxpZW5TcHJpdGVJbnRlcnZhbCA+XHJcbiAgICBnYW1lLmFsaWVuU3ByaXRlQ2hhbmdlSW50ZXJ2YWxcclxuICApIHtcclxuICAgIGFsaWVucy5mb3JFYWNoKChhbGllbikgPT4ge1xyXG4gICAgICBpZiAoYWxpZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxpZW4tNDBwdHNcIikpIHtcclxuICAgICAgICBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTQwcHRzLTFcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktNDBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTQwcHRzLTJcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktNDBwdHMtMS5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTQwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhbGllbi0yMHB0c1wiKSkge1xyXG4gICAgICAgIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItMjBwdHMtMVwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS0yMHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItMjBwdHMtMlwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS0yMHB0cy0xLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktMjBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTEwcHRzXCIpKSB7XHJcbiAgICAgICAgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0xMHB0cy0xXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTEwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0xMHB0cy0yXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTEwcHRzLTEucG5nJylcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS0xMHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzY2VuZS5sYXN0QWxpZW5TcHJpdGVJbnRlcnZhbCA9IHRpbWVzdGFtcDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IElJc0NvbGxpc2lvbiB9IGZyb20gXCIuLi9tb2RlbHMvaXNDb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIoXHJcbiAgZGVmZW5kZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb24sXHJcbiAgYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gIHBsYXllcjogSVBsYXllcixcclxuICBnYW1lQXJlYTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZ2FtZU92ZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gIHNjZW5lOiBJU2NlbmVPYmplY3RcclxuKSB7XHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXJBY3Rpb24oZ2FtZU92ZXI6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBzY2VuZS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZ2FtZU92ZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICB9XHJcblxyXG4gIGlmIChpc0NvbGxpc2lvbihkZWZlbmRlciwgYWxpZW5MYXplclNob3QpKSB7XHJcbiAgICBsZXQgbGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9uZS1saXZlXCIpO1xyXG4gICAgYWxpZW5MYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICBpZiAobGl2ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBwbGF5ZXIueCA9IDEwMDtcclxuICAgICAgcGxheWVyLnkgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSA1MDtcclxuICAgICAgZGVmZW5kZXIuc3R5bGUubGVmdCA9IHBsYXllci54ICsgXCJweFwiO1xyXG4gICAgICBkZWZlbmRlci5zdHlsZS50b3AgPSBwbGF5ZXIueSArIFwicHhcIjtcclxuICAgICAgbGl2ZXNbbGl2ZXMubGVuZ3RoIC0gMV0ucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaXZlc1tsaXZlcy5sZW5ndGggLSAxXS5yZW1vdmUoKTtcclxuICAgICAgZ2FtZU92ZXJBY3Rpb24oZ2FtZU92ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJSXNDb2xsaXNpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2lzQ29sbGlzaW9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyKFxyXG4gIGFsaWVuTGF6ZXJTaG90OiBIVE1MRGl2RWxlbWVudCxcclxuICBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uXHJcbikge1xyXG4gIGxldCBzaGllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLnNoaWVsZFwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICBzaGllbGRzLmZvckVhY2goKHNoaWVsZCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBpc0NvbGxpc2lvbihzaGllbGQsIGFsaWVuTGF6ZXJTaG90KSAmJlxyXG4gICAgICBzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLWRlc3Ryb3llZFwiKSA9PT0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICBpZiAoc2hpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNoaWVsZC1mdWxsLWhwXCIpKSB7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGllbGQtZnVsbC1ocFwiKTtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmFkZChcInNoaWVsZC0xaGl0XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNoaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGllbGQtMWhpdFwiKSkge1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpZWxkLTFoaXRcIik7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtMmhpdHNcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNoaWVsZC0yaGl0c1wiKSkge1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpZWxkLTJoaXRzXCIpO1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkLTNoaXRzXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNoaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGllbGQtM2hpdHNcIikpIHtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmFkZChcInNoaWVsZC1kZXN0cm95ZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgYWxpZW5MYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUdhbWVPYmplY3QsIElTY2VuZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbmV4cG9ydCBsZXQgZ2FtZTogSUdhbWVPYmplY3QgPSB7XHJcbiAgc3BlZWQ6IDIsXHJcbiAgcGxheWVyTW92ZW1lbnRNdWx0aXBsaWVyOiAyLFxyXG4gIGxhemVyU2hvdE1vdmVtZW50TXVsdGlwbGllcjogMyxcclxuICBhbGllbkNsdXN0ZXJNdWx0aXBsaWVyOiAwLjQsXHJcbiAgYWxpZW5Qb3M6IDAsXHJcbiAgYWxpZW5EaXJlY3Rpb246IDEsXHJcbiAgYWxpZW5TcHJpdGVDaGFuZ2VJbnRlcnZhbDogNTAwLFxyXG4gIGFsaWVuTGF6ZXJTaG90U3ByaXRlQ2hhbmdlSW50ZXJ2YWw6IDUwLFxyXG4gIGFsaWVuRmlyZUludGVydmFsOiAyMDAwLFxyXG4gIGZpcmVJbnRlcnZhbDogODAwLFxyXG4gIGV4dHJhTGl2ZXNDb3VudGVyOiAxLFxyXG4gIG1vdGhlcnNoaXBTcGF3bkludGVydmFsOiA1MDAwMCxcclxuICBtb3RoZXJzaGlwTW92ZW1lbnRNdWx0aXBsaWVyOiA1LFxyXG4gIG1heEFsaWVuQ2x1c3RlclNpemU6IDU1LFxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBzY2VuZTogSVNjZW5lT2JqZWN0ID0ge1xyXG4gIHNjb3JlOiAwLFxyXG4gIGxhc3RBbGllblNwcml0ZUludGVydmFsOiAwLFxyXG4gIGxhc3RBbGllbkxhemVyU2hvdFNwcml0ZUludGVydmFsOiAwLFxyXG4gIGxhc3RBbGllbkxhemVyU2hvdDogMCxcclxuICBsYXN0U3Bhd25Nb3RoZXJzaGlwOiAwLFxyXG4gIGlzQWN0aXZlOiB0cnVlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGllbkNsdXN0ZXJNb3ZlbWVudCh7XHJcbiAgZ2FtZSxcclxuICBnYW1lQXJlYSxcclxufToge1xyXG4gIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudDtcclxufSkge1xyXG4gIGNvbnN0IGFsaWVuQ2x1c3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5hbGllbi1jbHVzdGVyXCJcclxuICApISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBpZiAoZ2FtZS5hbGllblBvcyArIGFsaWVuQ2x1c3Rlci5vZmZzZXRXaWR0aCA+IGdhbWVBcmVhLm9mZnNldFdpZHRoIC0gMTAwKSB7XHJcbiAgICBnYW1lLmFsaWVuRGlyZWN0aW9uID0gLWdhbWUuc3BlZWQ7XHJcbiAgfSBlbHNlIGlmIChnYW1lLmFsaWVuUG9zIDwgMTAwKSB7XHJcbiAgICBnYW1lLmFsaWVuRGlyZWN0aW9uID0gZ2FtZS5zcGVlZDtcclxuICB9XHJcbiAgZ2FtZS5hbGllblBvcyArPSBnYW1lLmFsaWVuRGlyZWN0aW9uICogZ2FtZS5hbGllbkNsdXN0ZXJNdWx0aXBsaWVyO1xyXG4gIGFsaWVuQ2x1c3Rlci5zdHlsZS5sZWZ0ID0gZ2FtZS5hbGllblBvcyArIFwicHhcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5pbXBvcnQgeyBJSXNDb2xsaXNpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2lzQ29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYXllclwiO1xyXG5cclxudHlwZSBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciA9IHtcclxuICAoXHJcbiAgICBkZWZlbmRlcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgICBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uLFxyXG4gICAgYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgcGxheWVyOiBJUGxheWVyLFxyXG4gICAgZ2FtZUFyZWE6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgZ2FtZU92ZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgc2NlbmU6IElTY2VuZU9iamVjdFxyXG4gICk6IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIHNoaWVsZEFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciA9IHtcclxuICAoYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LCBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uKTogdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGllbkxhemVyU2hvdHNNb3ZtZW50QW5kQ29sbGlzaW9uQ2hlY2tlcihcclxuICB7XHJcbiAgICBnYW1lLFxyXG4gICAgc2NlbmUsXHJcbiAgICBwbGF5ZXIsXHJcbiAgICBnYW1lQXJlYSxcclxuICAgIGlzQ29sbGlzaW9uLFxyXG4gICAgZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIsXHJcbiAgICBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIsXHJcbiAgICBnYW1lT3ZlcixcclxuICB9OiB7XHJcbiAgICBnYW1lOiBJR2FtZU9iamVjdDtcclxuICAgIHNjZW5lOiBJU2NlbmVPYmplY3Q7XHJcbiAgICBwbGF5ZXI6IElQbGF5ZXI7XHJcbiAgICBnYW1lQXJlYTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uO1xyXG4gICAgZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXI6IGRlZmVuZGVyQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyO1xyXG4gICAgc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyOiBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXI7XHJcbiAgICBnYW1lT3ZlcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgfSxcclxuICB0aW1lc3RhbXA6IG51bWJlclxyXG4pIHtcclxuICBjb25zdCBkZWZlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmZW5kZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGxldCBhbGllbkxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuYWxpZW4tbGF6ZXItc2hvdFwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICBhbGllbkxhemVyU2hvdHMuZm9yRWFjaCgoYWxpZW5MYXplclNob3QpID0+IHtcclxuICAgIGFsaWVuTGF6ZXJTaG90LnkgKz0gZ2FtZS5zcGVlZDtcclxuICAgIGFsaWVuTGF6ZXJTaG90LnN0eWxlLnRvcCA9IGFsaWVuTGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRpbWVzdGFtcCAtIHNjZW5lLmxhc3RBbGllbkxhemVyU2hvdFNwcml0ZUludGVydmFsID5cclxuICAgICAgZ2FtZS5hbGllbkxhemVyU2hvdFNwcml0ZUNoYW5nZUludGVydmFsXHJcbiAgICApIHtcclxuICAgICAgaWYgKGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcInR5cGUtMVwiKSkge1xyXG4gICAgICAgIGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2F0dGFjay10eXBlLTIucG5nJylcIjtcclxuICAgICAgfSBlbHNlIGlmIChhbGllbkxhemVyU2hvdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCJ0eXBlLTJcIikpIHtcclxuICAgICAgICBhbGllbkxhemVyU2hvdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9hdHRhY2stdHlwZS0xLnBuZycpXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxpZW5MYXplclNob3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvYXR0YWNrLXR5cGUtMi5wbmcnKVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzY2VuZS5sYXN0QWxpZW5MYXplclNob3RTcHJpdGVJbnRlcnZhbCA9IHRpbWVzdGFtcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmVzIHRoZSBsYXplciBzaG90IGZyb20gdGhlIGRvbSB3aGVuIGl0IHJlYWNoZXMgdGhlIGVuZCBvZiB0aGUgc2NyZWVuXHJcbiAgICBpZiAoXHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnkgKyBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgPlxyXG4gICAgICBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgLyAyXHJcbiAgICApIHtcclxuICAgICAgYWxpZW5MYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBhbGllbiBsYXplciBzaG90IGhhcyBoaXQgdGhlIGRlZmVuZGVyXHJcbiAgICBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcihcclxuICAgICAgZGVmZW5kZXIsXHJcbiAgICAgIGlzQ29sbGlzaW9uLFxyXG4gICAgICBhbGllbkxhemVyU2hvdCxcclxuICAgICAgcGxheWVyLFxyXG4gICAgICBnYW1lQXJlYSxcclxuICAgICAgZ2FtZU92ZXIsXHJcbiAgICAgIHNjZW5lXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNoZWNrcyBpZiB0aGUgYWxpZW4gbGF6ZXIgc2hvdCBoYXMgaGl0IGEgc2hpZWxkXHJcbiAgICBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIoYWxpZW5MYXplclNob3QsIGlzQ29sbGlzaW9uKTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL21vZGVscy9pc0NvbGxpc2lvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhemVyU2hvdHNNb3ZlbWVudCh7XHJcbiAgZ2FtZSxcclxuICBpc0NvbGxpc2lvbixcclxufToge1xyXG4gIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb247XHJcbn0pIHtcclxuICBsZXQgbGF6ZXJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5sYXplci1zaG90XCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGxhemVyU2hvdHMuZm9yRWFjaCgobGF6ZXJTaG90KSA9PiB7XHJcbiAgICBsYXplclNob3QueSAtPSBnYW1lLnNwZWVkO1xyXG4gICAgbGF6ZXJTaG90LnN0eWxlLnRvcCA9IGxhemVyU2hvdC55ICsgXCJweFwiO1xyXG5cclxuICAgIGlmIChsYXplclNob3QueSArIGxhemVyU2hvdC5vZmZzZXRIZWlnaHQgPCAwKSB7XHJcbiAgICAgIGxhemVyU2hvdC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiB0aGUgbGF6ZXIgc2hvdCBoaXRzIGEgc2hpZWxkLCB0aGUgc2hvdCBpcyByZW1vdmVkXHJcbiAgICBsZXQgc2hpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnNoaWVsZFwiXHJcbiAgICApISBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIHNoaWVsZHMuZm9yRWFjaCgoc2hpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0NvbGxpc2lvbihsYXplclNob3QsIHNoaWVsZCkgJiZcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLWRlc3Ryb3llZFwiKSA9PT0gZmFsc2VcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGF6ZXJTaG90LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIFRPRE8gbXVzdCBmaXggcHJvYmxlbSB3aXRoIG1vdGhlcnNoaXAgc291bmRcclxuZXhwb3J0IGZ1bmN0aW9uIG1vdGhlcnNoaXBNb3ZlbWVudCh7XHJcbiAgZ2FtZSxcclxuICBtb3RoZXJzaGlwQ3VycmVudFNvdW5kLFxyXG59OiB7XHJcbiAgZ2FtZTogSUdhbWVPYmplY3Q7XHJcbiAgbW90aGVyc2hpcEN1cnJlbnRTb3VuZDogSFRNTEF1ZGlvRWxlbWVudDtcclxufSkge1xyXG4gIGxldCBtb3RoZXJzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5tb3RoZXJzaGlwXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBtb3RoZXJzaGlwcy5mb3JFYWNoKChtb3RoZXJzaGlwKSA9PiB7XHJcbiAgICBtb3RoZXJzaGlwLnggLT0gZ2FtZS5zcGVlZDtcclxuICAgIG1vdGhlcnNoaXAuc3R5bGUubGVmdCA9IG1vdGhlcnNoaXAueCArIFwicHhcIjtcclxuXHJcbiAgICBpZiAobW90aGVyc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWFkLWFsaWVuXCIpID09PSBmYWxzZSkge1xyXG4gICAgICBtb3RoZXJzaGlwQ3VycmVudFNvdW5kLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobW90aGVyc2hpcC54ICsgbW90aGVyc2hpcC5vZmZzZXRXaWR0aCA8PSAwKSB7XHJcbiAgICAgIG1vdGhlcnNoaXAucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZW1lbnQoeyBwbGF5ZXIgfTogeyBwbGF5ZXI6IElQbGF5ZXIgfSkge1xyXG4gIGNvbnN0IGRlZmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWZlbmRlclwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgZGVmZW5kZXIuc3R5bGUubGVmdCA9IHBsYXllci54ICsgXCJweFwiO1xyXG4gIGRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55IC0gcGxheWVyLmhlaWdodCArIFwicHhcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbmNvbnN0IGdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWFyZWFcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuZXhwb3J0IGxldCBwbGF5ZXI6IElQbGF5ZXIgPSB7XHJcbiAgeDogMTAwLFxyXG4gIHk6IGdhbWVBcmVhLm9mZnNldEhlaWdodCAtIDUwLFxyXG4gIHdpZHRoOiAwLFxyXG4gIGhlaWdodDogMCxcclxuICBsYXN0VGltZVNob3Q6IDAsXHJcbiAgbGl2ZXM6IDMsXHJcbn07XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgSVNvdW5kcyB9IGZyb20gXCIuLi9tb2RlbHMvc291bmRzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXlVcCk7XHJcblxyXG5sZXQga2V5czoge1xyXG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XHJcbn0gPSB7fTtcclxuXHJcbmZ1bmN0aW9uIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAga2V5c1tlLmNvZGVdID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAga2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbn1cclxuXHJcbi8vIG1vdmVtZW50IGNvbnRyb2xsc1xyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZW1lbnRDb250cm9sbHMoe1xyXG4gIHBsYXllcixcclxuICBnYW1lLFxyXG4gIGdhbWVBcmVhLFxyXG59OiB7XHJcbiAgcGxheWVyOiBJUGxheWVyO1xyXG4gIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudDtcclxufSkge1xyXG4gIGlmIChrZXlzLkFycm93TGVmdCAmJiBwbGF5ZXIueCA+IDApIHtcclxuICAgIHBsYXllci54IC09IGdhbWUuc3BlZWQgKiBnYW1lLnBsYXllck1vdmVtZW50TXVsdGlwbGllcjtcclxuICB9XHJcblxyXG4gIGlmIChrZXlzLkFycm93UmlnaHQgJiYgcGxheWVyLnggKyBwbGF5ZXIud2lkdGggKyAyMCA8IGdhbWVBcmVhLm9mZnNldFdpZHRoKSB7XHJcbiAgICBwbGF5ZXIueCArPSBnYW1lLnNwZWVkICogZ2FtZS5wbGF5ZXJNb3ZlbWVudE11bHRpcGxpZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBzaG9vdGluZyBjb250cm9sbHNcclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclNob290aW5nQ29udHJvbGxzKFxyXG4gIHtcclxuICAgIHBsYXllcixcclxuICAgIGdhbWUsXHJcbiAgICBzb3VuZHMsXHJcbiAgICBBZGREZWZlbmRlckxhemVyU2hvdCxcclxuICB9OiB7XHJcbiAgICBwbGF5ZXI6IElQbGF5ZXI7XHJcbiAgICBnYW1lOiBJR2FtZU9iamVjdDtcclxuICAgIHNvdW5kczogSVNvdW5kcztcclxuICAgIEFkZERlZmVuZGVyTGF6ZXJTaG90OiBhbnk7XHJcbiAgfSxcclxuICB0aW1lc3RhbXA6IG51bWJlclxyXG4pIHtcclxuICBpZiAoa2V5cy5TcGFjZSAmJiB0aW1lc3RhbXAgLSBwbGF5ZXIubGFzdFRpbWVTaG90ID4gZ2FtZS5maXJlSW50ZXJ2YWwpIHtcclxuICAgIG5ldyBBZGREZWZlbmRlckxhemVyU2hvdChwbGF5ZXIpO1xyXG4gICAgc291bmRzLmRlZmVuZGVyU2hvb3RpbmcucGxheSgpO1xyXG4gICAgcGxheWVyLmxhc3RUaW1lU2hvdCA9IHRpbWVzdGFtcDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUdhbWVPYmplY3QsIElTY2VuZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludHNVcGRhdGUoe1xyXG4gIHBvaW50cyxcclxuICBzY2VuZSxcclxuICBnYW1lLFxyXG59OiB7XHJcbiAgcG9pbnRzOiBIVE1MRGl2RWxlbWVudDtcclxuICBzY2VuZTogSVNjZW5lT2JqZWN0O1xyXG4gIGdhbWU6IElHYW1lT2JqZWN0O1xyXG59KSB7XHJcbiAgcG9pbnRzLnRleHRDb250ZW50ID0gc2NlbmUuc2NvcmUudG9TdHJpbmcoKTtcclxuICAvLyBhZGRpbmcgZXh0cmEgbGl2ZVxyXG4gIGlmIChzY2VuZS5zY29yZSAvIDEwMDAgPj0gZ2FtZS5leHRyYUxpdmVzQ291bnRlcikge1xyXG4gICAgbGV0IGxpdmVzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmxpdmVzLWNvdW50ZXJcIlxyXG4gICAgKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBsZXQgbGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaXZlLmNsYXNzTGlzdC5hZGQoXCJvbmUtbGl2ZVwiKTtcclxuICAgIGxpdmVzQ291bnRlci5hcHBlbmRDaGlsZChsaXZlKTtcclxuICAgIGdhbWUuZXh0cmFMaXZlc0NvdW50ZXIrKztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUdhbWVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzcGF3bkFsaWVucyh7IGdhbWUgfTogeyBnYW1lOiBJR2FtZU9iamVjdCB9KSB7XHJcbiAgY29uc3QgYWxpZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGxldCBhbGllblJlc3Bhd25DaGVja2VyID0gQXJyYXkuZnJvbShhbGllbnMpLmZpbHRlcigoYWxpZW4pID0+XHJcbiAgICBhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWFkLWFsaWVuXCIpXHJcbiAgKTtcclxuICBpZiAoYWxpZW5SZXNwYXduQ2hlY2tlci5sZW5ndGggPT09IGdhbWUubWF4QWxpZW5DbHVzdGVyU2l6ZSkge1xyXG4gICAgYWxpZW5zLmZvckVhY2goKGFsaWVuKSA9PiB7XHJcbiAgICAgIGFsaWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWFkLWFsaWVuXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElTb3VuZHMgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdW5kc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvdW5kczogSVNvdW5kcyA9IHsgXHJcbiAgICBkZWZlbmRlclNob290aW5nOiBuZXcgQXVkaW8oJy4vc291bmRzL3Nob290LndhdicpLFxyXG4gICAgYWxpZW5EZWF0aFNvdW5kOiBuZXcgQXVkaW8oJy4vc291bmRzL2ludmFkZXJraWxsZWQud2F2JyksXHJcbiAgICBiYWNrZ3JvdW5kTXVzaWM6IG5ldyBBdWRpbygnLi9zb3VuZHMvc3BhY2VpbnZhZGVyczEubXBlZycpLFxyXG4gICAgbW90aGVyc2hpcFNvdW5kSGlnaFBpdGNoOiBuZXcgQXVkaW8oJy4vc291bmRzL3Vmb19oaWdocGl0Y2gud2F2JyksXHJcbiAgICBtb3RoZXJzaGlwU291bmRMb3dQaXRjaDogbmV3IEF1ZGlvKCcuL3NvdW5kcy91Zm9fbG93cGl0Y2gud2F2JyksXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IElHYW1lUmVzdGFydCwgSUdhbWVTdGFydCB9IGZyb20gXCIuLi9tb2RlbHMvYnV0dG9uc1wiO1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGNvbGxpc2lvbiBkZXRlY3RvclxyXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xsaXNpb24oXHJcbiAgZmlyc3RFbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcclxuICBzZWNvbmRFbGVtZW50OiBIVE1MRGl2RWxlbWVudFxyXG4pIHtcclxuICBsZXQgZmlyc3RSZWN0ID0gZmlyc3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGxldCBzZWNvbmRSZWN0ID0gc2Vjb25kRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgcmV0dXJuICEoXHJcbiAgICBmaXJzdFJlY3QudG9wID4gc2Vjb25kUmVjdC5ib3R0b20gfHxcclxuICAgIGZpcnN0UmVjdC5ib3R0b20gPCBzZWNvbmRSZWN0LnRvcCB8fFxyXG4gICAgZmlyc3RSZWN0LnJpZ2h0IDwgc2Vjb25kUmVjdC5sZWZ0IHx8XHJcbiAgICBmaXJzdFJlY3QubGVmdCA+IHNlY29uZFJlY3QucmlnaHRcclxuICApO1xyXG59XHJcblxyXG4vLyBzdGFydCBnYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkdhbWVTdGFydCh7XHJcbiAgZ2FtZUFjdGlvbixcclxuICBwbGF5ZXIsXHJcbiAgZ2FtZSxcclxuICBBZGRBbGllbkNsdXN0ZXIsXHJcbiAgQWRkU2hpZWxkcyxcclxuICBzb3VuZHMsXHJcbiAgQWRkRGVmZW5kZXIsXHJcbn06IElHYW1lU3RhcnQpIHtcclxuICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBjb25zdCBkZWZlbmRlckluc3RhbmNlID0gbmV3IEFkZERlZmVuZGVyKHBsYXllcik7XHJcbiAgY29uc3QgZGVmZW5kZXIgPSBkZWZlbmRlckluc3RhbmNlLmRlZmVuZGVyO1xyXG5cclxuICBwbGF5ZXIuaGVpZ2h0ID0gZGVmZW5kZXIub2Zmc2V0SGVpZ2h0O1xyXG4gIHBsYXllci53aWR0aCA9IGRlZmVuZGVyLm9mZnNldFdpZHRoO1xyXG5cclxuICBuZXcgQWRkQWxpZW5DbHVzdGVyKGdhbWUpO1xyXG4gIG5ldyBBZGRTaGllbGRzKCk7XHJcbiAgc291bmRzLmJhY2tncm91bmRNdXNpYy5wbGF5KCk7XHJcblxyXG4gIGxldCBsaXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGl2ZXMtY291bnRlclwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGxldCBsaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpdmUuY2xhc3NMaXN0LmFkZChcIm9uZS1saXZlXCIpO1xyXG4gICAgbGl2ZXMuYXBwZW5kQ2hpbGQobGl2ZSk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVBY3Rpb24pO1xyXG59XHJcblxyXG4vLyByZXN0YXQgZ2FtZSBvcHRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVSZXN0YXJ0KHtcclxuICBnYW1lQXJlYSxcclxuICBnYW1lT3ZlcixcclxuICBwbGF5ZXIsXHJcbiAgc2NlbmUsXHJcbiAgb25HYW1lU3RhcnRDb25maWdPYmosXHJcbn06IElHYW1lUmVzdGFydCkge1xyXG4gIGdhbWVPdmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgY29uc3QgYWxpZW5DbHVzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmFsaWVuLWNsdXN0ZXJcIlxyXG4gICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGFsaWVuQ2x1c3Rlci5yZW1vdmUoKTtcclxuICBsZXQgbGF6ZXJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGF6ZXItc2hvdFwiKTtcclxuICBsYXplclNob3RzLmZvckVhY2goKGxhemVyU2hvdCkgPT4gbGF6ZXJTaG90LnJlbW92ZSgpKTtcclxuXHJcbiAgY29uc3QgZGVmZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmVuZGVyXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBkZWZlbmRlci5yZW1vdmUoKTtcclxuXHJcbiAgY29uc3QgYWxpZW5MYXplclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGllbi1sYXplci1zaG90XCIpO1xyXG4gIGFsaWVuTGF6ZXJTaG90cy5mb3JFYWNoKChhbGllbkxhemVyU2hvdCkgPT4gYWxpZW5MYXplclNob3QucmVtb3ZlKCkpO1xyXG5cclxuICBjb25zdCBsaXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub25lLWxpdmVcIik7XHJcbiAgbGl2ZXMuZm9yRWFjaCgobGl2ZSkgPT4gbGl2ZS5yZW1vdmUoKSk7XHJcblxyXG4gIGNvbnN0IHNoaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaWVsZC1maWVsZFwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgc2hpZWxkcy5yZW1vdmUoKTtcclxuXHJcbiAgcGxheWVyLnggPSAxMDA7XHJcbiAgcGxheWVyLnkgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSA1MDtcclxuICBwbGF5ZXIud2lkdGggPSAwO1xyXG4gIHBsYXllci5oZWlnaHQgPSAwO1xyXG4gIHBsYXllci5sYXN0VGltZVNob3QgPSAwO1xyXG4gIHBsYXllci5saXZlcyA9IDM7XHJcblxyXG4gIHNjZW5lLnNjb3JlID0gMDtcclxuICBzY2VuZS5sYXN0QWxpZW5TcHJpdGVJbnRlcnZhbCA9IDA7XHJcbiAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPSAwO1xyXG4gIHNjZW5lLmxhc3RBbGllbkxhemVyU2hvdCA9IDA7XHJcbiAgc2NlbmUubGFzdFNwYXduTW90aGVyc2hpcCA9IDA7XHJcbiAgc2NlbmUuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICBvbkdhbWVTdGFydChvbkdhbWVTdGFydENvbmZpZ09iaik7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBZGRBbGllbkxhemVyU2hvdCB9IGZyb20gXCIuL2FkZE9iamVjdHMvYWRkQWxpZW5MYXplclNob3RcIjtcclxuaW1wb3J0IHsgQWRkRGVmZW5kZXJMYXplclNob3QgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZERlZmVuZGVyTGF6ZXJTaG90XCI7XHJcbmltcG9ydCB7IEFkZE1vdGhlcnNoaXAgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZE1vdGhlcnNoaXBcIjtcclxuaW1wb3J0IHsgYWxpZW5TcHJpdGVBbmltYXRpb24gfSBmcm9tIFwiLi9hbmltYXRpb25zL2FsaWVuU3ByaXRlc1wiO1xyXG5pbXBvcnQgeyBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciB9IGZyb20gXCIuL2NvbGxpc2lvbkNoZWNrZXIvZGVmZW5kZXJBbGllbkxhemVyU2hvdFwiO1xyXG5pbXBvcnQgeyBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIgfSBmcm9tIFwiLi9jb2xsaXNpb25DaGVja2VyL3NoaWVsZEFsaWVuTGF6ZXJTaG90XCI7XHJcbmltcG9ydCB7IGFsaWVuRGVhdGhBbmRQb2ludHMgfSBmcm9tIFwiLi9hbGllbkRlYXRoQW5kUG9pbnRzL2FsaWVuRGVhdGhBbmRQb2ludHNcIjtcclxuaW1wb3J0IHsgZ2FtZSwgc2NlbmUgfSBmcm9tIFwiLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgYWxpZW5DbHVzdGVyTW92ZW1lbnQgfSBmcm9tIFwiLi9vYmplY3RNb3ZlbWVudC9hbGllbkNsdXN0ZXJcIjtcclxuaW1wb3J0IHsgYWxpZW5MYXplclNob3RzTW92bWVudEFuZENvbGxpc2lvbkNoZWNrZXIgfSBmcm9tIFwiLi9vYmplY3RNb3ZlbWVudC9hbGllbkxhemVyU2hvdHNcIjtcclxuaW1wb3J0IHsgbGF6ZXJTaG90c01vdmVtZW50IH0gZnJvbSBcIi4vb2JqZWN0TW92ZW1lbnQvbGF6ZXJTaG90c1wiO1xyXG5pbXBvcnQgeyBwbGF5ZXJNb3ZlbWVudCB9IGZyb20gXCIuL29iamVjdE1vdmVtZW50L3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XHJcbmltcG9ydCB7XHJcbiAgcGxheWVyTW92ZW1lbnRDb250cm9sbHMsXHJcbiAgcGxheWVyU2hvb3RpbmdDb250cm9sbHMsXHJcbn0gZnJvbSBcIi4vcGxheWVyL3BsYXllck1vdmVtZW50Q29udHJvbGxzXCI7XHJcbmltcG9ydCB7IHBvaW50c1VwZGF0ZSB9IGZyb20gXCIuL3BvaW50cy9wb2ludHNVcGRhdGVcIjtcclxuaW1wb3J0IHsgcmVzcGF3bkFsaWVucyB9IGZyb20gXCIuL3Jlc3B3YW4vYWxpZW5zXCI7XHJcbmltcG9ydCB7IHNvdW5kcyB9IGZyb20gXCIuL3NvdW5kcy9zb3VuZHNcIjtcclxuaW1wb3J0IHsgb25HYW1lU3RhcnQsIGdhbWVSZXN0YXJ0LCBpc0NvbGxpc2lvbiB9IGZyb20gXCIuL3V0aWwvdXRpbGl0eUZ1bmNzXCI7XHJcbmltcG9ydCB7IGFsaWVuRmlyaW5nQ3ljbGUgfSBmcm9tIFwiLi9hbGllbkZpcmluZ0N5Y2xlL2FsaWVuRmlyaW5nQ3ljbGVcIjtcclxuaW1wb3J0IHsgbW90aGVyc2hpcE1vdmVtZW50IH0gZnJvbSBcIi4vb2JqZWN0TW92ZW1lbnQvbW90aGVyc2hpcFwiO1xyXG5pbXBvcnQgeyBBZGRBbGllbkNsdXN0ZXIgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZEFsaWVuQ2x1c3RlclwiO1xyXG5pbXBvcnQgeyBBZGRTaGllbGRzIH0gZnJvbSBcIi4vYWRkT2JqZWN0cy9hZGRTaGllbGRzXCI7XHJcbmltcG9ydCB7IEFkZERlZmVuZGVyIH0gZnJvbSBcIi4vYWRkT2JqZWN0cy9hZGREZWZlbmRlclwiO1xyXG5pbXBvcnQgeyBJR2FtZVJlc3RhcnQsIElHYW1lU3RhcnQgfSBmcm9tIFwiLi9tb2RlbHMvYnV0dG9uc1wiO1xyXG5cclxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmxldCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgZ2FtZU92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3ZlclwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IHBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9pbnRzXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGJhY2tnb3VybmQgbXVzaWMgbG9vcFxyXG5zb3VuZHMuYmFja2dyb3VuZE11c2ljLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgdGhpcy5wbGF5KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgdGVzdCA9IEFkZEFsaWVuTGF6ZXJTaG90O1xyXG5cclxuLy8gZG9uZSB0byByZWR1Y2UgdHlwZXMgYW5kIGVhc3kgb2YgYWRkaW5nIG5ldyBwYXJhbWV0ZXJzIHRvIHRoZSBnYW1lQWN0aW9uXHJcbmNvbnN0IGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QgPSB7XHJcbiAgcGxheWVyTW92ZW1lbnRDb250cm9sbHM6IHsgcGxheWVyLCBnYW1lLCBnYW1lQXJlYSB9LFxyXG4gIHBsYXllck1vdmVtZW50OiB7IHBsYXllciB9LFxyXG4gIHBsYXllclNob290aW5nQ29udHJvbGxzOiB7IHBsYXllciwgZ2FtZSwgc291bmRzLCBBZGREZWZlbmRlckxhemVyU2hvdCB9LFxyXG4gIGxhemVyU2hvdHNNb3ZlbWVudDogeyBnYW1lLCBpc0NvbGxpc2lvbiB9LFxyXG4gIGFsaWVuQ2x1c3Rlck1vdmVtZW50OiB7IGdhbWUsIGdhbWVBcmVhIH0sXHJcbiAgZGVhdGhBbmRQb2ludHM6IHsgaXNDb2xsaXNpb24sIHNvdW5kcywgc2NlbmUgfSxcclxuICByZXNwYXduQWxpZW5zOiB7IGdhbWUgfSxcclxuICBhbGllblNwcml0ZUFuaW1hdGlvbjogeyBzY2VuZSwgZ2FtZSB9LFxyXG4gIGFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyOiB7XHJcbiAgICBnYW1lLFxyXG4gICAgc2NlbmUsXHJcbiAgICBwbGF5ZXIsXHJcbiAgICBnYW1lQXJlYSxcclxuICAgIGlzQ29sbGlzaW9uLFxyXG4gICAgZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIsXHJcbiAgICBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIsXHJcbiAgICBnYW1lT3ZlcixcclxuICB9LFxyXG4gIGFsaWVuRmlyaW5nQ3ljbGU6IHsgc2NlbmUsIGdhbWUsIEFkZEFsaWVuTGF6ZXJTaG90IH0sXHJcbiAgbW90aGVyc2hpcE1vdmVtZW50OiB7IGdhbWUsIG1vdGhlcnNoaXBDdXJyZW50U291bmQ6IG5ldyBBdWRpbygpIH0sXHJcbiAgcG9pbnRzVXBkYXRlOiB7IHBvaW50cywgc2NlbmUsIGdhbWUgfSxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVCdXR0b25zQ29uZmlnT2JqOiB7XHJcbiAgb25HYW1lU3RhcnQ6IElHYW1lU3RhcnQ7XHJcbiAgZ2FtZVJlc3RhcnQ6IElHYW1lUmVzdGFydDtcclxufSA9IHtcclxuICBvbkdhbWVTdGFydDoge1xyXG4gICAgZ2FtZUFjdGlvbixcclxuICAgIHBsYXllcixcclxuICAgIGdhbWUsXHJcbiAgICBBZGREZWZlbmRlcixcclxuICAgIEFkZEFsaWVuQ2x1c3RlcixcclxuICAgIEFkZFNoaWVsZHMsXHJcbiAgICBzb3VuZHMsXHJcbiAgfSxcclxuICBnYW1lUmVzdGFydDoge1xyXG4gICAgZ2FtZUFyZWEsXHJcbiAgICBnYW1lT3ZlcixcclxuICAgIHBsYXllcixcclxuICAgIHNjZW5lLFxyXG4gICAgb25HYW1lU3RhcnRDb25maWdPYmo6IHtcclxuICAgICAgZ2FtZUFjdGlvbixcclxuICAgICAgcGxheWVyLFxyXG4gICAgICBnYW1lLFxyXG4gICAgICBBZGREZWZlbmRlcixcclxuICAgICAgQWRkQWxpZW5DbHVzdGVyLFxyXG4gICAgICBBZGRTaGllbGRzLFxyXG4gICAgICBzb3VuZHMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBzdGFydCBnYW1lIGJ1dHRvbiBldmVudCBsaXN0ZW5lclxyXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJldHVybiBvbkdhbWVTdGFydChnYW1lQnV0dG9uc0NvbmZpZ09iai5vbkdhbWVTdGFydCk7XHJcbn0pO1xyXG5cclxuLy8gZ2FtZSBvdmVyIGFuZCByZXN0YXJ0IGdhbWUgZXZlbnQgbGlzdGVuZXJcclxuZ2FtZU92ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZXR1cm4gZ2FtZVJlc3RhcnQoZ2FtZUJ1dHRvbnNDb25maWdPYmouZ2FtZVJlc3RhcnQpO1xyXG59KTtcclxuXHJcbi8vIGdhbWUgZW5naW5lXHJcbmZ1bmN0aW9uIGdhbWVBY3Rpb24odGltZXN0YW1wOiBudW1iZXIpIHtcclxuICAvLyBtb3ZlbWVudCBrZXlzXHJcbiAgcGxheWVyTW92ZW1lbnRDb250cm9sbHMoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5wbGF5ZXJNb3ZlbWVudENvbnRyb2xscyk7XHJcblxyXG4gIC8vIHNob290aW5nXHJcbiAgcGxheWVyU2hvb3RpbmdDb250cm9sbHMoXHJcbiAgICBnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LnBsYXllclNob290aW5nQ29udHJvbGxzLFxyXG4gICAgdGltZXN0YW1wIC8vdGltZXN0YW0gbXVzdCBhbHdheXMgYmUgYWRkZWQgYXMgaXQgY29tZXMgZnJvbSB0aGUgZ2FtZUFjdGlvbiBmdW5jIGl0c2VsZlxyXG4gICk7XHJcblxyXG4gIC8vIGFwcGx5IHBsYXllciBtb3ZlbWVudFxyXG4gIHBsYXllck1vdmVtZW50KGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QucGxheWVyTW92ZW1lbnQpO1xyXG5cclxuICAvLyBhZGQgbGF6ZXIgbW92ZW1lbnRcclxuICBsYXplclNob3RzTW92ZW1lbnQoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5sYXplclNob3RzTW92ZW1lbnQpO1xyXG5cclxuICAvLyBhZGQgYWxpZW50IGNsdXN0ZXIgbW92ZW1lbnRcclxuICBhbGllbkNsdXN0ZXJNb3ZlbWVudChnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LmFsaWVuQ2x1c3Rlck1vdmVtZW50KTtcclxuXHJcbiAgLy8gYWxpZW4gZGVhdGggYW5kIHBvaW50c1xyXG4gIGFsaWVuRGVhdGhBbmRQb2ludHMoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5kZWF0aEFuZFBvaW50cyk7XHJcblxyXG4gIC8vIHJlc3Bhd24gYWxpZW5zXHJcbiAgcmVzcGF3bkFsaWVucyhnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LnJlc3Bhd25BbGllbnMpO1xyXG5cclxuICAvLyBhbGllbnMgc3ByaXRlIGFuaW1hdGlvblxyXG4gIGFsaWVuU3ByaXRlQW5pbWF0aW9uKFxyXG4gICAgZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5hbGllblNwcml0ZUFuaW1hdGlvbixcclxuICAgIHRpbWVzdGFtcFxyXG4gICk7XHJcblxyXG4gIC8vIGFsaWVucyBmaXJpbmcgYmFjayAoaW4gc2VsZiBkZWZlbmNlKVxyXG4gIGFsaWVuRmlyaW5nQ3ljbGUoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5hbGllbkZpcmluZ0N5Y2xlLCB0aW1lc3RhbXApO1xyXG5cclxuICAvLyBhZGQgbW92bWVudCBhbmQgY29sbGlzaW9uIHRvIGFsaWVuIGxhemVyIHNob3RzXHJcbiAgYWxpZW5MYXplclNob3RzTW92bWVudEFuZENvbGxpc2lvbkNoZWNrZXIoXHJcbiAgICBnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LmFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyLFxyXG4gICAgdGltZXN0YW1wXHJcbiAgKTtcclxuXHJcbiAgLy8gYWRkIG1vdGhlcnNoaXBcclxuICBpZiAoXHJcbiAgICB0aW1lc3RhbXAgLSBzY2VuZS5sYXN0U3Bhd25Nb3RoZXJzaGlwID5cclxuICAgIGdhbWUubW90aGVyc2hpcFNwYXduSW50ZXJ2YWwgKyA1MDAwMCAqIE1hdGgucmFuZG9tKClcclxuICApIHtcclxuICAgIGNvbnN0IG1vdGhlcnNoaXAgPSBuZXcgQWRkTW90aGVyc2hpcChnYW1lQXJlYSwgc291bmRzKTtcclxuICAgIGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QubW90aGVyc2hpcE1vdmVtZW50Lm1vdGhlcnNoaXBDdXJyZW50U291bmQgPVxyXG4gICAgICBtb3RoZXJzaGlwLm1vdGhlcnNoaXBDdXJyZW50U291bmQ7XHJcbiAgICBzY2VuZS5sYXN0U3Bhd25Nb3RoZXJzaGlwID0gdGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIG1vdGhlcnNoaXAgbW92ZW1lbnRcclxuICBtb3RoZXJzaGlwTW92ZW1lbnQoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5tb3RoZXJzaGlwTW92ZW1lbnQpO1xyXG5cclxuICBwb2ludHNVcGRhdGUoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5wb2ludHNVcGRhdGUpO1xyXG5cclxuICBpZiAoc2NlbmUuaXNBY3RpdmUpIHtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUFjdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
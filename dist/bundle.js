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
// logic for rendering the alien cluster capsulated in a single module with 2 classes
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// first class to renders a single Alien when the constructor is called.
// additionally each instance contains reference to the html div element the alien is render into
//private class used only in this module
class AddSingleAlien {
    constructor() {
        this.render();
    }
    // creates a div element gives it the appropriate class for a single alien
    render() {
        this.alien = document.createElement("div");
        this.alien.classList.add("alien");
    }
}
// second class renders the whole alien cluster when the constructor is called.
// additionally each instance contains reference to the html div element the alien cluster is render into
class AddAlienCluster {
    constructor(game) {
        this.render(game);
        this.config();
    }
    // creates a div element gives it the appropriate class for the alien cluster
    render(game) {
        this.alienCluster = document.createElement("div");
        this.alienCluster.classList.add("alien-cluster");
        for (let i = 0; i < game.maxAlienClusterSize; i++) {
            const alienInstance = new AddSingleAlien();
            const alien = alienInstance.alien;
            // visually there are 3 different types of aliens, the "if" check makes sure to split them accordingly
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
    }
    // apends the alien cluster to the screen div element
    config() {
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
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// logic for rendering the alien lazer attacks
// class that renders one lazer attack when the constructor is called
// additionally each instance contains reference to the html div element the lazer is render into
class AddAlienLazerShot {
    constructor(alien) {
        this.render(alien);
        this.config(alien);
    }
    // creates a div element gives it the appropriate class for the alien lazer attack
    render(alien) {
        // check if the alien exists ( if it is still "alive")
        // this prevents "dead" aliens from attacking beyond the grave ( wooooo, spooooky)
        if (alien === undefined) {
            return;
        }
        this.alienLazerShot = document.createElement("div");
        this.alienLazerShot.classList.add("alien-lazer-shot");
        this.alienLazerShot.y = alien.getBoundingClientRect().y;
        this.alienLazerShot.style.top = this.alienLazerShot.y + "px";
    }
    // apends the alien attack to the screen div element
    config(alien) {
        // positions the lazer attack right below the spesific alien
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
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// logic for rendering the mighty defender
// class that renders the defender when the constructor is called
// additionally each instance contains reference to the html div element the defender is render into
class AddDefender {
    constructor(player) {
        this.render(player);
        this.config();
    }
    // creates a div element gives it the appropriate class for the defender
    render(player) {
        this.defender = document.createElement("div");
        this.defender.classList.add("defender");
        this.defender.style.left = player.x + "px";
        this.defender.style.top = player.y + "px";
    }
    // apends the defender to the screen div element
    config() {
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
// logic for rendering the alien lazer attacks
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// class that renders one defender lazer attack when the constructor is called
// additionally each instance contains reference to the html div element the lazer is render into
class AddDefenderLazerShot {
    constructor(player) {
        this.render(player);
        this.config(player);
    }
    // creates a div element gives it the appropriate class for a defender lazer attack
    render(player) {
        this.lazerShot = document.createElement("div");
        this.lazerShot.classList.add("lazer-shot");
    }
    // positions the lazer right above the defender and appends it to the game screen
    config(player) {
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
// logic for rendering the alien mothership
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// class that renders one Mothership when the constructor is called
// additionally each instance contains reference to the html div element the Mothership is render into
class AddMothership {
    constructor(sounds) {
        this.render();
        this.config(sounds);
    }
    // creates a div element gives it the appropriate class for a mothership
    render() {
        this.mothership = document.createElement("div");
        this.mothership.classList.add("alien", "mothership");
    }
    // positions the mothership, gives it a random movement sound effect and appends it to the game screen
    config(sounds) {
        this.mothership.x = gameArea.offsetWidth;
        this.mothership.style.left = this.mothership.x + "px";
        this.mothership.style.top = 0 + "px";
        // gives the mothership a random sound effect
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

/***/ "./logic/addObjects/addPlayerLife.ts":
/*!*******************************************!*\
  !*** ./logic/addObjects/addPlayerLife.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPlayerLife: () => (/* binding */ AddPlayerLife)
/* harmony export */ });
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const livesCounter = document.querySelector(".lives-counter");
// class that renders one player life when the constructor is called
// additionally each instance contains reference to the html div element the defender is render into
class AddPlayerLife {
    constructor() {
        this.render();
        this.config();
    }
    // creates a div element gives it the appropriate class for the defender
    render() {
        this.playerLife = document.createElement("div");
        this.playerLife.classList.add("one-life");
    }
    // apends the defender to the screen div element
    config() {
        livesCounter.appendChild(this.playerLife);
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
// logic for rendering the defender shields capsulated in a single module with 2 classes
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// first class to renders a single shield when the constructor is called.
// additionally each instance contains reference to the html div element the alien is render into
//private class used only in this module
class AddSingleShield {
    constructor() {
        this.render();
    }
    // creates a div element gives it the appropriate class for the defender shield
    render() {
        this.singleShield = document.createElement("div");
        this.singleShield.classList.add("shield", "shield-full-hp");
    }
}
// second class renders all 4 shields when the constructor is called.
// additionally each instance contains reference to the html div element the alien cluster is render into
class AddShields {
    constructor() {
        this.render();
        this.config();
    }
    // creates a div element gives it the appropriate class for the shield field ( hey that rhymes!)
    render() {
        this.shieldField = document.createElement("div");
        this.shieldField.classList.add("shield-field");
        // loop to create 4 single shields and append each to the shield field ( hey that rhymes, for a second time, what are the odds, right?)
        for (let i = 1; i <= 4; i++) {
            const singleShieldInstance = new AddSingleShield();
            const singleShield = singleShieldInstance.singleShield;
            this.shieldField.appendChild(singleShield);
        }
    }
    // places the shields in their respective positions and renders them to the game screen
    config() {
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
// logic for checking if an alien has been hit. If yes, the alien is marked as "dead" and the player is awared points
// how do we know if an alien is dead you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information
// dead aliens are still on the screen but are not visible to the player, nor can they be interacted with
function alienDeathAndPoints({ isCollision, sounds, scene, }) {
    // selects all alien HTML div elements and stores them in an array
    let aliens = document.querySelectorAll(".alien");
    // loops through the alien array to check if any alien was hit
    aliens.forEach((alien) => {
        // selects all defender lazer attack HTML div elements and stores them in an array
        let lazerShots = document.querySelectorAll(".lazer-shot");
        // loops loops through the lazer shots to check if any of the aliens were hit
        // if any are hit a death animation and sound are played and the appropriate amount of poitns are given to the player
        // the lazer attack is removed after hiting an alien
        lazerShots.forEach((lazerShot) => {
            // checks for collision between the alien and the defender attack. For more info see the isCollision file
            if (isCollision(lazerShot, alien) &&
                alien.classList.contains("dead-alien") === false) {
                // gives the alien a death animation which lasts for 50 miliseconds and then makes the alien "dead"
                alien.style.backgroundImage =
                    "url('./images/aliens/death-animation.jpg')";
                setTimeout(() => {
                    alien.classList.add("dead-alien");
                }, 50);
                // removing the defender lazer attack from the game screen
                lazerShot.remove();
                // death sound effect
                sounds.alienDeathSound.play();
                // points for the player
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
// logic for choosing when an alien should attack
function alienFiringCycle({ scene, game, AddAlienLazerShot, }, timestamp) {
    // selects all alien HTML div elements and stores them in an array
    const aliens = document.querySelectorAll(".alien");
    // filters the dead aliens
    const remainingAliens = Array.from(aliens).filter((alien) => alien.classList.contains("dead-alien") === false);
    // picks a random postion to make sure a random alien fires every time
    const randomAlienPosition = Math.round(remainingAliens.length * Math.random());
    // there is an interval set between alien attacks
    // the if checks if the interval has expired before appending an alien attack to the game screen
    if (timestamp - scene.lastAlienLazerShot > game.alienFireInterval) {
        // calls the AddAlienLazerShot class to append an alien attack at a random alien
        new AddAlienLazerShot(remainingAliens[randomAlienPosition]);
        // sets the new interval between alien attacks, otherwise the aliens will fire constantly (which is somewhat hilarious, but will almost instantly crash the game)
        scene.lastAlienLazerShot = timestamp;
    }
}


/***/ }),

/***/ "./logic/animations/alienLazerShotSprites.ts":
/*!***************************************************!*\
  !*** ./logic/animations/alienLazerShotSprites.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alienLazerShotSprites: () => (/* binding */ alienLazerShotSprites)
/* harmony export */ });
// logic for animating the alien lazer attack
// the way the attacks are animated is as follows -> each frame the game checks the background spire and the sprite change interval ( located in the "game" object) and changes the sprite simulating movement
function alienLazerShotSprites(timestamp, scene, game, alienLazerShot) {
    if (timestamp - scene.lastAlienLazerShotSpriteInterval >
        game.alienLazerShotSpriteChangeInterval) {
        // check the current sprite and adjusts is according to the sprite attack interval
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
        // adjusts the sprite interval, this makes sure tha animation does not occur too often
        scene.lastAlienLazerShotSpriteInterval = timestamp;
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
// logic for animation the aliens
// the way the aliens are animated is as follows -> each frame the game checks the background sprite and the sprite change interval ( located in the "game" object) and changes the sprite simulating movement
function alienSpriteAnimation({ scene, game }, timestamp) {
    // selects all alien HTML div elements and saves them in an array
    const aliens = document.querySelectorAll(".alien");
    if (timestamp - scene.lastAlienSpriteInterval >
        game.alienSpriteChangeInterval) {
        // loops through the alien array and applies the appropriate animation for the 40pts aliens
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
            // loops through the alien array and applies the appropriate animation for the 20pts aliens
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
            // loops through the alien array and applies the appropriate animation for the 10pts aliens
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
            // adjusts the sprite interval, this makes sure tha animation does not occur too often
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
// logic for checking if an alien has hit the defender
// how do we know if the defender has been hit you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information
// the name of the func is quite the mouthful I know
function defenderAlienLazerShotCollisionChecker(defender, isCollision, alienLazerShot, player, gameArea, gameOver, scene) {
    // the func reveals the game over screen and stops the game until the player decides to restart
    function gameOverAction(gameOver) {
        scene.isActive = false;
        gameOver.classList.remove("hidden");
    }
    // checks for collision between the defender and an alien attack
    if (isCollision(defender, alienLazerShot)) {
        // sellects the remaining lives
        let lives = document.querySelectorAll(".one-life");
        // removes the alien attack form the game screen
        alienLazerShot.remove();
        // if the players still has lives one is removed and the position of the defender is reset to the starting one
        if (lives.length > 1) {
            player.x = 100;
            player.y = gameArea.offsetHeight - 50;
            defender.style.left = player.x + "px";
            defender.style.top = player.y + "px";
            lives[lives.length - 1].remove();
        }
        else {
            // if there are no more lives the game is over and the player is given the options to start again
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
// logic for checking if an alien has hit one of the defender's shields
// how do we know if a shield has been hit you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information
// the name of the func is quite the mouthful I know
function shieldAlienLazerShotCollisionChecker(alienLazerShot, isCollision) {
    // selects all of the shield HTML elements and stores them in an array
    let shields = document.querySelectorAll(".shield");
    // loops through the shield elements and check if any has been hit
    shields.forEach((shield) => {
        // shields have 3 "lives", each hit removes one and damages them which is represented by changing the sprite with a more damaged version
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
                // when the shield is destroyed it leaves a "wreck" and cannot stop alien attacks
                shield.classList.add("shield-destroyed");
            }
            // removes alien attack after it has hit the shield
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
// module hold objects that contain general information about the game state ( but not about the player, his state is in the player folder)
// general state info about the game state
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
    maxPlayerLives: 5,
};
// general state info about scene
// most of the values start at 0 but are updated through the game
let scene = {
    score: 0,
    lastAlienSpriteInterval: 0,
    lastAlienLazerShotSpriteInterval: 0,
    lastAlienLazerShot: 0,
    lastSpawnMothership: 0,
    isActive: true, // checks if the game is still active, if set to false the game will stop
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
// logic for moving the alien cluster on the game screen
function alienClusterMovement({ game, gameArea, }) {
    // sellets the alien cluster HTML div element
    // the HTML element will always exist this is why a non-null assertion operator (!) is used
    const alienCluster = document.querySelector(".alien-cluster");
    // determents the alien cluster movement direction
    if (game.alienPos + alienCluster.offsetWidth > gameArea.offsetWidth - 100) {
        game.alienDirection = -game.speed;
    }
    else if (game.alienPos < 100) {
        game.alienDirection = game.speed;
    }
    // moves the alien cluster according the the alien direction
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
/* harmony import */ var _animations_alienLazerShotSprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/alienLazerShotSprites */ "./logic/animations/alienLazerShotSprites.ts");

// the name of the func is quite the mouthful I know
function alienLazerShotsMovmentAndCollisionChecker({ game, scene, player, gameArea, isCollision, defenderAlienLazerShotCollisionChecker, shieldAlienLazerShotCollisionChecker, gameOver, }, timestamp) {
    // the HTML element will always exist this is why a non-null assertion operator (!) is used
    const defender = document.querySelector(".defender");
    // selects all alien attack HTML Div elements
    let alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
    // loops through the alien attacks
    alienLazerShots.forEach((alienLazerShot) => {
        alienLazerShot.y += game.speed;
        alienLazerShot.style.top = alienLazerShot.y + "px";
        // animates the alien attack
        (0,_animations_alienLazerShotSprites__WEBPACK_IMPORTED_MODULE_0__.alienLazerShotSprites)(timestamp, scene, game, alienLazerShot);
        // removes the alien attack from the dom when it reaches the end of the game screen
        if (alienLazerShot.y + alienLazerShot.offsetHeight >
            gameArea.offsetHeight - alienLazerShot.offsetHeight / 2) {
            alienLazerShot.remove();
        }
        // checks if the alien attack has hit the defender
        defenderAlienLazerShotCollisionChecker(defender, isCollision, alienLazerShot, player, gameArea, gameOver, scene);
        // checks if the alien attack has hit a shield
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
// logic for moving the defender attacks on the game screen
function lazerShotsMovement({ game, isCollision, }) {
    // selects all of the defenders attacks and stores them in an array
    const lazerShots = document.querySelectorAll(".lazer-shot");
    //loops through the attacks
    lazerShots.forEach((lazerShot) => {
        // moves the attack by changing it's "y" position
        lazerShot.y -= game.speed;
        lazerShot.style.top = lazerShot.y + "px";
        // if the attack reaches the end of the screen it is removed
        if (lazerShot.y + lazerShot.offsetHeight < 0) {
            lazerShot.remove();
        }
        // if the defender's lazer shot hits a shield, the shot is removed without damaging the shield
        const shields = document.querySelectorAll(".shield");
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
// logic for moving the mothership on the game screen
function mothershipMovement({ game, mothershipCurrentSound, }) {
    // selects all mothership HTML div elements on the screen and stores them in an array
    const motherships = document.querySelectorAll(".mothership");
    // loops through the motherships ( there is usually only one)
    motherships.forEach((mothership) => {
        //moves the mothership on the game screen
        mothership.x -= game.speed;
        mothership.style.left = mothership.x + "px";
        // if the mothership is alive add sound to the movement
        if (mothership.classList.contains("dead-alien") === false) {
            mothershipCurrentSound.play();
        }
        // removes the mothership from the DOM if it reaches the end of the screen
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
// logic for moving the mothership on the game screen
function playerMovement({ player }) {
    // the HTML element will always exist this is why a non-null assertion operator (!) is used
    const defender = document.querySelector(".defender");
    //moves the mothership on the game screen
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
// module hold object that contain general information about the player state.
// the HTML element will always exist this is why a non-null assertion operator (!) is used
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
// logic for setting up the player controlls
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
// object that will hold all of player controls -> left and right arrows and the spacebar
let keys = {};
// checks if the player is pressing any of the controls
function onKeyDown(e) {
    keys[e.code] = true;
}
// checks if the player is pressing any of the controls
function onKeyUp(e) {
    keys[e.code] = false;
}
// movement controlls
function playerMovementControlls({ player, game, gameArea, }) {
    // if the player is pressing or holding the left arrow, move the player to the left
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.playerMovementMultiplier;
    }
    // if the player is pressing or holding the left arrow, move the player to the right
    if (keys.ArrowRight && player.x + player.width + 20 < gameArea.offsetWidth) {
        player.x += game.speed * game.playerMovementMultiplier;
    }
}
// shooting controlls
function playerShootingControlls({ player, game, sounds, AddDefenderLazerShot, }, timestamp) {
    // if the player is pressing the spacebar render a lazer attack and create the appropriate sound
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
/* harmony import */ var _addObjects_addPlayerLife__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addObjects/addPlayerLife */ "./logic/addObjects/addPlayerLife.ts");

// logic for updating the player points
function pointsUpdate({ points, scene, game, }) {
    points.textContent = scene.score.toString();
    const lives = document.querySelectorAll(".one-life");
    // for every 1000 points the player is awared an extra life
    if (scene.score / 1 >= game.extraLivesCounter &&
        lives.length <= game.maxPlayerLives) {
        // the HTML element will always exist this is why a non-null assertion operator (!) is used
        // const livesCounter = document.querySelector(
        //   ".lives-counter"
        // )! as HTMLDivElement;
        // const live = document.createElement("div");
        // live.classList.add("one-live");
        // livesCounter.appendChild(live);
        new _addObjects_addPlayerLife__WEBPACK_IMPORTED_MODULE_0__.AddPlayerLife();
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
        live.classList.add("one-life");
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
    const lives = document.querySelectorAll(".one-life");
    lives.forEach((life) => life.remove());
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
        const mothership = new _addObjects_addMothership__WEBPACK_IMPORTED_MODULE_2__.AddMothership(_sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUVwRSxtRUFBWSxDQUFDLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXhELElBQUksK0RBQUssQ0FBQyxRQUFRLEVBQUU7UUFDbEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRBbGllbkNsdXN0ZXIudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZEFsaWVuTGF6ZXJTaG90LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGREZWZlbmRlci50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FkZE9iamVjdHMvYWRkRGVmZW5kZXJMYXplclNob3QudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZE1vdGhlcnNoaXAudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZFBsYXllckxpZmUudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZFNoaWVsZHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hbGllbkRlYXRoQW5kUG9pbnRzL2FsaWVuRGVhdGhBbmRQb2ludHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hbGllbkZpcmluZ0N5Y2xlL2FsaWVuRmlyaW5nQ3ljbGUudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hbmltYXRpb25zL2FsaWVuTGF6ZXJTaG90U3ByaXRlcy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FuaW1hdGlvbnMvYWxpZW5TcHJpdGVzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvY29sbGlzaW9uQ2hlY2tlci9kZWZlbmRlckFsaWVuTGF6ZXJTaG90LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvY29sbGlzaW9uQ2hlY2tlci9zaGllbGRBbGllbkxhemVyU2hvdC50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2dlbmVyYWxHYW1lSW5mby9nZW5lcmFsSW5mby50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L2FsaWVuQ2x1c3Rlci50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L2FsaWVuTGF6ZXJTaG90cy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L2xhemVyU2hvdHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9vYmplY3RNb3ZlbWVudC9tb3RoZXJzaGlwLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvcGxheWVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvcGxheWVyL3BsYXllci50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3BsYXllci9wbGF5ZXJNb3ZlbWVudENvbnRyb2xscy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3BvaW50cy9wb2ludHNVcGRhdGUudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9yZXNwd2FuL2FsaWVucy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3NvdW5kcy9zb3VuZHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy91dGlsL3V0aWxpdHlGdW5jcy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciByZW5kZXJpbmcgdGhlIGFsaWVuIGNsdXN0ZXIgY2Fwc3VsYXRlZCBpbiBhIHNpbmdsZSBtb2R1bGUgd2l0aCAyIGNsYXNzZXNcclxuXHJcbi8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBmaXJzdCBjbGFzcyB0byByZW5kZXJzIGEgc2luZ2xlIEFsaWVuIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBpcyByZW5kZXIgaW50b1xyXG4vL3ByaXZhdGUgY2xhc3MgdXNlZCBvbmx5IGluIHRoaXMgbW9kdWxlXHJcbmNsYXNzIEFkZFNpbmdsZUFsaWVuIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2F5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yIGlzIHVzZWRcclxuICBhbGllbiE6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIGEgc2luZ2xlIGFsaWVuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFsaWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuYWxpZW4uY2xhc3NMaXN0LmFkZChcImFsaWVuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gc2Vjb25kIGNsYXNzIHJlbmRlcnMgdGhlIHdob2xlIGFsaWVuIGNsdXN0ZXIgd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkLlxyXG4vLyBhZGRpdGlvbmFsbHkgZWFjaCBpbnN0YW5jZSBjb250YWlucyByZWZlcmVuY2UgdG8gdGhlIGh0bWwgZGl2IGVsZW1lbnQgdGhlIGFsaWVuIGNsdXN0ZXIgaXMgcmVuZGVyIGludG9cclxuZXhwb3J0IGNsYXNzIEFkZEFsaWVuQ2x1c3RlciB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIGFsaWVuQ2x1c3RlciE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihnYW1lOiBJR2FtZU9iamVjdCkge1xyXG4gICAgdGhpcy5yZW5kZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmNvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50IGdpdmVzIGl0IHRoZSBhcHByb3ByaWF0ZSBjbGFzcyBmb3IgdGhlIGFsaWVuIGNsdXN0ZXJcclxuICBwcml2YXRlIHJlbmRlcihnYW1lOiBJR2FtZU9iamVjdCkge1xyXG4gICAgdGhpcy5hbGllbkNsdXN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5hbGllbkNsdXN0ZXIuY2xhc3NMaXN0LmFkZChcImFsaWVuLWNsdXN0ZXJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLm1heEFsaWVuQ2x1c3RlclNpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBhbGllbkluc3RhbmNlID0gbmV3IEFkZFNpbmdsZUFsaWVuKCk7XHJcbiAgICAgIGNvbnN0IGFsaWVuID0gYWxpZW5JbnN0YW5jZS5hbGllbjtcclxuXHJcbiAgICAgIC8vIHZpc3VhbGx5IHRoZXJlIGFyZSAzIGRpZmZlcmVudCB0eXBlcyBvZiBhbGllbnMsIHRoZSBcImlmXCIgY2hlY2sgbWFrZXMgc3VyZSB0byBzcGxpdCB0aGVtIGFjY29yZGluZ2x5XHJcbiAgICAgIGlmIChpIDwgMTEpIHtcclxuICAgICAgICBhbGllbi5jbGFzc0xpc3QuYWRkKFwiYWxpZW4tNDBwdHNcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA8IDMzKSB7XHJcbiAgICAgICAgYWxpZW4uY2xhc3NMaXN0LmFkZChcImFsaWVuLTIwcHRzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsaWVuLmNsYXNzTGlzdC5hZGQoXCJhbGllbi0xMHB0c1wiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFsaWVuQ2x1c3Rlci5hcHBlbmRDaGlsZChhbGllbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBhcGVuZHMgdGhlIGFsaWVuIGNsdXN0ZXIgdG8gdGhlIHNjcmVlbiBkaXYgZWxlbWVudFxyXG4gIHByaXZhdGUgY29uZmlnKCkge1xyXG4gICAgdGhpcy5hbGllbkNsdXN0ZXIuc3R5bGUudG9wID0gZ2FtZUFyZWEub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgdGhpcy5hbGllbkNsdXN0ZXIuc3R5bGUudG9wID0gMCArIFwicHhcIjtcclxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKHRoaXMuYWxpZW5DbHVzdGVyKTtcclxuICB9XHJcbn1cclxuIiwiICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbmNvbnN0IGdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWFyZWFcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgYWxpZW4gbGF6ZXIgYXR0YWNrc1xyXG5cclxuLy8gY2xhc3MgdGhhdCByZW5kZXJzIG9uZSBsYXplciBhdHRhY2sgd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgbGF6ZXIgaXMgcmVuZGVyIGludG9cclxuZXhwb3J0IGNsYXNzIEFkZEFsaWVuTGF6ZXJTaG90IHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgYWxpZW5MYXplclNob3QhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoYWxpZW46IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJlbmRlcihhbGllbik7XHJcbiAgICB0aGlzLmNvbmZpZyhhbGllbik7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciB0aGUgYWxpZW4gbGF6ZXIgYXR0YWNrXHJcbiAgcHJpdmF0ZSByZW5kZXIoYWxpZW46IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvLyBjaGVjayBpZiB0aGUgYWxpZW4gZXhpc3RzICggaWYgaXQgaXMgc3RpbGwgXCJhbGl2ZVwiKVxyXG4gICAgLy8gdGhpcyBwcmV2ZW50cyBcImRlYWRcIiBhbGllbnMgZnJvbSBhdHRhY2tpbmcgYmV5b25kIHRoZSBncmF2ZSAoIHdvb29vbywgc3Bvb29va3kpXHJcbiAgICBpZiAoYWxpZW4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbGllbkxhemVyU2hvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90LmNsYXNzTGlzdC5hZGQoXCJhbGllbi1sYXplci1zaG90XCIpO1xyXG4gICAgdGhpcy5hbGllbkxhemVyU2hvdC55ID0gYWxpZW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuICAgIHRoaXMuYWxpZW5MYXplclNob3Quc3R5bGUudG9wID0gdGhpcy5hbGllbkxhemVyU2hvdC55ICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgLy8gYXBlbmRzIHRoZSBhbGllbiBhdHRhY2sgdG8gdGhlIHNjcmVlbiBkaXYgZWxlbWVudFxyXG4gIHByaXZhdGUgY29uZmlnKGFsaWVuOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgLy8gcG9zaXRpb25zIHRoZSBsYXplciBhdHRhY2sgcmlnaHQgYmVsb3cgdGhlIHNwZXNpZmljIGFsaWVuXHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90LnN0eWxlLmxlZnQgPVxyXG4gICAgICBhbGllbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54ICsgYWxpZW4ub2Zmc2V0V2lkdGggLyAyIC0gMTIgKyBcInB4XCI7XHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLmFsaWVuTGF6ZXJTaG90KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcbi8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVuZGVyaW5nIHRoZSBtaWdodHkgZGVmZW5kZXJcclxuXHJcbi8vIGNsYXNzIHRoYXQgcmVuZGVycyB0aGUgZGVmZW5kZXIgd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgZGVmZW5kZXIgaXMgcmVuZGVyIGludG9cclxuZXhwb3J0IGNsYXNzIEFkZERlZmVuZGVyIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgZGVmZW5kZXIhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICB0aGlzLnJlbmRlcihwbGF5ZXIpO1xyXG4gICAgdGhpcy5jb25maWcoKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBkZWZlbmRlclxyXG4gIHByaXZhdGUgcmVuZGVyKHBsYXllcjogSVBsYXllcikge1xyXG4gICAgdGhpcy5kZWZlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmRlZmVuZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWZlbmRlclwiKTtcclxuICAgIHRoaXMuZGVmZW5kZXIuc3R5bGUubGVmdCA9IHBsYXllci54ICsgXCJweFwiO1xyXG4gICAgdGhpcy5kZWZlbmRlci5zdHlsZS50b3AgPSBwbGF5ZXIueSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIC8vIGFwZW5kcyB0aGUgZGVmZW5kZXIgdG8gdGhlIHNjcmVlbiBkaXYgZWxlbWVudFxyXG4gIHByaXZhdGUgY29uZmlnKCkge1xyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5kZWZlbmRlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYXllclwiO1xyXG5cclxuLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgYWxpZW4gbGF6ZXIgYXR0YWNrc1xyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGNsYXNzIHRoYXQgcmVuZGVycyBvbmUgZGVmZW5kZXIgbGF6ZXIgYXR0YWNrIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZFxyXG4vLyBhZGRpdGlvbmFsbHkgZWFjaCBpbnN0YW5jZSBjb250YWlucyByZWZlcmVuY2UgdG8gdGhlIGh0bWwgZGl2IGVsZW1lbnQgdGhlIGxhemVyIGlzIHJlbmRlciBpbnRvXHJcbmV4cG9ydCBjbGFzcyBBZGREZWZlbmRlckxhemVyU2hvdCB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIGxhemVyU2hvdCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgIHRoaXMucmVuZGVyKHBsYXllcik7XHJcbiAgICB0aGlzLmNvbmZpZyhwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50IGdpdmVzIGl0IHRoZSBhcHByb3ByaWF0ZSBjbGFzcyBmb3IgYSBkZWZlbmRlciBsYXplciBhdHRhY2tcclxuICBwcml2YXRlIHJlbmRlcihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgIHRoaXMubGF6ZXJTaG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMubGF6ZXJTaG90LmNsYXNzTGlzdC5hZGQoXCJsYXplci1zaG90XCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gcG9zaXRpb25zIHRoZSBsYXplciByaWdodCBhYm92ZSB0aGUgZGVmZW5kZXIgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGdhbWUgc2NyZWVuXHJcbiAgcHJpdmF0ZSBjb25maWcocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICB0aGlzLmxhemVyU2hvdC55ID0gcGxheWVyLnkgLSBwbGF5ZXIuaGVpZ2h0IC0gMjU7XHJcbiAgICB0aGlzLmxhemVyU2hvdC5zdHlsZS50b3AgPSB0aGlzLmxhemVyU2hvdC55ICsgXCJweFwiO1xyXG4gICAgdGhpcy5sYXplclNob3Quc3R5bGUubGVmdCA9IHBsYXllci54ICsgcGxheWVyLndpZHRoIC8gMiAtIDEyICsgXCJweFwiO1xyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5sYXplclNob3QpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU291bmRzIH0gZnJvbSBcIi4uL21vZGVscy9zb3VuZHNcIjtcclxuXHJcbi8vIGxvZ2ljIGZvciByZW5kZXJpbmcgdGhlIGFsaWVuIG1vdGhlcnNoaXBcclxuXHJcbi8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBjbGFzcyB0aGF0IHJlbmRlcnMgb25lIE1vdGhlcnNoaXAgd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgTW90aGVyc2hpcCBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkTW90aGVyc2hpcCB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudHMgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBtb3RoZXJzaGlwITogSFRNTERpdkVsZW1lbnQ7XHJcbiAgbW90aGVyc2hpcEN1cnJlbnRTb3VuZCE6IEhUTUxBdWRpb0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNvdW5kczogSVNvdW5kcykge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuY29uZmlnKHNvdW5kcyk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciBhIG1vdGhlcnNoaXBcclxuICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgIHRoaXMubW90aGVyc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLm1vdGhlcnNoaXAuY2xhc3NMaXN0LmFkZChcImFsaWVuXCIsIFwibW90aGVyc2hpcFwiKTtcclxuICB9XHJcblxyXG4gIC8vIHBvc2l0aW9ucyB0aGUgbW90aGVyc2hpcCwgZ2l2ZXMgaXQgYSByYW5kb20gbW92ZW1lbnQgc291bmQgZWZmZWN0IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBnYW1lIHNjcmVlblxyXG4gIHByaXZhdGUgY29uZmlnKHNvdW5kczogSVNvdW5kcykge1xyXG4gICAgdGhpcy5tb3RoZXJzaGlwLnggPSBnYW1lQXJlYS5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMubW90aGVyc2hpcC5zdHlsZS5sZWZ0ID0gdGhpcy5tb3RoZXJzaGlwLnggKyBcInB4XCI7XHJcbiAgICB0aGlzLm1vdGhlcnNoaXAuc3R5bGUudG9wID0gMCArIFwicHhcIjtcclxuXHJcbiAgICAvLyBnaXZlcyB0aGUgbW90aGVyc2hpcCBhIHJhbmRvbSBzb3VuZCBlZmZlY3RcclxuICAgIGlmIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwKSB7XHJcbiAgICAgIHRoaXMubW90aGVyc2hpcEN1cnJlbnRTb3VuZCA9IHNvdW5kcy5tb3RoZXJzaGlwU291bmRIaWdoUGl0Y2g7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdGhlcnNoaXBDdXJyZW50U291bmQgPSBzb3VuZHMubW90aGVyc2hpcFNvdW5kTG93UGl0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5tb3RoZXJzaGlwKTtcclxuICB9XHJcbn1cclxuIiwiLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBsaXZlc0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmxpdmVzLWNvdW50ZXJcIlxyXG4pISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGNsYXNzIHRoYXQgcmVuZGVycyBvbmUgcGxheWVyIGxpZmUgd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgZGVmZW5kZXIgaXMgcmVuZGVyIGludG9cclxuZXhwb3J0IGNsYXNzIEFkZFBsYXllckxpZmUge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBwbGF5ZXJMaWZlITogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuY29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciB0aGUgZGVmZW5kZXJcclxuICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgIHRoaXMucGxheWVyTGlmZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnBsYXllckxpZmUuY2xhc3NMaXN0LmFkZChcIm9uZS1saWZlXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gYXBlbmRzIHRoZSBkZWZlbmRlciB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICBsaXZlc0NvdW50ZXIuYXBwZW5kQ2hpbGQodGhpcy5wbGF5ZXJMaWZlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgZGVmZW5kZXIgc2hpZWxkcyBjYXBzdWxhdGVkIGluIGEgc2luZ2xlIG1vZHVsZSB3aXRoIDIgY2xhc3Nlc1xyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGZpcnN0IGNsYXNzIHRvIHJlbmRlcnMgYSBzaW5nbGUgc2hpZWxkIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBpcyByZW5kZXIgaW50b1xyXG4vL3ByaXZhdGUgY2xhc3MgdXNlZCBvbmx5IGluIHRoaXMgbW9kdWxlXHJcbmNsYXNzIEFkZFNpbmdsZVNoaWVsZCB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIHNpbmdsZVNoaWVsZCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciB0aGUgZGVmZW5kZXIgc2hpZWxkXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnNpbmdsZVNoaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnNpbmdsZVNoaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkXCIsIFwic2hpZWxkLWZ1bGwtaHBcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBzZWNvbmQgY2xhc3MgcmVuZGVycyBhbGwgNCBzaGllbGRzIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBjbHVzdGVyIGlzIHJlbmRlciBpbnRvXHJcbmV4cG9ydCBjbGFzcyBBZGRTaGllbGRzIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgc2hpZWxkRmllbGQhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5jb25maWcoKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBzaGllbGQgZmllbGQgKCBoZXkgdGhhdCByaHltZXMhKVxyXG4gIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtZmllbGRcIik7XHJcblxyXG4gICAgLy8gbG9vcCB0byBjcmVhdGUgNCBzaW5nbGUgc2hpZWxkcyBhbmQgYXBwZW5kIGVhY2ggdG8gdGhlIHNoaWVsZCBmaWVsZCAoIGhleSB0aGF0IHJoeW1lcywgZm9yIGEgc2Vjb25kIHRpbWUsIHdoYXQgYXJlIHRoZSBvZGRzLCByaWdodD8pXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc2luZ2xlU2hpZWxkSW5zdGFuY2UgPSBuZXcgQWRkU2luZ2xlU2hpZWxkKCk7XHJcbiAgICAgIGNvbnN0IHNpbmdsZVNoaWVsZCA9IHNpbmdsZVNoaWVsZEluc3RhbmNlLnNpbmdsZVNoaWVsZDtcclxuICAgICAgdGhpcy5zaGllbGRGaWVsZC5hcHBlbmRDaGlsZChzaW5nbGVTaGllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcGxhY2VzIHRoZSBzaGllbGRzIGluIHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb25zIGFuZCByZW5kZXJzIHRoZW0gdG8gdGhlIGdhbWUgc2NyZWVuXHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLnN0eWxlLndpZHRoID0gZ2FtZUFyZWEub2Zmc2V0V2lkdGggLyAxLjI1ICsgXCJweFwiO1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZC5zdHlsZS50b3AgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSAyMDAgKyBcInB4XCI7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLnN0eWxlLmxlZnQgPSBnYW1lQXJlYS5vZmZzZXRXaWR0aCAvIDEwICsgXCJweFwiO1xyXG5cclxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKHRoaXMuc2hpZWxkRmllbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IElJc0NvbGxpc2lvbiB9IGZyb20gXCIuLi9tb2RlbHMvaXNDb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgSVNvdW5kcyB9IGZyb20gXCIuLi9tb2RlbHMvc291bmRzXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgY2hlY2tpbmcgaWYgYW4gYWxpZW4gaGFzIGJlZW4gaGl0LiBJZiB5ZXMsIHRoZSBhbGllbiBpcyBtYXJrZWQgYXMgXCJkZWFkXCIgYW5kIHRoZSBwbGF5ZXIgaXMgYXdhcmVkIHBvaW50c1xyXG4vLyBob3cgZG8gd2Uga25vdyBpZiBhbiBhbGllbiBpcyBkZWFkIHlvdSBhc2sgPyAtPiBsb2dpYyBpcyB0aGUgZm9sbG93aW5nLCB3ZSB0YWtlIHRoZSAyIEhUTUwgZWxlbWVudHMgKCBib3RoIGFyZSBkaXZzKSBhbmQgY2hlY2sgaWYgb25lIGhhcyBlbnRlcmVkIHRoZSBwb3NpdGlvbiBvZiB0aGUgb3RoZXIgdXNpbmcgdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbi8vIGNoZWNrIHRoZSBpc0NvbGxpc2lvbiBtZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb25cclxuXHJcbi8vIGRlYWQgYWxpZW5zIGFyZSBzdGlsbCBvbiB0aGUgc2NyZWVuIGJ1dCBhcmUgbm90IHZpc2libGUgdG8gdGhlIHBsYXllciwgbm9yIGNhbiB0aGV5IGJlIGludGVyYWN0ZWQgd2l0aFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuRGVhdGhBbmRQb2ludHMoe1xyXG4gIGlzQ29sbGlzaW9uLFxyXG4gIHNvdW5kcyxcclxuICBzY2VuZSxcclxufToge1xyXG4gIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb247XHJcbiAgc291bmRzOiBJU291bmRzO1xyXG4gIHNjZW5lOiBJU2NlbmVPYmplY3Q7XHJcbn0pIHtcclxuICAvLyBzZWxlY3RzIGFsbCBhbGllbiBIVE1MIGRpdiBlbGVtZW50cyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBsZXQgYWxpZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyBsb29wcyB0aHJvdWdoIHRoZSBhbGllbiBhcnJheSB0byBjaGVjayBpZiBhbnkgYWxpZW4gd2FzIGhpdFxyXG4gIGFsaWVucy5mb3JFYWNoKChhbGllbikgPT4ge1xyXG4gICAgLy8gc2VsZWN0cyBhbGwgZGVmZW5kZXIgbGF6ZXIgYXR0YWNrIEhUTUwgZGl2IGVsZW1lbnRzIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gICAgbGV0IGxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5sYXplci1zaG90XCJcclxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgLy8gbG9vcHMgbG9vcHMgdGhyb3VnaCB0aGUgbGF6ZXIgc2hvdHMgdG8gY2hlY2sgaWYgYW55IG9mIHRoZSBhbGllbnMgd2VyZSBoaXRcclxuICAgIC8vIGlmIGFueSBhcmUgaGl0IGEgZGVhdGggYW5pbWF0aW9uIGFuZCBzb3VuZCBhcmUgcGxheWVkIGFuZCB0aGUgYXBwcm9wcmlhdGUgYW1vdW50IG9mIHBvaXRucyBhcmUgZ2l2ZW4gdG8gdGhlIHBsYXllclxyXG4gICAgLy8gdGhlIGxhemVyIGF0dGFjayBpcyByZW1vdmVkIGFmdGVyIGhpdGluZyBhbiBhbGllblxyXG4gICAgbGF6ZXJTaG90cy5mb3JFYWNoKChsYXplclNob3QpID0+IHtcclxuICAgICAgLy8gY2hlY2tzIGZvciBjb2xsaXNpb24gYmV0d2VlbiB0aGUgYWxpZW4gYW5kIHRoZSBkZWZlbmRlciBhdHRhY2suIEZvciBtb3JlIGluZm8gc2VlIHRoZSBpc0NvbGxpc2lvbiBmaWxlXHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0NvbGxpc2lvbihsYXplclNob3QsIGFsaWVuKSAmJlxyXG4gICAgICAgIGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImRlYWQtYWxpZW5cIikgPT09IGZhbHNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIGdpdmVzIHRoZSBhbGllbiBhIGRlYXRoIGFuaW1hdGlvbiB3aGljaCBsYXN0cyBmb3IgNTAgbWlsaXNlY29uZHMgYW5kIHRoZW4gbWFrZXMgdGhlIGFsaWVuIFwiZGVhZFwiXHJcbiAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZGVhdGgtYW5pbWF0aW9uLmpwZycpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhbGllbi5jbGFzc0xpc3QuYWRkKFwiZGVhZC1hbGllblwiKTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgLy8gcmVtb3ZpbmcgdGhlIGRlZmVuZGVyIGxhemVyIGF0dGFjayBmcm9tIHRoZSBnYW1lIHNjcmVlblxyXG4gICAgICAgIGxhemVyU2hvdC5yZW1vdmUoKTtcclxuICAgICAgICAvLyBkZWF0aCBzb3VuZCBlZmZlY3RcclxuICAgICAgICBzb3VuZHMuYWxpZW5EZWF0aFNvdW5kLnBsYXkoKTtcclxuXHJcbiAgICAgICAgLy8gcG9pbnRzIGZvciB0aGUgcGxheWVyXHJcbiAgICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTQwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSA0MDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTIwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAyMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTEwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAxMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcIm1vdGhlcnNoaXBcIikpIHtcclxuICAgICAgICAgIHNjZW5lLnNjb3JlICs9IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0LCBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgY2hvb3Npbmcgd2hlbiBhbiBhbGllbiBzaG91bGQgYXR0YWNrXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxpZW5GaXJpbmdDeWNsZShcclxuICB7XHJcbiAgICBzY2VuZSxcclxuICAgIGdhbWUsXHJcbiAgICBBZGRBbGllbkxhemVyU2hvdCxcclxuICB9OiB7XHJcbiAgICBzY2VuZTogSVNjZW5lT2JqZWN0O1xyXG4gICAgZ2FtZTogSUdhbWVPYmplY3Q7XHJcbiAgICBBZGRBbGllbkxhemVyU2hvdDogYW55OyAvL1RPRE8gY2hlY2sgd2h5IGl0IHdvdWxkIG5vdCBhY2NwZXQgdHlwZW9mIEFkZEFsaWVuTGF6ZXJTaG90XHJcbiAgfSxcclxuICB0aW1lc3RhbXA6IG51bWJlclxyXG4pIHtcclxuICAvLyBzZWxlY3RzIGFsbCBhbGllbiBIVE1MIGRpdiBlbGVtZW50cyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBhbGllbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFsaWVuXCIpO1xyXG5cclxuICAvLyBmaWx0ZXJzIHRoZSBkZWFkIGFsaWVuc1xyXG4gIGNvbnN0IHJlbWFpbmluZ0FsaWVucyA9IEFycmF5LmZyb20oYWxpZW5zKS5maWx0ZXIoXHJcbiAgICAoYWxpZW4pID0+IGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImRlYWQtYWxpZW5cIikgPT09IGZhbHNlXHJcbiAgKTtcclxuICAvLyBwaWNrcyBhIHJhbmRvbSBwb3N0aW9uIHRvIG1ha2Ugc3VyZSBhIHJhbmRvbSBhbGllbiBmaXJlcyBldmVyeSB0aW1lXHJcbiAgY29uc3QgcmFuZG9tQWxpZW5Qb3NpdGlvbiA9IE1hdGgucm91bmQoXHJcbiAgICByZW1haW5pbmdBbGllbnMubGVuZ3RoICogTWF0aC5yYW5kb20oKVxyXG4gICk7XHJcbiAgLy8gdGhlcmUgaXMgYW4gaW50ZXJ2YWwgc2V0IGJldHdlZW4gYWxpZW4gYXR0YWNrc1xyXG4gIC8vIHRoZSBpZiBjaGVja3MgaWYgdGhlIGludGVydmFsIGhhcyBleHBpcmVkIGJlZm9yZSBhcHBlbmRpbmcgYW4gYWxpZW4gYXR0YWNrIHRvIHRoZSBnYW1lIHNjcmVlblxyXG4gIGlmICh0aW1lc3RhbXAgLSBzY2VuZS5sYXN0QWxpZW5MYXplclNob3QgPiBnYW1lLmFsaWVuRmlyZUludGVydmFsKSB7XHJcbiAgICAvLyBjYWxscyB0aGUgQWRkQWxpZW5MYXplclNob3QgY2xhc3MgdG8gYXBwZW5kIGFuIGFsaWVuIGF0dGFjayBhdCBhIHJhbmRvbSBhbGllblxyXG4gICAgbmV3IEFkZEFsaWVuTGF6ZXJTaG90KHJlbWFpbmluZ0FsaWVuc1tyYW5kb21BbGllblBvc2l0aW9uXSk7XHJcbiAgICAvLyBzZXRzIHRoZSBuZXcgaW50ZXJ2YWwgYmV0d2VlbiBhbGllbiBhdHRhY2tzLCBvdGhlcndpc2UgdGhlIGFsaWVucyB3aWxsIGZpcmUgY29uc3RhbnRseSAod2hpY2ggaXMgc29tZXdoYXQgaGlsYXJpb3VzLCBidXQgd2lsbCBhbG1vc3QgaW5zdGFudGx5IGNyYXNoIHRoZSBnYW1lKVxyXG4gICAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90ID0gdGltZXN0YW1wO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIGFuaW1hdGluZyB0aGUgYWxpZW4gbGF6ZXIgYXR0YWNrXHJcbi8vIHRoZSB3YXkgdGhlIGF0dGFja3MgYXJlIGFuaW1hdGVkIGlzIGFzIGZvbGxvd3MgLT4gZWFjaCBmcmFtZSB0aGUgZ2FtZSBjaGVja3MgdGhlIGJhY2tncm91bmQgc3BpcmUgYW5kIHRoZSBzcHJpdGUgY2hhbmdlIGludGVydmFsICggbG9jYXRlZCBpbiB0aGUgXCJnYW1lXCIgb2JqZWN0KSBhbmQgY2hhbmdlcyB0aGUgc3ByaXRlIHNpbXVsYXRpbmcgbW92ZW1lbnRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGllbkxhemVyU2hvdFNwcml0ZXMoXHJcbiAgdGltZXN0YW1wOiBudW1iZXIsXHJcbiAgc2NlbmU6IElTY2VuZU9iamVjdCxcclxuICBnYW1lOiBJR2FtZU9iamVjdCxcclxuICBhbGllbkxhemVyU2hvdDogSFRNTERpdkVsZW1lbnRcclxuKTogdm9pZCB7XHJcbiAgaWYgKFxyXG4gICAgdGltZXN0YW1wIC0gc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPlxyXG4gICAgZ2FtZS5hbGllbkxhemVyU2hvdFNwcml0ZUNoYW5nZUludGVydmFsXHJcbiAgKSB7XHJcbiAgICAvLyBjaGVjayB0aGUgY3VycmVudCBzcHJpdGUgYW5kIGFkanVzdHMgaXMgYWNjb3JkaW5nIHRvIHRoZSBzcHJpdGUgYXR0YWNrIGludGVydmFsXHJcbiAgICBpZiAoYWxpZW5MYXplclNob3Quc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwidHlwZS0xXCIpKSB7XHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9hdHRhY2stdHlwZS0yLnBuZycpXCI7XHJcbiAgICB9IGVsc2UgaWYgKGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcInR5cGUtMlwiKSkge1xyXG4gICAgICBhbGllbkxhemVyU2hvdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvYXR0YWNrLXR5cGUtMS5wbmcnKVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxpZW5MYXplclNob3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2F0dGFjay10eXBlLTIucG5nJylcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGp1c3RzIHRoZSBzcHJpdGUgaW50ZXJ2YWwsIHRoaXMgbWFrZXMgc3VyZSB0aGEgYW5pbWF0aW9uIGRvZXMgbm90IG9jY3VyIHRvbyBvZnRlblxyXG4gICAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0LCBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgYW5pbWF0aW9uIHRoZSBhbGllbnNcclxuLy8gdGhlIHdheSB0aGUgYWxpZW5zIGFyZSBhbmltYXRlZCBpcyBhcyBmb2xsb3dzIC0+IGVhY2ggZnJhbWUgdGhlIGdhbWUgY2hlY2tzIHRoZSBiYWNrZ3JvdW5kIHNwcml0ZSBhbmQgdGhlIHNwcml0ZSBjaGFuZ2UgaW50ZXJ2YWwgKCBsb2NhdGVkIGluIHRoZSBcImdhbWVcIiBvYmplY3QpIGFuZCBjaGFuZ2VzIHRoZSBzcHJpdGUgc2ltdWxhdGluZyBtb3ZlbWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuU3ByaXRlQW5pbWF0aW9uKFxyXG4gIHsgc2NlbmUsIGdhbWUgfTogeyBzY2VuZTogSVNjZW5lT2JqZWN0OyBnYW1lOiBJR2FtZU9iamVjdCB9LFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyXHJcbikge1xyXG4gIC8vIHNlbGVjdHMgYWxsIGFsaWVuIEhUTUwgZGl2IGVsZW1lbnRzIGFuZCBzYXZlcyB0aGVtIGluIGFuIGFycmF5XHJcbiAgY29uc3QgYWxpZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGlmIChcclxuICAgIHRpbWVzdGFtcCAtIHNjZW5lLmxhc3RBbGllblNwcml0ZUludGVydmFsID5cclxuICAgIGdhbWUuYWxpZW5TcHJpdGVDaGFuZ2VJbnRlcnZhbFxyXG4gICkge1xyXG4gICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXJyYXkgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlIGFuaW1hdGlvbiBmb3IgdGhlIDQwcHRzIGFsaWVuc1xyXG4gICAgYWxpZW5zLmZvckVhY2goKGFsaWVuKSA9PiB7XHJcbiAgICAgIGlmIChhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhbGllbi00MHB0c1wiKSkge1xyXG4gICAgICAgIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItNDBwdHMtMVwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS00MHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItNDBwdHMtMlwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS00MHB0cy0xLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktNDBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXJyYXkgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlIGFuaW1hdGlvbiBmb3IgdGhlIDIwcHRzIGFsaWVuc1xyXG5cclxuICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTIwcHRzXCIpKSB7XHJcbiAgICAgICAgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0yMHB0cy0xXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTIwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0yMHB0cy0yXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTIwcHRzLTEucG5nJylcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS0yMHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBsb29wcyB0aHJvdWdoIHRoZSBhbGllbiBhcnJheSBhbmQgYXBwbGllcyB0aGUgYXBwcm9wcmlhdGUgYW5pbWF0aW9uIGZvciB0aGUgMTBwdHMgYWxpZW5zXHJcblxyXG4gICAgICBpZiAoYWxpZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxpZW4tMTBwdHNcIikpIHtcclxuICAgICAgICBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTEwcHRzLTFcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktMTBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTEwcHRzLTJcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktMTBwdHMtMS5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTEwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFkanVzdHMgdGhlIHNwcml0ZSBpbnRlcnZhbCwgdGhpcyBtYWtlcyBzdXJlIHRoYSBhbmltYXRpb24gZG9lcyBub3Qgb2NjdXIgdG9vIG9mdGVuXHJcbiAgICAgIHNjZW5lLmxhc3RBbGllblNwcml0ZUludGVydmFsID0gdGltZXN0YW1wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElTY2VuZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL21vZGVscy9pc0NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBjaGVja2luZyBpZiBhbiBhbGllbiBoYXMgaGl0IHRoZSBkZWZlbmRlclxyXG5cclxuLy8gaG93IGRvIHdlIGtub3cgaWYgdGhlIGRlZmVuZGVyIGhhcyBiZWVuIGhpdCB5b3UgYXNrID8gLT4gbG9naWMgaXMgdGhlIGZvbGxvd2luZywgd2UgdGFrZSB0aGUgMiBIVE1MIGVsZW1lbnRzICggYm90aCBhcmUgZGl2cykgYW5kIGNoZWNrIGlmIG9uZSBoYXMgZW50ZXJlZCB0aGUgcG9zaXRpb24gb2YgdGhlIG90aGVyIHVzaW5nIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4vLyBjaGVjayB0aGUgaXNDb2xsaXNpb24gbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcblxyXG4vLyB0aGUgbmFtZSBvZiB0aGUgZnVuYyBpcyBxdWl0ZSB0aGUgbW91dGhmdWwgSSBrbm93XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcihcclxuICBkZWZlbmRlcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgaXNDb2xsaXNpb246IElJc0NvbGxpc2lvbixcclxuICBhbGllbkxhemVyU2hvdDogSFRNTERpdkVsZW1lbnQsXHJcbiAgcGxheWVyOiBJUGxheWVyLFxyXG4gIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudCxcclxuICBnYW1lT3ZlcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgc2NlbmU6IElTY2VuZU9iamVjdFxyXG4pIHtcclxuICAvLyB0aGUgZnVuYyByZXZlYWxzIHRoZSBnYW1lIG92ZXIgc2NyZWVuIGFuZCBzdG9wcyB0aGUgZ2FtZSB1bnRpbCB0aGUgcGxheWVyIGRlY2lkZXMgdG8gcmVzdGFydFxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyQWN0aW9uKGdhbWVPdmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgc2NlbmUuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIGdhbWVPdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgZm9yIGNvbGxpc2lvbiBiZXR3ZWVuIHRoZSBkZWZlbmRlciBhbmQgYW4gYWxpZW4gYXR0YWNrXHJcbiAgaWYgKGlzQ29sbGlzaW9uKGRlZmVuZGVyLCBhbGllbkxhemVyU2hvdCkpIHtcclxuICAgIC8vIHNlbGxlY3RzIHRoZSByZW1haW5pbmcgbGl2ZXNcclxuICAgIGxldCBsaXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub25lLWxpZmVcIik7XHJcbiAgICAvLyByZW1vdmVzIHRoZSBhbGllbiBhdHRhY2sgZm9ybSB0aGUgZ2FtZSBzY3JlZW5cclxuICAgIGFsaWVuTGF6ZXJTaG90LnJlbW92ZSgpO1xyXG4gICAgLy8gaWYgdGhlIHBsYXllcnMgc3RpbGwgaGFzIGxpdmVzIG9uZSBpcyByZW1vdmVkIGFuZCB0aGUgcG9zaXRpb24gb2YgdGhlIGRlZmVuZGVyIGlzIHJlc2V0IHRvIHRoZSBzdGFydGluZyBvbmVcclxuICAgIGlmIChsaXZlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHBsYXllci54ID0gMTAwO1xyXG4gICAgICBwbGF5ZXIueSA9IGdhbWVBcmVhLm9mZnNldEhlaWdodCAtIDUwO1xyXG4gICAgICBkZWZlbmRlci5zdHlsZS5sZWZ0ID0gcGxheWVyLnggKyBcInB4XCI7XHJcbiAgICAgIGRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55ICsgXCJweFwiO1xyXG4gICAgICBsaXZlc1tsaXZlcy5sZW5ndGggLSAxXS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBtb3JlIGxpdmVzIHRoZSBnYW1lIGlzIG92ZXIgYW5kIHRoZSBwbGF5ZXIgaXMgZ2l2ZW4gdGhlIG9wdGlvbnMgdG8gc3RhcnQgYWdhaW5cclxuICAgICAgbGl2ZXNbbGl2ZXMubGVuZ3RoIC0gMV0ucmVtb3ZlKCk7XHJcbiAgICAgIGdhbWVPdmVyQWN0aW9uKGdhbWVPdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL21vZGVscy9pc0NvbGxpc2lvblwiO1xyXG5cclxuLy8gbG9naWMgZm9yIGNoZWNraW5nIGlmIGFuIGFsaWVuIGhhcyBoaXQgb25lIG9mIHRoZSBkZWZlbmRlcidzIHNoaWVsZHNcclxuXHJcbi8vIGhvdyBkbyB3ZSBrbm93IGlmIGEgc2hpZWxkIGhhcyBiZWVuIGhpdCB5b3UgYXNrID8gLT4gbG9naWMgaXMgdGhlIGZvbGxvd2luZywgd2UgdGFrZSB0aGUgMiBIVE1MIGVsZW1lbnRzICggYm90aCBhcmUgZGl2cykgYW5kIGNoZWNrIGlmIG9uZSBoYXMgZW50ZXJlZCB0aGUgcG9zaXRpb24gb2YgdGhlIG90aGVyIHVzaW5nIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4vLyBjaGVjayB0aGUgaXNDb2xsaXNpb24gbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcblxyXG4vLyB0aGUgbmFtZSBvZiB0aGUgZnVuYyBpcyBxdWl0ZSB0aGUgbW91dGhmdWwgSSBrbm93XHJcbmV4cG9ydCBmdW5jdGlvbiBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIoXHJcbiAgYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb25cclxuKSB7XHJcbiAgLy8gc2VsZWN0cyBhbGwgb2YgdGhlIHNoaWVsZCBIVE1MIGVsZW1lbnRzIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gIGxldCBzaGllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLnNoaWVsZFwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICAvLyBsb29wcyB0aHJvdWdoIHRoZSBzaGllbGQgZWxlbWVudHMgYW5kIGNoZWNrIGlmIGFueSBoYXMgYmVlbiBoaXRcclxuICBzaGllbGRzLmZvckVhY2goKHNoaWVsZCkgPT4ge1xyXG4gICAgLy8gc2hpZWxkcyBoYXZlIDMgXCJsaXZlc1wiLCBlYWNoIGhpdCByZW1vdmVzIG9uZSBhbmQgZGFtYWdlcyB0aGVtIHdoaWNoIGlzIHJlcHJlc2VudGVkIGJ5IGNoYW5naW5nIHRoZSBzcHJpdGUgd2l0aCBhIG1vcmUgZGFtYWdlZCB2ZXJzaW9uXHJcbiAgICBpZiAoXHJcbiAgICAgIGlzQ29sbGlzaW9uKHNoaWVsZCwgYWxpZW5MYXplclNob3QpICYmXHJcbiAgICAgIHNoaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGllbGQtZGVzdHJveWVkXCIpID09PSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLWZ1bGwtaHBcIikpIHtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LnJlbW92ZShcInNoaWVsZC1mdWxsLWhwXCIpO1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkLTFoaXRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNoaWVsZC0xaGl0XCIpKSB7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGllbGQtMWhpdFwiKTtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmFkZChcInNoaWVsZC0yaGl0c1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLTJoaXRzXCIpKSB7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGllbGQtMmhpdHNcIik7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtM2hpdHNcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNoaWVsZC0zaGl0c1wiKSkge1xyXG4gICAgICAgIC8vIHdoZW4gdGhlIHNoaWVsZCBpcyBkZXN0cm95ZWQgaXQgbGVhdmVzIGEgXCJ3cmVja1wiIGFuZCBjYW5ub3Qgc3RvcCBhbGllbiBhdHRhY2tzXHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtZGVzdHJveWVkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJlbW92ZXMgYWxpZW4gYXR0YWNrIGFmdGVyIGl0IGhhcyBoaXQgdGhlIHNoaWVsZFxyXG4gICAgICBhbGllbkxhemVyU2hvdC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbW9kdWxlIGhvbGQgb2JqZWN0cyB0aGF0IGNvbnRhaW4gZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2FtZSBzdGF0ZSAoIGJ1dCBub3QgYWJvdXQgdGhlIHBsYXllciwgaGlzIHN0YXRlIGlzIGluIHRoZSBwbGF5ZXIgZm9sZGVyKVxyXG5cclxuLy8gZ2VuZXJhbCBzdGF0ZSBpbmZvIGFib3V0IHRoZSBnYW1lIHN0YXRlXHJcbmV4cG9ydCBsZXQgZ2FtZTogSUdhbWVPYmplY3QgPSB7XHJcbiAgc3BlZWQ6IDIsXHJcbiAgcGxheWVyTW92ZW1lbnRNdWx0aXBsaWVyOiAyLFxyXG4gIGxhemVyU2hvdE1vdmVtZW50TXVsdGlwbGllcjogMyxcclxuICBhbGllbkNsdXN0ZXJNdWx0aXBsaWVyOiAwLjQsXHJcbiAgYWxpZW5Qb3M6IDAsXHJcbiAgYWxpZW5EaXJlY3Rpb246IDEsXHJcbiAgYWxpZW5TcHJpdGVDaGFuZ2VJbnRlcnZhbDogNTAwLFxyXG4gIGFsaWVuTGF6ZXJTaG90U3ByaXRlQ2hhbmdlSW50ZXJ2YWw6IDUwLFxyXG4gIGFsaWVuRmlyZUludGVydmFsOiAyMDAwLFxyXG4gIGZpcmVJbnRlcnZhbDogODAwLFxyXG4gIGV4dHJhTGl2ZXNDb3VudGVyOiAxLFxyXG4gIG1vdGhlcnNoaXBTcGF3bkludGVydmFsOiA1MDAwMCxcclxuICBtb3RoZXJzaGlwTW92ZW1lbnRNdWx0aXBsaWVyOiA1LFxyXG4gIG1heEFsaWVuQ2x1c3RlclNpemU6IDU1LFxyXG4gIG1heFBsYXllckxpdmVzOiA1LFxyXG59O1xyXG5cclxuLy8gZ2VuZXJhbCBzdGF0ZSBpbmZvIGFib3V0IHNjZW5lXHJcbi8vIG1vc3Qgb2YgdGhlIHZhbHVlcyBzdGFydCBhdCAwIGJ1dCBhcmUgdXBkYXRlZCB0aHJvdWdoIHRoZSBnYW1lXHJcbmV4cG9ydCBsZXQgc2NlbmU6IElTY2VuZU9iamVjdCA9IHtcclxuICBzY29yZTogMCxcclxuICBsYXN0QWxpZW5TcHJpdGVJbnRlcnZhbDogMCxcclxuICBsYXN0QWxpZW5MYXplclNob3RTcHJpdGVJbnRlcnZhbDogMCxcclxuICBsYXN0QWxpZW5MYXplclNob3Q6IDAsXHJcbiAgbGFzdFNwYXduTW90aGVyc2hpcDogMCxcclxuICBpc0FjdGl2ZTogdHJ1ZSwgLy8gY2hlY2tzIGlmIHRoZSBnYW1lIGlzIHN0aWxsIGFjdGl2ZSwgaWYgc2V0IHRvIGZhbHNlIHRoZSBnYW1lIHdpbGwgc3RvcFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIGFsaWVuIGNsdXN0ZXIgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxpZW5DbHVzdGVyTW92ZW1lbnQoe1xyXG4gIGdhbWUsXHJcbiAgZ2FtZUFyZWEsXHJcbn06IHtcclxuICBnYW1lOiBJR2FtZU9iamVjdDtcclxuICBnYW1lQXJlYTogSFRNTERpdkVsZW1lbnQ7XHJcbn0pIHtcclxuICAvLyBzZWxsZXRzIHRoZSBhbGllbiBjbHVzdGVyIEhUTUwgZGl2IGVsZW1lbnRcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgY29uc3QgYWxpZW5DbHVzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmFsaWVuLWNsdXN0ZXJcIlxyXG4gICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAvLyBkZXRlcm1lbnRzIHRoZSBhbGllbiBjbHVzdGVyIG1vdmVtZW50IGRpcmVjdGlvblxyXG4gIGlmIChnYW1lLmFsaWVuUG9zICsgYWxpZW5DbHVzdGVyLm9mZnNldFdpZHRoID4gZ2FtZUFyZWEub2Zmc2V0V2lkdGggLSAxMDApIHtcclxuICAgIGdhbWUuYWxpZW5EaXJlY3Rpb24gPSAtZ2FtZS5zcGVlZDtcclxuICB9IGVsc2UgaWYgKGdhbWUuYWxpZW5Qb3MgPCAxMDApIHtcclxuICAgIGdhbWUuYWxpZW5EaXJlY3Rpb24gPSBnYW1lLnNwZWVkO1xyXG4gIH1cclxuXHJcbiAgLy8gbW92ZXMgdGhlIGFsaWVuIGNsdXN0ZXIgYWNjb3JkaW5nIHRoZSB0aGUgYWxpZW4gZGlyZWN0aW9uXHJcbiAgZ2FtZS5hbGllblBvcyArPSBnYW1lLmFsaWVuRGlyZWN0aW9uICogZ2FtZS5hbGllbkNsdXN0ZXJNdWx0aXBsaWVyO1xyXG4gIGFsaWVuQ2x1c3Rlci5zdHlsZS5sZWZ0ID0gZ2FtZS5hbGllblBvcyArIFwicHhcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGllbkxhemVyU2hvdFNwcml0ZXMgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbGllbkxhemVyU2hvdFNwcml0ZXNcIjtcclxuaW1wb3J0IHsgSUdhbWVPYmplY3QsIElTY2VuZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL21vZGVscy9pc0NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgYW4gYWxpZW50IGF0dGFjayBhbmQgIGNoZWNraW5nIGlmIHRoZSBhdHRhY2sgaGFzIGhpdCBlaXRoZXIgdGhlIGRlZmVuZGVyIG9yIG9uZSBvZiB0aGUgc2hpZWxkc1xyXG5cclxudHlwZSBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciA9IHtcclxuICAoXHJcbiAgICBkZWZlbmRlcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgICBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uLFxyXG4gICAgYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgcGxheWVyOiBJUGxheWVyLFxyXG4gICAgZ2FtZUFyZWE6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgZ2FtZU92ZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgc2NlbmU6IElTY2VuZU9iamVjdFxyXG4gICk6IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIHNoaWVsZEFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciA9IHtcclxuICAoYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LCBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uKTogdm9pZDtcclxufTtcclxuXHJcbi8vIHRoZSBuYW1lIG9mIHRoZSBmdW5jIGlzIHF1aXRlIHRoZSBtb3V0aGZ1bCBJIGtub3dcclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyKFxyXG4gIHtcclxuICAgIGdhbWUsXHJcbiAgICBzY2VuZSxcclxuICAgIHBsYXllcixcclxuICAgIGdhbWVBcmVhLFxyXG4gICAgaXNDb2xsaXNpb24sXHJcbiAgICBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcixcclxuICAgIHNoaWVsZEFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcixcclxuICAgIGdhbWVPdmVyLFxyXG4gIH06IHtcclxuICAgIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gICAgc2NlbmU6IElTY2VuZU9iamVjdDtcclxuICAgIHBsYXllcjogSVBsYXllcjtcclxuICAgIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb247XHJcbiAgICBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcjogZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXI7XHJcbiAgICBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXI6IHNoaWVsZEFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcjtcclxuICAgIGdhbWVPdmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICB9LFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyXHJcbikge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBjb25zdCBkZWZlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmZW5kZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIC8vIHNlbGVjdHMgYWxsIGFsaWVuIGF0dGFjayBIVE1MIERpdiBlbGVtZW50c1xyXG4gIGxldCBhbGllbkxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuYWxpZW4tbGF6ZXItc2hvdFwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXR0YWNrc1xyXG4gIGFsaWVuTGF6ZXJTaG90cy5mb3JFYWNoKChhbGllbkxhemVyU2hvdCkgPT4ge1xyXG4gICAgYWxpZW5MYXplclNob3QueSArPSBnYW1lLnNwZWVkO1xyXG4gICAgYWxpZW5MYXplclNob3Quc3R5bGUudG9wID0gYWxpZW5MYXplclNob3QueSArIFwicHhcIjtcclxuXHJcbiAgICAvLyBhbmltYXRlcyB0aGUgYWxpZW4gYXR0YWNrXHJcbiAgICBhbGllbkxhemVyU2hvdFNwcml0ZXModGltZXN0YW1wLCBzY2VuZSwgZ2FtZSwgYWxpZW5MYXplclNob3QpO1xyXG5cclxuICAgIC8vIHJlbW92ZXMgdGhlIGFsaWVuIGF0dGFjayBmcm9tIHRoZSBkb20gd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIGdhbWUgc2NyZWVuXHJcbiAgICBpZiAoXHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnkgKyBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgPlxyXG4gICAgICBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgLyAyXHJcbiAgICApIHtcclxuICAgICAgYWxpZW5MYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBhbGllbiBhdHRhY2sgaGFzIGhpdCB0aGUgZGVmZW5kZXJcclxuICAgIGRlZmVuZGVyQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyKFxyXG4gICAgICBkZWZlbmRlcixcclxuICAgICAgaXNDb2xsaXNpb24sXHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LFxyXG4gICAgICBwbGF5ZXIsXHJcbiAgICAgIGdhbWVBcmVhLFxyXG4gICAgICBnYW1lT3ZlcixcclxuICAgICAgc2NlbmVcclxuICAgICk7XHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBhbGllbiBhdHRhY2sgaGFzIGhpdCBhIHNoaWVsZFxyXG4gICAgc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyKGFsaWVuTGF6ZXJTaG90LCBpc0NvbGxpc2lvbik7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUdhbWVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IElJc0NvbGxpc2lvbiB9IGZyb20gXCIuLi9tb2RlbHMvaXNDb2xsaXNpb25cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIGRlZmVuZGVyIGF0dGFja3Mgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF6ZXJTaG90c01vdmVtZW50KHtcclxuICBnYW1lLFxyXG4gIGlzQ29sbGlzaW9uLFxyXG59OiB7XHJcbiAgZ2FtZTogSUdhbWVPYmplY3Q7XHJcbiAgaXNDb2xsaXNpb246IElJc0NvbGxpc2lvbjtcclxufSkge1xyXG4gIC8vIHNlbGVjdHMgYWxsIG9mIHRoZSBkZWZlbmRlcnMgYXR0YWNrcyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBsYXplclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmxhemVyLXNob3RcIlxyXG4gICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vbG9vcHMgdGhyb3VnaCB0aGUgYXR0YWNrc1xyXG4gIGxhemVyU2hvdHMuZm9yRWFjaCgobGF6ZXJTaG90KSA9PiB7XHJcbiAgICAvLyBtb3ZlcyB0aGUgYXR0YWNrIGJ5IGNoYW5naW5nIGl0J3MgXCJ5XCIgcG9zaXRpb25cclxuICAgIGxhemVyU2hvdC55IC09IGdhbWUuc3BlZWQ7XHJcbiAgICBsYXplclNob3Quc3R5bGUudG9wID0gbGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcblxyXG4gICAgLy8gaWYgdGhlIGF0dGFjayByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIHNjcmVlbiBpdCBpcyByZW1vdmVkXHJcbiAgICBpZiAobGF6ZXJTaG90LnkgKyBsYXplclNob3Qub2Zmc2V0SGVpZ2h0IDwgMCkge1xyXG4gICAgICBsYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlIGRlZmVuZGVyJ3MgbGF6ZXIgc2hvdCBoaXRzIGEgc2hpZWxkLCB0aGUgc2hvdCBpcyByZW1vdmVkIHdpdGhvdXQgZGFtYWdpbmcgdGhlIHNoaWVsZFxyXG4gICAgY29uc3Qgc2hpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnNoaWVsZFwiXHJcbiAgICApISBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIHNoaWVsZHMuZm9yRWFjaCgoc2hpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0NvbGxpc2lvbihsYXplclNob3QsIHNoaWVsZCkgJiZcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLWRlc3Ryb3llZFwiKSA9PT0gZmFsc2VcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGF6ZXJTaG90LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIG1vdGhlcnNoaXAgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW90aGVyc2hpcE1vdmVtZW50KHtcclxuICBnYW1lLFxyXG4gIG1vdGhlcnNoaXBDdXJyZW50U291bmQsXHJcbn06IHtcclxuICBnYW1lOiBJR2FtZU9iamVjdDtcclxuICBtb3RoZXJzaGlwQ3VycmVudFNvdW5kOiBIVE1MQXVkaW9FbGVtZW50O1xyXG59KSB7XHJcbiAgLy8gc2VsZWN0cyBhbGwgbW90aGVyc2hpcCBIVE1MIGRpdiBlbGVtZW50cyBvbiB0aGUgc2NyZWVuIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gIGNvbnN0IG1vdGhlcnNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLm1vdGhlcnNoaXBcIlxyXG4gICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIGxvb3BzIHRocm91Z2ggdGhlIG1vdGhlcnNoaXBzICggdGhlcmUgaXMgdXN1YWxseSBvbmx5IG9uZSlcclxuICBtb3RoZXJzaGlwcy5mb3JFYWNoKChtb3RoZXJzaGlwKSA9PiB7XHJcbiAgICAvL21vdmVzIHRoZSBtb3RoZXJzaGlwIG9uIHRoZSBnYW1lIHNjcmVlblxyXG4gICAgbW90aGVyc2hpcC54IC09IGdhbWUuc3BlZWQ7XHJcbiAgICBtb3RoZXJzaGlwLnN0eWxlLmxlZnQgPSBtb3RoZXJzaGlwLnggKyBcInB4XCI7XHJcblxyXG4gICAgLy8gaWYgdGhlIG1vdGhlcnNoaXAgaXMgYWxpdmUgYWRkIHNvdW5kIHRvIHRoZSBtb3ZlbWVudFxyXG4gICAgaWYgKG1vdGhlcnNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVhZC1hbGllblwiKSA9PT0gZmFsc2UpIHtcclxuICAgICAgbW90aGVyc2hpcEN1cnJlbnRTb3VuZC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlcyB0aGUgbW90aGVyc2hpcCBmcm9tIHRoZSBET00gaWYgaXQgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSBzY3JlZW5cclxuICAgIGlmIChtb3RoZXJzaGlwLnggKyBtb3RoZXJzaGlwLm9mZnNldFdpZHRoIDw9IDApIHtcclxuICAgICAgbW90aGVyc2hpcC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIG1vdGhlcnNoaXAgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZW1lbnQoeyBwbGF5ZXIgfTogeyBwbGF5ZXI6IElQbGF5ZXIgfSkge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBjb25zdCBkZWZlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmZW5kZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIC8vbW92ZXMgdGhlIG1vdGhlcnNoaXAgb24gdGhlIGdhbWUgc2NyZWVuXHJcbiAgZGVmZW5kZXIuc3R5bGUubGVmdCA9IHBsYXllci54ICsgXCJweFwiO1xyXG4gIGRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55IC0gcGxheWVyLmhlaWdodCArIFwicHhcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIG1vZHVsZSBob2xkIG9iamVjdCB0aGF0IGNvbnRhaW4gZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGxheWVyIHN0YXRlLlxyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmV4cG9ydCBsZXQgcGxheWVyOiBJUGxheWVyID0ge1xyXG4gIHg6IDEwMCxcclxuICB5OiBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSA1MCxcclxuICB3aWR0aDogMCxcclxuICBoZWlnaHQ6IDAsXHJcbiAgbGFzdFRpbWVTaG90OiAwLFxyXG4gIGxpdmVzOiAzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcbmltcG9ydCB7IElTb3VuZHMgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdW5kc1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHNldHRpbmcgdXAgdGhlIHBsYXllciBjb250cm9sbHNcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvbktleVVwKTtcclxuXHJcbi8vIG9iamVjdCB0aGF0IHdpbGwgaG9sZCBhbGwgb2YgcGxheWVyIGNvbnRyb2xzIC0+IGxlZnQgYW5kIHJpZ2h0IGFycm93cyBhbmQgdGhlIHNwYWNlYmFyXHJcbmxldCBrZXlzOiB7XHJcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcclxufSA9IHt9O1xyXG5cclxuLy8gY2hlY2tzIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3NpbmcgYW55IG9mIHRoZSBjb250cm9sc1xyXG5mdW5jdGlvbiBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gIGtleXNbZS5jb2RlXSA9IHRydWU7XHJcbn1cclxuXHJcbi8vIGNoZWNrcyBpZiB0aGUgcGxheWVyIGlzIHByZXNzaW5nIGFueSBvZiB0aGUgY29udHJvbHNcclxuZnVuY3Rpb24gb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAga2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbn1cclxuXHJcbi8vIG1vdmVtZW50IGNvbnRyb2xsc1xyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZW1lbnRDb250cm9sbHMoe1xyXG4gIHBsYXllcixcclxuICBnYW1lLFxyXG4gIGdhbWVBcmVhLFxyXG59OiB7XHJcbiAgcGxheWVyOiBJUGxheWVyO1xyXG4gIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudDtcclxufSkge1xyXG4gIC8vIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3Npbmcgb3IgaG9sZGluZyB0aGUgbGVmdCBhcnJvdywgbW92ZSB0aGUgcGxheWVyIHRvIHRoZSBsZWZ0XHJcbiAgaWYgKGtleXMuQXJyb3dMZWZ0ICYmIHBsYXllci54ID4gMCkge1xyXG4gICAgcGxheWVyLnggLT0gZ2FtZS5zcGVlZCAqIGdhbWUucGxheWVyTW92ZW1lbnRNdWx0aXBsaWVyO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIHBsYXllciBpcyBwcmVzc2luZyBvciBob2xkaW5nIHRoZSBsZWZ0IGFycm93LCBtb3ZlIHRoZSBwbGF5ZXIgdG8gdGhlIHJpZ2h0XHJcbiAgaWYgKGtleXMuQXJyb3dSaWdodCAmJiBwbGF5ZXIueCArIHBsYXllci53aWR0aCArIDIwIDwgZ2FtZUFyZWEub2Zmc2V0V2lkdGgpIHtcclxuICAgIHBsYXllci54ICs9IGdhbWUuc3BlZWQgKiBnYW1lLnBsYXllck1vdmVtZW50TXVsdGlwbGllcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIHNob290aW5nIGNvbnRyb2xsc1xyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyU2hvb3RpbmdDb250cm9sbHMoXHJcbiAge1xyXG4gICAgcGxheWVyLFxyXG4gICAgZ2FtZSxcclxuICAgIHNvdW5kcyxcclxuICAgIEFkZERlZmVuZGVyTGF6ZXJTaG90LFxyXG4gIH06IHtcclxuICAgIHBsYXllcjogSVBsYXllcjtcclxuICAgIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gICAgc291bmRzOiBJU291bmRzO1xyXG4gICAgQWRkRGVmZW5kZXJMYXplclNob3Q6IGFueTtcclxuICB9LFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyXHJcbikge1xyXG4gIC8vIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3NpbmcgdGhlIHNwYWNlYmFyIHJlbmRlciBhIGxhemVyIGF0dGFjayBhbmQgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSBzb3VuZFxyXG4gIGlmIChrZXlzLlNwYWNlICYmIHRpbWVzdGFtcCAtIHBsYXllci5sYXN0VGltZVNob3QgPiBnYW1lLmZpcmVJbnRlcnZhbCkge1xyXG4gICAgbmV3IEFkZERlZmVuZGVyTGF6ZXJTaG90KHBsYXllcik7XHJcbiAgICBzb3VuZHMuZGVmZW5kZXJTaG9vdGluZy5wbGF5KCk7XHJcbiAgICBwbGF5ZXIubGFzdFRpbWVTaG90ID0gdGltZXN0YW1wO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZGRQbGF5ZXJMaWZlIH0gZnJvbSBcIi4uL2FkZE9iamVjdHMvYWRkUGxheWVyTGlmZVwiO1xyXG5pbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHVwZGF0aW5nIHRoZSBwbGF5ZXIgcG9pbnRzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRzVXBkYXRlKHtcclxuICBwb2ludHMsXHJcbiAgc2NlbmUsXHJcbiAgZ2FtZSxcclxufToge1xyXG4gIHBvaW50czogSFRNTERpdkVsZW1lbnQ7XHJcbiAgc2NlbmU6IElTY2VuZU9iamVjdDtcclxuICBnYW1lOiBJR2FtZU9iamVjdDtcclxufSkge1xyXG4gIHBvaW50cy50ZXh0Q29udGVudCA9IHNjZW5lLnNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IGxpdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vbmUtbGlmZVwiKTtcclxuXHJcbiAgLy8gZm9yIGV2ZXJ5IDEwMDAgcG9pbnRzIHRoZSBwbGF5ZXIgaXMgYXdhcmVkIGFuIGV4dHJhIGxpZmVcclxuICBpZiAoXHJcbiAgICBzY2VuZS5zY29yZSAvIDEgPj0gZ2FtZS5leHRyYUxpdmVzQ291bnRlciAmJlxyXG4gICAgbGl2ZXMubGVuZ3RoIDw9IGdhbWUubWF4UGxheWVyTGl2ZXNcclxuICApIHtcclxuICAgIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICAgIC8vIGNvbnN0IGxpdmVzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAvLyAgIFwiLmxpdmVzLWNvdW50ZXJcIlxyXG4gICAgLy8gKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgLy8gY29uc3QgbGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBsaXZlLmNsYXNzTGlzdC5hZGQoXCJvbmUtbGl2ZVwiKTtcclxuICAgIC8vIGxpdmVzQ291bnRlci5hcHBlbmRDaGlsZChsaXZlKTtcclxuICAgIG5ldyBBZGRQbGF5ZXJMaWZlKCk7XHJcbiAgICBnYW1lLmV4dHJhTGl2ZXNDb3VudGVyKys7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3Bhd25BbGllbnMoeyBnYW1lIH06IHsgZ2FtZTogSUdhbWVPYmplY3QgfSkge1xyXG4gIGNvbnN0IGFsaWVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5hbGllblwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICBsZXQgYWxpZW5SZXNwYXduQ2hlY2tlciA9IEFycmF5LmZyb20oYWxpZW5zKS5maWx0ZXIoKGFsaWVuKSA9PlxyXG4gICAgYWxpZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVhZC1hbGllblwiKVxyXG4gICk7XHJcbiAgaWYgKGFsaWVuUmVzcGF3bkNoZWNrZXIubGVuZ3RoID09PSBnYW1lLm1heEFsaWVuQ2x1c3RlclNpemUpIHtcclxuICAgIGFsaWVucy5mb3JFYWNoKChhbGllbikgPT4ge1xyXG4gICAgICBhbGllbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGVhZC1hbGllblwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU291bmRzIH0gZnJvbSBcIi4uL21vZGVscy9zb3VuZHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzb3VuZHM6IElTb3VuZHMgPSB7IFxyXG4gICAgZGVmZW5kZXJTaG9vdGluZzogbmV3IEF1ZGlvKCcuL3NvdW5kcy9zaG9vdC53YXYnKSxcclxuICAgIGFsaWVuRGVhdGhTb3VuZDogbmV3IEF1ZGlvKCcuL3NvdW5kcy9pbnZhZGVya2lsbGVkLndhdicpLFxyXG4gICAgYmFja2dyb3VuZE11c2ljOiBuZXcgQXVkaW8oJy4vc291bmRzL3NwYWNlaW52YWRlcnMxLm1wZWcnKSxcclxuICAgIG1vdGhlcnNoaXBTb3VuZEhpZ2hQaXRjaDogbmV3IEF1ZGlvKCcuL3NvdW5kcy91Zm9faGlnaHBpdGNoLndhdicpLFxyXG4gICAgbW90aGVyc2hpcFNvdW5kTG93UGl0Y2g6IG5ldyBBdWRpbygnLi9zb3VuZHMvdWZvX2xvd3BpdGNoLndhdicpLFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBJR2FtZVJlc3RhcnQsIElHYW1lU3RhcnQgfSBmcm9tIFwiLi4vbW9kZWxzL2J1dHRvbnNcIjtcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBjb2xsaXNpb24gZGV0ZWN0b3JcclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sbGlzaW9uKFxyXG4gIGZpcnN0RWxlbWVudDogSFRNTERpdkVsZW1lbnQsXHJcbiAgc2Vjb25kRWxlbWVudDogSFRNTERpdkVsZW1lbnRcclxuKSB7XHJcbiAgbGV0IGZpcnN0UmVjdCA9IGZpcnN0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBsZXQgc2Vjb25kUmVjdCA9IHNlY29uZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gIHJldHVybiAhKFxyXG4gICAgZmlyc3RSZWN0LnRvcCA+IHNlY29uZFJlY3QuYm90dG9tIHx8XHJcbiAgICBmaXJzdFJlY3QuYm90dG9tIDwgc2Vjb25kUmVjdC50b3AgfHxcclxuICAgIGZpcnN0UmVjdC5yaWdodCA8IHNlY29uZFJlY3QubGVmdCB8fFxyXG4gICAgZmlyc3RSZWN0LmxlZnQgPiBzZWNvbmRSZWN0LnJpZ2h0XHJcbiAgKTtcclxufVxyXG5cclxuLy8gc3RhcnQgZ2FtZVxyXG5leHBvcnQgZnVuY3Rpb24gb25HYW1lU3RhcnQoe1xyXG4gIGdhbWVBY3Rpb24sXHJcbiAgcGxheWVyLFxyXG4gIGdhbWUsXHJcbiAgQWRkQWxpZW5DbHVzdGVyLFxyXG4gIEFkZFNoaWVsZHMsXHJcbiAgc291bmRzLFxyXG4gIEFkZERlZmVuZGVyLFxyXG59OiBJR2FtZVN0YXJ0KSB7XHJcbiAgc3RhcnRHYW1lLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgY29uc3QgZGVmZW5kZXJJbnN0YW5jZSA9IG5ldyBBZGREZWZlbmRlcihwbGF5ZXIpO1xyXG4gIGNvbnN0IGRlZmVuZGVyID0gZGVmZW5kZXJJbnN0YW5jZS5kZWZlbmRlcjtcclxuXHJcbiAgcGxheWVyLmhlaWdodCA9IGRlZmVuZGVyLm9mZnNldEhlaWdodDtcclxuICBwbGF5ZXIud2lkdGggPSBkZWZlbmRlci5vZmZzZXRXaWR0aDtcclxuXHJcbiAgbmV3IEFkZEFsaWVuQ2x1c3RlcihnYW1lKTtcclxuICBuZXcgQWRkU2hpZWxkcygpO1xyXG4gIHNvdW5kcy5iYWNrZ3JvdW5kTXVzaWMucGxheSgpO1xyXG5cclxuICBsZXQgbGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpdmVzLWNvdW50ZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICBsZXQgbGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaXZlLmNsYXNzTGlzdC5hZGQoXCJvbmUtbGlmZVwiKTtcclxuICAgIGxpdmVzLmFwcGVuZENoaWxkKGxpdmUpO1xyXG4gIH1cclxuXHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lQWN0aW9uKTtcclxufVxyXG5cclxuLy8gcmVzdGF0IGdhbWUgb3B0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lUmVzdGFydCh7XHJcbiAgZ2FtZUFyZWEsXHJcbiAgZ2FtZU92ZXIsXHJcbiAgcGxheWVyLFxyXG4gIHNjZW5lLFxyXG4gIG9uR2FtZVN0YXJ0Q29uZmlnT2JqLFxyXG59OiBJR2FtZVJlc3RhcnQpIHtcclxuICBnYW1lT3Zlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIGNvbnN0IGFsaWVuQ2x1c3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5hbGllbi1jbHVzdGVyXCJcclxuICApISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBhbGllbkNsdXN0ZXIucmVtb3ZlKCk7XHJcbiAgbGV0IGxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhemVyLXNob3RcIik7XHJcbiAgbGF6ZXJTaG90cy5mb3JFYWNoKChsYXplclNob3QpID0+IGxhemVyU2hvdC5yZW1vdmUoKSk7XHJcblxyXG4gIGNvbnN0IGRlZmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWZlbmRlclwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgZGVmZW5kZXIucmVtb3ZlKCk7XHJcblxyXG4gIGNvbnN0IGFsaWVuTGF6ZXJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWxpZW4tbGF6ZXItc2hvdFwiKTtcclxuICBhbGllbkxhemVyU2hvdHMuZm9yRWFjaCgoYWxpZW5MYXplclNob3QpID0+IGFsaWVuTGF6ZXJTaG90LnJlbW92ZSgpKTtcclxuXHJcbiAgY29uc3QgbGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9uZS1saWZlXCIpO1xyXG4gIGxpdmVzLmZvckVhY2goKGxpZmUpID0+IGxpZmUucmVtb3ZlKCkpO1xyXG5cclxuICBjb25zdCBzaGllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGllbGQtZmllbGRcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIHNoaWVsZHMucmVtb3ZlKCk7XHJcblxyXG4gIHBsYXllci54ID0gMTAwO1xyXG4gIHBsYXllci55ID0gZ2FtZUFyZWEub2Zmc2V0SGVpZ2h0IC0gNTA7XHJcbiAgcGxheWVyLndpZHRoID0gMDtcclxuICBwbGF5ZXIuaGVpZ2h0ID0gMDtcclxuICBwbGF5ZXIubGFzdFRpbWVTaG90ID0gMDtcclxuICBwbGF5ZXIubGl2ZXMgPSAzO1xyXG5cclxuICBzY2VuZS5zY29yZSA9IDA7XHJcbiAgc2NlbmUubGFzdEFsaWVuU3ByaXRlSW50ZXJ2YWwgPSAwO1xyXG4gIHNjZW5lLmxhc3RBbGllbkxhemVyU2hvdFNwcml0ZUludGVydmFsID0gMDtcclxuICBzY2VuZS5sYXN0QWxpZW5MYXplclNob3QgPSAwO1xyXG4gIHNjZW5lLmxhc3RTcGF3bk1vdGhlcnNoaXAgPSAwO1xyXG4gIHNjZW5lLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgb25HYW1lU3RhcnQob25HYW1lU3RhcnRDb25maWdPYmopO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQWRkQWxpZW5MYXplclNob3QgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZEFsaWVuTGF6ZXJTaG90XCI7XHJcbmltcG9ydCB7IEFkZERlZmVuZGVyTGF6ZXJTaG90IH0gZnJvbSBcIi4vYWRkT2JqZWN0cy9hZGREZWZlbmRlckxhemVyU2hvdFwiO1xyXG5pbXBvcnQgeyBBZGRNb3RoZXJzaGlwIH0gZnJvbSBcIi4vYWRkT2JqZWN0cy9hZGRNb3RoZXJzaGlwXCI7XHJcbmltcG9ydCB7IGFsaWVuU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSBcIi4vYW5pbWF0aW9ucy9hbGllblNwcml0ZXNcIjtcclxuaW1wb3J0IHsgZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIgfSBmcm9tIFwiLi9jb2xsaXNpb25DaGVja2VyL2RlZmVuZGVyQWxpZW5MYXplclNob3RcIjtcclxuaW1wb3J0IHsgc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyIH0gZnJvbSBcIi4vY29sbGlzaW9uQ2hlY2tlci9zaGllbGRBbGllbkxhemVyU2hvdFwiO1xyXG5pbXBvcnQgeyBhbGllbkRlYXRoQW5kUG9pbnRzIH0gZnJvbSBcIi4vYWxpZW5EZWF0aEFuZFBvaW50cy9hbGllbkRlYXRoQW5kUG9pbnRzXCI7XHJcbmltcG9ydCB7IGdhbWUsIHNjZW5lIH0gZnJvbSBcIi4vZ2VuZXJhbEdhbWVJbmZvL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IGFsaWVuQ2x1c3Rlck1vdmVtZW50IH0gZnJvbSBcIi4vb2JqZWN0TW92ZW1lbnQvYWxpZW5DbHVzdGVyXCI7XHJcbmltcG9ydCB7IGFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyIH0gZnJvbSBcIi4vb2JqZWN0TW92ZW1lbnQvYWxpZW5MYXplclNob3RzXCI7XHJcbmltcG9ydCB7IGxhemVyU2hvdHNNb3ZlbWVudCB9IGZyb20gXCIuL29iamVjdE1vdmVtZW50L2xhemVyU2hvdHNcIjtcclxuaW1wb3J0IHsgcGxheWVyTW92ZW1lbnQgfSBmcm9tIFwiLi9vYmplY3RNb3ZlbWVudC9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xyXG5pbXBvcnQge1xyXG4gIHBsYXllck1vdmVtZW50Q29udHJvbGxzLFxyXG4gIHBsYXllclNob290aW5nQ29udHJvbGxzLFxyXG59IGZyb20gXCIuL3BsYXllci9wbGF5ZXJNb3ZlbWVudENvbnRyb2xsc1wiO1xyXG5pbXBvcnQgeyBwb2ludHNVcGRhdGUgfSBmcm9tIFwiLi9wb2ludHMvcG9pbnRzVXBkYXRlXCI7XHJcbmltcG9ydCB7IHJlc3Bhd25BbGllbnMgfSBmcm9tIFwiLi9yZXNwd2FuL2FsaWVuc1wiO1xyXG5pbXBvcnQgeyBzb3VuZHMgfSBmcm9tIFwiLi9zb3VuZHMvc291bmRzXCI7XHJcbmltcG9ydCB7IG9uR2FtZVN0YXJ0LCBnYW1lUmVzdGFydCwgaXNDb2xsaXNpb24gfSBmcm9tIFwiLi91dGlsL3V0aWxpdHlGdW5jc1wiO1xyXG5pbXBvcnQgeyBhbGllbkZpcmluZ0N5Y2xlIH0gZnJvbSBcIi4vYWxpZW5GaXJpbmdDeWNsZS9hbGllbkZpcmluZ0N5Y2xlXCI7XHJcbmltcG9ydCB7IG1vdGhlcnNoaXBNb3ZlbWVudCB9IGZyb20gXCIuL29iamVjdE1vdmVtZW50L21vdGhlcnNoaXBcIjtcclxuaW1wb3J0IHsgQWRkQWxpZW5DbHVzdGVyIH0gZnJvbSBcIi4vYWRkT2JqZWN0cy9hZGRBbGllbkNsdXN0ZXJcIjtcclxuaW1wb3J0IHsgQWRkU2hpZWxkcyB9IGZyb20gXCIuL2FkZE9iamVjdHMvYWRkU2hpZWxkc1wiO1xyXG5pbXBvcnQgeyBBZGREZWZlbmRlciB9IGZyb20gXCIuL2FkZE9iamVjdHMvYWRkRGVmZW5kZXJcIjtcclxuaW1wb3J0IHsgSUdhbWVSZXN0YXJ0LCBJR2FtZVN0YXJ0IH0gZnJvbSBcIi4vbW9kZWxzL2J1dHRvbnNcIjtcclxuXHJcbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5sZXQgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IGdhbWVPdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW92ZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBwb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvaW50c1wiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBiYWNrZ291cm5kIG11c2ljIGxvb3Bcclxuc291bmRzLmJhY2tncm91bmRNdXNpYy5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gIHRoaXMucGxheSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IHRlc3QgPSBBZGRBbGllbkxhemVyU2hvdDtcclxuXHJcbi8vIGRvbmUgdG8gcmVkdWNlIHR5cGVzIGFuZCBlYXN5IG9mIGFkZGluZyBuZXcgcGFyYW1ldGVycyB0byB0aGUgZ2FtZUFjdGlvblxyXG5jb25zdCBnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0ID0ge1xyXG4gIHBsYXllck1vdmVtZW50Q29udHJvbGxzOiB7IHBsYXllciwgZ2FtZSwgZ2FtZUFyZWEgfSxcclxuICBwbGF5ZXJNb3ZlbWVudDogeyBwbGF5ZXIgfSxcclxuICBwbGF5ZXJTaG9vdGluZ0NvbnRyb2xsczogeyBwbGF5ZXIsIGdhbWUsIHNvdW5kcywgQWRkRGVmZW5kZXJMYXplclNob3QgfSxcclxuICBsYXplclNob3RzTW92ZW1lbnQ6IHsgZ2FtZSwgaXNDb2xsaXNpb24gfSxcclxuICBhbGllbkNsdXN0ZXJNb3ZlbWVudDogeyBnYW1lLCBnYW1lQXJlYSB9LFxyXG4gIGRlYXRoQW5kUG9pbnRzOiB7IGlzQ29sbGlzaW9uLCBzb3VuZHMsIHNjZW5lIH0sXHJcbiAgcmVzcGF3bkFsaWVuczogeyBnYW1lIH0sXHJcbiAgYWxpZW5TcHJpdGVBbmltYXRpb246IHsgc2NlbmUsIGdhbWUgfSxcclxuICBhbGllbkxhemVyU2hvdHNNb3ZtZW50QW5kQ29sbGlzaW9uQ2hlY2tlcjoge1xyXG4gICAgZ2FtZSxcclxuICAgIHNjZW5lLFxyXG4gICAgcGxheWVyLFxyXG4gICAgZ2FtZUFyZWEsXHJcbiAgICBpc0NvbGxpc2lvbixcclxuICAgIGRlZmVuZGVyQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyLFxyXG4gICAgc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyLFxyXG4gICAgZ2FtZU92ZXIsXHJcbiAgfSxcclxuICBhbGllbkZpcmluZ0N5Y2xlOiB7IHNjZW5lLCBnYW1lLCBBZGRBbGllbkxhemVyU2hvdCB9LFxyXG4gIG1vdGhlcnNoaXBNb3ZlbWVudDogeyBnYW1lLCBtb3RoZXJzaGlwQ3VycmVudFNvdW5kOiBuZXcgQXVkaW8oKSB9LFxyXG4gIHBvaW50c1VwZGF0ZTogeyBwb2ludHMsIHNjZW5lLCBnYW1lIH0sXHJcbn07XHJcblxyXG5jb25zdCBnYW1lQnV0dG9uc0NvbmZpZ09iajoge1xyXG4gIG9uR2FtZVN0YXJ0OiBJR2FtZVN0YXJ0O1xyXG4gIGdhbWVSZXN0YXJ0OiBJR2FtZVJlc3RhcnQ7XHJcbn0gPSB7XHJcbiAgb25HYW1lU3RhcnQ6IHtcclxuICAgIGdhbWVBY3Rpb24sXHJcbiAgICBwbGF5ZXIsXHJcbiAgICBnYW1lLFxyXG4gICAgQWRkRGVmZW5kZXIsXHJcbiAgICBBZGRBbGllbkNsdXN0ZXIsXHJcbiAgICBBZGRTaGllbGRzLFxyXG4gICAgc291bmRzLFxyXG4gIH0sXHJcbiAgZ2FtZVJlc3RhcnQ6IHtcclxuICAgIGdhbWVBcmVhLFxyXG4gICAgZ2FtZU92ZXIsXHJcbiAgICBwbGF5ZXIsXHJcbiAgICBzY2VuZSxcclxuICAgIG9uR2FtZVN0YXJ0Q29uZmlnT2JqOiB7XHJcbiAgICAgIGdhbWVBY3Rpb24sXHJcbiAgICAgIHBsYXllcixcclxuICAgICAgZ2FtZSxcclxuICAgICAgQWRkRGVmZW5kZXIsXHJcbiAgICAgIEFkZEFsaWVuQ2x1c3RlcixcclxuICAgICAgQWRkU2hpZWxkcyxcclxuICAgICAgc291bmRzLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuLy8gc3RhcnQgZ2FtZSBidXR0b24gZXZlbnQgbGlzdGVuZXJcclxuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZXR1cm4gb25HYW1lU3RhcnQoZ2FtZUJ1dHRvbnNDb25maWdPYmoub25HYW1lU3RhcnQpO1xyXG59KTtcclxuXHJcbi8vIGdhbWUgb3ZlciBhbmQgcmVzdGFydCBnYW1lIGV2ZW50IGxpc3RlbmVyXHJcbmdhbWVPdmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcmV0dXJuIGdhbWVSZXN0YXJ0KGdhbWVCdXR0b25zQ29uZmlnT2JqLmdhbWVSZXN0YXJ0KTtcclxufSk7XHJcblxyXG4vLyBnYW1lIGVuZ2luZVxyXG5mdW5jdGlvbiBnYW1lQWN0aW9uKHRpbWVzdGFtcDogbnVtYmVyKSB7XHJcbiAgLy8gbW92ZW1lbnQga2V5c1xyXG4gIHBsYXllck1vdmVtZW50Q29udHJvbGxzKGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QucGxheWVyTW92ZW1lbnRDb250cm9sbHMpO1xyXG5cclxuICAvLyBzaG9vdGluZ1xyXG4gIHBsYXllclNob290aW5nQ29udHJvbGxzKFxyXG4gICAgZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5wbGF5ZXJTaG9vdGluZ0NvbnRyb2xscyxcclxuICAgIHRpbWVzdGFtcCAvL3RpbWVzdGFtIG11c3QgYWx3YXlzIGJlIGFkZGVkIGFzIGl0IGNvbWVzIGZyb20gdGhlIGdhbWVBY3Rpb24gZnVuYyBpdHNlbGZcclxuICApO1xyXG5cclxuICAvLyBhcHBseSBwbGF5ZXIgbW92ZW1lbnRcclxuICBwbGF5ZXJNb3ZlbWVudChnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LnBsYXllck1vdmVtZW50KTtcclxuXHJcbiAgLy8gYWRkIGxhemVyIG1vdmVtZW50XHJcbiAgbGF6ZXJTaG90c01vdmVtZW50KGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QubGF6ZXJTaG90c01vdmVtZW50KTtcclxuXHJcbiAgLy8gYWRkIGFsaWVudCBjbHVzdGVyIG1vdmVtZW50XHJcbiAgYWxpZW5DbHVzdGVyTW92ZW1lbnQoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5hbGllbkNsdXN0ZXJNb3ZlbWVudCk7XHJcblxyXG4gIC8vIGFsaWVuIGRlYXRoIGFuZCBwb2ludHNcclxuICBhbGllbkRlYXRoQW5kUG9pbnRzKGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QuZGVhdGhBbmRQb2ludHMpO1xyXG5cclxuICAvLyByZXNwYXduIGFsaWVuc1xyXG4gIHJlc3Bhd25BbGllbnMoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5yZXNwYXduQWxpZW5zKTtcclxuXHJcbiAgLy8gYWxpZW5zIHNwcml0ZSBhbmltYXRpb25cclxuICBhbGllblNwcml0ZUFuaW1hdGlvbihcclxuICAgIGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QuYWxpZW5TcHJpdGVBbmltYXRpb24sXHJcbiAgICB0aW1lc3RhbXBcclxuICApO1xyXG5cclxuICAvLyBhbGllbnMgZmlyaW5nIGJhY2sgKGluIHNlbGYgZGVmZW5jZSlcclxuICBhbGllbkZpcmluZ0N5Y2xlKGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QuYWxpZW5GaXJpbmdDeWNsZSwgdGltZXN0YW1wKTtcclxuXHJcbiAgLy8gYWRkIG1vdm1lbnQgYW5kIGNvbGxpc2lvbiB0byBhbGllbiBsYXplciBzaG90c1xyXG4gIGFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyKFxyXG4gICAgZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5hbGllbkxhemVyU2hvdHNNb3ZtZW50QW5kQ29sbGlzaW9uQ2hlY2tlcixcclxuICAgIHRpbWVzdGFtcFxyXG4gICk7XHJcblxyXG4gIC8vIGFkZCBtb3RoZXJzaGlwXHJcbiAgaWYgKFxyXG4gICAgdGltZXN0YW1wIC0gc2NlbmUubGFzdFNwYXduTW90aGVyc2hpcCA+XHJcbiAgICBnYW1lLm1vdGhlcnNoaXBTcGF3bkludGVydmFsICsgNTAwMDAgKiBNYXRoLnJhbmRvbSgpXHJcbiAgKSB7XHJcbiAgICBjb25zdCBtb3RoZXJzaGlwID0gbmV3IEFkZE1vdGhlcnNoaXAoc291bmRzKTtcclxuICAgIGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QubW90aGVyc2hpcE1vdmVtZW50Lm1vdGhlcnNoaXBDdXJyZW50U291bmQgPVxyXG4gICAgICBtb3RoZXJzaGlwLm1vdGhlcnNoaXBDdXJyZW50U291bmQ7XHJcbiAgICBzY2VuZS5sYXN0U3Bhd25Nb3RoZXJzaGlwID0gdGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIG1vdGhlcnNoaXAgbW92ZW1lbnRcclxuICBtb3RoZXJzaGlwTW92ZW1lbnQoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5tb3RoZXJzaGlwTW92ZW1lbnQpO1xyXG5cclxuICBwb2ludHNVcGRhdGUoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5wb2ludHNVcGRhdGUpO1xyXG5cclxuICBpZiAoc2NlbmUuaXNBY3RpdmUpIHtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUFjdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
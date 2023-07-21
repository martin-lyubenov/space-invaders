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
    // creates a div element gives it the appropriate class for the life
    render() {
        this.playerLife = document.createElement("div");
        this.playerLife.classList.add("one-life");
    }
    // apends the life to the screen div element
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
    // the player cannot have more than 5 lives
    if (scene.score / 1000 >= game.extraLivesCounter &&
        lives.length <= game.maxPlayerLives) {
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
// logic for respwaning all the alien cluster once every alien is dead
// dead aliens are still on the screen but are not visible to the player, nor can they be interacted with
function respawnAliens({ game }) {
    // selects all of the alien HTML Div elements and stores them in an array
    const aliens = document.querySelectorAll(".alien");
    // filters and stores all of the dead aliens in another array
    const alienRespawnChecker = Array.from(aliens).filter((alien) => alien.classList.contains("dead-alien"));
    // if all of the aliens have been killed removes the "dead" status so they can be interacted with again ( no rest for the wicked, I suppose)
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

/***/ "./logic/util/gameRestart.ts":
/*!***********************************!*\
  !*** ./logic/util/gameRestart.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameRestart: () => (/* binding */ gameRestart)
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./logic/util/startGame.ts");

// logic for restarting the game once the player has lost all of their lives
function gameRestart({ gameArea, gameOver, player, scene, onGameStartConfigObj, }) {
    // hides the game over screen
    gameOver.classList.add("hidden");
    //selects the alien cluster HTML div element
    const alienCluster = document.querySelector(".alien-cluster");
    // removes the remaining alies from the screen
    alienCluster.remove();
    // selects all of the defender's lazer shorts HTML div elements on the screen and stores them in an array
    const lazerShots = document.querySelectorAll(".lazer-shot");
    // loops over the array and removes each of the lazer shorts
    lazerShots.forEach((lazerShot) => lazerShot.remove());
    // selects the defender HTML div element
    const defender = document.querySelector(".defender");
    // removes the defender element from the screen
    defender.remove();
    // selects all alien lazer shorts HTML div elements on the screen and stores them in an array
    const alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
    // loops over the array and removes each of the lazer shorts elements from the screen
    alienLazerShots.forEach((alienLazerShot) => alienLazerShot.remove());
    // selects all player lives HTML div elements on the screen and stores them in an array
    const lives = document.querySelectorAll(".one-life");
    // loops over the array and removes each life element from the screen
    lives.forEach((life) => life.remove());
    // selects the shield field HTML div element on the screen
    const shields = document.querySelector(".shield-field");
    // removes the shield field element from the screen
    shields.remove();
    // resets the player object stats
    player.x = 100;
    player.y = gameArea.offsetHeight - 50;
    player.width = 0;
    player.height = 0;
    player.lastTimeShot = 0;
    player.lives = 3;
    // resets the scene object stats
    scene.score = 0;
    scene.lastAlienSpriteInterval = 0;
    scene.lastAlienLazerShotSpriteInterval = 0;
    scene.lastAlienLazerShot = 0;
    scene.lastSpawnMothership = 0;
    scene.isActive = true;
    // runs the start game function so the game can start again
    (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.onGameStart)(onGameStartConfigObj);
}


/***/ }),

/***/ "./logic/util/isCollision.ts":
/*!***********************************!*\
  !*** ./logic/util/isCollision.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCollision: () => (/* binding */ isCollision)
/* harmony export */ });
// a func that checks if 2 html elements are in contact with each other
//  if they are - return true otherwise return false
function isCollision(firstElement, secondElement) {
    const firstRect = firstElement.getBoundingClientRect();
    const secondRect = secondElement.getBoundingClientRect();
    return !(firstRect.top > secondRect.bottom ||
        firstRect.bottom < secondRect.top ||
        firstRect.right < secondRect.left ||
        firstRect.left > secondRect.right);
}


/***/ }),

/***/ "./logic/util/startGame.ts":
/*!*********************************!*\
  !*** ./logic/util/startGame.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onGameStart: () => (/* binding */ onGameStart)
/* harmony export */ });
/* harmony import */ var _addObjects_addPlayerLife__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addObjects/addPlayerLife */ "./logic/addObjects/addPlayerLife.ts");

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const startGame = document.querySelector(".start-game");
// start game
function onGameStart({ gameAction, player, game, AddAlienCluster, AddShields, sounds, AddDefender, }) {
    // hides the start game screen
    startGame.classList.add("hidden");
    // creates a new defender HTML div element
    const defenderInstance = new AddDefender(player);
    const defender = defenderInstance.defender;
    // sets some player stats, needed in other parts of the game
    player.height = defender.offsetHeight;
    player.width = defender.offsetWidth;
    // add a new alien cluster
    new AddAlienCluster(game);
    // addes a new field of shields
    new AddShields();
    // start the background music
    sounds.backgroundMusic.play();
    // gives the player 3 lives
    for (let i = 1; i <= 3; i++) {
        new _addObjects_addPlayerLife__WEBPACK_IMPORTED_MODULE_0__.AddPlayerLife();
    }
    // start the game engine
    window.requestAnimationFrame(gameAction);
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
/* harmony import */ var _alienFiringCycle_alienFiringCycle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alienFiringCycle/alienFiringCycle */ "./logic/alienFiringCycle/alienFiringCycle.ts");
/* harmony import */ var _objectMovement_mothership__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./objectMovement/mothership */ "./logic/objectMovement/mothership.ts");
/* harmony import */ var _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./addObjects/addAlienCluster */ "./logic/addObjects/addAlienCluster.ts");
/* harmony import */ var _addObjects_addShields__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./addObjects/addShields */ "./logic/addObjects/addShields.ts");
/* harmony import */ var _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./addObjects/addDefender */ "./logic/addObjects/addDefender.ts");
/* harmony import */ var _util_isCollision__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/isCollision */ "./logic/util/isCollision.ts");
/* harmony import */ var _util_startGame__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/startGame */ "./logic/util/startGame.ts");
/* harmony import */ var _util_gameRestart__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./util/gameRestart */ "./logic/util/gameRestart.ts");

























const startButton = document.querySelector(".start-button");
let gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const points = document.querySelector(".points");
// backgournd music loop
_sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds.backgroundMusic.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});
// done to reduce types and easy of adding new parameters to the gameAction
const gameActionAssetsConfigObject = {
    playerMovementControlls: { player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, gameArea },
    playerMovement: { player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player },
    playerShootingControlls: { player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, sounds: _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds, AddDefenderLazerShot: _addObjects_addDefenderLazerShot__WEBPACK_IMPORTED_MODULE_1__.AddDefenderLazerShot },
    lazerShotsMovement: { game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, isCollision: _util_isCollision__WEBPACK_IMPORTED_MODULE_22__.isCollision },
    alienClusterMovement: { game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game, gameArea },
    deathAndPoints: { isCollision: _util_isCollision__WEBPACK_IMPORTED_MODULE_22__.isCollision, sounds: _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds, scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene },
    respawnAliens: { game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game },
    alienSpriteAnimation: { scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene, game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game },
    alienLazerShotsMovmentAndCollisionChecker: {
        game: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.game,
        scene: _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene,
        player: _player_player__WEBPACK_IMPORTED_MODULE_12__.player,
        gameArea,
        isCollision: _util_isCollision__WEBPACK_IMPORTED_MODULE_22__.isCollision,
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
        AddDefender: _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_21__.AddDefender,
        AddAlienCluster: _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_19__.AddAlienCluster,
        AddShields: _addObjects_addShields__WEBPACK_IMPORTED_MODULE_20__.AddShields,
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
            AddDefender: _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_21__.AddDefender,
            AddAlienCluster: _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_19__.AddAlienCluster,
            AddShields: _addObjects_addShields__WEBPACK_IMPORTED_MODULE_20__.AddShields,
            sounds: _sounds_sounds__WEBPACK_IMPORTED_MODULE_16__.sounds,
        },
    },
};
// start game button event listener
startButton.addEventListener("click", () => {
    return (0,_util_startGame__WEBPACK_IMPORTED_MODULE_23__.onGameStart)(gameButtonsConfigObj.onGameStart);
});
// game over and restart game event listener
gameOver.addEventListener("click", () => {
    return (0,_util_gameRestart__WEBPACK_IMPORTED_MODULE_24__.gameRestart)(gameButtonsConfigObj.gameRestart);
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
    (0,_alienFiringCycle_alienFiringCycle__WEBPACK_IMPORTED_MODULE_17__.alienFiringCycle)(gameActionAssetsConfigObject.alienFiringCycle, timestamp);
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
    (0,_objectMovement_mothership__WEBPACK_IMPORTED_MODULE_18__.mothershipMovement)(gameActionAssetsConfigObject.mothershipMovement);
    (0,_points_pointsUpdate__WEBPACK_IMPORTED_MODULE_14__.pointsUpdate)(gameActionAssetsConfigObject.pointsUpdate);
    if (_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_7__.scene.isActive) {
        window.requestAnimationFrame(gameAction);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO1FBQzdDLDRCQUE0QixDQUFDLGtCQUFrQixDQUFDLHNCQUFzQjtZQUNwRSxVQUFVLENBQUMsc0JBQXNCLENBQUM7UUFDcEMsK0RBQUssQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7S0FDdkM7SUFFRCwwQkFBMEI7SUFDMUIsK0VBQWtCLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUVwRSxtRUFBWSxDQUFDLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXhELElBQUksK0RBQUssQ0FBQyxRQUFRLEVBQUU7UUFDbEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRBbGllbkNsdXN0ZXIudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZEFsaWVuTGF6ZXJTaG90LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGREZWZlbmRlci50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FkZE9iamVjdHMvYWRkRGVmZW5kZXJMYXplclNob3QudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZE1vdGhlcnNoaXAudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZFBsYXllckxpZmUudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZFNoaWVsZHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hbGllbkRlYXRoQW5kUG9pbnRzL2FsaWVuRGVhdGhBbmRQb2ludHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hbGllbkZpcmluZ0N5Y2xlL2FsaWVuRmlyaW5nQ3ljbGUudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hbmltYXRpb25zL2FsaWVuTGF6ZXJTaG90U3ByaXRlcy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FuaW1hdGlvbnMvYWxpZW5TcHJpdGVzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvY29sbGlzaW9uQ2hlY2tlci9kZWZlbmRlckFsaWVuTGF6ZXJTaG90LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvY29sbGlzaW9uQ2hlY2tlci9zaGllbGRBbGllbkxhemVyU2hvdC50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2dlbmVyYWxHYW1lSW5mby9nZW5lcmFsSW5mby50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L2FsaWVuQ2x1c3Rlci50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L2FsaWVuTGF6ZXJTaG90cy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L2xhemVyU2hvdHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9vYmplY3RNb3ZlbWVudC9tb3RoZXJzaGlwLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvcGxheWVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvcGxheWVyL3BsYXllci50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3BsYXllci9wbGF5ZXJNb3ZlbWVudENvbnRyb2xscy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3BvaW50cy9wb2ludHNVcGRhdGUudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9yZXNwd2FuL2FsaWVucy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3NvdW5kcy9zb3VuZHMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy91dGlsL2dhbWVSZXN0YXJ0LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvdXRpbC9pc0NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3V0aWwvc3RhcnRHYW1lLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgYWxpZW4gY2x1c3RlciBjYXBzdWxhdGVkIGluIGEgc2luZ2xlIG1vZHVsZSB3aXRoIDIgY2xhc3Nlc1xyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGZpcnN0IGNsYXNzIHRvIHJlbmRlcnMgYSBzaW5nbGUgQWxpZW4gd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkLlxyXG4vLyBhZGRpdGlvbmFsbHkgZWFjaCBpbnN0YW5jZSBjb250YWlucyByZWZlcmVuY2UgdG8gdGhlIGh0bWwgZGl2IGVsZW1lbnQgdGhlIGFsaWVuIGlzIHJlbmRlciBpbnRvXHJcbi8vcHJpdmF0ZSBjbGFzcyB1c2VkIG9ubHkgaW4gdGhpcyBtb2R1bGVcclxuY2xhc3MgQWRkU2luZ2xlQWxpZW4ge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3YXkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgaXMgdXNlZFxyXG4gIGFsaWVuITogSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50IGdpdmVzIGl0IHRoZSBhcHByb3ByaWF0ZSBjbGFzcyBmb3IgYSBzaW5nbGUgYWxpZW5cclxuICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYWxpZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5hbGllbi5jbGFzc0xpc3QuYWRkKFwiYWxpZW5cIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBzZWNvbmQgY2xhc3MgcmVuZGVycyB0aGUgd2hvbGUgYWxpZW4gY2x1c3RlciB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWQuXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgYWxpZW4gY2x1c3RlciBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkQWxpZW5DbHVzdGVyIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgYWxpZW5DbHVzdGVyITogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdhbWU6IElHYW1lT2JqZWN0KSB7XHJcbiAgICB0aGlzLnJlbmRlcihnYW1lKTtcclxuICAgIHRoaXMuY29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciB0aGUgYWxpZW4gY2x1c3RlclxyXG4gIHByaXZhdGUgcmVuZGVyKGdhbWU6IElHYW1lT2JqZWN0KSB7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5jbGFzc0xpc3QuYWRkKFwiYWxpZW4tY2x1c3RlclwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUubWF4QWxpZW5DbHVzdGVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGFsaWVuSW5zdGFuY2UgPSBuZXcgQWRkU2luZ2xlQWxpZW4oKTtcclxuICAgICAgY29uc3QgYWxpZW4gPSBhbGllbkluc3RhbmNlLmFsaWVuO1xyXG5cclxuICAgICAgLy8gdmlzdWFsbHkgdGhlcmUgYXJlIDMgZGlmZmVyZW50IHR5cGVzIG9mIGFsaWVucywgdGhlIFwiaWZcIiBjaGVjayBtYWtlcyBzdXJlIHRvIHNwbGl0IHRoZW0gYWNjb3JkaW5nbHlcclxuICAgICAgaWYgKGkgPCAxMSkge1xyXG4gICAgICAgIGFsaWVuLmNsYXNzTGlzdC5hZGQoXCJhbGllbi00MHB0c1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChpIDwgMzMpIHtcclxuICAgICAgICBhbGllbi5jbGFzc0xpc3QuYWRkKFwiYWxpZW4tMjBwdHNcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxpZW4uY2xhc3NMaXN0LmFkZChcImFsaWVuLTEwcHRzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWxpZW5DbHVzdGVyLmFwcGVuZENoaWxkKGFsaWVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGFwZW5kcyB0aGUgYWxpZW4gY2x1c3RlciB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5zdHlsZS50b3AgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5zdHlsZS50b3AgPSAwICsgXCJweFwiO1xyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5hbGllbkNsdXN0ZXIpO1xyXG4gIH1cclxufVxyXG4iLCIgIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVuZGVyaW5nIHRoZSBhbGllbiBsYXplciBhdHRhY2tzXHJcblxyXG4vLyBjbGFzcyB0aGF0IHJlbmRlcnMgb25lIGxhemVyIGF0dGFjayB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBsYXplciBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkQWxpZW5MYXplclNob3Qge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBhbGllbkxhemVyU2hvdCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihhbGllbjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHRoaXMucmVuZGVyKGFsaWVuKTtcclxuICAgIHRoaXMuY29uZmlnKGFsaWVuKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBhbGllbiBsYXplciBhdHRhY2tcclxuICBwcml2YXRlIHJlbmRlcihhbGllbjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8vIGNoZWNrIGlmIHRoZSBhbGllbiBleGlzdHMgKCBpZiBpdCBpcyBzdGlsbCBcImFsaXZlXCIpXHJcbiAgICAvLyB0aGlzIHByZXZlbnRzIFwiZGVhZFwiIGFsaWVucyBmcm9tIGF0dGFja2luZyBiZXlvbmQgdGhlIGdyYXZlICggd29vb29vLCBzcG9vb29reSlcclxuICAgIGlmIChhbGllbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuYWxpZW5MYXplclNob3QuY2xhc3NMaXN0LmFkZChcImFsaWVuLWxhemVyLXNob3RcIik7XHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90LnkgPSBhbGllbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgdGhpcy5hbGllbkxhemVyU2hvdC5zdHlsZS50b3AgPSB0aGlzLmFsaWVuTGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICAvLyBhcGVuZHMgdGhlIGFsaWVuIGF0dGFjayB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoYWxpZW46IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvLyBwb3NpdGlvbnMgdGhlIGxhemVyIGF0dGFjayByaWdodCBiZWxvdyB0aGUgc3Blc2lmaWMgYWxpZW5cclxuICAgIHRoaXMuYWxpZW5MYXplclNob3Quc3R5bGUubGVmdCA9XHJcbiAgICAgIGFsaWVuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKyBhbGllbi5vZmZzZXRXaWR0aCAvIDIgLSAxMiArIFwicHhcIjtcclxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKHRoaXMuYWxpZW5MYXplclNob3QpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGxvZ2ljIGZvciByZW5kZXJpbmcgdGhlIG1pZ2h0eSBkZWZlbmRlclxyXG5cclxuLy8gY2xhc3MgdGhhdCByZW5kZXJzIHRoZSBkZWZlbmRlciB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBkZWZlbmRlciBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkRGVmZW5kZXIge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBkZWZlbmRlciE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgIHRoaXMucmVuZGVyKHBsYXllcik7XHJcbiAgICB0aGlzLmNvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50IGdpdmVzIGl0IHRoZSBhcHByb3ByaWF0ZSBjbGFzcyBmb3IgdGhlIGRlZmVuZGVyXHJcbiAgcHJpdmF0ZSByZW5kZXIocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICB0aGlzLmRlZmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuZGVmZW5kZXIuY2xhc3NMaXN0LmFkZChcImRlZmVuZGVyXCIpO1xyXG4gICAgdGhpcy5kZWZlbmRlci5zdHlsZS5sZWZ0ID0gcGxheWVyLnggKyBcInB4XCI7XHJcbiAgICB0aGlzLmRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55ICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgLy8gYXBlbmRzIHRoZSBkZWZlbmRlciB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLmRlZmVuZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVuZGVyaW5nIHRoZSBhbGllbiBsYXplciBhdHRhY2tzXHJcblxyXG4vLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbmNvbnN0IGdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWFyZWFcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gY2xhc3MgdGhhdCByZW5kZXJzIG9uZSBkZWZlbmRlciBsYXplciBhdHRhY2sgd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgbGF6ZXIgaXMgcmVuZGVyIGludG9cclxuZXhwb3J0IGNsYXNzIEFkZERlZmVuZGVyTGF6ZXJTaG90IHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgbGF6ZXJTaG90ITogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBsYXllcjogSVBsYXllcikge1xyXG4gICAgdGhpcy5yZW5kZXIocGxheWVyKTtcclxuICAgIHRoaXMuY29uZmlnKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciBhIGRlZmVuZGVyIGxhemVyIGF0dGFja1xyXG4gIHByaXZhdGUgcmVuZGVyKHBsYXllcjogSVBsYXllcikge1xyXG4gICAgdGhpcy5sYXplclNob3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5sYXplclNob3QuY2xhc3NMaXN0LmFkZChcImxhemVyLXNob3RcIik7XHJcbiAgfVxyXG5cclxuICAvLyBwb3NpdGlvbnMgdGhlIGxhemVyIHJpZ2h0IGFib3ZlIHRoZSBkZWZlbmRlciBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZ2FtZSBzY3JlZW5cclxuICBwcml2YXRlIGNvbmZpZyhwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgIHRoaXMubGF6ZXJTaG90LnkgPSBwbGF5ZXIueSAtIHBsYXllci5oZWlnaHQgLSAyNTtcclxuICAgIHRoaXMubGF6ZXJTaG90LnN0eWxlLnRvcCA9IHRoaXMubGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcbiAgICB0aGlzLmxhemVyU2hvdC5zdHlsZS5sZWZ0ID0gcGxheWVyLnggKyBwbGF5ZXIud2lkdGggLyAyIC0gMTIgKyBcInB4XCI7XHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLmxhemVyU2hvdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElTb3VuZHMgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdW5kc1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgYWxpZW4gbW90aGVyc2hpcFxyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGNsYXNzIHRoYXQgcmVuZGVycyBvbmUgTW90aGVyc2hpcCB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBNb3RoZXJzaGlwIGlzIHJlbmRlciBpbnRvXHJcbmV4cG9ydCBjbGFzcyBBZGRNb3RoZXJzaGlwIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50cyB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIG1vdGhlcnNoaXAhOiBIVE1MRGl2RWxlbWVudDtcclxuICBtb3RoZXJzaGlwQ3VycmVudFNvdW5kITogSFRNTEF1ZGlvRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc291bmRzOiBJU291bmRzKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5jb25maWcoc291bmRzKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIGEgbW90aGVyc2hpcFxyXG4gIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5tb3RoZXJzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMubW90aGVyc2hpcC5jbGFzc0xpc3QuYWRkKFwiYWxpZW5cIiwgXCJtb3RoZXJzaGlwXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gcG9zaXRpb25zIHRoZSBtb3RoZXJzaGlwLCBnaXZlcyBpdCBhIHJhbmRvbSBtb3ZlbWVudCBzb3VuZCBlZmZlY3QgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGdhbWUgc2NyZWVuXHJcbiAgcHJpdmF0ZSBjb25maWcoc291bmRzOiBJU291bmRzKSB7XHJcbiAgICB0aGlzLm1vdGhlcnNoaXAueCA9IGdhbWVBcmVhLm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5tb3RoZXJzaGlwLnN0eWxlLmxlZnQgPSB0aGlzLm1vdGhlcnNoaXAueCArIFwicHhcIjtcclxuICAgIHRoaXMubW90aGVyc2hpcC5zdHlsZS50b3AgPSAwICsgXCJweFwiO1xyXG5cclxuICAgIC8vIGdpdmVzIHRoZSBtb3RoZXJzaGlwIGEgcmFuZG9tIHNvdW5kIGVmZmVjdFxyXG4gICAgaWYgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPT09IDApIHtcclxuICAgICAgdGhpcy5tb3RoZXJzaGlwQ3VycmVudFNvdW5kID0gc291bmRzLm1vdGhlcnNoaXBTb3VuZEhpZ2hQaXRjaDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW90aGVyc2hpcEN1cnJlbnRTb3VuZCA9IHNvdW5kcy5tb3RoZXJzaGlwU291bmRMb3dQaXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLm1vdGhlcnNoaXApO1xyXG4gIH1cclxufVxyXG4iLCIvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbmNvbnN0IGxpdmVzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIubGl2ZXMtY291bnRlclwiXHJcbikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gY2xhc3MgdGhhdCByZW5kZXJzIG9uZSBwbGF5ZXIgbGlmZSB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBkZWZlbmRlciBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkUGxheWVyTGlmZSB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIHBsYXllckxpZmUhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5jb25maWcoKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBsaWZlXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnBsYXllckxpZmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5wbGF5ZXJMaWZlLmNsYXNzTGlzdC5hZGQoXCJvbmUtbGlmZVwiKTtcclxuICB9XHJcblxyXG4gIC8vIGFwZW5kcyB0aGUgbGlmZSB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICBsaXZlc0NvdW50ZXIuYXBwZW5kQ2hpbGQodGhpcy5wbGF5ZXJMaWZlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgZGVmZW5kZXIgc2hpZWxkcyBjYXBzdWxhdGVkIGluIGEgc2luZ2xlIG1vZHVsZSB3aXRoIDIgY2xhc3Nlc1xyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGZpcnN0IGNsYXNzIHRvIHJlbmRlcnMgYSBzaW5nbGUgc2hpZWxkIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBpcyByZW5kZXIgaW50b1xyXG4vL3ByaXZhdGUgY2xhc3MgdXNlZCBvbmx5IGluIHRoaXMgbW9kdWxlXHJcbmNsYXNzIEFkZFNpbmdsZVNoaWVsZCB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIHNpbmdsZVNoaWVsZCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciB0aGUgZGVmZW5kZXIgc2hpZWxkXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnNpbmdsZVNoaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnNpbmdsZVNoaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkXCIsIFwic2hpZWxkLWZ1bGwtaHBcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBzZWNvbmQgY2xhc3MgcmVuZGVycyBhbGwgNCBzaGllbGRzIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBjbHVzdGVyIGlzIHJlbmRlciBpbnRvXHJcbmV4cG9ydCBjbGFzcyBBZGRTaGllbGRzIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgc2hpZWxkRmllbGQhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5jb25maWcoKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBzaGllbGQgZmllbGQgKCBoZXkgdGhhdCByaHltZXMhKVxyXG4gIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtZmllbGRcIik7XHJcblxyXG4gICAgLy8gbG9vcCB0byBjcmVhdGUgNCBzaW5nbGUgc2hpZWxkcyBhbmQgYXBwZW5kIGVhY2ggdG8gdGhlIHNoaWVsZCBmaWVsZCAoIGhleSB0aGF0IHJoeW1lcywgZm9yIGEgc2Vjb25kIHRpbWUsIHdoYXQgYXJlIHRoZSBvZGRzLCByaWdodD8pXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc2luZ2xlU2hpZWxkSW5zdGFuY2UgPSBuZXcgQWRkU2luZ2xlU2hpZWxkKCk7XHJcbiAgICAgIGNvbnN0IHNpbmdsZVNoaWVsZCA9IHNpbmdsZVNoaWVsZEluc3RhbmNlLnNpbmdsZVNoaWVsZDtcclxuICAgICAgdGhpcy5zaGllbGRGaWVsZC5hcHBlbmRDaGlsZChzaW5nbGVTaGllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcGxhY2VzIHRoZSBzaGllbGRzIGluIHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb25zIGFuZCByZW5kZXJzIHRoZW0gdG8gdGhlIGdhbWUgc2NyZWVuXHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLnN0eWxlLndpZHRoID0gZ2FtZUFyZWEub2Zmc2V0V2lkdGggLyAxLjI1ICsgXCJweFwiO1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZC5zdHlsZS50b3AgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSAyMDAgKyBcInB4XCI7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLnN0eWxlLmxlZnQgPSBnYW1lQXJlYS5vZmZzZXRXaWR0aCAvIDEwICsgXCJweFwiO1xyXG5cclxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKHRoaXMuc2hpZWxkRmllbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IElJc0NvbGxpc2lvbiB9IGZyb20gXCIuLi9tb2RlbHMvaXNDb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgSVNvdW5kcyB9IGZyb20gXCIuLi9tb2RlbHMvc291bmRzXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgY2hlY2tpbmcgaWYgYW4gYWxpZW4gaGFzIGJlZW4gaGl0LiBJZiB5ZXMsIHRoZSBhbGllbiBpcyBtYXJrZWQgYXMgXCJkZWFkXCIgYW5kIHRoZSBwbGF5ZXIgaXMgYXdhcmVkIHBvaW50c1xyXG4vLyBob3cgZG8gd2Uga25vdyBpZiBhbiBhbGllbiBpcyBkZWFkIHlvdSBhc2sgPyAtPiBsb2dpYyBpcyB0aGUgZm9sbG93aW5nLCB3ZSB0YWtlIHRoZSAyIEhUTUwgZWxlbWVudHMgKCBib3RoIGFyZSBkaXZzKSBhbmQgY2hlY2sgaWYgb25lIGhhcyBlbnRlcmVkIHRoZSBwb3NpdGlvbiBvZiB0aGUgb3RoZXIgdXNpbmcgdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbi8vIGNoZWNrIHRoZSBpc0NvbGxpc2lvbiBtZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb25cclxuXHJcbi8vIGRlYWQgYWxpZW5zIGFyZSBzdGlsbCBvbiB0aGUgc2NyZWVuIGJ1dCBhcmUgbm90IHZpc2libGUgdG8gdGhlIHBsYXllciwgbm9yIGNhbiB0aGV5IGJlIGludGVyYWN0ZWQgd2l0aFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuRGVhdGhBbmRQb2ludHMoe1xyXG4gIGlzQ29sbGlzaW9uLFxyXG4gIHNvdW5kcyxcclxuICBzY2VuZSxcclxufToge1xyXG4gIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb247XHJcbiAgc291bmRzOiBJU291bmRzO1xyXG4gIHNjZW5lOiBJU2NlbmVPYmplY3Q7XHJcbn0pIHtcclxuICAvLyBzZWxlY3RzIGFsbCBhbGllbiBIVE1MIGRpdiBlbGVtZW50cyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBsZXQgYWxpZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyBsb29wcyB0aHJvdWdoIHRoZSBhbGllbiBhcnJheSB0byBjaGVjayBpZiBhbnkgYWxpZW4gd2FzIGhpdFxyXG4gIGFsaWVucy5mb3JFYWNoKChhbGllbikgPT4ge1xyXG4gICAgLy8gc2VsZWN0cyBhbGwgZGVmZW5kZXIgbGF6ZXIgYXR0YWNrIEhUTUwgZGl2IGVsZW1lbnRzIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gICAgbGV0IGxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5sYXplci1zaG90XCJcclxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgLy8gbG9vcHMgbG9vcHMgdGhyb3VnaCB0aGUgbGF6ZXIgc2hvdHMgdG8gY2hlY2sgaWYgYW55IG9mIHRoZSBhbGllbnMgd2VyZSBoaXRcclxuICAgIC8vIGlmIGFueSBhcmUgaGl0IGEgZGVhdGggYW5pbWF0aW9uIGFuZCBzb3VuZCBhcmUgcGxheWVkIGFuZCB0aGUgYXBwcm9wcmlhdGUgYW1vdW50IG9mIHBvaXRucyBhcmUgZ2l2ZW4gdG8gdGhlIHBsYXllclxyXG4gICAgLy8gdGhlIGxhemVyIGF0dGFjayBpcyByZW1vdmVkIGFmdGVyIGhpdGluZyBhbiBhbGllblxyXG4gICAgbGF6ZXJTaG90cy5mb3JFYWNoKChsYXplclNob3QpID0+IHtcclxuICAgICAgLy8gY2hlY2tzIGZvciBjb2xsaXNpb24gYmV0d2VlbiB0aGUgYWxpZW4gYW5kIHRoZSBkZWZlbmRlciBhdHRhY2suIEZvciBtb3JlIGluZm8gc2VlIHRoZSBpc0NvbGxpc2lvbiBmaWxlXHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0NvbGxpc2lvbihsYXplclNob3QsIGFsaWVuKSAmJlxyXG4gICAgICAgIGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImRlYWQtYWxpZW5cIikgPT09IGZhbHNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIGdpdmVzIHRoZSBhbGllbiBhIGRlYXRoIGFuaW1hdGlvbiB3aGljaCBsYXN0cyBmb3IgNTAgbWlsaXNlY29uZHMgYW5kIHRoZW4gbWFrZXMgdGhlIGFsaWVuIFwiZGVhZFwiXHJcbiAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZGVhdGgtYW5pbWF0aW9uLmpwZycpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhbGllbi5jbGFzc0xpc3QuYWRkKFwiZGVhZC1hbGllblwiKTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgLy8gcmVtb3ZpbmcgdGhlIGRlZmVuZGVyIGxhemVyIGF0dGFjayBmcm9tIHRoZSBnYW1lIHNjcmVlblxyXG4gICAgICAgIGxhemVyU2hvdC5yZW1vdmUoKTtcclxuICAgICAgICAvLyBkZWF0aCBzb3VuZCBlZmZlY3RcclxuICAgICAgICBzb3VuZHMuYWxpZW5EZWF0aFNvdW5kLnBsYXkoKTtcclxuXHJcbiAgICAgICAgLy8gcG9pbnRzIGZvciB0aGUgcGxheWVyXHJcbiAgICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTQwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSA0MDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTIwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAyMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTEwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAxMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcIm1vdGhlcnNoaXBcIikpIHtcclxuICAgICAgICAgIHNjZW5lLnNjb3JlICs9IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0LCBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgY2hvb3Npbmcgd2hlbiBhbiBhbGllbiBzaG91bGQgYXR0YWNrXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxpZW5GaXJpbmdDeWNsZShcclxuICB7XHJcbiAgICBzY2VuZSxcclxuICAgIGdhbWUsXHJcbiAgICBBZGRBbGllbkxhemVyU2hvdCxcclxuICB9OiB7XHJcbiAgICBzY2VuZTogSVNjZW5lT2JqZWN0O1xyXG4gICAgZ2FtZTogSUdhbWVPYmplY3Q7XHJcbiAgICBBZGRBbGllbkxhemVyU2hvdDogYW55OyAvL1RPRE8gY2hlY2sgd2h5IGl0IHdvdWxkIG5vdCBhY2NwZXQgdHlwZW9mIEFkZEFsaWVuTGF6ZXJTaG90XHJcbiAgfSxcclxuICB0aW1lc3RhbXA6IG51bWJlclxyXG4pIHtcclxuICAvLyBzZWxlY3RzIGFsbCBhbGllbiBIVE1MIGRpdiBlbGVtZW50cyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBhbGllbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFsaWVuXCIpO1xyXG5cclxuICAvLyBmaWx0ZXJzIHRoZSBkZWFkIGFsaWVuc1xyXG4gIGNvbnN0IHJlbWFpbmluZ0FsaWVucyA9IEFycmF5LmZyb20oYWxpZW5zKS5maWx0ZXIoXHJcbiAgICAoYWxpZW4pID0+IGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImRlYWQtYWxpZW5cIikgPT09IGZhbHNlXHJcbiAgKTtcclxuICAvLyBwaWNrcyBhIHJhbmRvbSBwb3N0aW9uIHRvIG1ha2Ugc3VyZSBhIHJhbmRvbSBhbGllbiBmaXJlcyBldmVyeSB0aW1lXHJcbiAgY29uc3QgcmFuZG9tQWxpZW5Qb3NpdGlvbiA9IE1hdGgucm91bmQoXHJcbiAgICByZW1haW5pbmdBbGllbnMubGVuZ3RoICogTWF0aC5yYW5kb20oKVxyXG4gICk7XHJcbiAgLy8gdGhlcmUgaXMgYW4gaW50ZXJ2YWwgc2V0IGJldHdlZW4gYWxpZW4gYXR0YWNrc1xyXG4gIC8vIHRoZSBpZiBjaGVja3MgaWYgdGhlIGludGVydmFsIGhhcyBleHBpcmVkIGJlZm9yZSBhcHBlbmRpbmcgYW4gYWxpZW4gYXR0YWNrIHRvIHRoZSBnYW1lIHNjcmVlblxyXG4gIGlmICh0aW1lc3RhbXAgLSBzY2VuZS5sYXN0QWxpZW5MYXplclNob3QgPiBnYW1lLmFsaWVuRmlyZUludGVydmFsKSB7XHJcbiAgICAvLyBjYWxscyB0aGUgQWRkQWxpZW5MYXplclNob3QgY2xhc3MgdG8gYXBwZW5kIGFuIGFsaWVuIGF0dGFjayBhdCBhIHJhbmRvbSBhbGllblxyXG4gICAgbmV3IEFkZEFsaWVuTGF6ZXJTaG90KHJlbWFpbmluZ0FsaWVuc1tyYW5kb21BbGllblBvc2l0aW9uXSk7XHJcbiAgICAvLyBzZXRzIHRoZSBuZXcgaW50ZXJ2YWwgYmV0d2VlbiBhbGllbiBhdHRhY2tzLCBvdGhlcndpc2UgdGhlIGFsaWVucyB3aWxsIGZpcmUgY29uc3RhbnRseSAod2hpY2ggaXMgc29tZXdoYXQgaGlsYXJpb3VzLCBidXQgd2lsbCBhbG1vc3QgaW5zdGFudGx5IGNyYXNoIHRoZSBnYW1lKVxyXG4gICAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90ID0gdGltZXN0YW1wO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIGFuaW1hdGluZyB0aGUgYWxpZW4gbGF6ZXIgYXR0YWNrXHJcbi8vIHRoZSB3YXkgdGhlIGF0dGFja3MgYXJlIGFuaW1hdGVkIGlzIGFzIGZvbGxvd3MgLT4gZWFjaCBmcmFtZSB0aGUgZ2FtZSBjaGVja3MgdGhlIGJhY2tncm91bmQgc3BpcmUgYW5kIHRoZSBzcHJpdGUgY2hhbmdlIGludGVydmFsICggbG9jYXRlZCBpbiB0aGUgXCJnYW1lXCIgb2JqZWN0KSBhbmQgY2hhbmdlcyB0aGUgc3ByaXRlIHNpbXVsYXRpbmcgbW92ZW1lbnRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGllbkxhemVyU2hvdFNwcml0ZXMoXHJcbiAgdGltZXN0YW1wOiBudW1iZXIsXHJcbiAgc2NlbmU6IElTY2VuZU9iamVjdCxcclxuICBnYW1lOiBJR2FtZU9iamVjdCxcclxuICBhbGllbkxhemVyU2hvdDogSFRNTERpdkVsZW1lbnRcclxuKTogdm9pZCB7XHJcbiAgaWYgKFxyXG4gICAgdGltZXN0YW1wIC0gc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPlxyXG4gICAgZ2FtZS5hbGllbkxhemVyU2hvdFNwcml0ZUNoYW5nZUludGVydmFsXHJcbiAgKSB7XHJcbiAgICAvLyBjaGVjayB0aGUgY3VycmVudCBzcHJpdGUgYW5kIGFkanVzdHMgaXMgYWNjb3JkaW5nIHRvIHRoZSBzcHJpdGUgYXR0YWNrIGludGVydmFsXHJcbiAgICBpZiAoYWxpZW5MYXplclNob3Quc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwidHlwZS0xXCIpKSB7XHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9hdHRhY2stdHlwZS0yLnBuZycpXCI7XHJcbiAgICB9IGVsc2UgaWYgKGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcInR5cGUtMlwiKSkge1xyXG4gICAgICBhbGllbkxhemVyU2hvdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvYXR0YWNrLXR5cGUtMS5wbmcnKVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxpZW5MYXplclNob3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2F0dGFjay10eXBlLTIucG5nJylcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGp1c3RzIHRoZSBzcHJpdGUgaW50ZXJ2YWwsIHRoaXMgbWFrZXMgc3VyZSB0aGEgYW5pbWF0aW9uIGRvZXMgbm90IG9jY3VyIHRvbyBvZnRlblxyXG4gICAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0LCBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgYW5pbWF0aW9uIHRoZSBhbGllbnNcclxuLy8gdGhlIHdheSB0aGUgYWxpZW5zIGFyZSBhbmltYXRlZCBpcyBhcyBmb2xsb3dzIC0+IGVhY2ggZnJhbWUgdGhlIGdhbWUgY2hlY2tzIHRoZSBiYWNrZ3JvdW5kIHNwcml0ZSBhbmQgdGhlIHNwcml0ZSBjaGFuZ2UgaW50ZXJ2YWwgKCBsb2NhdGVkIGluIHRoZSBcImdhbWVcIiBvYmplY3QpIGFuZCBjaGFuZ2VzIHRoZSBzcHJpdGUgc2ltdWxhdGluZyBtb3ZlbWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuU3ByaXRlQW5pbWF0aW9uKFxyXG4gIHsgc2NlbmUsIGdhbWUgfTogeyBzY2VuZTogSVNjZW5lT2JqZWN0OyBnYW1lOiBJR2FtZU9iamVjdCB9LFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyXHJcbikge1xyXG4gIC8vIHNlbGVjdHMgYWxsIGFsaWVuIEhUTUwgZGl2IGVsZW1lbnRzIGFuZCBzYXZlcyB0aGVtIGluIGFuIGFycmF5XHJcbiAgY29uc3QgYWxpZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGlmIChcclxuICAgIHRpbWVzdGFtcCAtIHNjZW5lLmxhc3RBbGllblNwcml0ZUludGVydmFsID5cclxuICAgIGdhbWUuYWxpZW5TcHJpdGVDaGFuZ2VJbnRlcnZhbFxyXG4gICkge1xyXG4gICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXJyYXkgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlIGFuaW1hdGlvbiBmb3IgdGhlIDQwcHRzIGFsaWVuc1xyXG4gICAgYWxpZW5zLmZvckVhY2goKGFsaWVuKSA9PiB7XHJcbiAgICAgIGlmIChhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhbGllbi00MHB0c1wiKSkge1xyXG4gICAgICAgIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItNDBwdHMtMVwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS00MHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItNDBwdHMtMlwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS00MHB0cy0xLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktNDBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXJyYXkgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlIGFuaW1hdGlvbiBmb3IgdGhlIDIwcHRzIGFsaWVuc1xyXG5cclxuICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTIwcHRzXCIpKSB7XHJcbiAgICAgICAgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0yMHB0cy0xXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTIwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0yMHB0cy0yXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTIwcHRzLTEucG5nJylcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS0yMHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBsb29wcyB0aHJvdWdoIHRoZSBhbGllbiBhcnJheSBhbmQgYXBwbGllcyB0aGUgYXBwcm9wcmlhdGUgYW5pbWF0aW9uIGZvciB0aGUgMTBwdHMgYWxpZW5zXHJcblxyXG4gICAgICBpZiAoYWxpZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxpZW4tMTBwdHNcIikpIHtcclxuICAgICAgICBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTEwcHRzLTFcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktMTBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTEwcHRzLTJcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktMTBwdHMtMS5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTEwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFkanVzdHMgdGhlIHNwcml0ZSBpbnRlcnZhbCwgdGhpcyBtYWtlcyBzdXJlIHRoYSBhbmltYXRpb24gZG9lcyBub3Qgb2NjdXIgdG9vIG9mdGVuXHJcbiAgICAgIHNjZW5lLmxhc3RBbGllblNwcml0ZUludGVydmFsID0gdGltZXN0YW1wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElTY2VuZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL21vZGVscy9pc0NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBjaGVja2luZyBpZiBhbiBhbGllbiBoYXMgaGl0IHRoZSBkZWZlbmRlclxyXG5cclxuLy8gaG93IGRvIHdlIGtub3cgaWYgdGhlIGRlZmVuZGVyIGhhcyBiZWVuIGhpdCB5b3UgYXNrID8gLT4gbG9naWMgaXMgdGhlIGZvbGxvd2luZywgd2UgdGFrZSB0aGUgMiBIVE1MIGVsZW1lbnRzICggYm90aCBhcmUgZGl2cykgYW5kIGNoZWNrIGlmIG9uZSBoYXMgZW50ZXJlZCB0aGUgcG9zaXRpb24gb2YgdGhlIG90aGVyIHVzaW5nIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4vLyBjaGVjayB0aGUgaXNDb2xsaXNpb24gbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcblxyXG4vLyB0aGUgbmFtZSBvZiB0aGUgZnVuYyBpcyBxdWl0ZSB0aGUgbW91dGhmdWwgSSBrbm93XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcihcclxuICBkZWZlbmRlcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgaXNDb2xsaXNpb246IElJc0NvbGxpc2lvbixcclxuICBhbGllbkxhemVyU2hvdDogSFRNTERpdkVsZW1lbnQsXHJcbiAgcGxheWVyOiBJUGxheWVyLFxyXG4gIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudCxcclxuICBnYW1lT3ZlcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgc2NlbmU6IElTY2VuZU9iamVjdFxyXG4pIHtcclxuICAvLyB0aGUgZnVuYyByZXZlYWxzIHRoZSBnYW1lIG92ZXIgc2NyZWVuIGFuZCBzdG9wcyB0aGUgZ2FtZSB1bnRpbCB0aGUgcGxheWVyIGRlY2lkZXMgdG8gcmVzdGFydFxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyQWN0aW9uKGdhbWVPdmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgc2NlbmUuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIGdhbWVPdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgZm9yIGNvbGxpc2lvbiBiZXR3ZWVuIHRoZSBkZWZlbmRlciBhbmQgYW4gYWxpZW4gYXR0YWNrXHJcbiAgaWYgKGlzQ29sbGlzaW9uKGRlZmVuZGVyLCBhbGllbkxhemVyU2hvdCkpIHtcclxuICAgIC8vIHNlbGxlY3RzIHRoZSByZW1haW5pbmcgbGl2ZXNcclxuICAgIGxldCBsaXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub25lLWxpZmVcIik7XHJcbiAgICAvLyByZW1vdmVzIHRoZSBhbGllbiBhdHRhY2sgZm9ybSB0aGUgZ2FtZSBzY3JlZW5cclxuICAgIGFsaWVuTGF6ZXJTaG90LnJlbW92ZSgpO1xyXG4gICAgLy8gaWYgdGhlIHBsYXllcnMgc3RpbGwgaGFzIGxpdmVzIG9uZSBpcyByZW1vdmVkIGFuZCB0aGUgcG9zaXRpb24gb2YgdGhlIGRlZmVuZGVyIGlzIHJlc2V0IHRvIHRoZSBzdGFydGluZyBvbmVcclxuICAgIGlmIChsaXZlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHBsYXllci54ID0gMTAwO1xyXG4gICAgICBwbGF5ZXIueSA9IGdhbWVBcmVhLm9mZnNldEhlaWdodCAtIDUwO1xyXG4gICAgICBkZWZlbmRlci5zdHlsZS5sZWZ0ID0gcGxheWVyLnggKyBcInB4XCI7XHJcbiAgICAgIGRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55ICsgXCJweFwiO1xyXG4gICAgICBsaXZlc1tsaXZlcy5sZW5ndGggLSAxXS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBtb3JlIGxpdmVzIHRoZSBnYW1lIGlzIG92ZXIgYW5kIHRoZSBwbGF5ZXIgaXMgZ2l2ZW4gdGhlIG9wdGlvbnMgdG8gc3RhcnQgYWdhaW5cclxuICAgICAgbGl2ZXNbbGl2ZXMubGVuZ3RoIC0gMV0ucmVtb3ZlKCk7XHJcbiAgICAgIGdhbWVPdmVyQWN0aW9uKGdhbWVPdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL21vZGVscy9pc0NvbGxpc2lvblwiO1xyXG5cclxuLy8gbG9naWMgZm9yIGNoZWNraW5nIGlmIGFuIGFsaWVuIGhhcyBoaXQgb25lIG9mIHRoZSBkZWZlbmRlcidzIHNoaWVsZHNcclxuXHJcbi8vIGhvdyBkbyB3ZSBrbm93IGlmIGEgc2hpZWxkIGhhcyBiZWVuIGhpdCB5b3UgYXNrID8gLT4gbG9naWMgaXMgdGhlIGZvbGxvd2luZywgd2UgdGFrZSB0aGUgMiBIVE1MIGVsZW1lbnRzICggYm90aCBhcmUgZGl2cykgYW5kIGNoZWNrIGlmIG9uZSBoYXMgZW50ZXJlZCB0aGUgcG9zaXRpb24gb2YgdGhlIG90aGVyIHVzaW5nIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4vLyBjaGVjayB0aGUgaXNDb2xsaXNpb24gbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcblxyXG4vLyB0aGUgbmFtZSBvZiB0aGUgZnVuYyBpcyBxdWl0ZSB0aGUgbW91dGhmdWwgSSBrbm93XHJcbmV4cG9ydCBmdW5jdGlvbiBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIoXHJcbiAgYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb25cclxuKSB7XHJcbiAgLy8gc2VsZWN0cyBhbGwgb2YgdGhlIHNoaWVsZCBIVE1MIGVsZW1lbnRzIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gIGxldCBzaGllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLnNoaWVsZFwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICAvLyBsb29wcyB0aHJvdWdoIHRoZSBzaGllbGQgZWxlbWVudHMgYW5kIGNoZWNrIGlmIGFueSBoYXMgYmVlbiBoaXRcclxuICBzaGllbGRzLmZvckVhY2goKHNoaWVsZCkgPT4ge1xyXG4gICAgLy8gc2hpZWxkcyBoYXZlIDMgXCJsaXZlc1wiLCBlYWNoIGhpdCByZW1vdmVzIG9uZSBhbmQgZGFtYWdlcyB0aGVtIHdoaWNoIGlzIHJlcHJlc2VudGVkIGJ5IGNoYW5naW5nIHRoZSBzcHJpdGUgd2l0aCBhIG1vcmUgZGFtYWdlZCB2ZXJzaW9uXHJcbiAgICBpZiAoXHJcbiAgICAgIGlzQ29sbGlzaW9uKHNoaWVsZCwgYWxpZW5MYXplclNob3QpICYmXHJcbiAgICAgIHNoaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGllbGQtZGVzdHJveWVkXCIpID09PSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLWZ1bGwtaHBcIikpIHtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LnJlbW92ZShcInNoaWVsZC1mdWxsLWhwXCIpO1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkLTFoaXRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNoaWVsZC0xaGl0XCIpKSB7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGllbGQtMWhpdFwiKTtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmFkZChcInNoaWVsZC0yaGl0c1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLTJoaXRzXCIpKSB7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGllbGQtMmhpdHNcIik7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtM2hpdHNcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNoaWVsZC0zaGl0c1wiKSkge1xyXG4gICAgICAgIC8vIHdoZW4gdGhlIHNoaWVsZCBpcyBkZXN0cm95ZWQgaXQgbGVhdmVzIGEgXCJ3cmVja1wiIGFuZCBjYW5ub3Qgc3RvcCBhbGllbiBhdHRhY2tzXHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtZGVzdHJveWVkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJlbW92ZXMgYWxpZW4gYXR0YWNrIGFmdGVyIGl0IGhhcyBoaXQgdGhlIHNoaWVsZFxyXG4gICAgICBhbGllbkxhemVyU2hvdC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbW9kdWxlIGhvbGQgb2JqZWN0cyB0aGF0IGNvbnRhaW4gZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2FtZSBzdGF0ZSAoIGJ1dCBub3QgYWJvdXQgdGhlIHBsYXllciwgaGlzIHN0YXRlIGlzIGluIHRoZSBwbGF5ZXIgZm9sZGVyKVxyXG5cclxuLy8gZ2VuZXJhbCBzdGF0ZSBpbmZvIGFib3V0IHRoZSBnYW1lIHN0YXRlXHJcbmV4cG9ydCBsZXQgZ2FtZTogSUdhbWVPYmplY3QgPSB7XHJcbiAgc3BlZWQ6IDIsXHJcbiAgcGxheWVyTW92ZW1lbnRNdWx0aXBsaWVyOiAyLFxyXG4gIGxhemVyU2hvdE1vdmVtZW50TXVsdGlwbGllcjogMyxcclxuICBhbGllbkNsdXN0ZXJNdWx0aXBsaWVyOiAwLjQsXHJcbiAgYWxpZW5Qb3M6IDAsXHJcbiAgYWxpZW5EaXJlY3Rpb246IDEsXHJcbiAgYWxpZW5TcHJpdGVDaGFuZ2VJbnRlcnZhbDogNTAwLFxyXG4gIGFsaWVuTGF6ZXJTaG90U3ByaXRlQ2hhbmdlSW50ZXJ2YWw6IDUwLFxyXG4gIGFsaWVuRmlyZUludGVydmFsOiAyMDAwLFxyXG4gIGZpcmVJbnRlcnZhbDogODAwLFxyXG4gIGV4dHJhTGl2ZXNDb3VudGVyOiAxLFxyXG4gIG1vdGhlcnNoaXBTcGF3bkludGVydmFsOiA1MDAwMCxcclxuICBtb3RoZXJzaGlwTW92ZW1lbnRNdWx0aXBsaWVyOiA1LFxyXG4gIG1heEFsaWVuQ2x1c3RlclNpemU6IDU1LFxyXG4gIG1heFBsYXllckxpdmVzOiA1LFxyXG59O1xyXG5cclxuLy8gZ2VuZXJhbCBzdGF0ZSBpbmZvIGFib3V0IHNjZW5lXHJcbi8vIG1vc3Qgb2YgdGhlIHZhbHVlcyBzdGFydCBhdCAwIGJ1dCBhcmUgdXBkYXRlZCB0aHJvdWdoIHRoZSBnYW1lXHJcbmV4cG9ydCBsZXQgc2NlbmU6IElTY2VuZU9iamVjdCA9IHtcclxuICBzY29yZTogMCxcclxuICBsYXN0QWxpZW5TcHJpdGVJbnRlcnZhbDogMCxcclxuICBsYXN0QWxpZW5MYXplclNob3RTcHJpdGVJbnRlcnZhbDogMCxcclxuICBsYXN0QWxpZW5MYXplclNob3Q6IDAsXHJcbiAgbGFzdFNwYXduTW90aGVyc2hpcDogMCxcclxuICBpc0FjdGl2ZTogdHJ1ZSwgLy8gY2hlY2tzIGlmIHRoZSBnYW1lIGlzIHN0aWxsIGFjdGl2ZSwgaWYgc2V0IHRvIGZhbHNlIHRoZSBnYW1lIHdpbGwgc3RvcFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIGFsaWVuIGNsdXN0ZXIgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxpZW5DbHVzdGVyTW92ZW1lbnQoe1xyXG4gIGdhbWUsXHJcbiAgZ2FtZUFyZWEsXHJcbn06IHtcclxuICBnYW1lOiBJR2FtZU9iamVjdDtcclxuICBnYW1lQXJlYTogSFRNTERpdkVsZW1lbnQ7XHJcbn0pIHtcclxuICAvLyBzZWxsZXRzIHRoZSBhbGllbiBjbHVzdGVyIEhUTUwgZGl2IGVsZW1lbnRcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgY29uc3QgYWxpZW5DbHVzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmFsaWVuLWNsdXN0ZXJcIlxyXG4gICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAvLyBkZXRlcm1lbnRzIHRoZSBhbGllbiBjbHVzdGVyIG1vdmVtZW50IGRpcmVjdGlvblxyXG4gIGlmIChnYW1lLmFsaWVuUG9zICsgYWxpZW5DbHVzdGVyLm9mZnNldFdpZHRoID4gZ2FtZUFyZWEub2Zmc2V0V2lkdGggLSAxMDApIHtcclxuICAgIGdhbWUuYWxpZW5EaXJlY3Rpb24gPSAtZ2FtZS5zcGVlZDtcclxuICB9IGVsc2UgaWYgKGdhbWUuYWxpZW5Qb3MgPCAxMDApIHtcclxuICAgIGdhbWUuYWxpZW5EaXJlY3Rpb24gPSBnYW1lLnNwZWVkO1xyXG4gIH1cclxuXHJcbiAgLy8gbW92ZXMgdGhlIGFsaWVuIGNsdXN0ZXIgYWNjb3JkaW5nIHRoZSB0aGUgYWxpZW4gZGlyZWN0aW9uXHJcbiAgZ2FtZS5hbGllblBvcyArPSBnYW1lLmFsaWVuRGlyZWN0aW9uICogZ2FtZS5hbGllbkNsdXN0ZXJNdWx0aXBsaWVyO1xyXG4gIGFsaWVuQ2x1c3Rlci5zdHlsZS5sZWZ0ID0gZ2FtZS5hbGllblBvcyArIFwicHhcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGllbkxhemVyU2hvdFNwcml0ZXMgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9hbGllbkxhemVyU2hvdFNwcml0ZXNcIjtcclxuaW1wb3J0IHsgSUdhbWVPYmplY3QsIElTY2VuZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL21vZGVscy9pc0NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgYW4gYWxpZW50IGF0dGFjayBhbmQgIGNoZWNraW5nIGlmIHRoZSBhdHRhY2sgaGFzIGhpdCBlaXRoZXIgdGhlIGRlZmVuZGVyIG9yIG9uZSBvZiB0aGUgc2hpZWxkc1xyXG5cclxudHlwZSBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciA9IHtcclxuICAoXHJcbiAgICBkZWZlbmRlcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgICBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uLFxyXG4gICAgYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgcGxheWVyOiBJUGxheWVyLFxyXG4gICAgZ2FtZUFyZWE6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgZ2FtZU92ZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgc2NlbmU6IElTY2VuZU9iamVjdFxyXG4gICk6IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIHNoaWVsZEFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciA9IHtcclxuICAoYWxpZW5MYXplclNob3Q6IEhUTUxEaXZFbGVtZW50LCBpc0NvbGxpc2lvbjogSUlzQ29sbGlzaW9uKTogdm9pZDtcclxufTtcclxuXHJcbi8vIHRoZSBuYW1lIG9mIHRoZSBmdW5jIGlzIHF1aXRlIHRoZSBtb3V0aGZ1bCBJIGtub3dcclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyKFxyXG4gIHtcclxuICAgIGdhbWUsXHJcbiAgICBzY2VuZSxcclxuICAgIHBsYXllcixcclxuICAgIGdhbWVBcmVhLFxyXG4gICAgaXNDb2xsaXNpb24sXHJcbiAgICBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcixcclxuICAgIHNoaWVsZEFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcixcclxuICAgIGdhbWVPdmVyLFxyXG4gIH06IHtcclxuICAgIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gICAgc2NlbmU6IElTY2VuZU9iamVjdDtcclxuICAgIHBsYXllcjogSVBsYXllcjtcclxuICAgIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGlzQ29sbGlzaW9uOiBJSXNDb2xsaXNpb247XHJcbiAgICBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcjogZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXI7XHJcbiAgICBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXI6IHNoaWVsZEFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlcjtcclxuICAgIGdhbWVPdmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICB9LFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyXHJcbikge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBjb25zdCBkZWZlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmZW5kZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIC8vIHNlbGVjdHMgYWxsIGFsaWVuIGF0dGFjayBIVE1MIERpdiBlbGVtZW50c1xyXG4gIGxldCBhbGllbkxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuYWxpZW4tbGF6ZXItc2hvdFwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXR0YWNrc1xyXG4gIGFsaWVuTGF6ZXJTaG90cy5mb3JFYWNoKChhbGllbkxhemVyU2hvdCkgPT4ge1xyXG4gICAgYWxpZW5MYXplclNob3QueSArPSBnYW1lLnNwZWVkO1xyXG4gICAgYWxpZW5MYXplclNob3Quc3R5bGUudG9wID0gYWxpZW5MYXplclNob3QueSArIFwicHhcIjtcclxuXHJcbiAgICAvLyBhbmltYXRlcyB0aGUgYWxpZW4gYXR0YWNrXHJcbiAgICBhbGllbkxhemVyU2hvdFNwcml0ZXModGltZXN0YW1wLCBzY2VuZSwgZ2FtZSwgYWxpZW5MYXplclNob3QpO1xyXG5cclxuICAgIC8vIHJlbW92ZXMgdGhlIGFsaWVuIGF0dGFjayBmcm9tIHRoZSBkb20gd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIGdhbWUgc2NyZWVuXHJcbiAgICBpZiAoXHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnkgKyBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgPlxyXG4gICAgICBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgLyAyXHJcbiAgICApIHtcclxuICAgICAgYWxpZW5MYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBhbGllbiBhdHRhY2sgaGFzIGhpdCB0aGUgZGVmZW5kZXJcclxuICAgIGRlZmVuZGVyQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyKFxyXG4gICAgICBkZWZlbmRlcixcclxuICAgICAgaXNDb2xsaXNpb24sXHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LFxyXG4gICAgICBwbGF5ZXIsXHJcbiAgICAgIGdhbWVBcmVhLFxyXG4gICAgICBnYW1lT3ZlcixcclxuICAgICAgc2NlbmVcclxuICAgICk7XHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBhbGllbiBhdHRhY2sgaGFzIGhpdCBhIHNoaWVsZFxyXG4gICAgc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyKGFsaWVuTGF6ZXJTaG90LCBpc0NvbGxpc2lvbik7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUdhbWVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IElJc0NvbGxpc2lvbiB9IGZyb20gXCIuLi9tb2RlbHMvaXNDb2xsaXNpb25cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIGRlZmVuZGVyIGF0dGFja3Mgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF6ZXJTaG90c01vdmVtZW50KHtcclxuICBnYW1lLFxyXG4gIGlzQ29sbGlzaW9uLFxyXG59OiB7XHJcbiAgZ2FtZTogSUdhbWVPYmplY3Q7XHJcbiAgaXNDb2xsaXNpb246IElJc0NvbGxpc2lvbjtcclxufSkge1xyXG4gIC8vIHNlbGVjdHMgYWxsIG9mIHRoZSBkZWZlbmRlcnMgYXR0YWNrcyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBsYXplclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmxhemVyLXNob3RcIlxyXG4gICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vbG9vcHMgdGhyb3VnaCB0aGUgYXR0YWNrc1xyXG4gIGxhemVyU2hvdHMuZm9yRWFjaCgobGF6ZXJTaG90KSA9PiB7XHJcbiAgICAvLyBtb3ZlcyB0aGUgYXR0YWNrIGJ5IGNoYW5naW5nIGl0J3MgXCJ5XCIgcG9zaXRpb25cclxuICAgIGxhemVyU2hvdC55IC09IGdhbWUuc3BlZWQ7XHJcbiAgICBsYXplclNob3Quc3R5bGUudG9wID0gbGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcblxyXG4gICAgLy8gaWYgdGhlIGF0dGFjayByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIHNjcmVlbiBpdCBpcyByZW1vdmVkXHJcbiAgICBpZiAobGF6ZXJTaG90LnkgKyBsYXplclNob3Qub2Zmc2V0SGVpZ2h0IDwgMCkge1xyXG4gICAgICBsYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlIGRlZmVuZGVyJ3MgbGF6ZXIgc2hvdCBoaXRzIGEgc2hpZWxkLCB0aGUgc2hvdCBpcyByZW1vdmVkIHdpdGhvdXQgZGFtYWdpbmcgdGhlIHNoaWVsZFxyXG4gICAgY29uc3Qgc2hpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnNoaWVsZFwiXHJcbiAgICApISBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIHNoaWVsZHMuZm9yRWFjaCgoc2hpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0NvbGxpc2lvbihsYXplclNob3QsIHNoaWVsZCkgJiZcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLWRlc3Ryb3llZFwiKSA9PT0gZmFsc2VcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGF6ZXJTaG90LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIG1vdGhlcnNoaXAgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW90aGVyc2hpcE1vdmVtZW50KHtcclxuICBnYW1lLFxyXG4gIG1vdGhlcnNoaXBDdXJyZW50U291bmQsXHJcbn06IHtcclxuICBnYW1lOiBJR2FtZU9iamVjdDtcclxuICBtb3RoZXJzaGlwQ3VycmVudFNvdW5kOiBIVE1MQXVkaW9FbGVtZW50O1xyXG59KSB7XHJcbiAgLy8gc2VsZWN0cyBhbGwgbW90aGVyc2hpcCBIVE1MIGRpdiBlbGVtZW50cyBvbiB0aGUgc2NyZWVuIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gIGNvbnN0IG1vdGhlcnNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLm1vdGhlcnNoaXBcIlxyXG4gICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIGxvb3BzIHRocm91Z2ggdGhlIG1vdGhlcnNoaXBzICggdGhlcmUgaXMgdXN1YWxseSBvbmx5IG9uZSlcclxuICBtb3RoZXJzaGlwcy5mb3JFYWNoKChtb3RoZXJzaGlwKSA9PiB7XHJcbiAgICAvL21vdmVzIHRoZSBtb3RoZXJzaGlwIG9uIHRoZSBnYW1lIHNjcmVlblxyXG4gICAgbW90aGVyc2hpcC54IC09IGdhbWUuc3BlZWQ7XHJcbiAgICBtb3RoZXJzaGlwLnN0eWxlLmxlZnQgPSBtb3RoZXJzaGlwLnggKyBcInB4XCI7XHJcblxyXG4gICAgLy8gaWYgdGhlIG1vdGhlcnNoaXAgaXMgYWxpdmUgYWRkIHNvdW5kIHRvIHRoZSBtb3ZlbWVudFxyXG4gICAgaWYgKG1vdGhlcnNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVhZC1hbGllblwiKSA9PT0gZmFsc2UpIHtcclxuICAgICAgbW90aGVyc2hpcEN1cnJlbnRTb3VuZC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlcyB0aGUgbW90aGVyc2hpcCBmcm9tIHRoZSBET00gaWYgaXQgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSBzY3JlZW5cclxuICAgIGlmIChtb3RoZXJzaGlwLnggKyBtb3RoZXJzaGlwLm9mZnNldFdpZHRoIDw9IDApIHtcclxuICAgICAgbW90aGVyc2hpcC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIG1vdGhlcnNoaXAgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZW1lbnQoeyBwbGF5ZXIgfTogeyBwbGF5ZXI6IElQbGF5ZXIgfSkge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBjb25zdCBkZWZlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmZW5kZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIC8vbW92ZXMgdGhlIG1vdGhlcnNoaXAgb24gdGhlIGdhbWUgc2NyZWVuXHJcbiAgZGVmZW5kZXIuc3R5bGUubGVmdCA9IHBsYXllci54ICsgXCJweFwiO1xyXG4gIGRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55IC0gcGxheWVyLmhlaWdodCArIFwicHhcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIG1vZHVsZSBob2xkIG9iamVjdCB0aGF0IGNvbnRhaW4gZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGxheWVyIHN0YXRlLlxyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmV4cG9ydCBsZXQgcGxheWVyOiBJUGxheWVyID0ge1xyXG4gIHg6IDEwMCxcclxuICB5OiBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSA1MCxcclxuICB3aWR0aDogMCxcclxuICBoZWlnaHQ6IDAsXHJcbiAgbGFzdFRpbWVTaG90OiAwLFxyXG4gIGxpdmVzOiAzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcbmltcG9ydCB7IElTb3VuZHMgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdW5kc1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHNldHRpbmcgdXAgdGhlIHBsYXllciBjb250cm9sbHNcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvbktleVVwKTtcclxuXHJcbi8vIG9iamVjdCB0aGF0IHdpbGwgaG9sZCBhbGwgb2YgcGxheWVyIGNvbnRyb2xzIC0+IGxlZnQgYW5kIHJpZ2h0IGFycm93cyBhbmQgdGhlIHNwYWNlYmFyXHJcbmxldCBrZXlzOiB7XHJcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcclxufSA9IHt9O1xyXG5cclxuLy8gY2hlY2tzIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3NpbmcgYW55IG9mIHRoZSBjb250cm9sc1xyXG5mdW5jdGlvbiBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gIGtleXNbZS5jb2RlXSA9IHRydWU7XHJcbn1cclxuXHJcbi8vIGNoZWNrcyBpZiB0aGUgcGxheWVyIGlzIHByZXNzaW5nIGFueSBvZiB0aGUgY29udHJvbHNcclxuZnVuY3Rpb24gb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAga2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbn1cclxuXHJcbi8vIG1vdmVtZW50IGNvbnRyb2xsc1xyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZW1lbnRDb250cm9sbHMoe1xyXG4gIHBsYXllcixcclxuICBnYW1lLFxyXG4gIGdhbWVBcmVhLFxyXG59OiB7XHJcbiAgcGxheWVyOiBJUGxheWVyO1xyXG4gIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gIGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudDtcclxufSkge1xyXG4gIC8vIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3Npbmcgb3IgaG9sZGluZyB0aGUgbGVmdCBhcnJvdywgbW92ZSB0aGUgcGxheWVyIHRvIHRoZSBsZWZ0XHJcbiAgaWYgKGtleXMuQXJyb3dMZWZ0ICYmIHBsYXllci54ID4gMCkge1xyXG4gICAgcGxheWVyLnggLT0gZ2FtZS5zcGVlZCAqIGdhbWUucGxheWVyTW92ZW1lbnRNdWx0aXBsaWVyO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIHBsYXllciBpcyBwcmVzc2luZyBvciBob2xkaW5nIHRoZSBsZWZ0IGFycm93LCBtb3ZlIHRoZSBwbGF5ZXIgdG8gdGhlIHJpZ2h0XHJcbiAgaWYgKGtleXMuQXJyb3dSaWdodCAmJiBwbGF5ZXIueCArIHBsYXllci53aWR0aCArIDIwIDwgZ2FtZUFyZWEub2Zmc2V0V2lkdGgpIHtcclxuICAgIHBsYXllci54ICs9IGdhbWUuc3BlZWQgKiBnYW1lLnBsYXllck1vdmVtZW50TXVsdGlwbGllcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIHNob290aW5nIGNvbnRyb2xsc1xyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyU2hvb3RpbmdDb250cm9sbHMoXHJcbiAge1xyXG4gICAgcGxheWVyLFxyXG4gICAgZ2FtZSxcclxuICAgIHNvdW5kcyxcclxuICAgIEFkZERlZmVuZGVyTGF6ZXJTaG90LFxyXG4gIH06IHtcclxuICAgIHBsYXllcjogSVBsYXllcjtcclxuICAgIGdhbWU6IElHYW1lT2JqZWN0O1xyXG4gICAgc291bmRzOiBJU291bmRzO1xyXG4gICAgQWRkRGVmZW5kZXJMYXplclNob3Q6IGFueTtcclxuICB9LFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyXHJcbikge1xyXG4gIC8vIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3NpbmcgdGhlIHNwYWNlYmFyIHJlbmRlciBhIGxhemVyIGF0dGFjayBhbmQgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSBzb3VuZFxyXG4gIGlmIChrZXlzLlNwYWNlICYmIHRpbWVzdGFtcCAtIHBsYXllci5sYXN0VGltZVNob3QgPiBnYW1lLmZpcmVJbnRlcnZhbCkge1xyXG4gICAgbmV3IEFkZERlZmVuZGVyTGF6ZXJTaG90KHBsYXllcik7XHJcbiAgICBzb3VuZHMuZGVmZW5kZXJTaG9vdGluZy5wbGF5KCk7XHJcbiAgICBwbGF5ZXIubGFzdFRpbWVTaG90ID0gdGltZXN0YW1wO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZGRQbGF5ZXJMaWZlIH0gZnJvbSBcIi4uL2FkZE9iamVjdHMvYWRkUGxheWVyTGlmZVwiO1xyXG5pbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHVwZGF0aW5nIHRoZSBwbGF5ZXIgcG9pbnRzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRzVXBkYXRlKHtcclxuICBwb2ludHMsXHJcbiAgc2NlbmUsXHJcbiAgZ2FtZSxcclxufToge1xyXG4gIHBvaW50czogSFRNTERpdkVsZW1lbnQ7XHJcbiAgc2NlbmU6IElTY2VuZU9iamVjdDtcclxuICBnYW1lOiBJR2FtZU9iamVjdDtcclxufSkge1xyXG4gIHBvaW50cy50ZXh0Q29udGVudCA9IHNjZW5lLnNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IGxpdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vbmUtbGlmZVwiKTtcclxuXHJcbiAgLy8gZm9yIGV2ZXJ5IDEwMDAgcG9pbnRzIHRoZSBwbGF5ZXIgaXMgYXdhcmVkIGFuIGV4dHJhIGxpZmVcclxuICAvLyB0aGUgcGxheWVyIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiA1IGxpdmVzXHJcbiAgaWYgKFxyXG4gICAgc2NlbmUuc2NvcmUgLyAxMDAwID49IGdhbWUuZXh0cmFMaXZlc0NvdW50ZXIgJiZcclxuICAgIGxpdmVzLmxlbmd0aCA8PSBnYW1lLm1heFBsYXllckxpdmVzXHJcbiAgKSB7XHJcbiAgICBuZXcgQWRkUGxheWVyTGlmZSgpO1xyXG4gICAgZ2FtZS5leHRyYUxpdmVzQ291bnRlcisrO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJR2FtZU9iamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciByZXNwd2FuaW5nIGFsbCB0aGUgYWxpZW4gY2x1c3RlciBvbmNlIGV2ZXJ5IGFsaWVuIGlzIGRlYWRcclxuXHJcbi8vIGRlYWQgYWxpZW5zIGFyZSBzdGlsbCBvbiB0aGUgc2NyZWVuIGJ1dCBhcmUgbm90IHZpc2libGUgdG8gdGhlIHBsYXllciwgbm9yIGNhbiB0aGV5IGJlIGludGVyYWN0ZWQgd2l0aFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3Bhd25BbGllbnMoeyBnYW1lIH06IHsgZ2FtZTogSUdhbWVPYmplY3QgfSkge1xyXG4gIC8vIHNlbGVjdHMgYWxsIG9mIHRoZSBhbGllbiBIVE1MIERpdiBlbGVtZW50cyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBhbGllbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuYWxpZW5cIlxyXG4gICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIGZpbHRlcnMgYW5kIHN0b3JlcyBhbGwgb2YgdGhlIGRlYWQgYWxpZW5zIGluIGFub3RoZXIgYXJyYXlcclxuICBjb25zdCBhbGllblJlc3Bhd25DaGVja2VyID0gQXJyYXkuZnJvbShhbGllbnMpLmZpbHRlcigoYWxpZW4pID0+XHJcbiAgICBhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWFkLWFsaWVuXCIpXHJcbiAgKTtcclxuXHJcbiAgLy8gaWYgYWxsIG9mIHRoZSBhbGllbnMgaGF2ZSBiZWVuIGtpbGxlZCByZW1vdmVzIHRoZSBcImRlYWRcIiBzdGF0dXMgc28gdGhleSBjYW4gYmUgaW50ZXJhY3RlZCB3aXRoIGFnYWluICggbm8gcmVzdCBmb3IgdGhlIHdpY2tlZCwgSSBzdXBwb3NlKVxyXG4gIGlmIChhbGllblJlc3Bhd25DaGVja2VyLmxlbmd0aCA9PT0gZ2FtZS5tYXhBbGllbkNsdXN0ZXJTaXplKSB7XHJcbiAgICBhbGllbnMuZm9yRWFjaCgoYWxpZW4pID0+IHtcclxuICAgICAgYWxpZW4uY2xhc3NMaXN0LnJlbW92ZShcImRlYWQtYWxpZW5cIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVNvdW5kcyB9IGZyb20gXCIuLi9tb2RlbHMvc291bmRzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc291bmRzOiBJU291bmRzID0geyBcclxuICAgIGRlZmVuZGVyU2hvb3Rpbmc6IG5ldyBBdWRpbygnLi9zb3VuZHMvc2hvb3Qud2F2JyksXHJcbiAgICBhbGllbkRlYXRoU291bmQ6IG5ldyBBdWRpbygnLi9zb3VuZHMvaW52YWRlcmtpbGxlZC53YXYnKSxcclxuICAgIGJhY2tncm91bmRNdXNpYzogbmV3IEF1ZGlvKCcuL3NvdW5kcy9zcGFjZWludmFkZXJzMS5tcGVnJyksXHJcbiAgICBtb3RoZXJzaGlwU291bmRIaWdoUGl0Y2g6IG5ldyBBdWRpbygnLi9zb3VuZHMvdWZvX2hpZ2hwaXRjaC53YXYnKSxcclxuICAgIG1vdGhlcnNoaXBTb3VuZExvd1BpdGNoOiBuZXcgQXVkaW8oJy4vc291bmRzL3Vmb19sb3dwaXRjaC53YXYnKSxcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgSUdhbWVSZXN0YXJ0IH0gZnJvbSBcIi4uL21vZGVscy9idXR0b25zXCI7XHJcbmltcG9ydCB7IG9uR2FtZVN0YXJ0IH0gZnJvbSBcIi4vc3RhcnRHYW1lXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVzdGFydGluZyB0aGUgZ2FtZSBvbmNlIHRoZSBwbGF5ZXIgaGFzIGxvc3QgYWxsIG9mIHRoZWlyIGxpdmVzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVJlc3RhcnQoe1xyXG4gIGdhbWVBcmVhLFxyXG4gIGdhbWVPdmVyLFxyXG4gIHBsYXllcixcclxuICBzY2VuZSxcclxuICBvbkdhbWVTdGFydENvbmZpZ09iaixcclxufTogSUdhbWVSZXN0YXJ0KSB7XHJcbiAgLy8gaGlkZXMgdGhlIGdhbWUgb3ZlciBzY3JlZW5cclxuICBnYW1lT3Zlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICAvL3NlbGVjdHMgdGhlIGFsaWVuIGNsdXN0ZXIgSFRNTCBkaXYgZWxlbWVudFxyXG4gIGNvbnN0IGFsaWVuQ2x1c3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5hbGllbi1jbHVzdGVyXCJcclxuICApISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgLy8gcmVtb3ZlcyB0aGUgcmVtYWluaW5nIGFsaWVzIGZyb20gdGhlIHNjcmVlblxyXG4gIGFsaWVuQ2x1c3Rlci5yZW1vdmUoKTtcclxuXHJcbiAgLy8gc2VsZWN0cyBhbGwgb2YgdGhlIGRlZmVuZGVyJ3MgbGF6ZXIgc2hvcnRzIEhUTUwgZGl2IGVsZW1lbnRzIG9uIHRoZSBzY3JlZW4gYW5kIHN0b3JlcyB0aGVtIGluIGFuIGFycmF5XHJcbiAgY29uc3QgbGF6ZXJTaG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGF6ZXItc2hvdFwiKTtcclxuICAvLyBsb29wcyBvdmVyIHRoZSBhcnJheSBhbmQgcmVtb3ZlcyBlYWNoIG9mIHRoZSBsYXplciBzaG9ydHNcclxuICBsYXplclNob3RzLmZvckVhY2goKGxhemVyU2hvdCkgPT4gbGF6ZXJTaG90LnJlbW92ZSgpKTtcclxuXHJcbiAgLy8gc2VsZWN0cyB0aGUgZGVmZW5kZXIgSFRNTCBkaXYgZWxlbWVudFxyXG4gIGNvbnN0IGRlZmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWZlbmRlclwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgLy8gcmVtb3ZlcyB0aGUgZGVmZW5kZXIgZWxlbWVudCBmcm9tIHRoZSBzY3JlZW5cclxuICBkZWZlbmRlci5yZW1vdmUoKTtcclxuXHJcbiAgLy8gc2VsZWN0cyBhbGwgYWxpZW4gbGF6ZXIgc2hvcnRzIEhUTUwgZGl2IGVsZW1lbnRzIG9uIHRoZSBzY3JlZW4gYW5kIHN0b3JlcyB0aGVtIGluIGFuIGFycmF5XHJcbiAgY29uc3QgYWxpZW5MYXplclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGllbi1sYXplci1zaG90XCIpO1xyXG4gIC8vIGxvb3BzIG92ZXIgdGhlIGFycmF5IGFuZCByZW1vdmVzIGVhY2ggb2YgdGhlIGxhemVyIHNob3J0cyBlbGVtZW50cyBmcm9tIHRoZSBzY3JlZW5cclxuICBhbGllbkxhemVyU2hvdHMuZm9yRWFjaCgoYWxpZW5MYXplclNob3QpID0+IGFsaWVuTGF6ZXJTaG90LnJlbW92ZSgpKTtcclxuXHJcbiAgLy8gc2VsZWN0cyBhbGwgcGxheWVyIGxpdmVzIEhUTUwgZGl2IGVsZW1lbnRzIG9uIHRoZSBzY3JlZW4gYW5kIHN0b3JlcyB0aGVtIGluIGFuIGFycmF5XHJcbiAgY29uc3QgbGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9uZS1saWZlXCIpO1xyXG4gIC8vIGxvb3BzIG92ZXIgdGhlIGFycmF5IGFuZCByZW1vdmVzIGVhY2ggbGlmZSBlbGVtZW50IGZyb20gdGhlIHNjcmVlblxyXG4gIGxpdmVzLmZvckVhY2goKGxpZmUpID0+IGxpZmUucmVtb3ZlKCkpO1xyXG5cclxuICAvLyBzZWxlY3RzIHRoZSBzaGllbGQgZmllbGQgSFRNTCBkaXYgZWxlbWVudCBvbiB0aGUgc2NyZWVuXHJcbiAgY29uc3Qgc2hpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpZWxkLWZpZWxkXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAvLyByZW1vdmVzIHRoZSBzaGllbGQgZmllbGQgZWxlbWVudCBmcm9tIHRoZSBzY3JlZW5cclxuICBzaGllbGRzLnJlbW92ZSgpO1xyXG5cclxuICAvLyByZXNldHMgdGhlIHBsYXllciBvYmplY3Qgc3RhdHNcclxuICBwbGF5ZXIueCA9IDEwMDtcclxuICBwbGF5ZXIueSA9IGdhbWVBcmVhLm9mZnNldEhlaWdodCAtIDUwO1xyXG4gIHBsYXllci53aWR0aCA9IDA7XHJcbiAgcGxheWVyLmhlaWdodCA9IDA7XHJcbiAgcGxheWVyLmxhc3RUaW1lU2hvdCA9IDA7XHJcbiAgcGxheWVyLmxpdmVzID0gMztcclxuXHJcbiAgLy8gcmVzZXRzIHRoZSBzY2VuZSBvYmplY3Qgc3RhdHNcclxuICBzY2VuZS5zY29yZSA9IDA7XHJcbiAgc2NlbmUubGFzdEFsaWVuU3ByaXRlSW50ZXJ2YWwgPSAwO1xyXG4gIHNjZW5lLmxhc3RBbGllbkxhemVyU2hvdFNwcml0ZUludGVydmFsID0gMDtcclxuICBzY2VuZS5sYXN0QWxpZW5MYXplclNob3QgPSAwO1xyXG4gIHNjZW5lLmxhc3RTcGF3bk1vdGhlcnNoaXAgPSAwO1xyXG4gIHNjZW5lLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgLy8gcnVucyB0aGUgc3RhcnQgZ2FtZSBmdW5jdGlvbiBzbyB0aGUgZ2FtZSBjYW4gc3RhcnQgYWdhaW5cclxuICBvbkdhbWVTdGFydChvbkdhbWVTdGFydENvbmZpZ09iaik7XHJcbn1cclxuIiwiLy8gYSBmdW5jIHRoYXQgY2hlY2tzIGlmIDIgaHRtbCBlbGVtZW50cyBhcmUgaW4gY29udGFjdCB3aXRoIGVhY2ggb3RoZXJcclxuLy8gIGlmIHRoZXkgYXJlIC0gcmV0dXJuIHRydWUgb3RoZXJ3aXNlIHJldHVybiBmYWxzZVxyXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xsaXNpb24oXHJcbiAgICBmaXJzdEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgc2Vjb25kRWxlbWVudDogSFRNTERpdkVsZW1lbnRcclxuICApIHtcclxuICAgIGNvbnN0IGZpcnN0UmVjdCA9IGZpcnN0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHNlY29uZFJlY3QgPSBzZWNvbmRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIFxyXG4gICAgcmV0dXJuICEoXHJcbiAgICAgIGZpcnN0UmVjdC50b3AgPiBzZWNvbmRSZWN0LmJvdHRvbSB8fFxyXG4gICAgICBmaXJzdFJlY3QuYm90dG9tIDwgc2Vjb25kUmVjdC50b3AgfHxcclxuICAgICAgZmlyc3RSZWN0LnJpZ2h0IDwgc2Vjb25kUmVjdC5sZWZ0IHx8XHJcbiAgICAgIGZpcnN0UmVjdC5sZWZ0ID4gc2Vjb25kUmVjdC5yaWdodFxyXG4gICAgKTtcclxuICB9IiwiaW1wb3J0IHsgQWRkUGxheWVyTGlmZSB9IGZyb20gXCIuLi9hZGRPYmplY3RzL2FkZFBsYXllckxpZmVcIjtcclxuaW1wb3J0IHsgSUdhbWVTdGFydCB9IGZyb20gXCIuLi9tb2RlbHMvYnV0dG9uc1wiO1xyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gc3RhcnQgZ2FtZVxyXG5leHBvcnQgZnVuY3Rpb24gb25HYW1lU3RhcnQoe1xyXG4gIGdhbWVBY3Rpb24sXHJcbiAgcGxheWVyLFxyXG4gIGdhbWUsXHJcbiAgQWRkQWxpZW5DbHVzdGVyLFxyXG4gIEFkZFNoaWVsZHMsXHJcbiAgc291bmRzLFxyXG4gIEFkZERlZmVuZGVyLFxyXG59OiBJR2FtZVN0YXJ0KSB7XHJcbiAgLy8gaGlkZXMgdGhlIHN0YXJ0IGdhbWUgc2NyZWVuXHJcbiAgc3RhcnRHYW1lLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgLy8gY3JlYXRlcyBhIG5ldyBkZWZlbmRlciBIVE1MIGRpdiBlbGVtZW50XHJcbiAgY29uc3QgZGVmZW5kZXJJbnN0YW5jZSA9IG5ldyBBZGREZWZlbmRlcihwbGF5ZXIpO1xyXG4gIGNvbnN0IGRlZmVuZGVyID0gZGVmZW5kZXJJbnN0YW5jZS5kZWZlbmRlcjtcclxuXHJcbiAgLy8gc2V0cyBzb21lIHBsYXllciBzdGF0cywgbmVlZGVkIGluIG90aGVyIHBhcnRzIG9mIHRoZSBnYW1lXHJcbiAgcGxheWVyLmhlaWdodCA9IGRlZmVuZGVyLm9mZnNldEhlaWdodDtcclxuICBwbGF5ZXIud2lkdGggPSBkZWZlbmRlci5vZmZzZXRXaWR0aDtcclxuXHJcbiAgLy8gYWRkIGEgbmV3IGFsaWVuIGNsdXN0ZXJcclxuICBuZXcgQWRkQWxpZW5DbHVzdGVyKGdhbWUpO1xyXG4gIC8vIGFkZGVzIGEgbmV3IGZpZWxkIG9mIHNoaWVsZHNcclxuICBuZXcgQWRkU2hpZWxkcygpO1xyXG4gIC8vIHN0YXJ0IHRoZSBiYWNrZ3JvdW5kIG11c2ljXHJcbiAgc291bmRzLmJhY2tncm91bmRNdXNpYy5wbGF5KCk7XHJcblxyXG4gIC8vIGdpdmVzIHRoZSBwbGF5ZXIgMyBsaXZlc1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xyXG4gICAgbmV3IEFkZFBsYXllckxpZmUoKTtcclxuICB9XHJcblxyXG4gIC8vIHN0YXJ0IHRoZSBnYW1lIGVuZ2luZVxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUFjdGlvbik7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBZGRBbGllbkxhemVyU2hvdCB9IGZyb20gXCIuL2FkZE9iamVjdHMvYWRkQWxpZW5MYXplclNob3RcIjtcclxuaW1wb3J0IHsgQWRkRGVmZW5kZXJMYXplclNob3QgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZERlZmVuZGVyTGF6ZXJTaG90XCI7XHJcbmltcG9ydCB7IEFkZE1vdGhlcnNoaXAgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZE1vdGhlcnNoaXBcIjtcclxuaW1wb3J0IHsgYWxpZW5TcHJpdGVBbmltYXRpb24gfSBmcm9tIFwiLi9hbmltYXRpb25zL2FsaWVuU3ByaXRlc1wiO1xyXG5pbXBvcnQgeyBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciB9IGZyb20gXCIuL2NvbGxpc2lvbkNoZWNrZXIvZGVmZW5kZXJBbGllbkxhemVyU2hvdFwiO1xyXG5pbXBvcnQgeyBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIgfSBmcm9tIFwiLi9jb2xsaXNpb25DaGVja2VyL3NoaWVsZEFsaWVuTGF6ZXJTaG90XCI7XHJcbmltcG9ydCB7IGFsaWVuRGVhdGhBbmRQb2ludHMgfSBmcm9tIFwiLi9hbGllbkRlYXRoQW5kUG9pbnRzL2FsaWVuRGVhdGhBbmRQb2ludHNcIjtcclxuaW1wb3J0IHsgZ2FtZSwgc2NlbmUgfSBmcm9tIFwiLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgYWxpZW5DbHVzdGVyTW92ZW1lbnQgfSBmcm9tIFwiLi9vYmplY3RNb3ZlbWVudC9hbGllbkNsdXN0ZXJcIjtcclxuaW1wb3J0IHsgYWxpZW5MYXplclNob3RzTW92bWVudEFuZENvbGxpc2lvbkNoZWNrZXIgfSBmcm9tIFwiLi9vYmplY3RNb3ZlbWVudC9hbGllbkxhemVyU2hvdHNcIjtcclxuaW1wb3J0IHsgbGF6ZXJTaG90c01vdmVtZW50IH0gZnJvbSBcIi4vb2JqZWN0TW92ZW1lbnQvbGF6ZXJTaG90c1wiO1xyXG5pbXBvcnQgeyBwbGF5ZXJNb3ZlbWVudCB9IGZyb20gXCIuL29iamVjdE1vdmVtZW50L3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XHJcbmltcG9ydCB7XHJcbiAgcGxheWVyTW92ZW1lbnRDb250cm9sbHMsXHJcbiAgcGxheWVyU2hvb3RpbmdDb250cm9sbHMsXHJcbn0gZnJvbSBcIi4vcGxheWVyL3BsYXllck1vdmVtZW50Q29udHJvbGxzXCI7XHJcbmltcG9ydCB7IHBvaW50c1VwZGF0ZSB9IGZyb20gXCIuL3BvaW50cy9wb2ludHNVcGRhdGVcIjtcclxuaW1wb3J0IHsgcmVzcGF3bkFsaWVucyB9IGZyb20gXCIuL3Jlc3B3YW4vYWxpZW5zXCI7XHJcbmltcG9ydCB7IHNvdW5kcyB9IGZyb20gXCIuL3NvdW5kcy9zb3VuZHNcIjtcclxuaW1wb3J0IHsgYWxpZW5GaXJpbmdDeWNsZSB9IGZyb20gXCIuL2FsaWVuRmlyaW5nQ3ljbGUvYWxpZW5GaXJpbmdDeWNsZVwiO1xyXG5pbXBvcnQgeyBtb3RoZXJzaGlwTW92ZW1lbnQgfSBmcm9tIFwiLi9vYmplY3RNb3ZlbWVudC9tb3RoZXJzaGlwXCI7XHJcbmltcG9ydCB7IEFkZEFsaWVuQ2x1c3RlciB9IGZyb20gXCIuL2FkZE9iamVjdHMvYWRkQWxpZW5DbHVzdGVyXCI7XHJcbmltcG9ydCB7IEFkZFNoaWVsZHMgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZFNoaWVsZHNcIjtcclxuaW1wb3J0IHsgQWRkRGVmZW5kZXIgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZERlZmVuZGVyXCI7XHJcbmltcG9ydCB7IElHYW1lUmVzdGFydCwgSUdhbWVTdGFydCB9IGZyb20gXCIuL21vZGVscy9idXR0b25zXCI7XHJcbmltcG9ydCB7IGlzQ29sbGlzaW9uIH0gZnJvbSBcIi4vdXRpbC9pc0NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBvbkdhbWVTdGFydCB9IGZyb20gXCIuL3V0aWwvc3RhcnRHYW1lXCI7XHJcbmltcG9ydCB7IGdhbWVSZXN0YXJ0IH0gZnJvbSBcIi4vdXRpbC9nYW1lUmVzdGFydFwiO1xyXG5cclxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmxldCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgZ2FtZU92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3ZlclwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IHBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9pbnRzXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGJhY2tnb3VybmQgbXVzaWMgbG9vcFxyXG5zb3VuZHMuYmFja2dyb3VuZE11c2ljLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgdGhpcy5wbGF5KCk7XHJcbn0pO1xyXG5cclxuLy8gZG9uZSB0byByZWR1Y2UgdHlwZXMgYW5kIGVhc3kgb2YgYWRkaW5nIG5ldyBwYXJhbWV0ZXJzIHRvIHRoZSBnYW1lQWN0aW9uXHJcbmNvbnN0IGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QgPSB7XHJcbiAgcGxheWVyTW92ZW1lbnRDb250cm9sbHM6IHsgcGxheWVyLCBnYW1lLCBnYW1lQXJlYSB9LFxyXG4gIHBsYXllck1vdmVtZW50OiB7IHBsYXllciB9LFxyXG4gIHBsYXllclNob290aW5nQ29udHJvbGxzOiB7IHBsYXllciwgZ2FtZSwgc291bmRzLCBBZGREZWZlbmRlckxhemVyU2hvdCB9LFxyXG4gIGxhemVyU2hvdHNNb3ZlbWVudDogeyBnYW1lLCBpc0NvbGxpc2lvbiB9LFxyXG4gIGFsaWVuQ2x1c3Rlck1vdmVtZW50OiB7IGdhbWUsIGdhbWVBcmVhIH0sXHJcbiAgZGVhdGhBbmRQb2ludHM6IHsgaXNDb2xsaXNpb24sIHNvdW5kcywgc2NlbmUgfSxcclxuICByZXNwYXduQWxpZW5zOiB7IGdhbWUgfSxcclxuICBhbGllblNwcml0ZUFuaW1hdGlvbjogeyBzY2VuZSwgZ2FtZSB9LFxyXG4gIGFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyOiB7XHJcbiAgICBnYW1lLFxyXG4gICAgc2NlbmUsXHJcbiAgICBwbGF5ZXIsXHJcbiAgICBnYW1lQXJlYSxcclxuICAgIGlzQ29sbGlzaW9uLFxyXG4gICAgZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIsXHJcbiAgICBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIsXHJcbiAgICBnYW1lT3ZlcixcclxuICB9LFxyXG4gIGFsaWVuRmlyaW5nQ3ljbGU6IHsgc2NlbmUsIGdhbWUsIEFkZEFsaWVuTGF6ZXJTaG90IH0sXHJcbiAgbW90aGVyc2hpcE1vdmVtZW50OiB7IGdhbWUsIG1vdGhlcnNoaXBDdXJyZW50U291bmQ6IG5ldyBBdWRpbygpIH0sXHJcbiAgcG9pbnRzVXBkYXRlOiB7IHBvaW50cywgc2NlbmUsIGdhbWUgfSxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVCdXR0b25zQ29uZmlnT2JqOiB7XHJcbiAgb25HYW1lU3RhcnQ6IElHYW1lU3RhcnQ7XHJcbiAgZ2FtZVJlc3RhcnQ6IElHYW1lUmVzdGFydDtcclxufSA9IHtcclxuICBvbkdhbWVTdGFydDoge1xyXG4gICAgZ2FtZUFjdGlvbixcclxuICAgIHBsYXllcixcclxuICAgIGdhbWUsXHJcbiAgICBBZGREZWZlbmRlcixcclxuICAgIEFkZEFsaWVuQ2x1c3RlcixcclxuICAgIEFkZFNoaWVsZHMsXHJcbiAgICBzb3VuZHMsXHJcbiAgfSxcclxuICBnYW1lUmVzdGFydDoge1xyXG4gICAgZ2FtZUFyZWEsXHJcbiAgICBnYW1lT3ZlcixcclxuICAgIHBsYXllcixcclxuICAgIHNjZW5lLFxyXG4gICAgb25HYW1lU3RhcnRDb25maWdPYmo6IHtcclxuICAgICAgZ2FtZUFjdGlvbixcclxuICAgICAgcGxheWVyLFxyXG4gICAgICBnYW1lLFxyXG4gICAgICBBZGREZWZlbmRlcixcclxuICAgICAgQWRkQWxpZW5DbHVzdGVyLFxyXG4gICAgICBBZGRTaGllbGRzLFxyXG4gICAgICBzb3VuZHMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBzdGFydCBnYW1lIGJ1dHRvbiBldmVudCBsaXN0ZW5lclxyXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJldHVybiBvbkdhbWVTdGFydChnYW1lQnV0dG9uc0NvbmZpZ09iai5vbkdhbWVTdGFydCk7XHJcbn0pO1xyXG5cclxuLy8gZ2FtZSBvdmVyIGFuZCByZXN0YXJ0IGdhbWUgZXZlbnQgbGlzdGVuZXJcclxuZ2FtZU92ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZXR1cm4gZ2FtZVJlc3RhcnQoZ2FtZUJ1dHRvbnNDb25maWdPYmouZ2FtZVJlc3RhcnQpO1xyXG59KTtcclxuXHJcbi8vIGdhbWUgZW5naW5lXHJcbmZ1bmN0aW9uIGdhbWVBY3Rpb24odGltZXN0YW1wOiBudW1iZXIpIHtcclxuICAvLyBtb3ZlbWVudCBrZXlzXHJcbiAgcGxheWVyTW92ZW1lbnRDb250cm9sbHMoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5wbGF5ZXJNb3ZlbWVudENvbnRyb2xscyk7XHJcblxyXG4gIC8vIHNob290aW5nXHJcbiAgcGxheWVyU2hvb3RpbmdDb250cm9sbHMoXHJcbiAgICBnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LnBsYXllclNob290aW5nQ29udHJvbGxzLFxyXG4gICAgdGltZXN0YW1wIC8vdGltZXN0YW0gbXVzdCBhbHdheXMgYmUgYWRkZWQgYXMgaXQgY29tZXMgZnJvbSB0aGUgZ2FtZUFjdGlvbiBmdW5jIGl0c2VsZlxyXG4gICk7XHJcblxyXG4gIC8vIGFwcGx5IHBsYXllciBtb3ZlbWVudFxyXG4gIHBsYXllck1vdmVtZW50KGdhbWVBY3Rpb25Bc3NldHNDb25maWdPYmplY3QucGxheWVyTW92ZW1lbnQpO1xyXG5cclxuICAvLyBhZGQgbGF6ZXIgbW92ZW1lbnRcclxuICBsYXplclNob3RzTW92ZW1lbnQoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5sYXplclNob3RzTW92ZW1lbnQpO1xyXG5cclxuICAvLyBhZGQgYWxpZW50IGNsdXN0ZXIgbW92ZW1lbnRcclxuICBhbGllbkNsdXN0ZXJNb3ZlbWVudChnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LmFsaWVuQ2x1c3Rlck1vdmVtZW50KTtcclxuXHJcbiAgLy8gYWxpZW4gZGVhdGggYW5kIHBvaW50c1xyXG4gIGFsaWVuRGVhdGhBbmRQb2ludHMoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5kZWF0aEFuZFBvaW50cyk7XHJcblxyXG4gIC8vIHJlc3Bhd24gYWxpZW5zXHJcbiAgcmVzcGF3bkFsaWVucyhnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LnJlc3Bhd25BbGllbnMpO1xyXG5cclxuICAvLyBhbGllbnMgc3ByaXRlIGFuaW1hdGlvblxyXG4gIGFsaWVuU3ByaXRlQW5pbWF0aW9uKFxyXG4gICAgZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5hbGllblNwcml0ZUFuaW1hdGlvbixcclxuICAgIHRpbWVzdGFtcFxyXG4gICk7XHJcblxyXG4gIC8vIGFsaWVucyBmaXJpbmcgYmFjayAoaW4gc2VsZiBkZWZlbmNlKVxyXG4gIGFsaWVuRmlyaW5nQ3ljbGUoZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5hbGllbkZpcmluZ0N5Y2xlLCB0aW1lc3RhbXApO1xyXG5cclxuICAvLyBhZGQgbW92bWVudCBhbmQgY29sbGlzaW9uIHRvIGFsaWVuIGxhemVyIHNob3RzXHJcbiAgYWxpZW5MYXplclNob3RzTW92bWVudEFuZENvbGxpc2lvbkNoZWNrZXIoXHJcbiAgICBnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LmFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyLFxyXG4gICAgdGltZXN0YW1wXHJcbiAgKTtcclxuXHJcbiAgLy8gYWRkIG1vdGhlcnNoaXBcclxuICBpZiAoXHJcbiAgICB0aW1lc3RhbXAgLSBzY2VuZS5sYXN0U3Bhd25Nb3RoZXJzaGlwID5cclxuICAgIGdhbWUubW90aGVyc2hpcFNwYXduSW50ZXJ2YWwgKyA1MDAwMCAqIE1hdGgucmFuZG9tKClcclxuICApIHtcclxuICAgIGNvbnN0IG1vdGhlcnNoaXAgPSBuZXcgQWRkTW90aGVyc2hpcChzb3VuZHMpO1xyXG4gICAgZ2FtZUFjdGlvbkFzc2V0c0NvbmZpZ09iamVjdC5tb3RoZXJzaGlwTW92ZW1lbnQubW90aGVyc2hpcEN1cnJlbnRTb3VuZCA9XHJcbiAgICAgIG1vdGhlcnNoaXAubW90aGVyc2hpcEN1cnJlbnRTb3VuZDtcclxuICAgIHNjZW5lLmxhc3RTcGF3bk1vdGhlcnNoaXAgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgbW90aGVyc2hpcCBtb3ZlbWVudFxyXG4gIG1vdGhlcnNoaXBNb3ZlbWVudChnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0Lm1vdGhlcnNoaXBNb3ZlbWVudCk7XHJcblxyXG4gIHBvaW50c1VwZGF0ZShnYW1lQWN0aW9uQXNzZXRzQ29uZmlnT2JqZWN0LnBvaW50c1VwZGF0ZSk7XHJcblxyXG4gIGlmIChzY2VuZS5pc0FjdGl2ZSkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lQWN0aW9uKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
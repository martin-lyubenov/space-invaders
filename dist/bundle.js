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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");

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
    constructor() {
        this.render(_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game);
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
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/player */ "./logic/player/player.ts");

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// logic for rendering the mighty defender
// class that renders the defender when the constructor is called
// additionally each instance contains reference to the html div element the defender is render into
class AddDefender {
    constructor() {
        this.render(_player_player__WEBPACK_IMPORTED_MODULE_0__.player);
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
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/player */ "./logic/player/player.ts");

// logic for rendering the alien lazer attacks
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// class that renders one defender lazer attack when the constructor is called
// additionally each instance contains reference to the html div element the lazer is render into
class AddDefenderLazerShot {
    constructor() {
        this.render();
        this.config(_player_player__WEBPACK_IMPORTED_MODULE_0__.player);
    }
    // creates a div element gives it the appropriate class for a defender lazer attack
    render() {
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
/* harmony import */ var _sounds_sounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sounds/sounds */ "./logic/sounds/sounds.ts");

// logic for rendering the alien mothership
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area");
// class that renders one Mothership when the constructor is called
// additionally each instance contains reference to the html div element the Mothership is render into
class AddMothership {
    constructor() {
        this.render();
        this.config(_sounds_sounds__WEBPACK_IMPORTED_MODULE_0__.sounds);
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");
/* harmony import */ var _sounds_sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/sounds */ "./logic/sounds/sounds.ts");
/* harmony import */ var _util_isCollision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isCollision */ "./logic/util/isCollision.ts");



// logic for checking if an alien has been hit. If yes, the alien is marked as "dead" and the player is awared points
// how do we know if an alien is dead you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information
// dead aliens are still on the screen but are not visible to the player, nor can they be interacted with
function alienDeathAndPoints() {
    // selects all alien HTML div elements and stores them in an array
    const aliens = document.querySelectorAll(".alien");
    // loops through the alien array to check if any alien was hit
    aliens.forEach((alien) => {
        // selects all defender lazer attack HTML div elements and stores them in an array
        const lazerShots = document.querySelectorAll(".lazer-shot");
        // loops loops through the lazer shots to check if any of the aliens were hit
        // if any are hit a death animation and sound are played and the appropriate amount of poitns are given to the player
        // the lazer attack is removed after hiting an alien
        lazerShots.forEach((lazerShot) => {
            // checks for collision between the alien and the defender attack. For more info see the isCollision file
            if ((0,_util_isCollision__WEBPACK_IMPORTED_MODULE_2__.isCollision)(lazerShot, alien) &&
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
                _sounds_sounds__WEBPACK_IMPORTED_MODULE_1__.sounds.alienDeathSound.play();
                // points for the player
                if (alien.classList.contains("alien-40pts")) {
                    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.score += 40;
                }
                else if (alien.classList.contains("alien-20pts")) {
                    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.score += 20;
                }
                else if (alien.classList.contains("alien-10pts")) {
                    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.score += 10;
                }
                else if (alien.classList.contains("mothership")) {
                    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.score += 300;
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
/* harmony import */ var _addObjects_addAlienLazerShot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addObjects/addAlienLazerShot */ "./logic/addObjects/addAlienLazerShot.ts");
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");


// logic for choosing when an alien should attack
function alienFiringCycle(timestamp) {
    // selects all alien HTML div elements and stores them in an array
    const aliens = document.querySelectorAll(".alien");
    // filters the dead aliens
    const remainingAliens = Array.from(aliens).filter((alien) => alien.classList.contains("dead-alien") === false);
    // picks a random postion to make sure a random alien fires every time
    const randomAlienPosition = Math.round(remainingAliens.length * Math.random());
    // there is an interval set between alien attacks
    // the if checks if the interval has expired before appending an alien attack to the game screen
    if (timestamp - _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.scene.lastAlienLazerShot > _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.alienFireInterval) {
        // calls the AddAlienLazerShot class to append an alien attack at a random alien
        new _addObjects_addAlienLazerShot__WEBPACK_IMPORTED_MODULE_0__.AddAlienLazerShot(remainingAliens[randomAlienPosition]);
        // sets the new interval between alien attacks, otherwise the aliens will fire constantly (which is somewhat hilarious, but will almost instantly crash the game)
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.scene.lastAlienLazerShot = timestamp;
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");

// logic for animating the alien lazer attack
// the way the attacks are animated is as follows -> each frame the game checks the background spire and the sprite change interval ( located in the "game" object) and changes the sprite simulating movement
function alienLazerShotSprites(timestamp, alienLazerShot) {
    if (timestamp - _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastAlienLazerShotSpriteInterval >
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienLazerShotSpriteChangeInterval) {
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
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastAlienLazerShotSpriteInterval = timestamp;
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");

// logic for animation the aliens
// the way the aliens are animated is as follows -> each frame the game checks the background sprite and the sprite change interval ( located in the "game" object) and changes the sprite simulating movement
function alienSpriteAnimation(timestamp) {
    // selects all alien HTML div elements and saves them in an array
    const aliens = document.querySelectorAll(".alien");
    if (timestamp - _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastAlienSpriteInterval >
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienSpriteChangeInterval) {
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
            _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastAlienSpriteInterval = timestamp;
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player */ "./logic/player/player.ts");
/* harmony import */ var _util_isCollision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isCollision */ "./logic/util/isCollision.ts");



// logic for checking if an alien has hit the defender
// how do we know if the defender has been hit you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information
// the name of the func is quite the mouthful I know
function defenderAlienLazerShotCollisionChecker(defender, alienLazerShot, gameArea, gameOver) {
    // the func reveals the game over screen and stops the game until the player decides to restart
    function gameOverAction(gameOver) {
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.isActive = false;
        gameOver.classList.remove("hidden");
    }
    // checks for collision between the defender and an alien attack
    if ((0,_util_isCollision__WEBPACK_IMPORTED_MODULE_2__.isCollision)(defender, alienLazerShot)) {
        // sellects the remaining lives
        let lives = document.querySelectorAll(".one-life");
        // removes the alien attack form the game screen
        alienLazerShot.remove();
        // if the players still has lives one is removed and the position of the defender is reset to the starting one
        if (lives.length > 1) {
            _player_player__WEBPACK_IMPORTED_MODULE_1__.player.x = 100;
            _player_player__WEBPACK_IMPORTED_MODULE_1__.player.y = gameArea.offsetHeight - 50;
            defender.style.left = _player_player__WEBPACK_IMPORTED_MODULE_1__.player.x + "px";
            defender.style.top = _player_player__WEBPACK_IMPORTED_MODULE_1__.player.y + "px";
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
/* harmony import */ var _util_isCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isCollision */ "./logic/util/isCollision.ts");

// logic for checking if an alien has hit one of the defender's shields
// how do we know if a shield has been hit you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information
// the name of the func is quite the mouthful I know
function shieldAlienLazerShotCollisionChecker(alienLazerShot) {
    // selects all of the shield HTML elements and stores them in an array
    let shields = document.querySelectorAll(".shield");
    // loops through the shield elements and check if any has been hit
    shields.forEach((shield) => {
        // shields have 3 "lives", each hit removes one and damages them which is represented by changing the sprite with a more damaged version
        if ((0,_util_isCollision__WEBPACK_IMPORTED_MODULE_0__.isCollision)(shield, alienLazerShot) &&
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

/***/ "./logic/main.ts":
/*!***********************!*\
  !*** ./logic/main.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameAction: () => (/* binding */ gameAction)
/* harmony export */ });
/* harmony import */ var _addObjects_addMothership__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addObjects/addMothership */ "./logic/addObjects/addMothership.ts");
/* harmony import */ var _animations_alienSprites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/alienSprites */ "./logic/animations/alienSprites.ts");
/* harmony import */ var _alienDeathAndPoints_alienDeathAndPoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alienDeathAndPoints/alienDeathAndPoints */ "./logic/alienDeathAndPoints/alienDeathAndPoints.ts");
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");
/* harmony import */ var _objectMovement_alienCluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objectMovement/alienCluster */ "./logic/objectMovement/alienCluster.ts");
/* harmony import */ var _objectMovement_alienLazerShots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objectMovement/alienLazerShots */ "./logic/objectMovement/alienLazerShots.ts");
/* harmony import */ var _objectMovement_lazerShots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objectMovement/lazerShots */ "./logic/objectMovement/lazerShots.ts");
/* harmony import */ var _objectMovement_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objectMovement/player */ "./logic/objectMovement/player.ts");
/* harmony import */ var _player_playerMovementControlls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player/playerMovementControlls */ "./logic/player/playerMovementControlls.ts");
/* harmony import */ var _points_pointsUpdate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./points/pointsUpdate */ "./logic/points/pointsUpdate.ts");
/* harmony import */ var _respwan_aliens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./respwan/aliens */ "./logic/respwan/aliens.ts");
/* harmony import */ var _sounds_sounds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sounds/sounds */ "./logic/sounds/sounds.ts");
/* harmony import */ var _alienFiringCycle_alienFiringCycle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./alienFiringCycle/alienFiringCycle */ "./logic/alienFiringCycle/alienFiringCycle.ts");
/* harmony import */ var _objectMovement_mothership__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./objectMovement/mothership */ "./logic/objectMovement/mothership.ts");
/* harmony import */ var _util_startGame__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util/startGame */ "./logic/util/startGame.ts");
/* harmony import */ var _util_gameRestart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./util/gameRestart */ "./logic/util/gameRestart.ts");
















const startButton = document.querySelector(".start-button");
let gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const points = document.querySelector(".points");
// backgournd music loop
_sounds_sounds__WEBPACK_IMPORTED_MODULE_11__.sounds.backgroundMusic.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
});
// done to reduce types and easy of adding new parameters to the gameAction
// start game button event listener
startButton.addEventListener("click", () => {
    return (0,_util_startGame__WEBPACK_IMPORTED_MODULE_14__.onGameStart)();
});
// game over and restart game event listener
gameOver.addEventListener("click", () => {
    return (0,_util_gameRestart__WEBPACK_IMPORTED_MODULE_15__.gameRestart)(gameArea, gameOver);
});
let mothershipCurrentSound;
// game engine
function gameAction(timestamp) {
    // during each frame the engine checks the state of the game and updates the screen accordingly
    // movement keys
    (0,_player_playerMovementControlls__WEBPACK_IMPORTED_MODULE_8__.playerMovementControlls)(gameArea);
    // shooting
    (0,_player_playerMovementControlls__WEBPACK_IMPORTED_MODULE_8__.playerShootingControlls)(timestamp //timestamp must always be added as it comes from the gameAction func itself
    );
    // apply player movement
    (0,_objectMovement_player__WEBPACK_IMPORTED_MODULE_7__.playerMovement)();
    // add lazer movement
    (0,_objectMovement_lazerShots__WEBPACK_IMPORTED_MODULE_6__.lazerShotsMovement)();
    // add alient cluster movement
    (0,_objectMovement_alienCluster__WEBPACK_IMPORTED_MODULE_4__.alienClusterMovement)(gameArea);
    // alien death and points
    (0,_alienDeathAndPoints_alienDeathAndPoints__WEBPACK_IMPORTED_MODULE_2__.alienDeathAndPoints)();
    // respawn aliens
    (0,_respwan_aliens__WEBPACK_IMPORTED_MODULE_10__.respawnAliens)();
    // aliens sprite animation
    (0,_animations_alienSprites__WEBPACK_IMPORTED_MODULE_1__.alienSpriteAnimation)(timestamp);
    // aliens firing back (in self defence)
    (0,_alienFiringCycle_alienFiringCycle__WEBPACK_IMPORTED_MODULE_12__.alienFiringCycle)(timestamp);
    // add movment and collision to alien lazer shots
    (0,_objectMovement_alienLazerShots__WEBPACK_IMPORTED_MODULE_5__.alienLazerShotsMovmentAndCollisionChecker)(gameArea, gameOver, timestamp);
    // add mothership
    if (timestamp - _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_3__.scene.lastSpawnMothership >
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_3__.game.mothershipSpawnInterval + 50000 * Math.random()) {
        const mothershipInstance = new _addObjects_addMothership__WEBPACK_IMPORTED_MODULE_0__.AddMothership();
        mothershipCurrentSound = mothershipInstance.mothershipCurrentSound;
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_3__.scene.lastSpawnMothership = timestamp;
    }
    // add mothership movement
    (0,_objectMovement_mothership__WEBPACK_IMPORTED_MODULE_13__.mothershipMovement)(mothershipCurrentSound);
    // updates the points
    (0,_points_pointsUpdate__WEBPACK_IMPORTED_MODULE_9__.pointsUpdate)(points);
    if (_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_3__.scene.isActive) {
        window.requestAnimationFrame(gameAction);
    }
}


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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");

// logic for moving the alien cluster on the game screen
function alienClusterMovement(gameArea) {
    // sellets the alien cluster HTML div element
    // the HTML element will always exist this is why a non-null assertion operator (!) is used
    const alienCluster = document.querySelector(".alien-cluster");
    // determents the alien cluster movement direction
    if (_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienPos + alienCluster.offsetWidth > gameArea.offsetWidth - 100) {
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienDirection = -_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.speed;
    }
    else if (_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienPos < 100) {
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienDirection = _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.speed;
    }
    // moves the alien cluster according the the alien direction
    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienPos += _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienDirection * _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienClusterMultiplier;
    alienCluster.style.left = _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.alienPos + "px";
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
/* harmony import */ var _collisionChecker_defenderAlienLazerShot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collisionChecker/defenderAlienLazerShot */ "./logic/collisionChecker/defenderAlienLazerShot.ts");
/* harmony import */ var _collisionChecker_shieldAlienLazerShot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collisionChecker/shieldAlienLazerShot */ "./logic/collisionChecker/shieldAlienLazerShot.ts");
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");




// logic for moving an alient attack and  checking if the attack has hit either the defender or one of the shields
// the name of the func is quite the mouthful I know
function alienLazerShotsMovmentAndCollisionChecker(gameArea, gameOver, timestamp) {
    // the HTML element will always exist this is why a non-null assertion operator (!) is used
    const defender = document.querySelector(".defender");
    // selects all alien attack HTML Div elements
    let alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
    // loops through the alien attacks
    alienLazerShots.forEach((alienLazerShot) => {
        alienLazerShot.y += _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_3__.game.speed;
        alienLazerShot.style.top = alienLazerShot.y + "px";
        // animates the alien attack
        (0,_animations_alienLazerShotSprites__WEBPACK_IMPORTED_MODULE_0__.alienLazerShotSprites)(timestamp, alienLazerShot);
        // removes the alien attack from the dom when it reaches the end of the game screen
        if (alienLazerShot.y + alienLazerShot.offsetHeight >
            gameArea.offsetHeight - alienLazerShot.offsetHeight / 2) {
            alienLazerShot.remove();
        }
        // checks if the alien attack has hit the defender
        (0,_collisionChecker_defenderAlienLazerShot__WEBPACK_IMPORTED_MODULE_1__.defenderAlienLazerShotCollisionChecker)(defender, alienLazerShot, gameArea, gameOver);
        // checks if the alien attack has hit a shield
        (0,_collisionChecker_shieldAlienLazerShot__WEBPACK_IMPORTED_MODULE_2__.shieldAlienLazerShotCollisionChecker)(alienLazerShot);
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");
/* harmony import */ var _util_isCollision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isCollision */ "./logic/util/isCollision.ts");


// logic for moving the defender attacks on the game screen
function lazerShotsMovement() {
    // selects all of the defenders attacks and stores them in an array
    const lazerShots = document.querySelectorAll(".lazer-shot");
    //loops through the attacks
    lazerShots.forEach((lazerShot) => {
        // moves the attack by changing it's "y" position
        lazerShot.y -= _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.speed;
        lazerShot.style.top = lazerShot.y + "px";
        // if the attack reaches the end of the screen it is removed
        if (lazerShot.y + lazerShot.offsetHeight < 0) {
            lazerShot.remove();
        }
        // if the defender's lazer shot hits a shield, the shot is removed without damaging the shield
        const shields = document.querySelectorAll(".shield");
        shields.forEach((shield) => {
            if ((0,_util_isCollision__WEBPACK_IMPORTED_MODULE_1__.isCollision)(lazerShot, shield) &&
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");

// logic for moving the mothership on the game screen
function mothershipMovement(mothershipCurrentSound) {
    // selects all mothership HTML div elements on the screen and stores them in an array
    const motherships = document.querySelectorAll(".mothership");
    // loops through the motherships ( there is usually only one)
    motherships.forEach((mothership) => {
        //moves the mothership on the game screen
        mothership.x -= _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.speed;
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
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/player */ "./logic/player/player.ts");

// logic for moving the mothership on the game screen
function playerMovement() {
    // the HTML element will always exist this is why a non-null assertion operator (!) is used
    const defender = document.querySelector(".defender");
    //moves the mothership on the game screen
    defender.style.left = _player_player__WEBPACK_IMPORTED_MODULE_0__.player.x + "px";
    defender.style.top = _player_player__WEBPACK_IMPORTED_MODULE_0__.player.y - _player_player__WEBPACK_IMPORTED_MODULE_0__.player.height + "px";
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
/* harmony import */ var _addObjects_addDefenderLazerShot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addObjects/addDefenderLazerShot */ "./logic/addObjects/addDefenderLazerShot.ts");
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");
/* harmony import */ var _sounds_sounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sounds/sounds */ "./logic/sounds/sounds.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./logic/player/player.ts");




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
function playerMovementControlls(gameArea) {
    // if the player is pressing or holding the left arrow, move the player to the left
    if (keys.ArrowLeft && _player__WEBPACK_IMPORTED_MODULE_3__.player.x > 0) {
        _player__WEBPACK_IMPORTED_MODULE_3__.player.x -= _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.speed * _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.playerMovementMultiplier;
    }
    // if the player is pressing or holding the left arrow, move the player to the right
    if (keys.ArrowRight && _player__WEBPACK_IMPORTED_MODULE_3__.player.x + _player__WEBPACK_IMPORTED_MODULE_3__.player.width + 20 < gameArea.offsetWidth) {
        _player__WEBPACK_IMPORTED_MODULE_3__.player.x += _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.speed * _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.playerMovementMultiplier;
    }
}
// shooting controlls
function playerShootingControlls(timestamp) {
    // if the player is pressing the spacebar render a lazer attack and create the appropriate sound
    if (keys.Space && timestamp - _player__WEBPACK_IMPORTED_MODULE_3__.player.lastTimeShot > _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.fireInterval) {
        new _addObjects_addDefenderLazerShot__WEBPACK_IMPORTED_MODULE_0__.AddDefenderLazerShot();
        _sounds_sounds__WEBPACK_IMPORTED_MODULE_2__.sounds.defenderShooting.play();
        _player__WEBPACK_IMPORTED_MODULE_3__.player.lastTimeShot = timestamp;
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");


// logic for updating the player points
function pointsUpdate(points) {
    points.textContent = _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.scene.score.toString();
    const lives = document.querySelectorAll(".one-life");
    // for every 1000 points the player is awared an extra life
    // the player cannot have more than 5 lives
    if (_generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.scene.score / 1000 >= _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.extraLivesCounter &&
        lives.length <= _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.maxPlayerLives) {
        new _addObjects_addPlayerLife__WEBPACK_IMPORTED_MODULE_0__.AddPlayerLife();
        _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_1__.game.extraLivesCounter++;
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");

// logic for respwaning all the alien cluster once every alien is dead
// dead aliens are still on the screen but are not visible to the player, nor can they be interacted with
function respawnAliens() {
    // selects all of the alien HTML Div elements and stores them in an array
    const aliens = document.querySelectorAll(".alien");
    // filters and stores all of the dead aliens in another array
    const alienRespawnChecker = Array.from(aliens).filter((alien) => alien.classList.contains("dead-alien"));
    // if all of the aliens have been killed removes the "dead" status so they can be interacted with again ( no rest for the wicked, I suppose)
    if (alienRespawnChecker.length === _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.game.maxAlienClusterSize) {
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
/* harmony import */ var _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalGameInfo/generalInfo */ "./logic/generalGameInfo/generalInfo.ts");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player */ "./logic/player/player.ts");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGame */ "./logic/util/startGame.ts");



// logic for restarting the game once the player has lost all of their lives
function gameRestart(gameArea, gameOver) {
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
    _player_player__WEBPACK_IMPORTED_MODULE_1__.player.x = 100;
    _player_player__WEBPACK_IMPORTED_MODULE_1__.player.y = gameArea.offsetHeight - 50;
    _player_player__WEBPACK_IMPORTED_MODULE_1__.player.width = 0;
    _player_player__WEBPACK_IMPORTED_MODULE_1__.player.height = 0;
    _player_player__WEBPACK_IMPORTED_MODULE_1__.player.lastTimeShot = 0;
    _player_player__WEBPACK_IMPORTED_MODULE_1__.player.lives = 3;
    // resets the scene object stats
    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.score = 0;
    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastAlienSpriteInterval = 0;
    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastAlienLazerShotSpriteInterval = 0;
    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastAlienLazerShot = 0;
    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.lastSpawnMothership = 0;
    _generalGameInfo_generalInfo__WEBPACK_IMPORTED_MODULE_0__.scene.isActive = true;
    // runs the start game function so the game can start again
    (0,_startGame__WEBPACK_IMPORTED_MODULE_2__.onGameStart)();
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
/* harmony import */ var _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addObjects/addAlienCluster */ "./logic/addObjects/addAlienCluster.ts");
/* harmony import */ var _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addObjects/addDefender */ "./logic/addObjects/addDefender.ts");
/* harmony import */ var _addObjects_addPlayerLife__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addObjects/addPlayerLife */ "./logic/addObjects/addPlayerLife.ts");
/* harmony import */ var _addObjects_addShields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addObjects/addShields */ "./logic/addObjects/addShields.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main */ "./logic/main.ts");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player/player */ "./logic/player/player.ts");
/* harmony import */ var _sounds_sounds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sounds/sounds */ "./logic/sounds/sounds.ts");







// the HTML element will always exist this is why a non-null assertion operator (!) is used
const startGame = document.querySelector(".start-game");
// start game
function onGameStart() {
    // hides the start game screen
    startGame.classList.add("hidden");
    // creates a new defender HTML div element
    const defenderInstance = new _addObjects_addDefender__WEBPACK_IMPORTED_MODULE_1__.AddDefender();
    const defender = defenderInstance.defender;
    // sets some player stats, needed in other parts of the game
    _player_player__WEBPACK_IMPORTED_MODULE_5__.player.height = defender.offsetHeight;
    _player_player__WEBPACK_IMPORTED_MODULE_5__.player.width = defender.offsetWidth;
    // add a new alien cluster
    new _addObjects_addAlienCluster__WEBPACK_IMPORTED_MODULE_0__.AddAlienCluster();
    // addes a new field of shields
    new _addObjects_addShields__WEBPACK_IMPORTED_MODULE_3__.AddShields();
    // start the background music
    _sounds_sounds__WEBPACK_IMPORTED_MODULE_6__.sounds.backgroundMusic.play();
    // gives the player 3 lives
    for (let i = 1; i <= 3; i++) {
        new _addObjects_addPlayerLife__WEBPACK_IMPORTED_MODULE_2__.AddPlayerLife();
    }
    // start the game engine
    window.requestAnimationFrame(_main__WEBPACK_IMPORTED_MODULE_4__.gameAction);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./logic/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUd0RCxxRkFBcUY7QUFFckYsMkZBQTJGO0FBQzNGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFvQixDQUFDO0FBRXpFLHdFQUF3RTtBQUN4RSxpR0FBaUc7QUFDakcsd0NBQXdDO0FBQ3hDLE1BQU0sY0FBYztJQUdsQjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsMEVBQTBFO0lBQ2xFLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQUVELCtFQUErRTtBQUMvRSx5R0FBeUc7QUFDbEcsTUFBTSxlQUFlO0lBSTFCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4REFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2RUFBNkU7SUFDckUsTUFBTSxDQUFDLElBQWlCO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQzNDLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFbEMsc0dBQXNHO1lBQ3RHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDVixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwQztpQkFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQscURBQXFEO0lBQzdDLE1BQU07UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUMvREMsMkZBQTJGO0FBQzdGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFvQixDQUFDO0FBRXpFLDhDQUE4QztBQUU5QyxxRUFBcUU7QUFDckUsaUdBQWlHO0FBQzFGLE1BQU0saUJBQWlCO0lBSTVCLFlBQVksS0FBcUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrRkFBa0Y7SUFDMUUsTUFBTSxDQUFDLEtBQXFCO1FBQ2xDLHNEQUFzRDtRQUN0RCxrRkFBa0Y7UUFDbEYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsb0RBQW9EO0lBQzVDLE1BQU0sQ0FBQyxLQUFxQjtRQUNsQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUM1QixLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN0RSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ3lDO0FBQzFDLDJGQUEyRjtBQUMzRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUV6RSwwQ0FBMEM7QUFFMUMsaUVBQWlFO0FBQ2pFLG9HQUFvRztBQUM3RixNQUFNLFdBQVc7SUFJdEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtEQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHdFQUF3RTtJQUNoRSxNQUFNLENBQUMsTUFBZTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVELGdEQUFnRDtJQUN4QyxNQUFNO1FBQ1osUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0J5QztBQUUxQyw4Q0FBOEM7QUFFOUMsMkZBQTJGO0FBQzNGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFvQixDQUFDO0FBRXpFLDhFQUE4RTtBQUM5RSxpR0FBaUc7QUFDMUYsTUFBTSxvQkFBb0I7SUFJL0I7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGtEQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsbUZBQW1GO0lBQzNFLE1BQU07UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpRkFBaUY7SUFDekUsTUFBTSxDQUFDLE1BQWU7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0J5QztBQUUxQywyQ0FBMkM7QUFFM0MsMkZBQTJGO0FBQzNGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFvQixDQUFDO0FBRXpFLG1FQUFtRTtBQUNuRSxzR0FBc0c7QUFDL0YsTUFBTSxhQUFhO0lBS3hCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrREFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHdFQUF3RTtJQUNoRSxNQUFNO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHNHQUFzRztJQUM5RixNQUFNLENBQUMsTUFBZTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFckMsNkNBQTZDO1FBQzdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztTQUMvRDthQUFNO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztTQUM5RDtRQUVELFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDekNELDJGQUEyRjtBQUMzRixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN6QyxnQkFBZ0IsQ0FDRSxDQUFDO0FBRXJCLG9FQUFvRTtBQUNwRSxvR0FBb0c7QUFDN0YsTUFBTSxhQUFhO0lBSXhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxvRUFBb0U7SUFDNUQsTUFBTTtRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRDQUE0QztJQUNwQyxNQUFNO1FBQ1osWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkQsd0ZBQXdGO0FBRXhGLDJGQUEyRjtBQUMzRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUV6RSx5RUFBeUU7QUFDekUsaUdBQWlHO0FBQ2pHLHdDQUF3QztBQUN4QyxNQUFNLGVBQWU7SUFJbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELCtFQUErRTtJQUN2RSxNQUFNO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0Y7QUFFRCxxRUFBcUU7QUFDckUseUdBQXlHO0FBQ2xHLE1BQU0sVUFBVTtJQUlyQjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0dBQWdHO0lBQ3hGLE1BQU07UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRS9DLHVJQUF1STtRQUN2SSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUNuRCxNQUFNLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUM7WUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsdUZBQXVGO0lBQy9FLE1BQU07UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUUvRCxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEc0Q7QUFDYjtBQUNRO0FBRWxELHFIQUFxSDtBQUNySCxnTkFBZ047QUFDaE4sb0RBQW9EO0FBRXBELHlHQUF5RztBQUVsRyxTQUFTLG1CQUFtQjtJQUNqQyxrRUFBa0U7SUFDbEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUN0QyxRQUFRLENBQ3FCLENBQUM7SUFFaEMsOERBQThEO0lBQzlELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN2QixrRkFBa0Y7UUFDbEYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUMxQyxhQUFhLENBQ2dCLENBQUM7UUFFaEMsNkVBQTZFO1FBQzdFLHFIQUFxSDtRQUNySCxvREFBb0Q7UUFDcEQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQy9CLHlHQUF5RztZQUN6RyxJQUNFLDhEQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztnQkFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxFQUNoRDtnQkFDQSxtR0FBbUc7Z0JBQ25HLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZTtvQkFDekIsNENBQTRDLENBQUM7Z0JBQy9DLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDUCwwREFBMEQ7Z0JBQzFELFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbkIscUJBQXFCO2dCQUNyQixrREFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFOUIsd0JBQXdCO2dCQUN4QixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUMzQywrREFBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7aUJBQ25CO3FCQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ2xELCtEQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDbEQsK0RBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2lCQUNuQjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNqRCwrREFBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7aUJBQ3BCO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RG1FO0FBQ1A7QUFFN0QsaURBQWlEO0FBRTFDLFNBQVMsZ0JBQWdCLENBQUMsU0FBaUI7SUFDaEQsa0VBQWtFO0lBQ2xFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVuRCwwQkFBMEI7SUFDMUIsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQy9DLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLENBQ3hDLENBQUM7SUFDdEIsc0VBQXNFO0lBQ3RFLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDcEMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQ3ZDLENBQUM7SUFDRixpREFBaUQ7SUFDakQsZ0dBQWdHO0lBQ2hHLElBQUksU0FBUyxHQUFHLCtEQUFLLENBQUMsa0JBQWtCLEdBQUcsOERBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUNqRSxnRkFBZ0Y7UUFDaEYsSUFBSSw0RUFBaUIsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQzVELGlLQUFpSztRQUNqSywrREFBSyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztLQUN0QztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjREO0FBRTdELDZDQUE2QztBQUM3Qyw4TUFBOE07QUFFdk0sU0FBUyxxQkFBcUIsQ0FDbkMsU0FBaUIsRUFDakIsY0FBOEI7SUFFOUIsSUFDRSxTQUFTLEdBQUcsK0RBQUssQ0FBQyxnQ0FBZ0M7UUFDbEQsOERBQUksQ0FBQyxrQ0FBa0MsRUFDdkM7UUFDQSxrRkFBa0Y7UUFDbEYsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0QsY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlO2dCQUNsQywwQ0FBMEMsQ0FBQztTQUM5QzthQUFNLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xFLGNBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZTtnQkFDbEMsMENBQTBDLENBQUM7U0FDOUM7YUFBTTtZQUNMLGNBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZTtnQkFDbEMsMENBQTBDLENBQUM7U0FDOUM7UUFFRCxzRkFBc0Y7UUFDdEYsK0RBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxTQUFTLENBQUM7S0FDcEQ7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUI0RDtBQUc3RCxpQ0FBaUM7QUFDakMsOE1BQThNO0FBRXZNLFNBQVMsb0JBQW9CLENBQUMsU0FBaUI7SUFDcEQsaUVBQWlFO0lBQ2pFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDdEMsUUFBUSxDQUNxQixDQUFDO0lBQ2hDLElBQ0UsU0FBUyxHQUFHLCtEQUFLLENBQUMsdUJBQXVCO1FBQ3pDLDhEQUFJLENBQUMseUJBQXlCLEVBQzlCO1FBQ0EsMkZBQTJGO1FBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2QixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDcEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlO3dCQUN6QiwwQ0FBMEMsQ0FBQztpQkFDOUM7cUJBQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQzNELEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZTt3QkFDekIsMENBQTBDLENBQUM7aUJBQzlDO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZTt3QkFDekIsMENBQTBDLENBQUM7aUJBQzlDO2FBQ0Y7WUFFRCwyRkFBMkY7WUFFM0YsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3BELEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZTt3QkFDekIsMENBQTBDLENBQUM7aUJBQzlDO3FCQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMzRCxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWU7d0JBQ3pCLDBDQUEwQyxDQUFDO2lCQUM5QztxQkFBTTtvQkFDTCxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWU7d0JBQ3pCLDBDQUEwQyxDQUFDO2lCQUM5QzthQUNGO1lBRUQsMkZBQTJGO1lBRTNGLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNwRCxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWU7d0JBQ3pCLDBDQUEwQyxDQUFDO2lCQUM5QztxQkFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDM0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlO3dCQUN6QiwwQ0FBMEMsQ0FBQztpQkFDOUM7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlO3dCQUN6QiwwQ0FBMEMsQ0FBQztpQkFDOUM7YUFDRjtZQUVELHNGQUFzRjtZQUN0RiwrREFBSyxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVzRDtBQUNiO0FBQ1E7QUFFbEQsc0RBQXNEO0FBRXRELHlOQUF5TjtBQUN6TixvREFBb0Q7QUFFcEQsb0RBQW9EO0FBQzdDLFNBQVMsc0NBQXNDLENBQ3BELFFBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLFFBQXdCLEVBQ3hCLFFBQXdCO0lBRXhCLCtGQUErRjtJQUMvRixTQUFTLGNBQWMsQ0FBQyxRQUF3QjtRQUM5QywrREFBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFJLDhEQUFXLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUFFO1FBQ3pDLCtCQUErQjtRQUMvQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsZ0RBQWdEO1FBQ2hELGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4Qiw4R0FBOEc7UUFDOUcsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixrREFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDZixrREFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN0QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrREFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDdEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsa0RBQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2xDO2FBQU07WUFDTCxpR0FBaUc7WUFDakcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENpRDtBQUVsRCx1RUFBdUU7QUFFdkUscU5BQXFOO0FBQ3JOLG9EQUFvRDtBQUVwRCxvREFBb0Q7QUFDN0MsU0FBUyxvQ0FBb0MsQ0FDbEQsY0FBOEI7SUFFOUIsc0VBQXNFO0lBQ3RFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDckMsU0FBUyxDQUNvQixDQUFDO0lBQ2hDLGtFQUFrRTtJQUNsRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDekIsd0lBQXdJO1FBQ3hJLElBQ0UsOERBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssS0FBSyxFQUN2RDtZQUNBLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDL0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDckM7aUJBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDbkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ3BELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN0QztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNwRCxpRkFBaUY7Z0JBQ2pGLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDMUM7WUFDRCxtREFBbUQ7WUFDbkQsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENELDJJQUEySTtBQUUzSSwwQ0FBMEM7QUFDbkMsSUFBSSxJQUFJLEdBQWdCO0lBQzdCLEtBQUssRUFBRSxDQUFDO0lBQ1Isd0JBQXdCLEVBQUUsQ0FBQztJQUMzQiwyQkFBMkIsRUFBRSxDQUFDO0lBQzlCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsUUFBUSxFQUFFLENBQUM7SUFDWCxjQUFjLEVBQUUsQ0FBQztJQUNqQix5QkFBeUIsRUFBRSxHQUFHO0lBQzlCLGtDQUFrQyxFQUFFLEVBQUU7SUFDdEMsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixZQUFZLEVBQUUsR0FBRztJQUNqQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLHVCQUF1QixFQUFFLEtBQUs7SUFDOUIsNEJBQTRCLEVBQUUsQ0FBQztJQUMvQixtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLGNBQWMsRUFBRSxDQUFDO0NBQ2xCLENBQUM7QUFFRixpQ0FBaUM7QUFDakMsaUVBQWlFO0FBQzFELElBQUksS0FBSyxHQUFpQjtJQUMvQixLQUFLLEVBQUUsQ0FBQztJQUNSLHVCQUF1QixFQUFFLENBQUM7SUFDMUIsZ0NBQWdDLEVBQUUsQ0FBQztJQUNuQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLG1CQUFtQixFQUFFLENBQUM7SUFDdEIsUUFBUSxFQUFFLElBQUksRUFBRSx5RUFBeUU7Q0FDMUYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDeUQ7QUFDTTtBQUNlO0FBQ3BCO0FBQ1M7QUFDd0I7QUFDNUI7QUFDUjtBQUlmO0FBQ1c7QUFDSjtBQUNSO0FBQzhCO0FBQ047QUFFbEI7QUFDRTtBQUVqRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztBQUMvRSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUN2RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUN6RSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBb0IsQ0FBQztBQUVwRSx3QkFBd0I7QUFDeEIsbURBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBRUgsMkVBQTJFO0FBRTNFLG1DQUFtQztBQUNuQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUN6QyxPQUFPLDZEQUFXLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUVILDRDQUE0QztBQUM1QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUN0QyxPQUFPLCtEQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxzQkFBd0MsQ0FBQztBQUU3QyxjQUFjO0FBQ1AsU0FBUyxVQUFVLENBQUMsU0FBaUI7SUFDMUMsK0ZBQStGO0lBRS9GLGdCQUFnQjtJQUNoQix3RkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsQyxXQUFXO0lBQ1gsd0ZBQXVCLENBQ3JCLFNBQVMsQ0FBQyw0RUFBNEU7S0FDdkYsQ0FBQztJQUVGLHdCQUF3QjtJQUN4QixzRUFBYyxFQUFFLENBQUM7SUFFakIscUJBQXFCO0lBQ3JCLDhFQUFrQixFQUFFLENBQUM7SUFFckIsOEJBQThCO0lBQzlCLGtGQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9CLHlCQUF5QjtJQUN6Qiw2RkFBbUIsRUFBRSxDQUFDO0lBRXRCLGlCQUFpQjtJQUNqQiwrREFBYSxFQUFFLENBQUM7SUFFaEIsMEJBQTBCO0lBQzFCLDhFQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhDLHVDQUF1QztJQUN2QyxxRkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU1QixpREFBaUQ7SUFDakQsMEdBQXlDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV6RSxpQkFBaUI7SUFDakIsSUFDRSxTQUFTLEdBQUcsK0RBQUssQ0FBQyxtQkFBbUI7UUFDckMsOERBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUNwRDtRQUNBLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxvRUFBYSxFQUFFLENBQUM7UUFDL0Msc0JBQXNCLEdBQUcsa0JBQWtCLENBQUMsc0JBQXNCLENBQUM7UUFDbkUsK0RBQUssQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7S0FDdkM7SUFFRCwwQkFBMEI7SUFDMUIsK0VBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUUzQyxxQkFBcUI7SUFDckIsa0VBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixJQUFJLCtEQUFLLENBQUMsUUFBUSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMxQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR3FEO0FBR3RELHdEQUF3RDtBQUVqRCxTQUFTLG9CQUFvQixDQUFDLFFBQXdCO0lBQzNELDZDQUE2QztJQUM3QywyRkFBMkY7SUFDM0YsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDekMsZ0JBQWdCLENBQ0UsQ0FBQztJQUVyQixrREFBa0Q7SUFDbEQsSUFBSSw4REFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO1FBQ3pFLDhEQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsOERBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkM7U0FBTSxJQUFJLDhEQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUM5Qiw4REFBSSxDQUFDLGNBQWMsR0FBRyw4REFBSSxDQUFDLEtBQUssQ0FBQztLQUNsQztJQUVELDREQUE0RDtJQUM1RCw4REFBSSxDQUFDLFFBQVEsSUFBSSw4REFBSSxDQUFDLGNBQWMsR0FBRyw4REFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ25FLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLDhEQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNqRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIyRTtBQUN3QjtBQUNKO0FBQzFDO0FBRXRELGtIQUFrSDtBQUVsSCxvREFBb0Q7QUFDN0MsU0FBUyx5Q0FBeUMsQ0FDdkQsUUFBd0IsRUFDeEIsUUFBd0IsRUFDeEIsU0FBaUI7SUFFakIsMkZBQTJGO0lBQzNGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFvQixDQUFDO0lBQ3hFLDZDQUE2QztJQUM3QyxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQzdDLG1CQUFtQixDQUNVLENBQUM7SUFFaEMsa0NBQWtDO0lBQ2xDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRTtRQUN6QyxjQUFjLENBQUMsQ0FBQyxJQUFJLDhEQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRW5ELDRCQUE0QjtRQUM1Qix3RkFBcUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFakQsbUZBQW1GO1FBQ25GLElBQ0UsY0FBYyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsWUFBWTtZQUM5QyxRQUFRLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUN2RDtZQUNBLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN6QjtRQUVELGtEQUFrRDtRQUNsRCxnSEFBc0MsQ0FDcEMsUUFBUSxFQUNSLGNBQWMsRUFDZCxRQUFRLEVBQ1IsUUFBUSxDQUNULENBQUM7UUFFRiw4Q0FBOEM7UUFDOUMsNEdBQW9DLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DcUQ7QUFHSjtBQUVsRCwyREFBMkQ7QUFFcEQsU0FBUyxrQkFBa0I7SUFDaEMsbUVBQW1FO0lBQ25FLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDMUMsYUFBYSxDQUNnQixDQUFDO0lBRWhDLDJCQUEyQjtJQUMzQixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDL0IsaURBQWlEO1FBQ2pELFNBQVMsQ0FBQyxDQUFDLElBQUksOERBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUIsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFekMsNERBQTREO1FBQzVELElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUM1QyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEI7UUFFRCw4RkFBOEY7UUFDOUYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUN2QyxTQUFTLENBQ3FCLENBQUM7UUFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3pCLElBQ0UsOERBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO2dCQUM5QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEtBQUssRUFDdkQ7Z0JBQ0EsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3FEO0FBRXRELHFEQUFxRDtBQUU5QyxTQUFTLGtCQUFrQixDQUFDLHNCQUF3QztJQUN6RSxxRkFBcUY7SUFDckYsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUMzQyxhQUFhLENBQ2dCLENBQUM7SUFFaEMsNkRBQTZEO0lBQzdELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtRQUNqQyx5Q0FBeUM7UUFDekMsVUFBVSxDQUFDLENBQUMsSUFBSSw4REFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUU1Qyx1REFBdUQ7UUFDdkQsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDekQsc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7UUFFRCwwRUFBMEU7UUFDMUUsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO1lBQzlDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeUM7QUFFMUMscURBQXFEO0FBRTlDLFNBQVMsY0FBYztJQUM1QiwyRkFBMkY7SUFDM0YsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQW9CLENBQUM7SUFDeEUseUNBQXlDO0lBQ3pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGtEQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN0QyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxrREFBTSxDQUFDLENBQUMsR0FBRyxrREFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDdkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEQsOEVBQThFO0FBRTlFLDJGQUEyRjtBQUMzRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUVsRSxJQUFJLE1BQU0sR0FBWTtJQUMzQixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxRQUFRLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDN0IsS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsQ0FBQztJQUNULFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFLENBQUM7Q0FDVCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R3RTtBQUNwQjtBQUdaO0FBQ1I7QUFFbEMsNENBQTRDO0FBRTVDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUU1Qyx5RkFBeUY7QUFDekYsSUFBSSxJQUFJLEdBRUosRUFBRSxDQUFDO0FBRVAsdURBQXVEO0FBQ3ZELFNBQVMsU0FBUyxDQUFDLENBQWdCO0lBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLENBQUM7QUFFRCx1REFBdUQ7QUFDdkQsU0FBUyxPQUFPLENBQUMsQ0FBZ0I7SUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDdkIsQ0FBQztBQUVELHFCQUFxQjtBQUNkLFNBQVMsdUJBQXVCLENBQUMsUUFBd0I7SUFDOUQsbUZBQW1GO0lBQ25GLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSwyQ0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDbEMsMkNBQU0sQ0FBQyxDQUFDLElBQUksOERBQUksQ0FBQyxLQUFLLEdBQUcsOERBQUksQ0FBQyx3QkFBd0IsQ0FBQztLQUN4RDtJQUVELG9GQUFvRjtJQUNwRixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksMkNBQU0sQ0FBQyxDQUFDLEdBQUcsMkNBQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7UUFDMUUsMkNBQU0sQ0FBQyxDQUFDLElBQUksOERBQUksQ0FBQyxLQUFLLEdBQUcsOERBQUksQ0FBQyx3QkFBd0IsQ0FBQztLQUN4RDtBQUNILENBQUM7QUFFRCxxQkFBcUI7QUFDZCxTQUFTLHVCQUF1QixDQUFDLFNBQWlCO0lBQ3ZELGdHQUFnRztJQUNoRyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFHLDJDQUFNLENBQUMsWUFBWSxHQUFHLDhEQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JFLElBQUksa0ZBQW9CLEVBQUUsQ0FBQztRQUMzQixrREFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLDJDQUFNLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztLQUNqQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQyRDtBQUNDO0FBRTdELHVDQUF1QztBQUVoQyxTQUFTLFlBQVksQ0FBQyxNQUFzQjtJQUNqRCxNQUFNLENBQUMsV0FBVyxHQUFHLCtEQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTVDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVyRCwyREFBMkQ7SUFDM0QsMkNBQTJDO0lBQzNDLElBQ0UsK0RBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLDhEQUFJLENBQUMsaUJBQWlCO1FBQzVDLEtBQUssQ0FBQyxNQUFNLElBQUksOERBQUksQ0FBQyxjQUFjLEVBQ25DO1FBQ0EsSUFBSSxvRUFBYSxFQUFFLENBQUM7UUFDcEIsOERBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CcUQ7QUFFdEQsc0VBQXNFO0FBRXRFLHlHQUF5RztBQUVsRyxTQUFTLGFBQWE7SUFDM0IseUVBQXlFO0lBQ3pFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDdEMsUUFBUSxDQUNxQixDQUFDO0lBRWhDLDZEQUE2RDtJQUM3RCxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDOUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQ3ZDLENBQUM7SUFFRiw0SUFBNEk7SUFDNUksSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEtBQUssOERBQUksQ0FBQyxtQkFBbUIsRUFBRTtRQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTSxNQUFNLE1BQU0sR0FBWTtJQUMzQixnQkFBZ0IsRUFBRSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztJQUNqRCxlQUFlLEVBQUUsSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUM7SUFDeEQsZUFBZSxFQUFFLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDO0lBQzFELHdCQUF3QixFQUFFLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDO0lBQ2pFLHVCQUF1QixFQUFFLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDO0NBQ2xFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSc0Q7QUFFYjtBQUNBO0FBRTFDLDRFQUE0RTtBQUVyRSxTQUFTLFdBQVcsQ0FDekIsUUFBd0IsRUFDeEIsUUFBd0I7SUFFeEIsNkJBQTZCO0lBQzdCLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWpDLDRDQUE0QztJQUM1QyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN6QyxnQkFBZ0IsQ0FDRSxDQUFDO0lBRXJCLDhDQUE4QztJQUM5QyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFdEIseUdBQXlHO0lBQ3pHLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RCw0REFBNEQ7SUFDNUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFdEQsd0NBQXdDO0lBQ3hDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFvQixDQUFDO0lBQ3hFLCtDQUErQztJQUMvQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFbEIsNkZBQTZGO0lBQzdGLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZFLHFGQUFxRjtJQUNyRixlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUVyRSx1RkFBdUY7SUFDdkYsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELHFFQUFxRTtJQUNyRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUV2QywwREFBMEQ7SUFDMUQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7SUFDM0UsbURBQW1EO0lBQ25ELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVqQixpQ0FBaUM7SUFDakMsa0RBQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2Ysa0RBQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDdEMsa0RBQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLGtEQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQixrREFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsa0RBQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLGdDQUFnQztJQUNoQywrREFBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEIsK0RBQUssQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLENBQUM7SUFDbEMsK0RBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxDQUFDLENBQUM7SUFDM0MsK0RBQUssQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDN0IsK0RBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDOUIsK0RBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBRXRCLDJEQUEyRDtJQUMzRCx1REFBVyxFQUFFLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakVELHVFQUF1RTtBQUN2RSxvREFBb0Q7QUFDN0MsU0FBUyxXQUFXLENBQ3ZCLFlBQTRCLEVBQzVCLGFBQTZCO0lBRTdCLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3ZELE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBRXpELE9BQU8sQ0FBQyxDQUNOLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU07UUFDakMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRztRQUNqQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJO1FBQ2pDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FDbEMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkQ7QUFDUjtBQUNJO0FBQ047QUFDakI7QUFDSztBQUNBO0FBRTFDLDJGQUEyRjtBQUMzRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBb0IsQ0FBQztBQUUzRSxhQUFhO0FBQ04sU0FBUyxXQUFXO0lBQ3pCLDhCQUE4QjtJQUM5QixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQywwQ0FBMEM7SUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdFQUFXLEVBQUUsQ0FBQztJQUMzQyxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFFM0MsNERBQTREO0lBQzVELGtEQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDdEMsa0RBQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUVwQywwQkFBMEI7SUFDMUIsSUFBSSx3RUFBZSxFQUFFLENBQUM7SUFDdEIsK0JBQStCO0lBQy9CLElBQUksOERBQVUsRUFBRSxDQUFDO0lBQ2pCLDZCQUE2QjtJQUM3QixrREFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUU5QiwyQkFBMkI7SUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixJQUFJLG9FQUFhLEVBQUUsQ0FBQztLQUNyQjtJQUVELHdCQUF3QjtJQUN4QixNQUFNLENBQUMscUJBQXFCLENBQUMsNkNBQVUsQ0FBQyxDQUFDO0FBQzNDLENBQUM7Ozs7Ozs7VUNyQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FkZE9iamVjdHMvYWRkQWxpZW5DbHVzdGVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRBbGllbkxhemVyU2hvdC50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2FkZE9iamVjdHMvYWRkRGVmZW5kZXIudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hZGRPYmplY3RzL2FkZERlZmVuZGVyTGF6ZXJTaG90LnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRNb3RoZXJzaGlwLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRQbGF5ZXJMaWZlLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWRkT2JqZWN0cy9hZGRTaGllbGRzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWxpZW5EZWF0aEFuZFBvaW50cy9hbGllbkRlYXRoQW5kUG9pbnRzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYWxpZW5GaXJpbmdDeWNsZS9hbGllbkZpcmluZ0N5Y2xlLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvYW5pbWF0aW9ucy9hbGllbkxhemVyU2hvdFNwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9hbmltYXRpb25zL2FsaWVuU3ByaXRlcy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2NvbGxpc2lvbkNoZWNrZXIvZGVmZW5kZXJBbGllbkxhemVyU2hvdC50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL2NvbGxpc2lvbkNoZWNrZXIvc2hpZWxkQWxpZW5MYXplclNob3QudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm8udHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9tYWluLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvYWxpZW5DbHVzdGVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvYWxpZW5MYXplclNob3RzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvb2JqZWN0TW92ZW1lbnQvbGF6ZXJTaG90cy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL29iamVjdE1vdmVtZW50L21vdGhlcnNoaXAudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9vYmplY3RNb3ZlbWVudC9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy9wbGF5ZXIvcGxheWVyLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvcGxheWVyL3BsYXllck1vdmVtZW50Q29udHJvbGxzLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvcG9pbnRzL3BvaW50c1VwZGF0ZS50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3Jlc3B3YW4vYWxpZW5zLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvc291bmRzL3NvdW5kcy50cyIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy8uL2xvZ2ljL3V0aWwvZ2FtZVJlc3RhcnQudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvLi9sb2dpYy91dGlsL2lzQ29sbGlzaW9uLnRzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzLy4vbG9naWMvdXRpbC9zdGFydEdhbWUudHMiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3BhY2UtaW52YWRlcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NwYWNlLWludmFkZXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zcGFjZS1pbnZhZGVycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUdhbWVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVuZGVyaW5nIHRoZSBhbGllbiBjbHVzdGVyIGNhcHN1bGF0ZWQgaW4gYSBzaW5nbGUgbW9kdWxlIHdpdGggMiBjbGFzc2VzXHJcblxyXG4vLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbmNvbnN0IGdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWFyZWFcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gZmlyc3QgY2xhc3MgdG8gcmVuZGVycyBhIHNpbmdsZSBBbGllbiB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWQuXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgYWxpZW4gaXMgcmVuZGVyIGludG9cclxuLy9wcml2YXRlIGNsYXNzIHVzZWQgb25seSBpbiB0aGlzIG1vZHVsZVxyXG5jbGFzcyBBZGRTaW5nbGVBbGllbiB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdheSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciBpcyB1c2VkXHJcbiAgYWxpZW4hOiBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciBhIHNpbmdsZSBhbGllblxyXG4gIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hbGllbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmFsaWVuLmNsYXNzTGlzdC5hZGQoXCJhbGllblwiKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHNlY29uZCBjbGFzcyByZW5kZXJzIHRoZSB3aG9sZSBhbGllbiBjbHVzdGVyIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBjbHVzdGVyIGlzIHJlbmRlciBpbnRvXHJcbmV4cG9ydCBjbGFzcyBBZGRBbGllbkNsdXN0ZXIge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBhbGllbkNsdXN0ZXIhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcihnYW1lKTtcclxuICAgIHRoaXMuY29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciB0aGUgYWxpZW4gY2x1c3RlclxyXG4gIHByaXZhdGUgcmVuZGVyKGdhbWU6IElHYW1lT2JqZWN0KSB7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5jbGFzc0xpc3QuYWRkKFwiYWxpZW4tY2x1c3RlclwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUubWF4QWxpZW5DbHVzdGVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGFsaWVuSW5zdGFuY2UgPSBuZXcgQWRkU2luZ2xlQWxpZW4oKTtcclxuICAgICAgY29uc3QgYWxpZW4gPSBhbGllbkluc3RhbmNlLmFsaWVuO1xyXG5cclxuICAgICAgLy8gdmlzdWFsbHkgdGhlcmUgYXJlIDMgZGlmZmVyZW50IHR5cGVzIG9mIGFsaWVucywgdGhlIFwiaWZcIiBjaGVjayBtYWtlcyBzdXJlIHRvIHNwbGl0IHRoZW0gYWNjb3JkaW5nbHlcclxuICAgICAgaWYgKGkgPCAxMSkge1xyXG4gICAgICAgIGFsaWVuLmNsYXNzTGlzdC5hZGQoXCJhbGllbi00MHB0c1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChpIDwgMzMpIHtcclxuICAgICAgICBhbGllbi5jbGFzc0xpc3QuYWRkKFwiYWxpZW4tMjBwdHNcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxpZW4uY2xhc3NMaXN0LmFkZChcImFsaWVuLTEwcHRzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWxpZW5DbHVzdGVyLmFwcGVuZENoaWxkKGFsaWVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGFwZW5kcyB0aGUgYWxpZW4gY2x1c3RlciB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5zdHlsZS50b3AgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB0aGlzLmFsaWVuQ2x1c3Rlci5zdHlsZS50b3AgPSAwICsgXCJweFwiO1xyXG4gICAgZ2FtZUFyZWEuYXBwZW5kQ2hpbGQodGhpcy5hbGllbkNsdXN0ZXIpO1xyXG4gIH1cclxufVxyXG4iLCIgIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYXJlYVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVuZGVyaW5nIHRoZSBhbGllbiBsYXplciBhdHRhY2tzXHJcblxyXG4vLyBjbGFzcyB0aGF0IHJlbmRlcnMgb25lIGxhemVyIGF0dGFjayB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBsYXplciBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkQWxpZW5MYXplclNob3Qge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBhbGllbkxhemVyU2hvdCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihhbGllbjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHRoaXMucmVuZGVyKGFsaWVuKTtcclxuICAgIHRoaXMuY29uZmlnKGFsaWVuKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBhbGllbiBsYXplciBhdHRhY2tcclxuICBwcml2YXRlIHJlbmRlcihhbGllbjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8vIGNoZWNrIGlmIHRoZSBhbGllbiBleGlzdHMgKCBpZiBpdCBpcyBzdGlsbCBcImFsaXZlXCIpXHJcbiAgICAvLyB0aGlzIHByZXZlbnRzIFwiZGVhZFwiIGFsaWVucyBmcm9tIGF0dGFja2luZyBiZXlvbmQgdGhlIGdyYXZlICggd29vb29vLCBzcG9vb29reSlcclxuICAgIGlmIChhbGllbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuYWxpZW5MYXplclNob3QuY2xhc3NMaXN0LmFkZChcImFsaWVuLWxhemVyLXNob3RcIik7XHJcbiAgICB0aGlzLmFsaWVuTGF6ZXJTaG90LnkgPSBhbGllbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgdGhpcy5hbGllbkxhemVyU2hvdC5zdHlsZS50b3AgPSB0aGlzLmFsaWVuTGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICAvLyBhcGVuZHMgdGhlIGFsaWVuIGF0dGFjayB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoYWxpZW46IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvLyBwb3NpdGlvbnMgdGhlIGxhemVyIGF0dGFjayByaWdodCBiZWxvdyB0aGUgc3Blc2lmaWMgYWxpZW5cclxuICAgIHRoaXMuYWxpZW5MYXplclNob3Quc3R5bGUubGVmdCA9XHJcbiAgICAgIGFsaWVuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKyBhbGllbi5vZmZzZXRXaWR0aCAvIDIgLSAxMiArIFwicHhcIjtcclxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKHRoaXMuYWxpZW5MYXplclNob3QpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXJcIjtcclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGxvZ2ljIGZvciByZW5kZXJpbmcgdGhlIG1pZ2h0eSBkZWZlbmRlclxyXG5cclxuLy8gY2xhc3MgdGhhdCByZW5kZXJzIHRoZSBkZWZlbmRlciB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBkZWZlbmRlciBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkRGVmZW5kZXIge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBkZWZlbmRlciE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVuZGVyKHBsYXllcik7XHJcbiAgICB0aGlzLmNvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50IGdpdmVzIGl0IHRoZSBhcHByb3ByaWF0ZSBjbGFzcyBmb3IgdGhlIGRlZmVuZGVyXHJcbiAgcHJpdmF0ZSByZW5kZXIocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICB0aGlzLmRlZmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMuZGVmZW5kZXIuY2xhc3NMaXN0LmFkZChcImRlZmVuZGVyXCIpO1xyXG4gICAgdGhpcy5kZWZlbmRlci5zdHlsZS5sZWZ0ID0gcGxheWVyLnggKyBcInB4XCI7XHJcbiAgICB0aGlzLmRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55ICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgLy8gYXBlbmRzIHRoZSBkZWZlbmRlciB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLmRlZmVuZGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVuZGVyaW5nIHRoZSBhbGllbiBsYXplciBhdHRhY2tzXHJcblxyXG4vLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbmNvbnN0IGdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWFyZWFcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gY2xhc3MgdGhhdCByZW5kZXJzIG9uZSBkZWZlbmRlciBsYXplciBhdHRhY2sgd2hlbiB0aGUgY29uc3RydWN0b3IgaXMgY2FsbGVkXHJcbi8vIGFkZGl0aW9uYWxseSBlYWNoIGluc3RhbmNlIGNvbnRhaW5zIHJlZmVyZW5jZSB0byB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGUgbGF6ZXIgaXMgcmVuZGVyIGludG9cclxuZXhwb3J0IGNsYXNzIEFkZERlZmVuZGVyTGF6ZXJTaG90IHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgbGF6ZXJTaG90ITogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuY29uZmlnKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciBhIGRlZmVuZGVyIGxhemVyIGF0dGFja1xyXG4gIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5sYXplclNob3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5sYXplclNob3QuY2xhc3NMaXN0LmFkZChcImxhemVyLXNob3RcIik7XHJcbiAgfVxyXG5cclxuICAvLyBwb3NpdGlvbnMgdGhlIGxhemVyIHJpZ2h0IGFib3ZlIHRoZSBkZWZlbmRlciBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZ2FtZSBzY3JlZW5cclxuICBwcml2YXRlIGNvbmZpZyhwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgIHRoaXMubGF6ZXJTaG90LnkgPSBwbGF5ZXIueSAtIHBsYXllci5oZWlnaHQgLSAyNTtcclxuICAgIHRoaXMubGF6ZXJTaG90LnN0eWxlLnRvcCA9IHRoaXMubGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcbiAgICB0aGlzLmxhemVyU2hvdC5zdHlsZS5sZWZ0ID0gcGxheWVyLnggKyBwbGF5ZXIud2lkdGggLyAyIC0gMTIgKyBcInB4XCI7XHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLmxhemVyU2hvdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElTb3VuZHMgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdW5kc1wiO1xyXG5pbXBvcnQgeyBzb3VuZHMgfSBmcm9tIFwiLi4vc291bmRzL3NvdW5kc1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgYWxpZW4gbW90aGVyc2hpcFxyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGNsYXNzIHRoYXQgcmVuZGVycyBvbmUgTW90aGVyc2hpcCB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBNb3RoZXJzaGlwIGlzIHJlbmRlciBpbnRvXHJcbmV4cG9ydCBjbGFzcyBBZGRNb3RoZXJzaGlwIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50cyB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIG1vdGhlcnNoaXAhOiBIVE1MRGl2RWxlbWVudDtcclxuICBtb3RoZXJzaGlwQ3VycmVudFNvdW5kITogSFRNTEF1ZGlvRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5jb25maWcoc291bmRzKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIGEgbW90aGVyc2hpcFxyXG4gIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5tb3RoZXJzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMubW90aGVyc2hpcC5jbGFzc0xpc3QuYWRkKFwiYWxpZW5cIiwgXCJtb3RoZXJzaGlwXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gcG9zaXRpb25zIHRoZSBtb3RoZXJzaGlwLCBnaXZlcyBpdCBhIHJhbmRvbSBtb3ZlbWVudCBzb3VuZCBlZmZlY3QgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGdhbWUgc2NyZWVuXHJcbiAgcHJpdmF0ZSBjb25maWcoc291bmRzOiBJU291bmRzKSB7XHJcbiAgICB0aGlzLm1vdGhlcnNoaXAueCA9IGdhbWVBcmVhLm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5tb3RoZXJzaGlwLnN0eWxlLmxlZnQgPSB0aGlzLm1vdGhlcnNoaXAueCArIFwicHhcIjtcclxuICAgIHRoaXMubW90aGVyc2hpcC5zdHlsZS50b3AgPSAwICsgXCJweFwiO1xyXG5cclxuICAgIC8vIGdpdmVzIHRoZSBtb3RoZXJzaGlwIGEgcmFuZG9tIHNvdW5kIGVmZmVjdFxyXG4gICAgaWYgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPT09IDApIHtcclxuICAgICAgdGhpcy5tb3RoZXJzaGlwQ3VycmVudFNvdW5kID0gc291bmRzLm1vdGhlcnNoaXBTb3VuZEhpZ2hQaXRjaDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW90aGVyc2hpcEN1cnJlbnRTb3VuZCA9IHNvdW5kcy5tb3RoZXJzaGlwU291bmRMb3dQaXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lQXJlYS5hcHBlbmRDaGlsZCh0aGlzLm1vdGhlcnNoaXApO1xyXG4gIH1cclxufVxyXG4iLCIvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbmNvbnN0IGxpdmVzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIubGl2ZXMtY291bnRlclwiXHJcbikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gY2xhc3MgdGhhdCByZW5kZXJzIG9uZSBwbGF5ZXIgbGlmZSB3aGVuIHRoZSBjb25zdHJ1Y3RvciBpcyBjYWxsZWRcclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBkZWZlbmRlciBpcyByZW5kZXIgaW50b1xyXG5leHBvcnQgY2xhc3MgQWRkUGxheWVyTGlmZSB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIHBsYXllckxpZmUhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5jb25maWcoKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBsaWZlXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnBsYXllckxpZmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5wbGF5ZXJMaWZlLmNsYXNzTGlzdC5hZGQoXCJvbmUtbGlmZVwiKTtcclxuICB9XHJcblxyXG4gIC8vIGFwZW5kcyB0aGUgbGlmZSB0byB0aGUgc2NyZWVuIGRpdiBlbGVtZW50XHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICBsaXZlc0NvdW50ZXIuYXBwZW5kQ2hpbGQodGhpcy5wbGF5ZXJMaWZlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gbG9naWMgZm9yIHJlbmRlcmluZyB0aGUgZGVmZW5kZXIgc2hpZWxkcyBjYXBzdWxhdGVkIGluIGEgc2luZ2xlIG1vZHVsZSB3aXRoIDIgY2xhc3Nlc1xyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbi8vIGZpcnN0IGNsYXNzIHRvIHJlbmRlcnMgYSBzaW5nbGUgc2hpZWxkIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBpcyByZW5kZXIgaW50b1xyXG4vL3ByaXZhdGUgY2xhc3MgdXNlZCBvbmx5IGluIHRoaXMgbW9kdWxlXHJcbmNsYXNzIEFkZFNpbmdsZVNoaWVsZCB7XHJcbiAgLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG4gIHNpbmdsZVNoaWVsZCE6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGVzIGEgZGl2IGVsZW1lbnQgZ2l2ZXMgaXQgdGhlIGFwcHJvcHJpYXRlIGNsYXNzIGZvciB0aGUgZGVmZW5kZXIgc2hpZWxkXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnNpbmdsZVNoaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnNpbmdsZVNoaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkXCIsIFwic2hpZWxkLWZ1bGwtaHBcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBzZWNvbmQgY2xhc3MgcmVuZGVycyBhbGwgNCBzaGllbGRzIHdoZW4gdGhlIGNvbnN0cnVjdG9yIGlzIGNhbGxlZC5cclxuLy8gYWRkaXRpb25hbGx5IGVhY2ggaW5zdGFuY2UgY29udGFpbnMgcmVmZXJlbmNlIHRvIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoZSBhbGllbiBjbHVzdGVyIGlzIHJlbmRlciBpbnRvXHJcbmV4cG9ydCBjbGFzcyBBZGRTaGllbGRzIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgc2hpZWxkRmllbGQhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5jb25maWcoKTtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudCBnaXZlcyBpdCB0aGUgYXBwcm9wcmlhdGUgY2xhc3MgZm9yIHRoZSBzaGllbGQgZmllbGQgKCBoZXkgdGhhdCByaHltZXMhKVxyXG4gIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtZmllbGRcIik7XHJcblxyXG4gICAgLy8gbG9vcCB0byBjcmVhdGUgNCBzaW5nbGUgc2hpZWxkcyBhbmQgYXBwZW5kIGVhY2ggdG8gdGhlIHNoaWVsZCBmaWVsZCAoIGhleSB0aGF0IHJoeW1lcywgZm9yIGEgc2Vjb25kIHRpbWUsIHdoYXQgYXJlIHRoZSBvZGRzLCByaWdodD8pXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc2luZ2xlU2hpZWxkSW5zdGFuY2UgPSBuZXcgQWRkU2luZ2xlU2hpZWxkKCk7XHJcbiAgICAgIGNvbnN0IHNpbmdsZVNoaWVsZCA9IHNpbmdsZVNoaWVsZEluc3RhbmNlLnNpbmdsZVNoaWVsZDtcclxuICAgICAgdGhpcy5zaGllbGRGaWVsZC5hcHBlbmRDaGlsZChzaW5nbGVTaGllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcGxhY2VzIHRoZSBzaGllbGRzIGluIHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb25zIGFuZCByZW5kZXJzIHRoZW0gdG8gdGhlIGdhbWUgc2NyZWVuXHJcbiAgcHJpdmF0ZSBjb25maWcoKSB7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLnN0eWxlLndpZHRoID0gZ2FtZUFyZWEub2Zmc2V0V2lkdGggLyAxLjI1ICsgXCJweFwiO1xyXG4gICAgdGhpcy5zaGllbGRGaWVsZC5zdHlsZS50b3AgPSBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSAyMDAgKyBcInB4XCI7XHJcbiAgICB0aGlzLnNoaWVsZEZpZWxkLnN0eWxlLmxlZnQgPSBnYW1lQXJlYS5vZmZzZXRXaWR0aCAvIDEwICsgXCJweFwiO1xyXG5cclxuICAgIGdhbWVBcmVhLmFwcGVuZENoaWxkKHRoaXMuc2hpZWxkRmllbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzY2VuZSB9IGZyb20gXCIuLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgc291bmRzIH0gZnJvbSBcIi4uL3NvdW5kcy9zb3VuZHNcIjtcclxuaW1wb3J0IHsgaXNDb2xsaXNpb24gfSBmcm9tIFwiLi4vdXRpbC9pc0NvbGxpc2lvblwiO1xyXG5cclxuLy8gbG9naWMgZm9yIGNoZWNraW5nIGlmIGFuIGFsaWVuIGhhcyBiZWVuIGhpdC4gSWYgeWVzLCB0aGUgYWxpZW4gaXMgbWFya2VkIGFzIFwiZGVhZFwiIGFuZCB0aGUgcGxheWVyIGlzIGF3YXJlZCBwb2ludHNcclxuLy8gaG93IGRvIHdlIGtub3cgaWYgYW4gYWxpZW4gaXMgZGVhZCB5b3UgYXNrID8gLT4gbG9naWMgaXMgdGhlIGZvbGxvd2luZywgd2UgdGFrZSB0aGUgMiBIVE1MIGVsZW1lbnRzICggYm90aCBhcmUgZGl2cykgYW5kIGNoZWNrIGlmIG9uZSBoYXMgZW50ZXJlZCB0aGUgcG9zaXRpb24gb2YgdGhlIG90aGVyIHVzaW5nIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4vLyBjaGVjayB0aGUgaXNDb2xsaXNpb24gbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcblxyXG4vLyBkZWFkIGFsaWVucyBhcmUgc3RpbGwgb24gdGhlIHNjcmVlbiBidXQgYXJlIG5vdCB2aXNpYmxlIHRvIHRoZSBwbGF5ZXIsIG5vciBjYW4gdGhleSBiZSBpbnRlcmFjdGVkIHdpdGhcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGllbkRlYXRoQW5kUG9pbnRzKCkge1xyXG4gIC8vIHNlbGVjdHMgYWxsIGFsaWVuIEhUTUwgZGl2IGVsZW1lbnRzIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gIGNvbnN0IGFsaWVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5hbGllblwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXJyYXkgdG8gY2hlY2sgaWYgYW55IGFsaWVuIHdhcyBoaXRcclxuICBhbGllbnMuZm9yRWFjaCgoYWxpZW4pID0+IHtcclxuICAgIC8vIHNlbGVjdHMgYWxsIGRlZmVuZGVyIGxhemVyIGF0dGFjayBIVE1MIGRpdiBlbGVtZW50cyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICAgIGNvbnN0IGxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5sYXplci1zaG90XCJcclxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgLy8gbG9vcHMgbG9vcHMgdGhyb3VnaCB0aGUgbGF6ZXIgc2hvdHMgdG8gY2hlY2sgaWYgYW55IG9mIHRoZSBhbGllbnMgd2VyZSBoaXRcclxuICAgIC8vIGlmIGFueSBhcmUgaGl0IGEgZGVhdGggYW5pbWF0aW9uIGFuZCBzb3VuZCBhcmUgcGxheWVkIGFuZCB0aGUgYXBwcm9wcmlhdGUgYW1vdW50IG9mIHBvaXRucyBhcmUgZ2l2ZW4gdG8gdGhlIHBsYXllclxyXG4gICAgLy8gdGhlIGxhemVyIGF0dGFjayBpcyByZW1vdmVkIGFmdGVyIGhpdGluZyBhbiBhbGllblxyXG4gICAgbGF6ZXJTaG90cy5mb3JFYWNoKChsYXplclNob3QpID0+IHtcclxuICAgICAgLy8gY2hlY2tzIGZvciBjb2xsaXNpb24gYmV0d2VlbiB0aGUgYWxpZW4gYW5kIHRoZSBkZWZlbmRlciBhdHRhY2suIEZvciBtb3JlIGluZm8gc2VlIHRoZSBpc0NvbGxpc2lvbiBmaWxlXHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0NvbGxpc2lvbihsYXplclNob3QsIGFsaWVuKSAmJlxyXG4gICAgICAgIGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImRlYWQtYWxpZW5cIikgPT09IGZhbHNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIGdpdmVzIHRoZSBhbGllbiBhIGRlYXRoIGFuaW1hdGlvbiB3aGljaCBsYXN0cyBmb3IgNTAgbWlsaXNlY29uZHMgYW5kIHRoZW4gbWFrZXMgdGhlIGFsaWVuIFwiZGVhZFwiXHJcbiAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZGVhdGgtYW5pbWF0aW9uLmpwZycpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhbGllbi5jbGFzc0xpc3QuYWRkKFwiZGVhZC1hbGllblwiKTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgLy8gcmVtb3ZpbmcgdGhlIGRlZmVuZGVyIGxhemVyIGF0dGFjayBmcm9tIHRoZSBnYW1lIHNjcmVlblxyXG4gICAgICAgIGxhemVyU2hvdC5yZW1vdmUoKTtcclxuICAgICAgICAvLyBkZWF0aCBzb3VuZCBlZmZlY3RcclxuICAgICAgICBzb3VuZHMuYWxpZW5EZWF0aFNvdW5kLnBsYXkoKTtcclxuXHJcbiAgICAgICAgLy8gcG9pbnRzIGZvciB0aGUgcGxheWVyXHJcbiAgICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTQwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSA0MDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTIwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAyMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTEwcHRzXCIpKSB7XHJcbiAgICAgICAgICBzY2VuZS5zY29yZSArPSAxMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcIm1vdGhlcnNoaXBcIikpIHtcclxuICAgICAgICAgIHNjZW5lLnNjb3JlICs9IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IEFkZEFsaWVuTGF6ZXJTaG90IH0gZnJvbSBcIi4uL2FkZE9iamVjdHMvYWRkQWxpZW5MYXplclNob3RcIjtcclxuaW1wb3J0IHsgZ2FtZSwgc2NlbmUgfSBmcm9tIFwiLi4vZ2VuZXJhbEdhbWVJbmZvL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgY2hvb3Npbmcgd2hlbiBhbiBhbGllbiBzaG91bGQgYXR0YWNrXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxpZW5GaXJpbmdDeWNsZSh0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gIC8vIHNlbGVjdHMgYWxsIGFsaWVuIEhUTUwgZGl2IGVsZW1lbnRzIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gIGNvbnN0IGFsaWVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWxpZW5cIik7XHJcblxyXG4gIC8vIGZpbHRlcnMgdGhlIGRlYWQgYWxpZW5zXHJcbiAgY29uc3QgcmVtYWluaW5nQWxpZW5zID0gQXJyYXkuZnJvbShhbGllbnMpLmZpbHRlcihcclxuICAgIChhbGllbikgPT4gYWxpZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVhZC1hbGllblwiKSA9PT0gZmFsc2VcclxuICApIGFzIEhUTUxEaXZFbGVtZW50W107XHJcbiAgLy8gcGlja3MgYSByYW5kb20gcG9zdGlvbiB0byBtYWtlIHN1cmUgYSByYW5kb20gYWxpZW4gZmlyZXMgZXZlcnkgdGltZVxyXG4gIGNvbnN0IHJhbmRvbUFsaWVuUG9zaXRpb24gPSBNYXRoLnJvdW5kKFxyXG4gICAgcmVtYWluaW5nQWxpZW5zLmxlbmd0aCAqIE1hdGgucmFuZG9tKClcclxuICApO1xyXG4gIC8vIHRoZXJlIGlzIGFuIGludGVydmFsIHNldCBiZXR3ZWVuIGFsaWVuIGF0dGFja3NcclxuICAvLyB0aGUgaWYgY2hlY2tzIGlmIHRoZSBpbnRlcnZhbCBoYXMgZXhwaXJlZCBiZWZvcmUgYXBwZW5kaW5nIGFuIGFsaWVuIGF0dGFjayB0byB0aGUgZ2FtZSBzY3JlZW5cclxuICBpZiAodGltZXN0YW1wIC0gc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90ID4gZ2FtZS5hbGllbkZpcmVJbnRlcnZhbCkge1xyXG4gICAgLy8gY2FsbHMgdGhlIEFkZEFsaWVuTGF6ZXJTaG90IGNsYXNzIHRvIGFwcGVuZCBhbiBhbGllbiBhdHRhY2sgYXQgYSByYW5kb20gYWxpZW5cclxuICAgIG5ldyBBZGRBbGllbkxhemVyU2hvdChyZW1haW5pbmdBbGllbnNbcmFuZG9tQWxpZW5Qb3NpdGlvbl0pO1xyXG4gICAgLy8gc2V0cyB0aGUgbmV3IGludGVydmFsIGJldHdlZW4gYWxpZW4gYXR0YWNrcywgb3RoZXJ3aXNlIHRoZSBhbGllbnMgd2lsbCBmaXJlIGNvbnN0YW50bHkgKHdoaWNoIGlzIHNvbWV3aGF0IGhpbGFyaW91cywgYnV0IHdpbGwgYWxtb3N0IGluc3RhbnRseSBjcmFzaCB0aGUgZ2FtZSlcclxuICAgIHNjZW5lLmxhc3RBbGllbkxhemVyU2hvdCA9IHRpbWVzdGFtcDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2FtZSwgc2NlbmUgfSBmcm9tIFwiLi4vZ2VuZXJhbEdhbWVJbmZvL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgYW5pbWF0aW5nIHRoZSBhbGllbiBsYXplciBhdHRhY2tcclxuLy8gdGhlIHdheSB0aGUgYXR0YWNrcyBhcmUgYW5pbWF0ZWQgaXMgYXMgZm9sbG93cyAtPiBlYWNoIGZyYW1lIHRoZSBnYW1lIGNoZWNrcyB0aGUgYmFja2dyb3VuZCBzcGlyZSBhbmQgdGhlIHNwcml0ZSBjaGFuZ2UgaW50ZXJ2YWwgKCBsb2NhdGVkIGluIHRoZSBcImdhbWVcIiBvYmplY3QpIGFuZCBjaGFuZ2VzIHRoZSBzcHJpdGUgc2ltdWxhdGluZyBtb3ZlbWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuTGF6ZXJTaG90U3ByaXRlcyhcclxuICB0aW1lc3RhbXA6IG51bWJlcixcclxuICBhbGllbkxhemVyU2hvdDogSFRNTERpdkVsZW1lbnRcclxuKSB7XHJcbiAgaWYgKFxyXG4gICAgdGltZXN0YW1wIC0gc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPlxyXG4gICAgZ2FtZS5hbGllbkxhemVyU2hvdFNwcml0ZUNoYW5nZUludGVydmFsXHJcbiAgKSB7XHJcbiAgICAvLyBjaGVjayB0aGUgY3VycmVudCBzcHJpdGUgYW5kIGFkanVzdHMgaXMgYWNjb3JkaW5nIHRvIHRoZSBzcHJpdGUgYXR0YWNrIGludGVydmFsXHJcbiAgICBpZiAoYWxpZW5MYXplclNob3Quc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwidHlwZS0xXCIpKSB7XHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9hdHRhY2stdHlwZS0yLnBuZycpXCI7XHJcbiAgICB9IGVsc2UgaWYgKGFsaWVuTGF6ZXJTaG90LnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcInR5cGUtMlwiKSkge1xyXG4gICAgICBhbGllbkxhemVyU2hvdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvYXR0YWNrLXR5cGUtMS5wbmcnKVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxpZW5MYXplclNob3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2F0dGFjay10eXBlLTIucG5nJylcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGp1c3RzIHRoZSBzcHJpdGUgaW50ZXJ2YWwsIHRoaXMgbWFrZXMgc3VyZSB0aGEgYW5pbWF0aW9uIGRvZXMgbm90IG9jY3VyIHRvbyBvZnRlblxyXG4gICAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdhbWUsIHNjZW5lIH0gZnJvbSBcIi4uL2dlbmVyYWxHYW1lSW5mby9nZW5lcmFsSW5mb1wiO1xyXG5pbXBvcnQgeyBJR2FtZU9iamVjdCwgSVNjZW5lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIGFuaW1hdGlvbiB0aGUgYWxpZW5zXHJcbi8vIHRoZSB3YXkgdGhlIGFsaWVucyBhcmUgYW5pbWF0ZWQgaXMgYXMgZm9sbG93cyAtPiBlYWNoIGZyYW1lIHRoZSBnYW1lIGNoZWNrcyB0aGUgYmFja2dyb3VuZCBzcHJpdGUgYW5kIHRoZSBzcHJpdGUgY2hhbmdlIGludGVydmFsICggbG9jYXRlZCBpbiB0aGUgXCJnYW1lXCIgb2JqZWN0KSBhbmQgY2hhbmdlcyB0aGUgc3ByaXRlIHNpbXVsYXRpbmcgbW92ZW1lbnRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGllblNwcml0ZUFuaW1hdGlvbih0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gIC8vIHNlbGVjdHMgYWxsIGFsaWVuIEhUTUwgZGl2IGVsZW1lbnRzIGFuZCBzYXZlcyB0aGVtIGluIGFuIGFycmF5XHJcbiAgY29uc3QgYWxpZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIGlmIChcclxuICAgIHRpbWVzdGFtcCAtIHNjZW5lLmxhc3RBbGllblNwcml0ZUludGVydmFsID5cclxuICAgIGdhbWUuYWxpZW5TcHJpdGVDaGFuZ2VJbnRlcnZhbFxyXG4gICkge1xyXG4gICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXJyYXkgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlIGFuaW1hdGlvbiBmb3IgdGhlIDQwcHRzIGFsaWVuc1xyXG4gICAgYWxpZW5zLmZvckVhY2goKGFsaWVuKSA9PiB7XHJcbiAgICAgIGlmIChhbGllbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhbGllbi00MHB0c1wiKSkge1xyXG4gICAgICAgIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItNDBwdHMtMVwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS00MHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5jbHVkZXMoXCItNDBwdHMtMlwiKSkge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS00MHB0cy0xLnBuZycpXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktNDBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgYWxpZW4gYXJyYXkgYW5kIGFwcGxpZXMgdGhlIGFwcHJvcHJpYXRlIGFuaW1hdGlvbiBmb3IgdGhlIDIwcHRzIGFsaWVuc1xyXG5cclxuICAgICAgaWYgKGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImFsaWVuLTIwcHRzXCIpKSB7XHJcbiAgICAgICAgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0yMHB0cy0xXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTIwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZS5pbmNsdWRlcyhcIi0yMHB0cy0yXCIpKSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTIwcHRzLTEucG5nJylcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vaW1hZ2VzL2FsaWVucy9lbmVteS0yMHB0cy0yLnBuZycpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBsb29wcyB0aHJvdWdoIHRoZSBhbGllbiBhcnJheSBhbmQgYXBwbGllcyB0aGUgYXBwcm9wcmlhdGUgYW5pbWF0aW9uIGZvciB0aGUgMTBwdHMgYWxpZW5zXHJcblxyXG4gICAgICBpZiAoYWxpZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxpZW4tMTBwdHNcIikpIHtcclxuICAgICAgICBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTEwcHRzLTFcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktMTBwdHMtMi5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWxpZW4uc3R5bGUuYmFja2dyb3VuZEltYWdlLmluY2x1ZGVzKFwiLTEwcHRzLTJcIikpIHtcclxuICAgICAgICAgIGFsaWVuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2ltYWdlcy9hbGllbnMvZW5lbXktMTBwdHMtMS5wbmcnKVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGllbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi9pbWFnZXMvYWxpZW5zL2VuZW15LTEwcHRzLTIucG5nJylcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFkanVzdHMgdGhlIHNwcml0ZSBpbnRlcnZhbCwgdGhpcyBtYWtlcyBzdXJlIHRoYSBhbmltYXRpb24gZG9lcyBub3Qgb2NjdXIgdG9vIG9mdGVuXHJcbiAgICAgIHNjZW5lLmxhc3RBbGllblNwcml0ZUludGVydmFsID0gdGltZXN0YW1wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNjZW5lIH0gZnJvbSBcIi4uL2dlbmVyYWxHYW1lSW5mby9nZW5lcmFsSW5mb1wiO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllclwiO1xyXG5pbXBvcnQgeyBpc0NvbGxpc2lvbiB9IGZyb20gXCIuLi91dGlsL2lzQ29sbGlzaW9uXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgY2hlY2tpbmcgaWYgYW4gYWxpZW4gaGFzIGhpdCB0aGUgZGVmZW5kZXJcclxuXHJcbi8vIGhvdyBkbyB3ZSBrbm93IGlmIHRoZSBkZWZlbmRlciBoYXMgYmVlbiBoaXQgeW91IGFzayA/IC0+IGxvZ2ljIGlzIHRoZSBmb2xsb3dpbmcsIHdlIHRha2UgdGhlIDIgSFRNTCBlbGVtZW50cyAoIGJvdGggYXJlIGRpdnMpIGFuZCBjaGVjayBpZiBvbmUgaGFzIGVudGVyZWQgdGhlIHBvc2l0aW9uIG9mIHRoZSBvdGhlciB1c2luZyB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuLy8gY2hlY2sgdGhlIGlzQ29sbGlzaW9uIG1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvblxyXG5cclxuLy8gdGhlIG5hbWUgb2YgdGhlIGZ1bmMgaXMgcXVpdGUgdGhlIG1vdXRoZnVsIEkga25vd1xyXG5leHBvcnQgZnVuY3Rpb24gZGVmZW5kZXJBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIoXHJcbiAgZGVmZW5kZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGFsaWVuTGF6ZXJTaG90OiBIVE1MRGl2RWxlbWVudCxcclxuICBnYW1lQXJlYTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZ2FtZU92ZXI6IEhUTUxEaXZFbGVtZW50XHJcbikge1xyXG4gIC8vIHRoZSBmdW5jIHJldmVhbHMgdGhlIGdhbWUgb3ZlciBzY3JlZW4gYW5kIHN0b3BzIHRoZSBnYW1lIHVudGlsIHRoZSBwbGF5ZXIgZGVjaWRlcyB0byByZXN0YXJ0XHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXJBY3Rpb24oZ2FtZU92ZXI6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBzY2VuZS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZ2FtZU92ZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrcyBmb3IgY29sbGlzaW9uIGJldHdlZW4gdGhlIGRlZmVuZGVyIGFuZCBhbiBhbGllbiBhdHRhY2tcclxuICBpZiAoaXNDb2xsaXNpb24oZGVmZW5kZXIsIGFsaWVuTGF6ZXJTaG90KSkge1xyXG4gICAgLy8gc2VsbGVjdHMgdGhlIHJlbWFpbmluZyBsaXZlc1xyXG4gICAgbGV0IGxpdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vbmUtbGlmZVwiKTtcclxuICAgIC8vIHJlbW92ZXMgdGhlIGFsaWVuIGF0dGFjayBmb3JtIHRoZSBnYW1lIHNjcmVlblxyXG4gICAgYWxpZW5MYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICAvLyBpZiB0aGUgcGxheWVycyBzdGlsbCBoYXMgbGl2ZXMgb25lIGlzIHJlbW92ZWQgYW5kIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVmZW5kZXIgaXMgcmVzZXQgdG8gdGhlIHN0YXJ0aW5nIG9uZVxyXG4gICAgaWYgKGxpdmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcGxheWVyLnggPSAxMDA7XHJcbiAgICAgIHBsYXllci55ID0gZ2FtZUFyZWEub2Zmc2V0SGVpZ2h0IC0gNTA7XHJcbiAgICAgIGRlZmVuZGVyLnN0eWxlLmxlZnQgPSBwbGF5ZXIueCArIFwicHhcIjtcclxuICAgICAgZGVmZW5kZXIuc3R5bGUudG9wID0gcGxheWVyLnkgKyBcInB4XCI7XHJcbiAgICAgIGxpdmVzW2xpdmVzLmxlbmd0aCAtIDFdLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIG1vcmUgbGl2ZXMgdGhlIGdhbWUgaXMgb3ZlciBhbmQgdGhlIHBsYXllciBpcyBnaXZlbiB0aGUgb3B0aW9ucyB0byBzdGFydCBhZ2FpblxyXG4gICAgICBsaXZlc1tsaXZlcy5sZW5ndGggLSAxXS5yZW1vdmUoKTtcclxuICAgICAgZ2FtZU92ZXJBY3Rpb24oZ2FtZU92ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJSXNDb2xsaXNpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2lzQ29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IGlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL3V0aWwvaXNDb2xsaXNpb25cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBjaGVja2luZyBpZiBhbiBhbGllbiBoYXMgaGl0IG9uZSBvZiB0aGUgZGVmZW5kZXIncyBzaGllbGRzXHJcblxyXG4vLyBob3cgZG8gd2Uga25vdyBpZiBhIHNoaWVsZCBoYXMgYmVlbiBoaXQgeW91IGFzayA/IC0+IGxvZ2ljIGlzIHRoZSBmb2xsb3dpbmcsIHdlIHRha2UgdGhlIDIgSFRNTCBlbGVtZW50cyAoIGJvdGggYXJlIGRpdnMpIGFuZCBjaGVjayBpZiBvbmUgaGFzIGVudGVyZWQgdGhlIHBvc2l0aW9uIG9mIHRoZSBvdGhlciB1c2luZyB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuLy8gY2hlY2sgdGhlIGlzQ29sbGlzaW9uIG1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvblxyXG5cclxuLy8gdGhlIG5hbWUgb2YgdGhlIGZ1bmMgaXMgcXVpdGUgdGhlIG1vdXRoZnVsIEkga25vd1xyXG5leHBvcnQgZnVuY3Rpb24gc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyKFxyXG4gIGFsaWVuTGF6ZXJTaG90OiBIVE1MRGl2RWxlbWVudFxyXG4pIHtcclxuICAvLyBzZWxlY3RzIGFsbCBvZiB0aGUgc2hpZWxkIEhUTUwgZWxlbWVudHMgYW5kIHN0b3JlcyB0aGVtIGluIGFuIGFycmF5XHJcbiAgbGV0IHNoaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuc2hpZWxkXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIC8vIGxvb3BzIHRocm91Z2ggdGhlIHNoaWVsZCBlbGVtZW50cyBhbmQgY2hlY2sgaWYgYW55IGhhcyBiZWVuIGhpdFxyXG4gIHNoaWVsZHMuZm9yRWFjaCgoc2hpZWxkKSA9PiB7XHJcbiAgICAvLyBzaGllbGRzIGhhdmUgMyBcImxpdmVzXCIsIGVhY2ggaGl0IHJlbW92ZXMgb25lIGFuZCBkYW1hZ2VzIHRoZW0gd2hpY2ggaXMgcmVwcmVzZW50ZWQgYnkgY2hhbmdpbmcgdGhlIHNwcml0ZSB3aXRoIGEgbW9yZSBkYW1hZ2VkIHZlcnNpb25cclxuICAgIGlmIChcclxuICAgICAgaXNDb2xsaXNpb24oc2hpZWxkLCBhbGllbkxhemVyU2hvdCkgJiZcclxuICAgICAgc2hpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNoaWVsZC1kZXN0cm95ZWRcIikgPT09IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgaWYgKHNoaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGllbGQtZnVsbC1ocFwiKSkge1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpZWxkLWZ1bGwtaHBcIik7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGllbGQtMWhpdFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLTFoaXRcIikpIHtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LnJlbW92ZShcInNoaWVsZC0xaGl0XCIpO1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpZWxkLTJoaXRzXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNoaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGllbGQtMmhpdHNcIikpIHtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LnJlbW92ZShcInNoaWVsZC0yaGl0c1wiKTtcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmFkZChcInNoaWVsZC0zaGl0c1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLTNoaXRzXCIpKSB7XHJcbiAgICAgICAgLy8gd2hlbiB0aGUgc2hpZWxkIGlzIGRlc3Ryb3llZCBpdCBsZWF2ZXMgYSBcIndyZWNrXCIgYW5kIGNhbm5vdCBzdG9wIGFsaWVuIGF0dGFja3NcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmFkZChcInNoaWVsZC1kZXN0cm95ZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmVtb3ZlcyBhbGllbiBhdHRhY2sgYWZ0ZXIgaXQgaGFzIGhpdCB0aGUgc2hpZWxkXHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IElHYW1lT2JqZWN0LCBJU2NlbmVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBtb2R1bGUgaG9sZCBvYmplY3RzIHRoYXQgY29udGFpbiBnZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnYW1lIHN0YXRlICggYnV0IG5vdCBhYm91dCB0aGUgcGxheWVyLCBoaXMgc3RhdGUgaXMgaW4gdGhlIHBsYXllciBmb2xkZXIpXHJcblxyXG4vLyBnZW5lcmFsIHN0YXRlIGluZm8gYWJvdXQgdGhlIGdhbWUgc3RhdGVcclxuZXhwb3J0IGxldCBnYW1lOiBJR2FtZU9iamVjdCA9IHtcclxuICBzcGVlZDogMixcclxuICBwbGF5ZXJNb3ZlbWVudE11bHRpcGxpZXI6IDIsXHJcbiAgbGF6ZXJTaG90TW92ZW1lbnRNdWx0aXBsaWVyOiAzLFxyXG4gIGFsaWVuQ2x1c3Rlck11bHRpcGxpZXI6IDAuNCxcclxuICBhbGllblBvczogMCxcclxuICBhbGllbkRpcmVjdGlvbjogMSxcclxuICBhbGllblNwcml0ZUNoYW5nZUludGVydmFsOiA1MDAsXHJcbiAgYWxpZW5MYXplclNob3RTcHJpdGVDaGFuZ2VJbnRlcnZhbDogNTAsXHJcbiAgYWxpZW5GaXJlSW50ZXJ2YWw6IDIwMDAsXHJcbiAgZmlyZUludGVydmFsOiA4MDAsXHJcbiAgZXh0cmFMaXZlc0NvdW50ZXI6IDEsXHJcbiAgbW90aGVyc2hpcFNwYXduSW50ZXJ2YWw6IDUwMDAwLFxyXG4gIG1vdGhlcnNoaXBNb3ZlbWVudE11bHRpcGxpZXI6IDUsXHJcbiAgbWF4QWxpZW5DbHVzdGVyU2l6ZTogNTUsXHJcbiAgbWF4UGxheWVyTGl2ZXM6IDUsXHJcbn07XHJcblxyXG4vLyBnZW5lcmFsIHN0YXRlIGluZm8gYWJvdXQgc2NlbmVcclxuLy8gbW9zdCBvZiB0aGUgdmFsdWVzIHN0YXJ0IGF0IDAgYnV0IGFyZSB1cGRhdGVkIHRocm91Z2ggdGhlIGdhbWVcclxuZXhwb3J0IGxldCBzY2VuZTogSVNjZW5lT2JqZWN0ID0ge1xyXG4gIHNjb3JlOiAwLFxyXG4gIGxhc3RBbGllblNwcml0ZUludGVydmFsOiAwLFxyXG4gIGxhc3RBbGllbkxhemVyU2hvdFNwcml0ZUludGVydmFsOiAwLFxyXG4gIGxhc3RBbGllbkxhemVyU2hvdDogMCxcclxuICBsYXN0U3Bhd25Nb3RoZXJzaGlwOiAwLFxyXG4gIGlzQWN0aXZlOiB0cnVlLCAvLyBjaGVja3MgaWYgdGhlIGdhbWUgaXMgc3RpbGwgYWN0aXZlLCBpZiBzZXQgdG8gZmFsc2UgdGhlIGdhbWUgd2lsbCBzdG9wXHJcbn07XHJcbiIsImltcG9ydCB7IEFkZE1vdGhlcnNoaXAgfSBmcm9tIFwiLi9hZGRPYmplY3RzL2FkZE1vdGhlcnNoaXBcIjtcclxuaW1wb3J0IHsgYWxpZW5TcHJpdGVBbmltYXRpb24gfSBmcm9tIFwiLi9hbmltYXRpb25zL2FsaWVuU3ByaXRlc1wiO1xyXG5pbXBvcnQgeyBhbGllbkRlYXRoQW5kUG9pbnRzIH0gZnJvbSBcIi4vYWxpZW5EZWF0aEFuZFBvaW50cy9hbGllbkRlYXRoQW5kUG9pbnRzXCI7XHJcbmltcG9ydCB7IGdhbWUsIHNjZW5lIH0gZnJvbSBcIi4vZ2VuZXJhbEdhbWVJbmZvL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IGFsaWVuQ2x1c3Rlck1vdmVtZW50IH0gZnJvbSBcIi4vb2JqZWN0TW92ZW1lbnQvYWxpZW5DbHVzdGVyXCI7XHJcbmltcG9ydCB7IGFsaWVuTGF6ZXJTaG90c01vdm1lbnRBbmRDb2xsaXNpb25DaGVja2VyIH0gZnJvbSBcIi4vb2JqZWN0TW92ZW1lbnQvYWxpZW5MYXplclNob3RzXCI7XHJcbmltcG9ydCB7IGxhemVyU2hvdHNNb3ZlbWVudCB9IGZyb20gXCIuL29iamVjdE1vdmVtZW50L2xhemVyU2hvdHNcIjtcclxuaW1wb3J0IHsgcGxheWVyTW92ZW1lbnQgfSBmcm9tIFwiLi9vYmplY3RNb3ZlbWVudC9wbGF5ZXJcIjtcclxuaW1wb3J0IHtcclxuICBwbGF5ZXJNb3ZlbWVudENvbnRyb2xscyxcclxuICBwbGF5ZXJTaG9vdGluZ0NvbnRyb2xscyxcclxufSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyTW92ZW1lbnRDb250cm9sbHNcIjtcclxuaW1wb3J0IHsgcG9pbnRzVXBkYXRlIH0gZnJvbSBcIi4vcG9pbnRzL3BvaW50c1VwZGF0ZVwiO1xyXG5pbXBvcnQgeyByZXNwYXduQWxpZW5zIH0gZnJvbSBcIi4vcmVzcHdhbi9hbGllbnNcIjtcclxuaW1wb3J0IHsgc291bmRzIH0gZnJvbSBcIi4vc291bmRzL3NvdW5kc1wiO1xyXG5pbXBvcnQgeyBhbGllbkZpcmluZ0N5Y2xlIH0gZnJvbSBcIi4vYWxpZW5GaXJpbmdDeWNsZS9hbGllbkZpcmluZ0N5Y2xlXCI7XHJcbmltcG9ydCB7IG1vdGhlcnNoaXBNb3ZlbWVudCB9IGZyb20gXCIuL29iamVjdE1vdmVtZW50L21vdGhlcnNoaXBcIjtcclxuXHJcbmltcG9ydCB7IG9uR2FtZVN0YXJ0IH0gZnJvbSBcIi4vdXRpbC9zdGFydEdhbWVcIjtcclxuaW1wb3J0IHsgZ2FtZVJlc3RhcnQgfSBmcm9tIFwiLi91dGlsL2dhbWVSZXN0YXJ0XCI7XHJcblxyXG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxubGV0IGdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWFyZWFcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBnYW1lT3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1vdmVyXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgcG9pbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2ludHNcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLy8gYmFja2dvdXJuZCBtdXNpYyBsb29wXHJcbnNvdW5kcy5iYWNrZ3JvdW5kTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICB0aGlzLnBsYXkoKTtcclxufSk7XHJcblxyXG4vLyBkb25lIHRvIHJlZHVjZSB0eXBlcyBhbmQgZWFzeSBvZiBhZGRpbmcgbmV3IHBhcmFtZXRlcnMgdG8gdGhlIGdhbWVBY3Rpb25cclxuXHJcbi8vIHN0YXJ0IGdhbWUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXHJcbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcmV0dXJuIG9uR2FtZVN0YXJ0KCk7XHJcbn0pO1xyXG5cclxuLy8gZ2FtZSBvdmVyIGFuZCByZXN0YXJ0IGdhbWUgZXZlbnQgbGlzdGVuZXJcclxuZ2FtZU92ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZXR1cm4gZ2FtZVJlc3RhcnQoZ2FtZUFyZWEsIGdhbWVPdmVyKTtcclxufSk7XHJcblxyXG5sZXQgbW90aGVyc2hpcEN1cnJlbnRTb3VuZDogSFRNTEF1ZGlvRWxlbWVudDtcclxuXHJcbi8vIGdhbWUgZW5naW5lXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lQWN0aW9uKHRpbWVzdGFtcDogbnVtYmVyKSB7XHJcbiAgLy8gZHVyaW5nIGVhY2ggZnJhbWUgdGhlIGVuZ2luZSBjaGVja3MgdGhlIHN0YXRlIG9mIHRoZSBnYW1lIGFuZCB1cGRhdGVzIHRoZSBzY3JlZW4gYWNjb3JkaW5nbHlcclxuXHJcbiAgLy8gbW92ZW1lbnQga2V5c1xyXG4gIHBsYXllck1vdmVtZW50Q29udHJvbGxzKGdhbWVBcmVhKTtcclxuXHJcbiAgLy8gc2hvb3RpbmdcclxuICBwbGF5ZXJTaG9vdGluZ0NvbnRyb2xscyhcclxuICAgIHRpbWVzdGFtcCAvL3RpbWVzdGFtcCBtdXN0IGFsd2F5cyBiZSBhZGRlZCBhcyBpdCBjb21lcyBmcm9tIHRoZSBnYW1lQWN0aW9uIGZ1bmMgaXRzZWxmXHJcbiAgKTtcclxuXHJcbiAgLy8gYXBwbHkgcGxheWVyIG1vdmVtZW50XHJcbiAgcGxheWVyTW92ZW1lbnQoKTtcclxuXHJcbiAgLy8gYWRkIGxhemVyIG1vdmVtZW50XHJcbiAgbGF6ZXJTaG90c01vdmVtZW50KCk7XHJcblxyXG4gIC8vIGFkZCBhbGllbnQgY2x1c3RlciBtb3ZlbWVudFxyXG4gIGFsaWVuQ2x1c3Rlck1vdmVtZW50KGdhbWVBcmVhKTtcclxuXHJcbiAgLy8gYWxpZW4gZGVhdGggYW5kIHBvaW50c1xyXG4gIGFsaWVuRGVhdGhBbmRQb2ludHMoKTtcclxuXHJcbiAgLy8gcmVzcGF3biBhbGllbnNcclxuICByZXNwYXduQWxpZW5zKCk7XHJcblxyXG4gIC8vIGFsaWVucyBzcHJpdGUgYW5pbWF0aW9uXHJcbiAgYWxpZW5TcHJpdGVBbmltYXRpb24odGltZXN0YW1wKTtcclxuXHJcbiAgLy8gYWxpZW5zIGZpcmluZyBiYWNrIChpbiBzZWxmIGRlZmVuY2UpXHJcbiAgYWxpZW5GaXJpbmdDeWNsZSh0aW1lc3RhbXApO1xyXG5cclxuICAvLyBhZGQgbW92bWVudCBhbmQgY29sbGlzaW9uIHRvIGFsaWVuIGxhemVyIHNob3RzXHJcbiAgYWxpZW5MYXplclNob3RzTW92bWVudEFuZENvbGxpc2lvbkNoZWNrZXIoZ2FtZUFyZWEsIGdhbWVPdmVyLCB0aW1lc3RhbXApO1xyXG5cclxuICAvLyBhZGQgbW90aGVyc2hpcFxyXG4gIGlmIChcclxuICAgIHRpbWVzdGFtcCAtIHNjZW5lLmxhc3RTcGF3bk1vdGhlcnNoaXAgPlxyXG4gICAgZ2FtZS5tb3RoZXJzaGlwU3Bhd25JbnRlcnZhbCArIDUwMDAwICogTWF0aC5yYW5kb20oKVxyXG4gICkge1xyXG4gICAgY29uc3QgbW90aGVyc2hpcEluc3RhbmNlID0gbmV3IEFkZE1vdGhlcnNoaXAoKTtcclxuICAgIG1vdGhlcnNoaXBDdXJyZW50U291bmQgPSBtb3RoZXJzaGlwSW5zdGFuY2UubW90aGVyc2hpcEN1cnJlbnRTb3VuZDtcclxuICAgIHNjZW5lLmxhc3RTcGF3bk1vdGhlcnNoaXAgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgbW90aGVyc2hpcCBtb3ZlbWVudFxyXG4gIG1vdGhlcnNoaXBNb3ZlbWVudChtb3RoZXJzaGlwQ3VycmVudFNvdW5kKTtcclxuXHJcbiAgLy8gdXBkYXRlcyB0aGUgcG9pbnRzXHJcbiAgcG9pbnRzVXBkYXRlKHBvaW50cyk7XHJcblxyXG4gIGlmIChzY2VuZS5pc0FjdGl2ZSkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lQWN0aW9uKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUdhbWVPYmplY3QgfSBmcm9tIFwiLi4vbW9kZWxzL2dlbmVyYWxJbmZvXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgbW92aW5nIHRoZSBhbGllbiBjbHVzdGVyIG9uIHRoZSBnYW1lIHNjcmVlblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWVuQ2x1c3Rlck1vdmVtZW50KGdhbWVBcmVhOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gIC8vIHNlbGxldHMgdGhlIGFsaWVuIGNsdXN0ZXIgSFRNTCBkaXYgZWxlbWVudFxyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBjb25zdCBhbGllbkNsdXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuYWxpZW4tY2x1c3RlclwiXHJcbiAgKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIC8vIGRldGVybWVudHMgdGhlIGFsaWVuIGNsdXN0ZXIgbW92ZW1lbnQgZGlyZWN0aW9uXHJcbiAgaWYgKGdhbWUuYWxpZW5Qb3MgKyBhbGllbkNsdXN0ZXIub2Zmc2V0V2lkdGggPiBnYW1lQXJlYS5vZmZzZXRXaWR0aCAtIDEwMCkge1xyXG4gICAgZ2FtZS5hbGllbkRpcmVjdGlvbiA9IC1nYW1lLnNwZWVkO1xyXG4gIH0gZWxzZSBpZiAoZ2FtZS5hbGllblBvcyA8IDEwMCkge1xyXG4gICAgZ2FtZS5hbGllbkRpcmVjdGlvbiA9IGdhbWUuc3BlZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBtb3ZlcyB0aGUgYWxpZW4gY2x1c3RlciBhY2NvcmRpbmcgdGhlIHRoZSBhbGllbiBkaXJlY3Rpb25cclxuICBnYW1lLmFsaWVuUG9zICs9IGdhbWUuYWxpZW5EaXJlY3Rpb24gKiBnYW1lLmFsaWVuQ2x1c3Rlck11bHRpcGxpZXI7XHJcbiAgYWxpZW5DbHVzdGVyLnN0eWxlLmxlZnQgPSBnYW1lLmFsaWVuUG9zICsgXCJweFwiO1xyXG59XHJcbiIsImltcG9ydCB7IGFsaWVuTGF6ZXJTaG90U3ByaXRlcyB9IGZyb20gXCIuLi9hbmltYXRpb25zL2FsaWVuTGF6ZXJTaG90U3ByaXRlc1wiO1xyXG5pbXBvcnQgeyBkZWZlbmRlckFsaWVuTGF6ZXJTaG90Q29sbGlzaW9uQ2hlY2tlciB9IGZyb20gXCIuLi9jb2xsaXNpb25DaGVja2VyL2RlZmVuZGVyQWxpZW5MYXplclNob3RcIjtcclxuaW1wb3J0IHsgc2hpZWxkQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyIH0gZnJvbSBcIi4uL2NvbGxpc2lvbkNoZWNrZXIvc2hpZWxkQWxpZW5MYXplclNob3RcIjtcclxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgYW4gYWxpZW50IGF0dGFjayBhbmQgIGNoZWNraW5nIGlmIHRoZSBhdHRhY2sgaGFzIGhpdCBlaXRoZXIgdGhlIGRlZmVuZGVyIG9yIG9uZSBvZiB0aGUgc2hpZWxkc1xyXG5cclxuLy8gdGhlIG5hbWUgb2YgdGhlIGZ1bmMgaXMgcXVpdGUgdGhlIG1vdXRoZnVsIEkga25vd1xyXG5leHBvcnQgZnVuY3Rpb24gYWxpZW5MYXplclNob3RzTW92bWVudEFuZENvbGxpc2lvbkNoZWNrZXIoXHJcbiAgZ2FtZUFyZWE6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGdhbWVPdmVyOiBIVE1MRGl2RWxlbWVudCxcclxuICB0aW1lc3RhbXA6IG51bWJlclxyXG4pIHtcclxuICAvLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbiAgY29uc3QgZGVmZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmVuZGVyXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAvLyBzZWxlY3RzIGFsbCBhbGllbiBhdHRhY2sgSFRNTCBEaXYgZWxlbWVudHNcclxuICBsZXQgYWxpZW5MYXplclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmFsaWVuLWxhemVyLXNob3RcIlxyXG4gICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIGxvb3BzIHRocm91Z2ggdGhlIGFsaWVuIGF0dGFja3NcclxuICBhbGllbkxhemVyU2hvdHMuZm9yRWFjaCgoYWxpZW5MYXplclNob3QpID0+IHtcclxuICAgIGFsaWVuTGF6ZXJTaG90LnkgKz0gZ2FtZS5zcGVlZDtcclxuICAgIGFsaWVuTGF6ZXJTaG90LnN0eWxlLnRvcCA9IGFsaWVuTGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcblxyXG4gICAgLy8gYW5pbWF0ZXMgdGhlIGFsaWVuIGF0dGFja1xyXG4gICAgYWxpZW5MYXplclNob3RTcHJpdGVzKHRpbWVzdGFtcCwgYWxpZW5MYXplclNob3QpO1xyXG5cclxuICAgIC8vIHJlbW92ZXMgdGhlIGFsaWVuIGF0dGFjayBmcm9tIHRoZSBkb20gd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIGdhbWUgc2NyZWVuXHJcbiAgICBpZiAoXHJcbiAgICAgIGFsaWVuTGF6ZXJTaG90LnkgKyBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgPlxyXG4gICAgICBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSBhbGllbkxhemVyU2hvdC5vZmZzZXRIZWlnaHQgLyAyXHJcbiAgICApIHtcclxuICAgICAgYWxpZW5MYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBhbGllbiBhdHRhY2sgaGFzIGhpdCB0aGUgZGVmZW5kZXJcclxuICAgIGRlZmVuZGVyQWxpZW5MYXplclNob3RDb2xsaXNpb25DaGVja2VyKFxyXG4gICAgICBkZWZlbmRlcixcclxuICAgICAgYWxpZW5MYXplclNob3QsXHJcbiAgICAgIGdhbWVBcmVhLFxyXG4gICAgICBnYW1lT3ZlclxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjaGVja3MgaWYgdGhlIGFsaWVuIGF0dGFjayBoYXMgaGl0IGEgc2hpZWxkXHJcbiAgICBzaGllbGRBbGllbkxhemVyU2hvdENvbGxpc2lvbkNoZWNrZXIoYWxpZW5MYXplclNob3QpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vZ2VuZXJhbEdhbWVJbmZvL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5pbXBvcnQgeyBJSXNDb2xsaXNpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2lzQ29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IGlzQ29sbGlzaW9uIH0gZnJvbSBcIi4uL3V0aWwvaXNDb2xsaXNpb25cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciBtb3ZpbmcgdGhlIGRlZmVuZGVyIGF0dGFja3Mgb24gdGhlIGdhbWUgc2NyZWVuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF6ZXJTaG90c01vdmVtZW50KCkge1xyXG4gIC8vIHNlbGVjdHMgYWxsIG9mIHRoZSBkZWZlbmRlcnMgYXR0YWNrcyBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBsYXplclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmxhemVyLXNob3RcIlxyXG4gICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vbG9vcHMgdGhyb3VnaCB0aGUgYXR0YWNrc1xyXG4gIGxhemVyU2hvdHMuZm9yRWFjaCgobGF6ZXJTaG90KSA9PiB7XHJcbiAgICAvLyBtb3ZlcyB0aGUgYXR0YWNrIGJ5IGNoYW5naW5nIGl0J3MgXCJ5XCIgcG9zaXRpb25cclxuICAgIGxhemVyU2hvdC55IC09IGdhbWUuc3BlZWQ7XHJcbiAgICBsYXplclNob3Quc3R5bGUudG9wID0gbGF6ZXJTaG90LnkgKyBcInB4XCI7XHJcblxyXG4gICAgLy8gaWYgdGhlIGF0dGFjayByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIHNjcmVlbiBpdCBpcyByZW1vdmVkXHJcbiAgICBpZiAobGF6ZXJTaG90LnkgKyBsYXplclNob3Qub2Zmc2V0SGVpZ2h0IDwgMCkge1xyXG4gICAgICBsYXplclNob3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlIGRlZmVuZGVyJ3MgbGF6ZXIgc2hvdCBoaXRzIGEgc2hpZWxkLCB0aGUgc2hvdCBpcyByZW1vdmVkIHdpdGhvdXQgZGFtYWdpbmcgdGhlIHNoaWVsZFxyXG4gICAgY29uc3Qgc2hpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnNoaWVsZFwiXHJcbiAgICApISBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIHNoaWVsZHMuZm9yRWFjaCgoc2hpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0NvbGxpc2lvbihsYXplclNob3QsIHNoaWVsZCkgJiZcclxuICAgICAgICBzaGllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpZWxkLWRlc3Ryb3llZFwiKSA9PT0gZmFsc2VcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGF6ZXJTaG90LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2dlbmVyYWxHYW1lSW5mby9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIG1vdmluZyB0aGUgbW90aGVyc2hpcCBvbiB0aGUgZ2FtZSBzY3JlZW5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3RoZXJzaGlwTW92ZW1lbnQobW90aGVyc2hpcEN1cnJlbnRTb3VuZDogSFRNTEF1ZGlvRWxlbWVudCkge1xyXG4gIC8vIHNlbGVjdHMgYWxsIG1vdGhlcnNoaXAgSFRNTCBkaXYgZWxlbWVudHMgb24gdGhlIHNjcmVlbiBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBtb3RoZXJzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5tb3RoZXJzaGlwXCJcclxuICApIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyBsb29wcyB0aHJvdWdoIHRoZSBtb3RoZXJzaGlwcyAoIHRoZXJlIGlzIHVzdWFsbHkgb25seSBvbmUpXHJcbiAgbW90aGVyc2hpcHMuZm9yRWFjaCgobW90aGVyc2hpcCkgPT4ge1xyXG4gICAgLy9tb3ZlcyB0aGUgbW90aGVyc2hpcCBvbiB0aGUgZ2FtZSBzY3JlZW5cclxuICAgIG1vdGhlcnNoaXAueCAtPSBnYW1lLnNwZWVkO1xyXG4gICAgbW90aGVyc2hpcC5zdHlsZS5sZWZ0ID0gbW90aGVyc2hpcC54ICsgXCJweFwiO1xyXG5cclxuICAgIC8vIGlmIHRoZSBtb3RoZXJzaGlwIGlzIGFsaXZlIGFkZCBzb3VuZCB0byB0aGUgbW92ZW1lbnRcclxuICAgIGlmIChtb3RoZXJzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcImRlYWQtYWxpZW5cIikgPT09IGZhbHNlKSB7XHJcbiAgICAgIG1vdGhlcnNoaXBDdXJyZW50U291bmQucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZXMgdGhlIG1vdGhlcnNoaXAgZnJvbSB0aGUgRE9NIGlmIGl0IHJlYWNoZXMgdGhlIGVuZCBvZiB0aGUgc2NyZWVuXHJcbiAgICBpZiAobW90aGVyc2hpcC54ICsgbW90aGVyc2hpcC5vZmZzZXRXaWR0aCA8PSAwKSB7XHJcbiAgICAgIG1vdGhlcnNoaXAucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgbW92aW5nIHRoZSBtb3RoZXJzaGlwIG9uIHRoZSBnYW1lIHNjcmVlblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmVtZW50KCkge1xyXG4gIC8vIHRoZSBIVE1MIGVsZW1lbnQgd2lsbCBhbHdheXMgZXhpc3QgdGhpcyBpcyB3aHkgYSBub24tbnVsbCBhc3NlcnRpb24gb3BlcmF0b3IgKCEpIGlzIHVzZWRcclxuICBjb25zdCBkZWZlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmZW5kZXJcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIC8vbW92ZXMgdGhlIG1vdGhlcnNoaXAgb24gdGhlIGdhbWUgc2NyZWVuXHJcbiAgZGVmZW5kZXIuc3R5bGUubGVmdCA9IHBsYXllci54ICsgXCJweFwiO1xyXG4gIGRlZmVuZGVyLnN0eWxlLnRvcCA9IHBsYXllci55IC0gcGxheWVyLmhlaWdodCArIFwicHhcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuXHJcbi8vIG1vZHVsZSBob2xkIG9iamVjdCB0aGF0IGNvbnRhaW4gZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGxheWVyIHN0YXRlLlxyXG5cclxuLy8gdGhlIEhUTUwgZWxlbWVudCB3aWxsIGFsd2F5cyBleGlzdCB0aGlzIGlzIHdoeSBhIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoISkgaXMgdXNlZFxyXG5jb25zdCBnYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1hcmVhXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmV4cG9ydCBsZXQgcGxheWVyOiBJUGxheWVyID0ge1xyXG4gIHg6IDEwMCxcclxuICB5OiBnYW1lQXJlYS5vZmZzZXRIZWlnaHQgLSA1MCxcclxuICB3aWR0aDogMCxcclxuICBoZWlnaHQ6IDAsXHJcbiAgbGFzdFRpbWVTaG90OiAwLFxyXG4gIGxpdmVzOiAzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBBZGREZWZlbmRlckxhemVyU2hvdCB9IGZyb20gXCIuLi9hZGRPYmplY3RzL2FkZERlZmVuZGVyTGF6ZXJTaG90XCI7XHJcbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vZ2VuZXJhbEdhbWVJbmZvL2dlbmVyYWxJbmZvXCI7XHJcbmltcG9ydCB7IElHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL21vZGVscy9nZW5lcmFsSW5mb1wiO1xyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL21vZGVscy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgc291bmRzIH0gZnJvbSBcIi4uL3NvdW5kcy9zb3VuZHNcIjtcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG4vLyBsb2dpYyBmb3Igc2V0dGluZyB1cCB0aGUgcGxheWVyIGNvbnRyb2xsc1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uS2V5VXApO1xyXG5cclxuLy8gb2JqZWN0IHRoYXQgd2lsbCBob2xkIGFsbCBvZiBwbGF5ZXIgY29udHJvbHMgLT4gbGVmdCBhbmQgcmlnaHQgYXJyb3dzIGFuZCB0aGUgc3BhY2ViYXJcclxubGV0IGtleXM6IHtcclxuICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xyXG59ID0ge307XHJcblxyXG4vLyBjaGVja3MgaWYgdGhlIHBsYXllciBpcyBwcmVzc2luZyBhbnkgb2YgdGhlIGNvbnRyb2xzXHJcbmZ1bmN0aW9uIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAga2V5c1tlLmNvZGVdID0gdHJ1ZTtcclxufVxyXG5cclxuLy8gY2hlY2tzIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3NpbmcgYW55IG9mIHRoZSBjb250cm9sc1xyXG5mdW5jdGlvbiBvbktleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcclxufVxyXG5cclxuLy8gbW92ZW1lbnQgY29udHJvbGxzXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJNb3ZlbWVudENvbnRyb2xscyhnYW1lQXJlYTogSFRNTERpdkVsZW1lbnQpIHtcclxuICAvLyBpZiB0aGUgcGxheWVyIGlzIHByZXNzaW5nIG9yIGhvbGRpbmcgdGhlIGxlZnQgYXJyb3csIG1vdmUgdGhlIHBsYXllciB0byB0aGUgbGVmdFxyXG4gIGlmIChrZXlzLkFycm93TGVmdCAmJiBwbGF5ZXIueCA+IDApIHtcclxuICAgIHBsYXllci54IC09IGdhbWUuc3BlZWQgKiBnYW1lLnBsYXllck1vdmVtZW50TXVsdGlwbGllcjtcclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZSBwbGF5ZXIgaXMgcHJlc3Npbmcgb3IgaG9sZGluZyB0aGUgbGVmdCBhcnJvdywgbW92ZSB0aGUgcGxheWVyIHRvIHRoZSByaWdodFxyXG4gIGlmIChrZXlzLkFycm93UmlnaHQgJiYgcGxheWVyLnggKyBwbGF5ZXIud2lkdGggKyAyMCA8IGdhbWVBcmVhLm9mZnNldFdpZHRoKSB7XHJcbiAgICBwbGF5ZXIueCArPSBnYW1lLnNwZWVkICogZ2FtZS5wbGF5ZXJNb3ZlbWVudE11bHRpcGxpZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBzaG9vdGluZyBjb250cm9sbHNcclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclNob290aW5nQ29udHJvbGxzKHRpbWVzdGFtcDogbnVtYmVyKSB7XHJcbiAgLy8gaWYgdGhlIHBsYXllciBpcyBwcmVzc2luZyB0aGUgc3BhY2ViYXIgcmVuZGVyIGEgbGF6ZXIgYXR0YWNrIGFuZCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHNvdW5kXHJcbiAgaWYgKGtleXMuU3BhY2UgJiYgdGltZXN0YW1wIC0gcGxheWVyLmxhc3RUaW1lU2hvdCA+IGdhbWUuZmlyZUludGVydmFsKSB7XHJcbiAgICBuZXcgQWRkRGVmZW5kZXJMYXplclNob3QoKTtcclxuICAgIHNvdW5kcy5kZWZlbmRlclNob290aW5nLnBsYXkoKTtcclxuICAgIHBsYXllci5sYXN0VGltZVNob3QgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFkZFBsYXllckxpZmUgfSBmcm9tIFwiLi4vYWRkT2JqZWN0cy9hZGRQbGF5ZXJMaWZlXCI7XHJcbmltcG9ydCB7IGdhbWUsIHNjZW5lIH0gZnJvbSBcIi4uL2dlbmVyYWxHYW1lSW5mby9nZW5lcmFsSW5mb1wiO1xyXG5cclxuLy8gbG9naWMgZm9yIHVwZGF0aW5nIHRoZSBwbGF5ZXIgcG9pbnRzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRzVXBkYXRlKHBvaW50czogSFRNTERpdkVsZW1lbnQpIHtcclxuICBwb2ludHMudGV4dENvbnRlbnQgPSBzY2VuZS5zY29yZS50b1N0cmluZygpO1xyXG5cclxuICBjb25zdCBsaXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub25lLWxpZmVcIik7XHJcblxyXG4gIC8vIGZvciBldmVyeSAxMDAwIHBvaW50cyB0aGUgcGxheWVyIGlzIGF3YXJlZCBhbiBleHRyYSBsaWZlXHJcbiAgLy8gdGhlIHBsYXllciBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gNSBsaXZlc1xyXG4gIGlmIChcclxuICAgIHNjZW5lLnNjb3JlIC8gMTAwMCA+PSBnYW1lLmV4dHJhTGl2ZXNDb3VudGVyICYmXHJcbiAgICBsaXZlcy5sZW5ndGggPD0gZ2FtZS5tYXhQbGF5ZXJMaXZlc1xyXG4gICkge1xyXG4gICAgbmV3IEFkZFBsYXllckxpZmUoKTtcclxuICAgIGdhbWUuZXh0cmFMaXZlc0NvdW50ZXIrKztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuXHJcbi8vIGxvZ2ljIGZvciByZXNwd2FuaW5nIGFsbCB0aGUgYWxpZW4gY2x1c3RlciBvbmNlIGV2ZXJ5IGFsaWVuIGlzIGRlYWRcclxuXHJcbi8vIGRlYWQgYWxpZW5zIGFyZSBzdGlsbCBvbiB0aGUgc2NyZWVuIGJ1dCBhcmUgbm90IHZpc2libGUgdG8gdGhlIHBsYXllciwgbm9yIGNhbiB0aGV5IGJlIGludGVyYWN0ZWQgd2l0aFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3Bhd25BbGllbnMoKSB7XHJcbiAgLy8gc2VsZWN0cyBhbGwgb2YgdGhlIGFsaWVuIEhUTUwgRGl2IGVsZW1lbnRzIGFuZCBzdG9yZXMgdGhlbSBpbiBhbiBhcnJheVxyXG4gIGNvbnN0IGFsaWVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5hbGllblwiXHJcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gZmlsdGVycyBhbmQgc3RvcmVzIGFsbCBvZiB0aGUgZGVhZCBhbGllbnMgaW4gYW5vdGhlciBhcnJheVxyXG4gIGNvbnN0IGFsaWVuUmVzcGF3bkNoZWNrZXIgPSBBcnJheS5mcm9tKGFsaWVucykuZmlsdGVyKChhbGllbikgPT5cclxuICAgIGFsaWVuLmNsYXNzTGlzdC5jb250YWlucyhcImRlYWQtYWxpZW5cIilcclxuICApO1xyXG5cclxuICAvLyBpZiBhbGwgb2YgdGhlIGFsaWVucyBoYXZlIGJlZW4ga2lsbGVkIHJlbW92ZXMgdGhlIFwiZGVhZFwiIHN0YXR1cyBzbyB0aGV5IGNhbiBiZSBpbnRlcmFjdGVkIHdpdGggYWdhaW4gKCBubyByZXN0IGZvciB0aGUgd2lja2VkLCBJIHN1cHBvc2UpXHJcbiAgaWYgKGFsaWVuUmVzcGF3bkNoZWNrZXIubGVuZ3RoID09PSBnYW1lLm1heEFsaWVuQ2x1c3RlclNpemUpIHtcclxuICAgIGFsaWVucy5mb3JFYWNoKChhbGllbikgPT4ge1xyXG4gICAgICBhbGllbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGVhZC1hbGllblwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJU291bmRzIH0gZnJvbSBcIi4uL21vZGVscy9zb3VuZHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzb3VuZHM6IElTb3VuZHMgPSB7IFxyXG4gICAgZGVmZW5kZXJTaG9vdGluZzogbmV3IEF1ZGlvKCcuL3NvdW5kcy9zaG9vdC53YXYnKSxcclxuICAgIGFsaWVuRGVhdGhTb3VuZDogbmV3IEF1ZGlvKCcuL3NvdW5kcy9pbnZhZGVya2lsbGVkLndhdicpLFxyXG4gICAgYmFja2dyb3VuZE11c2ljOiBuZXcgQXVkaW8oJy4vc291bmRzL3NwYWNlaW52YWRlcnMxLm1wZWcnKSxcclxuICAgIG1vdGhlcnNoaXBTb3VuZEhpZ2hQaXRjaDogbmV3IEF1ZGlvKCcuL3NvdW5kcy91Zm9faGlnaHBpdGNoLndhdicpLFxyXG4gICAgbW90aGVyc2hpcFNvdW5kTG93UGl0Y2g6IG5ldyBBdWRpbygnLi9zb3VuZHMvdWZvX2xvd3BpdGNoLndhdicpLFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBzY2VuZSB9IGZyb20gXCIuLi9nZW5lcmFsR2FtZUluZm8vZ2VuZXJhbEluZm9cIjtcclxuaW1wb3J0IHsgSUdhbWVSZXN0YXJ0IH0gZnJvbSBcIi4uL21vZGVscy9idXR0b25zXCI7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XHJcbmltcG9ydCB7IG9uR2FtZVN0YXJ0IH0gZnJvbSBcIi4vc3RhcnRHYW1lXCI7XHJcblxyXG4vLyBsb2dpYyBmb3IgcmVzdGFydGluZyB0aGUgZ2FtZSBvbmNlIHRoZSBwbGF5ZXIgaGFzIGxvc3QgYWxsIG9mIHRoZWlyIGxpdmVzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVJlc3RhcnQoXHJcbiAgZ2FtZUFyZWE6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGdhbWVPdmVyOiBIVE1MRGl2RWxlbWVudFxyXG4pIHtcclxuICAvLyBoaWRlcyB0aGUgZ2FtZSBvdmVyIHNjcmVlblxyXG4gIGdhbWVPdmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG4gIC8vc2VsZWN0cyB0aGUgYWxpZW4gY2x1c3RlciBIVE1MIGRpdiBlbGVtZW50XHJcbiAgY29uc3QgYWxpZW5DbHVzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmFsaWVuLWNsdXN0ZXJcIlxyXG4gICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAvLyByZW1vdmVzIHRoZSByZW1haW5pbmcgYWxpZXMgZnJvbSB0aGUgc2NyZWVuXHJcbiAgYWxpZW5DbHVzdGVyLnJlbW92ZSgpO1xyXG5cclxuICAvLyBzZWxlY3RzIGFsbCBvZiB0aGUgZGVmZW5kZXIncyBsYXplciBzaG9ydHMgSFRNTCBkaXYgZWxlbWVudHMgb24gdGhlIHNjcmVlbiBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBsYXplclNob3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXplci1zaG90XCIpO1xyXG4gIC8vIGxvb3BzIG92ZXIgdGhlIGFycmF5IGFuZCByZW1vdmVzIGVhY2ggb2YgdGhlIGxhemVyIHNob3J0c1xyXG4gIGxhemVyU2hvdHMuZm9yRWFjaCgobGF6ZXJTaG90KSA9PiBsYXplclNob3QucmVtb3ZlKCkpO1xyXG5cclxuICAvLyBzZWxlY3RzIHRoZSBkZWZlbmRlciBIVE1MIGRpdiBlbGVtZW50XHJcbiAgY29uc3QgZGVmZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmVuZGVyXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAvLyByZW1vdmVzIHRoZSBkZWZlbmRlciBlbGVtZW50IGZyb20gdGhlIHNjcmVlblxyXG4gIGRlZmVuZGVyLnJlbW92ZSgpO1xyXG5cclxuICAvLyBzZWxlY3RzIGFsbCBhbGllbiBsYXplciBzaG9ydHMgSFRNTCBkaXYgZWxlbWVudHMgb24gdGhlIHNjcmVlbiBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBhbGllbkxhemVyU2hvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFsaWVuLWxhemVyLXNob3RcIik7XHJcbiAgLy8gbG9vcHMgb3ZlciB0aGUgYXJyYXkgYW5kIHJlbW92ZXMgZWFjaCBvZiB0aGUgbGF6ZXIgc2hvcnRzIGVsZW1lbnRzIGZyb20gdGhlIHNjcmVlblxyXG4gIGFsaWVuTGF6ZXJTaG90cy5mb3JFYWNoKChhbGllbkxhemVyU2hvdCkgPT4gYWxpZW5MYXplclNob3QucmVtb3ZlKCkpO1xyXG5cclxuICAvLyBzZWxlY3RzIGFsbCBwbGF5ZXIgbGl2ZXMgSFRNTCBkaXYgZWxlbWVudHMgb24gdGhlIHNjcmVlbiBhbmQgc3RvcmVzIHRoZW0gaW4gYW4gYXJyYXlcclxuICBjb25zdCBsaXZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub25lLWxpZmVcIik7XHJcbiAgLy8gbG9vcHMgb3ZlciB0aGUgYXJyYXkgYW5kIHJlbW92ZXMgZWFjaCBsaWZlIGVsZW1lbnQgZnJvbSB0aGUgc2NyZWVuXHJcbiAgbGl2ZXMuZm9yRWFjaCgobGlmZSkgPT4gbGlmZS5yZW1vdmUoKSk7XHJcblxyXG4gIC8vIHNlbGVjdHMgdGhlIHNoaWVsZCBmaWVsZCBIVE1MIGRpdiBlbGVtZW50IG9uIHRoZSBzY3JlZW5cclxuICBjb25zdCBzaGllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGllbGQtZmllbGRcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIC8vIHJlbW92ZXMgdGhlIHNoaWVsZCBmaWVsZCBlbGVtZW50IGZyb20gdGhlIHNjcmVlblxyXG4gIHNoaWVsZHMucmVtb3ZlKCk7XHJcblxyXG4gIC8vIHJlc2V0cyB0aGUgcGxheWVyIG9iamVjdCBzdGF0c1xyXG4gIHBsYXllci54ID0gMTAwO1xyXG4gIHBsYXllci55ID0gZ2FtZUFyZWEub2Zmc2V0SGVpZ2h0IC0gNTA7XHJcbiAgcGxheWVyLndpZHRoID0gMDtcclxuICBwbGF5ZXIuaGVpZ2h0ID0gMDtcclxuICBwbGF5ZXIubGFzdFRpbWVTaG90ID0gMDtcclxuICBwbGF5ZXIubGl2ZXMgPSAzO1xyXG5cclxuICAvLyByZXNldHMgdGhlIHNjZW5lIG9iamVjdCBzdGF0c1xyXG4gIHNjZW5lLnNjb3JlID0gMDtcclxuICBzY2VuZS5sYXN0QWxpZW5TcHJpdGVJbnRlcnZhbCA9IDA7XHJcbiAgc2NlbmUubGFzdEFsaWVuTGF6ZXJTaG90U3ByaXRlSW50ZXJ2YWwgPSAwO1xyXG4gIHNjZW5lLmxhc3RBbGllbkxhemVyU2hvdCA9IDA7XHJcbiAgc2NlbmUubGFzdFNwYXduTW90aGVyc2hpcCA9IDA7XHJcbiAgc2NlbmUuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAvLyBydW5zIHRoZSBzdGFydCBnYW1lIGZ1bmN0aW9uIHNvIHRoZSBnYW1lIGNhbiBzdGFydCBhZ2FpblxyXG4gIG9uR2FtZVN0YXJ0KCk7XHJcbn1cclxuIiwiLy8gYSBmdW5jIHRoYXQgY2hlY2tzIGlmIDIgaHRtbCBlbGVtZW50cyBhcmUgaW4gY29udGFjdCB3aXRoIGVhY2ggb3RoZXJcclxuLy8gIGlmIHRoZXkgYXJlIC0gcmV0dXJuIHRydWUgb3RoZXJ3aXNlIHJldHVybiBmYWxzZVxyXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xsaXNpb24oXHJcbiAgICBmaXJzdEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgc2Vjb25kRWxlbWVudDogSFRNTERpdkVsZW1lbnRcclxuICApIHtcclxuICAgIGNvbnN0IGZpcnN0UmVjdCA9IGZpcnN0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHNlY29uZFJlY3QgPSBzZWNvbmRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIFxyXG4gICAgcmV0dXJuICEoXHJcbiAgICAgIGZpcnN0UmVjdC50b3AgPiBzZWNvbmRSZWN0LmJvdHRvbSB8fFxyXG4gICAgICBmaXJzdFJlY3QuYm90dG9tIDwgc2Vjb25kUmVjdC50b3AgfHxcclxuICAgICAgZmlyc3RSZWN0LnJpZ2h0IDwgc2Vjb25kUmVjdC5sZWZ0IHx8XHJcbiAgICAgIGZpcnN0UmVjdC5sZWZ0ID4gc2Vjb25kUmVjdC5yaWdodFxyXG4gICAgKTtcclxuICB9IiwiaW1wb3J0IHsgQWRkQWxpZW5DbHVzdGVyIH0gZnJvbSBcIi4uL2FkZE9iamVjdHMvYWRkQWxpZW5DbHVzdGVyXCI7XHJcbmltcG9ydCB7IEFkZERlZmVuZGVyIH0gZnJvbSBcIi4uL2FkZE9iamVjdHMvYWRkRGVmZW5kZXJcIjtcclxuaW1wb3J0IHsgQWRkUGxheWVyTGlmZSB9IGZyb20gXCIuLi9hZGRPYmplY3RzL2FkZFBsYXllckxpZmVcIjtcclxuaW1wb3J0IHsgQWRkU2hpZWxkcyB9IGZyb20gXCIuLi9hZGRPYmplY3RzL2FkZFNoaWVsZHNcIjtcclxuaW1wb3J0IHsgZ2FtZUFjdGlvbiB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XHJcbmltcG9ydCB7IHNvdW5kcyB9IGZyb20gXCIuLi9zb3VuZHMvc291bmRzXCI7XHJcblxyXG4vLyB0aGUgSFRNTCBlbGVtZW50IHdpbGwgYWx3YXlzIGV4aXN0IHRoaXMgaXMgd2h5IGEgbm9uLW51bGwgYXNzZXJ0aW9uIG9wZXJhdG9yICghKSBpcyB1c2VkXHJcbmNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZVwiKSEgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4vLyBzdGFydCBnYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkdhbWVTdGFydCgpIHtcclxuICAvLyBoaWRlcyB0aGUgc3RhcnQgZ2FtZSBzY3JlZW5cclxuICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAvLyBjcmVhdGVzIGEgbmV3IGRlZmVuZGVyIEhUTUwgZGl2IGVsZW1lbnRcclxuICBjb25zdCBkZWZlbmRlckluc3RhbmNlID0gbmV3IEFkZERlZmVuZGVyKCk7XHJcbiAgY29uc3QgZGVmZW5kZXIgPSBkZWZlbmRlckluc3RhbmNlLmRlZmVuZGVyO1xyXG5cclxuICAvLyBzZXRzIHNvbWUgcGxheWVyIHN0YXRzLCBuZWVkZWQgaW4gb3RoZXIgcGFydHMgb2YgdGhlIGdhbWVcclxuICBwbGF5ZXIuaGVpZ2h0ID0gZGVmZW5kZXIub2Zmc2V0SGVpZ2h0O1xyXG4gIHBsYXllci53aWR0aCA9IGRlZmVuZGVyLm9mZnNldFdpZHRoO1xyXG5cclxuICAvLyBhZGQgYSBuZXcgYWxpZW4gY2x1c3RlclxyXG4gIG5ldyBBZGRBbGllbkNsdXN0ZXIoKTtcclxuICAvLyBhZGRlcyBhIG5ldyBmaWVsZCBvZiBzaGllbGRzXHJcbiAgbmV3IEFkZFNoaWVsZHMoKTtcclxuICAvLyBzdGFydCB0aGUgYmFja2dyb3VuZCBtdXNpY1xyXG4gIHNvdW5kcy5iYWNrZ3JvdW5kTXVzaWMucGxheSgpO1xyXG5cclxuICAvLyBnaXZlcyB0aGUgcGxheWVyIDMgbGl2ZXNcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcclxuICAgIG5ldyBBZGRQbGF5ZXJMaWZlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBzdGFydCB0aGUgZ2FtZSBlbmdpbmVcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVBY3Rpb24pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9sb2dpYy9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
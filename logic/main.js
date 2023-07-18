import { AddAlienLazerShot } from "./addObjects/addAlienLazerShot.js";
import { AddDefenderLazerShot } from "./addObjects/addDefenderLazerShot.js";
import { AddMothership } from "./addObjects/addMothership.js";
import { alienSpriteAnimation } from "./animations/alienSprites.js";
import { defenderAlienLazerShotCollisionChecker } from "./collisionChecker/defenderAlienLazershot.js";
import { shieldAlienLazerShotCollisionChecker } from "./collisionChecker/shieldAlienLazerShot.js";
import { deathAndPoints } from "./deathAndPoints/deathAndPoints.js";
import { game, scene } from "./generalGameInfo/generalInfo.js";
import { alienClusterMovement } from "./objectMovement/alienCluster.js";
import { alienLazerShotsMovmentAndCollisionChecker } from "./objectMovement/alienLazerShots.js";
import { lazerShotsMovement } from "./objectMovement/lazerShots.js";
import { mothershipMovement } from "./objectMovement/mothership.js";
import { player } from "./player/player.js";
import { keys } from "./player/playerMovement.js";
import { pointsUpdate } from "./points/pointsUpdate.js";
import { respawnAliens } from "./respwan/aliens.js";
import { sounds } from "./sounds.js";
import {
  onGameStart,
  gameOverAction,
  gameRestart,
  isCollision,
} from "./utilityFuncs.js";

const addMothership = AddMothership;

const startButton = document.querySelector(".start-button");
export let gameArea = document.querySelector(".game-area");
export const gameOver = document.querySelector(".game-over");
const points = document.querySelector(".points");
// const lives = document.querySelector('.lives-counter');

// backgournd music loop
sounds.backgroundMusic.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

// start game button event listener
startButton.addEventListener("click", () => {
  return onGameStart(gameAction);
});

// game over and restart game event listener
gameOver.addEventListener("click", gameRestart);

// for testing purposes TODO - delete

// game engine
function gameAction(timestamp) {
  const defender = document.querySelector(".defender");

  // movement keys
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.playerMovementMultiplier;
  }

  if (keys.ArrowRight && player.x + player.width + 20 < gameArea.offsetWidth) {
    player.x += game.speed * game.playerMovementMultiplier;
  }

  // apply movement
  defender.style.left = player.x + "px";
  defender.style.top = player.y - player.height + "px";

  // shooting
  if (keys.Space && timestamp - player.lastTimeShot > game.fireInterval) {
    // LazerShotMaker.addDefenderLazerShot(player);
    new AddDefenderLazerShot(player);
    sounds.defenderShooting.play();
    player.lastTimeShot = timestamp;
  }

  // add lazer movement
  let lazerShots = document.querySelectorAll(".lazer-shot");
  lazerShotsMovement(lazerShots, game, isCollision);

  // adding alient cluster movment
  let alienCluster = document.querySelector(".alien-cluster");
  alienClusterMovement(alienCluster, game, gameArea);

  // alien death and points
  let aliens = document.querySelectorAll(".alien");
  deathAndPoints(aliens, lazerShots, isCollision, sounds, scene);

  // respawn aliens
  respawnAliens(aliens, game);

  // aliens sprite animation
  alienSpriteAnimation(timestamp, scene, game, aliens);

  // aliens firing back (in self defence)
  let remainingAliens = Array.from(aliens).filter(
    (alien) => alien.classList.contains("dead-alien") === false
  );
  // picks a random postion to make sure a random alien fires every time
  let randomAlienPosition = Math.round(remainingAliens.length * Math.random());
  if (timestamp - scene.lastAlienLazerShot > game.alienFireInterval) {
    new AddAlienLazerShot(remainingAliens[randomAlienPosition]);
    scene.lastAlienLazerShot = timestamp;
  }

  // add movment and collision to alien lazer shots
  let alienLazerShots = document.querySelectorAll(".alien-lazer-shot");

  alienLazerShotsMovmentAndCollisionChecker(
    alienLazerShots,
    game,
    scene,
    player,
    timestamp,
    gameArea,
    isCollision,
    defender,
    gameOverAction,
    defenderAlienLazerShotCollisionChecker,
    shieldAlienLazerShotCollisionChecker
  );

  // add mothership
  if (
    timestamp - scene.lastSpawnMothership >
    game.mothershipSpawnInterval + 50000 * Math.random()
  ) {
    new AddMothership(gameArea, sounds);
    scene.lastSpawnMothership = timestamp;
  }

  // add mothership movement
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

  pointsUpdate(points, scene, game);

  if (scene.isActive) {
    window.requestAnimationFrame(gameAction);
  }
}

// Bug fixes:
// respawn aliens animation gets fuck up after respawning - may have to give remove alien cluster and add it again

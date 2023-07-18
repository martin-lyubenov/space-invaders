import { AddAlienLazerShot } from "./addObjects/addAlienLazerShot.js";
import { AddDefenderLazerShot } from "./addObjects/addDefenderLazerShot.js";
import { AddMothership } from "./addObjects/addMothership.js";
import { alienSpriteAnimation } from "./animations/alienSprites.js";
import { defenderAlienLazerShotCollisionChecker } from "./collisionChecker/defenderAlienLazershot.js";
import { shieldAlienLazerShotCollisionChecker } from "./collisionChecker/shieldAlienLazerShot.js";
import { alienDeathAndPoints } from "./alienDeathAndPoints/alienDeathAndPoints.js";
import { game, scene } from "./generalGameInfo/generalInfo.js";
import { alienClusterMovement } from "./objectMovement/alienCluster.js";
import { alienLazerShotsMovmentAndCollisionChecker } from "./objectMovement/alienLazerShots.js";
import { lazerShotsMovement } from "./objectMovement/lazerShots.js";
import { playerMovement } from "./objectMovement/player.js";
import { player } from "./player/player.js";
import {
  playerMovementControlls,
  playerShootingControlls,
} from "./player/playerMovementControlls.js";
import { pointsUpdate } from "./points/pointsUpdate.js";
import { respawnAliens } from "./respwan/aliens.js";
import { sounds } from "./sounds.js";
import {
  onGameStart,
  gameOverAction,
  gameRestart,
  isCollision,
} from "./utilityFuncs.js";
import { alienFiringCycle } from "./alienFiringCycle/alienFiringCycle.js";

const startButton = document.querySelector(".start-button");
let gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const points = document.querySelector(".points");

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
gameOver.addEventListener("click", () => {
  return gameRestart(gameArea);
});

// done to reduce types and easy of adding new parameters to the gameAction
const gameActionAssetsConfigObject = {
  playerMovementControlls: { player, game, gameArea },
  playerMovement: { player },
  playerShootingControlls: { player, game, sounds, AddDefenderLazerShot },
  lazerShotsMovement: { game, isCollision },
  alienClusterMovement: { game, gameArea },
  deathAndPoints: { isCollision, sounds, scene },
  respawnAliens: { game },
  alienSpriteAnimation: { scene, game },
  alienLazerShotsMovmentAndCollisionChecker: {
    game,
    scene,
    player,
    gameArea,
    isCollision,
    gameOverAction,
    defenderAlienLazerShotCollisionChecker,
    shieldAlienLazerShotCollisionChecker,
    gameOver,
  },
  alienFiringCycle: { scene, game, AddAlienLazerShot },
};

// game engine
function gameAction(timestamp) {
  // movement keys

  playerMovementControlls(gameActionAssetsConfigObject.playerMovementControlls);

  // apply movement
  playerMovement(gameActionAssetsConfigObject.playerMovement);

  // shooting
  playerShootingControlls(
    gameActionAssetsConfigObject.playerShootingControlls,
    timestamp //timestam must always be added as it comes from the gameAction func itself
  );

  // add lazer movement
  lazerShotsMovement(gameActionAssetsConfigObject.lazerShotsMovement);

  // adding alient cluster movment
  alienClusterMovement(gameActionAssetsConfigObject.alienClusterMovement);

  // alien death and points
  alienDeathAndPoints(gameActionAssetsConfigObject.deathAndPoints);

  // respawn aliens
  respawnAliens(gameActionAssetsConfigObject.respawnAliens);

  // aliens sprite animation
  alienSpriteAnimation(
    gameActionAssetsConfigObject.alienSpriteAnimation,
    timestamp
  );

  // aliens firing back (in self defence)
  alienFiringCycle(gameActionAssetsConfigObject.alienFiringCycle, timestamp);

  // add movment and collision to alien lazer shots
  alienLazerShotsMovmentAndCollisionChecker(
    gameActionAssetsConfigObject.alienLazerShotsMovmentAndCollisionChecker,
    timestamp
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

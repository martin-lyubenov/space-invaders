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
import { sounds } from "./sounds/sounds.js";
import { onGameStart, gameRestart, isCollision } from "./util/utilityFuncs.js";
import { alienFiringCycle } from "./alienFiringCycle/alienFiringCycle.js";
import { mothershipMovement } from "./objectMovement/mothership.js";
import { AddAlienCluster } from "./addObjects/addAlienCluster.js";
import { AddShields } from "./addObjects/addShields.js";
import { AddDefender } from "./addObjects/addDefender.js";

const startButton = document.querySelector(".start-button");
let gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const points = document.querySelector(".points");

// backgournd music loop
sounds.backgroundMusic.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
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
    defenderAlienLazerShotCollisionChecker,
    shieldAlienLazerShotCollisionChecker,
    gameOver,
  },
  alienFiringCycle: { scene, game, AddAlienLazerShot },
  mothershipMovement: { game, mothershipCurrentSound: undefined },
};

const gameButtonsConfigObj = {
  onGameStart: {
    gameAction,
    player,
    game,
    AddDefender,
    AddAlienCluster,
    AddShields,
    sounds,
  },
  gameRestart: {
    gameArea,
    gameOver,
    player,
    scene,
    onGameStartConfigObj: {
      gameAction,
      player,
      game,
      AddDefender,
      AddAlienCluster,
      AddShields,
      sounds,
    },
  },
};

// start game button event listener
startButton.addEventListener("click", () => {
  return onGameStart(gameButtonsConfigObj.onGameStart);
});

// game over and restart game event listener
gameOver.addEventListener("click", () => {
  return gameRestart(gameButtonsConfigObj.gameRestart);
});

// game engine
function gameAction(timestamp) {
  // movement keys
  playerMovementControlls(gameActionAssetsConfigObject.playerMovementControlls);

  // shooting
  playerShootingControlls(
    gameActionAssetsConfigObject.playerShootingControlls,
    timestamp //timestam must always be added as it comes from the gameAction func itself
  );

  // apply player movement
  playerMovement(gameActionAssetsConfigObject.playerMovement);

  // add lazer movement
  lazerShotsMovement(gameActionAssetsConfigObject.lazerShotsMovement);

  // add alient cluster movement
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
    const mothership = new AddMothership(gameArea, sounds);
    gameActionAssetsConfigObject.mothershipMovement.mothershipCurrentSound =
      mothership.mothershipCurrentSound;
    scene.lastSpawnMothership = timestamp;
  }

  // add mothership movement
  mothershipMovement(gameActionAssetsConfigObject.mothershipMovement);

  pointsUpdate(points, scene, game);

  if (scene.isActive) {
    window.requestAnimationFrame(gameAction);
  }
}

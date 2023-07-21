import { AddAlienLazerShot } from "./addObjects/addAlienLazerShot";
import { AddDefenderLazerShot } from "./addObjects/addDefenderLazerShot";
import { AddMothership } from "./addObjects/addMothership";
import { alienSpriteAnimation } from "./animations/alienSprites";
import { defenderAlienLazerShotCollisionChecker } from "./collisionChecker/defenderAlienLazerShot";
import { shieldAlienLazerShotCollisionChecker } from "./collisionChecker/shieldAlienLazerShot";
import { alienDeathAndPoints } from "./alienDeathAndPoints/alienDeathAndPoints";
import { game, scene } from "./generalGameInfo/generalInfo";
import { alienClusterMovement } from "./objectMovement/alienCluster";
import { alienLazerShotsMovmentAndCollisionChecker } from "./objectMovement/alienLazerShots";
import { lazerShotsMovement } from "./objectMovement/lazerShots";
import { playerMovement } from "./objectMovement/player";
import { player } from "./player/player";
import {
  playerMovementControlls,
  playerShootingControlls,
} from "./player/playerMovementControlls";
import { pointsUpdate } from "./points/pointsUpdate";
import { respawnAliens } from "./respwan/aliens";
import { sounds } from "./sounds/sounds";
import { alienFiringCycle } from "./alienFiringCycle/alienFiringCycle";
import { mothershipMovement } from "./objectMovement/mothership";
import { AddAlienCluster } from "./addObjects/addAlienCluster";
import { AddShields } from "./addObjects/addShields";
import { AddDefender } from "./addObjects/addDefender";
import { IGameRestart, IGameStart } from "./models/buttons";
import { isCollision } from "./util/isCollision";
import { onGameStart } from "./util/startGame";
import { gameRestart } from "./util/gameRestart";

const startButton = document.querySelector(".start-button")! as HTMLDivElement;
let gameArea = document.querySelector(".game-area")! as HTMLDivElement;
const gameOver = document.querySelector(".game-over")! as HTMLDivElement;
const points = document.querySelector(".points")! as HTMLDivElement;

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
  mothershipMovement: { game, mothershipCurrentSound: new Audio() },
  pointsUpdate: { points, scene, game },
};

const gameButtonsConfigObj: {
  onGameStart: IGameStart;
  gameRestart: IGameRestart;
} = {
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
function gameAction(timestamp: number) {
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
    const mothership = new AddMothership(sounds);
    gameActionAssetsConfigObject.mothershipMovement.mothershipCurrentSound =
      mothership.mothershipCurrentSound;
    scene.lastSpawnMothership = timestamp;
  }

  // add mothership movement
  mothershipMovement(gameActionAssetsConfigObject.mothershipMovement);

  pointsUpdate(gameActionAssetsConfigObject.pointsUpdate);

  if (scene.isActive) {
    window.requestAnimationFrame(gameAction);
  }
}

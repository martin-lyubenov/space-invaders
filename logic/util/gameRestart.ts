import { IGameRestart } from "../models/buttons";
import { onGameStart } from "./startGame";

// restat game option
export function gameRestart({
  gameArea,
  gameOver,
  player,
  scene,
  onGameStartConfigObj,
}: IGameRestart) {
  gameOver.classList.add("hidden");
  const alienCluster = document.querySelector(
    ".alien-cluster"
  )! as HTMLDivElement;
  alienCluster.remove();
  let lazerShots = document.querySelectorAll(".lazer-shot");
  lazerShots.forEach((lazerShot) => lazerShot.remove());

  const defender = document.querySelector(".defender")! as HTMLDivElement;
  defender.remove();

  const alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
  alienLazerShots.forEach((alienLazerShot) => alienLazerShot.remove());

  const lives = document.querySelectorAll(".one-life");
  lives.forEach((life) => life.remove());

  const shields = document.querySelector(".shield-field")! as HTMLDivElement;
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

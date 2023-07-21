import { AddPlayerLife } from "../addObjects/addPlayerLife";
import { IGameRestart, IGameStart } from "../models/buttons";

const startGame = document.querySelector(".start-game")! as HTMLDivElement;

// collision detector
export function isCollision(
  firstElement: HTMLDivElement,
  secondElement: HTMLDivElement
) {
  let firstRect = firstElement.getBoundingClientRect();
  let secondRect = secondElement.getBoundingClientRect();

  return !(
    firstRect.top > secondRect.bottom ||
    firstRect.bottom < secondRect.top ||
    firstRect.right < secondRect.left ||
    firstRect.left > secondRect.right
  );
}

// start game
export function onGameStart({
  gameAction,
  player,
  game,
  AddAlienCluster,
  AddShields,
  sounds,
  AddDefender,
}: IGameStart) {
  startGame.classList.add("hidden");
  const defenderInstance = new AddDefender(player);
  const defender = defenderInstance.defender;

  player.height = defender.offsetHeight;
  player.width = defender.offsetWidth;

  new AddAlienCluster(game);
  new AddShields();
  sounds.backgroundMusic.play();

  for (let i = 0; i < 3; i++) {
    new AddPlayerLife();
  }

  window.requestAnimationFrame(gameAction);
}

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

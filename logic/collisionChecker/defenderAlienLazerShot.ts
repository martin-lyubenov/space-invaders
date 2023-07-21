import { ISceneObject } from "../models/generalInfo";
import { IIsCollision } from "../models/isCollision";
import { IPlayer } from "../models/player";

export function defenderAlienLazerShotCollisionChecker(
  defender: HTMLDivElement,
  isCollision: IIsCollision,
  alienLazerShot: HTMLDivElement,
  player: IPlayer,
  gameArea: HTMLDivElement,
  gameOver: HTMLDivElement,
  scene: ISceneObject
) {
  function gameOverAction(gameOver: HTMLDivElement) {
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
    } else {
      lives[lives.length - 1].remove();
      gameOverAction(gameOver);
    }
  }
}

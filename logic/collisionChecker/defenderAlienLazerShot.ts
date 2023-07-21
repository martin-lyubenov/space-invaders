import { ISceneObject } from "../models/generalInfo";
import { IIsCollision } from "../models/isCollision";
import { IPlayer } from "../models/player";

// logic for checking if an alien has hit the defender

// how do we know if the defender has been hit you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information

// the name of the func is quite the mouthful I know
export function defenderAlienLazerShotCollisionChecker(
  defender: HTMLDivElement,
  isCollision: IIsCollision,
  alienLazerShot: HTMLDivElement,
  player: IPlayer,
  gameArea: HTMLDivElement,
  gameOver: HTMLDivElement,
  scene: ISceneObject
) {
  // the func reveals the game over screen and stops the game until the player decides to restart
  function gameOverAction(gameOver: HTMLDivElement) {
    scene.isActive = false;
    gameOver.classList.remove("hidden");
  }

  // checks for collision between the defender and an alien attack
  if (isCollision(defender, alienLazerShot)) {
    // sellects the remaining lives
    let lives = document.querySelectorAll(".one-live");
    // removes the alien attack form the game screen
    alienLazerShot.remove();
    // if the players still has lives one is removed and the position of the defender is reset to the starting one
    if (lives.length > 1) {
      player.x = 100;
      player.y = gameArea.offsetHeight - 50;
      defender.style.left = player.x + "px";
      defender.style.top = player.y + "px";
      lives[lives.length - 1].remove();
    } else {
      // if there are no more lives the game is over and the player is given the options to start again
      lives[lives.length - 1].remove();
      gameOverAction(gameOver);
    }
  }
}

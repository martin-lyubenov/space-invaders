import { game } from "../generalGameInfo/generalInfo";
import { IGameObject } from "../models/generalInfo";
import { IIsCollision } from "../models/isCollision";
import { isCollision } from "../util/isCollision";

// logic for moving the defender attacks on the game screen

export function lazerShotsMovement() {
  // selects all of the defenders attacks and stores them in an array
  const lazerShots = document.querySelectorAll(
    ".lazer-shot"
  ) as NodeListOf<any>;

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
    const shields = document.querySelectorAll(
      ".shield"
    )! as NodeListOf<HTMLDivElement>;
    shields.forEach((shield) => {
      if (
        isCollision(lazerShot, shield) &&
        shield.classList.contains("shield-destroyed") === false
      ) {
        lazerShot.remove();
      }
    });
  });
}

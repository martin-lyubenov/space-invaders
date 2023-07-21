import { IGameObject } from "../models/generalInfo";
import { IIsCollision } from "../models/isCollision";

export function lazerShotsMovement({
  game,
  isCollision,
}: {
  game: IGameObject;
  isCollision: IIsCollision;
}) {
  let lazerShots = document.querySelectorAll(
    ".lazer-shot"
  ) as NodeListOf<HTMLDivElement>;
  lazerShots.forEach((lazerShot) => {
    lazerShot.y -= game.speed;
    lazerShot.style.top = lazerShot.y + "px";

    if (lazerShot.y + lazerShot.offsetHeight < 0) {
      lazerShot.remove();
    }

    // if the lazer shot hits a shield, the shot is removed
    let shields = document.querySelectorAll(
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

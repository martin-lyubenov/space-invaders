import { IGameObject, ISceneObject } from "../models/generalInfo";

export function alienSpriteAnimation(
  { scene, game }: { scene: ISceneObject; game: IGameObject },
  timestamp: number
) {
  const aliens = document.querySelectorAll(
    ".alien"
  ) as NodeListOf<HTMLDivElement>;
  if (
    timestamp - scene.lastAlienSpriteInterval >
    game.alienSpriteChangeInterval
  ) {
    aliens.forEach((alien) => {
      if (alien.classList.contains("alien-40pts")) {
        if (alien.style.backgroundImage.includes("-40pts-1")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-40pts-2.png')";
        } else if (alien.style.backgroundImage.includes("-40pts-2")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-40pts-1.png')";
        } else {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-40pts-2.png')";
        }
      }

      if (alien.classList.contains("alien-20pts")) {
        if (alien.style.backgroundImage.includes("-20pts-1")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-20pts-2.png')";
        } else if (alien.style.backgroundImage.includes("-20pts-2")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-20pts-1.png')";
        } else {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-20pts-2.png')";
        }
      }

      if (alien.classList.contains("alien-10pts")) {
        if (alien.style.backgroundImage.includes("-10pts-1")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-10pts-2.png')";
        } else if (alien.style.backgroundImage.includes("-10pts-2")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-10pts-1.png')";
        } else {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-10pts-2.png')";
        }
      }

      scene.lastAlienSpriteInterval = timestamp;
    });
  }
}

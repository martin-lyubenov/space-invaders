import { game, scene } from "../generalGameInfo/generalInfo";
import { IGameObject, ISceneObject } from "../models/generalInfo";

// logic for animation the aliens
// the way the aliens are animated is as follows -> each frame the game checks the background sprite and the sprite change interval ( located in the "game" object) and changes the sprite simulating movement

export function alienSpriteAnimation(timestamp: number) {
  // selects all alien HTML div elements and saves them in an array
  const aliens = document.querySelectorAll(
    ".alien"
  ) as NodeListOf<HTMLDivElement>;
  if (
    timestamp - scene.lastAlienSpriteInterval >
    game.alienSpriteChangeInterval
  ) {
    // loops through the alien array and applies the appropriate animation for the 40pts aliens
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

      // loops through the alien array and applies the appropriate animation for the 20pts aliens

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

      // loops through the alien array and applies the appropriate animation for the 10pts aliens

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

      // adjusts the sprite interval, this makes sure tha animation does not occur too often
      scene.lastAlienSpriteInterval = timestamp;
    });
  }
}

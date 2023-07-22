import { alienLazerShotSprites } from "../animations/alienLazerShotSprites";
import { defenderAlienLazerShotCollisionChecker } from "../collisionChecker/defenderAlienLazerShot";
import { shieldAlienLazerShotCollisionChecker } from "../collisionChecker/shieldAlienLazerShot";
import { game } from "../generalGameInfo/generalInfo";

// logic for moving an alient attack and  checking if the attack has hit either the defender or one of the shields

// the name of the func is quite the mouthful I know
export function alienLazerShotsMovmentAndCollisionChecker(
  gameArea: HTMLDivElement,
  gameOver: HTMLDivElement,
  timestamp: number
) {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  const defender = document.querySelector(".defender")! as HTMLDivElement;
  // selects all alien attack HTML Div elements
  let alienLazerShots = document.querySelectorAll(
    ".alien-lazer-shot"
  ) as NodeListOf<HTMLDivElement>;

  // loops through the alien attacks
  alienLazerShots.forEach((alienLazerShot) => {
    alienLazerShot.y += game.speed;
    alienLazerShot.style.top = alienLazerShot.y + "px";

    // animates the alien attack
    alienLazerShotSprites(timestamp, alienLazerShot);

    // removes the alien attack from the dom when it reaches the end of the game screen
    if (
      alienLazerShot.y + alienLazerShot.offsetHeight >
      gameArea.offsetHeight - alienLazerShot.offsetHeight / 2
    ) {
      alienLazerShot.remove();
    }

    // checks if the alien attack has hit the defender
    defenderAlienLazerShotCollisionChecker(
      defender,
      alienLazerShot,
      gameArea,
      gameOver
    );

    // checks if the alien attack has hit a shield
    shieldAlienLazerShotCollisionChecker(alienLazerShot);
  });
}

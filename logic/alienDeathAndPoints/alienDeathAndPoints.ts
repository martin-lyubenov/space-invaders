import { scene } from "../generalGameInfo/generalInfo";
import { sounds } from "../sounds/sounds";
import { isCollision } from "../util/isCollision";

// logic for checking if an alien has been hit. If yes, the alien is marked as "dead" and the player is awared points
// how do we know if an alien is dead you ask ? -> logic is the following, we take the 2 HTML elements ( both are divs) and check if one has entered the position of the other using the getBoundingClientRect()
// check the isCollision method for more information

// dead aliens are still on the screen but are not visible to the player, nor can they be interacted with

export function alienDeathAndPoints() {
  // selects all alien HTML div elements and stores them in an array
  const aliens = document.querySelectorAll(
    ".alien"
  ) as NodeListOf<HTMLDivElement>;

  // loops through the alien array to check if any alien was hit
  aliens.forEach((alien) => {
    // selects all defender lazer attack HTML div elements and stores them in an array
    const lazerShots = document.querySelectorAll(
      ".lazer-shot"
    ) as NodeListOf<HTMLDivElement>;

    // loops loops through the lazer shots to check if any of the aliens were hit
    // if any are hit a death animation and sound are played and the appropriate amount of poitns are given to the player
    // the lazer attack is removed after hiting an alien
    lazerShots.forEach((lazerShot) => {
      // checks for collision between the alien and the defender attack. For more info see the isCollision file
      if (
        isCollision(lazerShot, alien) &&
        alien.classList.contains("dead-alien") === false
      ) {
        // gives the alien a death animation which lasts for 50 miliseconds and then makes the alien "dead"
        alien.style.backgroundImage =
          "url('./images/aliens/death-animation.jpg')";
        setTimeout(() => {
          alien.classList.add("dead-alien");
        }, 50);
        // removing the defender lazer attack from the game screen
        lazerShot.remove();
        // death sound effect
        sounds.alienDeathSound.play();

        // points for the player
        if (alien.classList.contains("alien-40pts")) {
          scene.score += 40;
        } else if (alien.classList.contains("alien-20pts")) {
          scene.score += 20;
        } else if (alien.classList.contains("alien-10pts")) {
          scene.score += 10;
        } else if (alien.classList.contains("mothership")) {
          scene.score += 300;
        }
      }
    });
  });
}

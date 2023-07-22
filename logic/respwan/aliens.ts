import { game } from "../generalGameInfo/generalInfo";

// logic for respwaning all the alien cluster once every alien is dead

// dead aliens are still on the screen but are not visible to the player, nor can they be interacted with

export function respawnAliens() {
  // selects all of the alien HTML Div elements and stores them in an array
  const aliens = document.querySelectorAll(
    ".alien"
  ) as NodeListOf<HTMLDivElement>;

  // filters and stores all of the dead aliens in another array
  const alienRespawnChecker = Array.from(aliens).filter((alien) =>
    alien.classList.contains("dead-alien")
  );

  // if all of the aliens have been killed removes the "dead" status so they can be interacted with again ( no rest for the wicked, I suppose)
  if (alienRespawnChecker.length === game.maxAlienClusterSize) {
    aliens.forEach((alien) => {
      alien.classList.remove("dead-alien");
    });
  }
}

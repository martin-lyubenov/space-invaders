import { AddAlienLazerShot } from "../addObjects/addAlienLazerShot";
import { game, scene } from "../generalGameInfo/generalInfo";

// logic for choosing when an alien should attack

export function alienFiringCycle(timestamp: number) {
  // selects all alien HTML div elements and stores them in an array
  const aliens = document.querySelectorAll(".alien");

  // filters the dead aliens
  const remainingAliens = Array.from(aliens).filter(
    (alien) => alien.classList.contains("dead-alien") === false
  ) as HTMLDivElement[];
  // picks a random postion to make sure a random alien fires every time
  const randomAlienPosition = Math.round(
    remainingAliens.length * Math.random()
  );
  // there is an interval set between alien attacks
  // the if checks if the interval has expired before appending an alien attack to the game screen
  if (timestamp - scene.lastAlienLazerShot > game.alienFireInterval) {
    // calls the AddAlienLazerShot class to append an alien attack at a random alien
    new AddAlienLazerShot(remainingAliens[randomAlienPosition]);
    // sets the new interval between alien attacks, otherwise the aliens will fire constantly (which is somewhat hilarious, but will almost instantly crash the game)
    scene.lastAlienLazerShot = timestamp;
  }
}

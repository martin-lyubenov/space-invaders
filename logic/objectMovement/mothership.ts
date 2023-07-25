import { game } from "../generalGameInfo/generalInfo";

// logic for moving the mothership on the game screen

export function mothershipMovement(mothershipCurrentSound: HTMLAudioElement) {
  // selects all mothership HTML div elements on the screen and stores them in an array
  const motherships = document.querySelectorAll(
    ".mothership"
  ) as NodeListOf<any>;

  // loops through the motherships ( there is usually only one)
  motherships.forEach((mothership) => {
    //moves the mothership on the game screen
    mothership.x -= game.speed;
    mothership.style.left = mothership.x + "px";

    // if the mothership is alive add sound to the movement
    if (mothership.classList.contains("dead-alien") === false) {
      mothershipCurrentSound.play();
    }

    // removes the mothership from the DOM if it reaches the end of the screen
    if (mothership.x + mothership.offsetWidth <= 0) {
      mothership.remove();
    }
  });
}

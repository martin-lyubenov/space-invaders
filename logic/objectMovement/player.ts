import { player } from "../player/player";

// logic for moving the mothership on the game screen

export function playerMovement() {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  const defender = document.querySelector(".defender")! as HTMLDivElement;
  //moves the mothership on the game screen
  defender.style.left = player.x + "px";
  defender.style.top = player.y - player.height + "px";
}

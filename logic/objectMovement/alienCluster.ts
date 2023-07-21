import { IGameObject } from "../models/generalInfo";

// logic for moving the alien cluster on the game screen

export function alienClusterMovement({
  game,
  gameArea,
}: {
  game: IGameObject;
  gameArea: HTMLDivElement;
}) {
  // sellets the alien cluster HTML div element
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  const alienCluster = document.querySelector(
    ".alien-cluster"
  )! as HTMLDivElement;

  // determents the alien cluster movement direction
  if (game.alienPos + alienCluster.offsetWidth > gameArea.offsetWidth - 100) {
    game.alienDirection = -game.speed;
  } else if (game.alienPos < 100) {
    game.alienDirection = game.speed;
  }

  // moves the alien cluster according the the alien direction
  game.alienPos += game.alienDirection * game.alienClusterMultiplier;
  alienCluster.style.left = game.alienPos + "px";
}

import { IGameObject } from "../models/generalInfo";

// TODO must fix problem with mothership sound
export function mothershipMovement({
  game,
  mothershipCurrentSound,
}: {
  game: IGameObject;
  mothershipCurrentSound: HTMLAudioElement;
}) {
  let motherships = document.querySelectorAll(
    ".mothership"
  ) as NodeListOf<HTMLDivElement>;

  motherships.forEach((mothership) => {
    mothership.x -= game.speed;
    mothership.style.left = mothership.x + "px";

    if (mothership.classList.contains("dead-alien") === false) {
      mothershipCurrentSound.play();
    }

    if (mothership.x + mothership.offsetWidth <= 0) {
      mothership.remove();
    }
  });
}

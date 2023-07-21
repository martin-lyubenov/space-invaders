import { IGameObject } from "../models/generalInfo";

export function respawnAliens({ game }: { game: IGameObject }) {
  const aliens = document.querySelectorAll(
    ".alien"
  ) as NodeListOf<HTMLDivElement>;
  let alienRespawnChecker = Array.from(aliens).filter((alien) =>
    alien.classList.contains("dead-alien")
  );
  if (alienRespawnChecker.length === game.maxAlienClusterSize) {
    aliens.forEach((alien) => {
      alien.classList.remove("dead-alien");
    });
  }
}

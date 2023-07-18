
export function respawnAliens(aliens, game) {
    let alienRespawnChecker = Array.from(aliens).filter((alien) =>
    alien.classList.contains("dead-alien")
  );
  if (alienRespawnChecker.length === game.maxAlienClusterSize) {
    aliens.forEach((alien) => {
      alien.classList.remove("dead-alien");
    });
  }
}
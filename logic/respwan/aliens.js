export function respawnAliens( game) {
  const aliens = document.querySelectorAll(".alien");
  let alienRespawnChecker = Array.from(aliens).filter((alien) =>
    alien.classList.contains("dead-alien")
  );
  if (alienRespawnChecker.length === game.maxAlienClusterSize) {
    aliens.forEach((alien) => {
      alien.classList.remove("dead-alien");
    });
  }
}

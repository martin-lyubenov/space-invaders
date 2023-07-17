export function alienClusterMovement(alienCluster, game, gameArea) {
  if (game.alienPos + alienCluster.offsetWidth > gameArea.offsetWidth - 100) {
    game.alienDirection = -game.speed;
  } else if (game.alienPos < 100) {
    game.alienDirection = game.speed;
  }
  game.alienPos += game.alienDirection * game.alienClusterMultiplier;
  alienCluster.style.left = game.alienPos + "px";
}

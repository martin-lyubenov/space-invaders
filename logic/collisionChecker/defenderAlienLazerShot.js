export function defenderAlienLazerShotCollisionChecker(
  defender,
  isCollision,
  alienLazerShot,
  gameOverAction,
  player,
  gameArea,
  gameOver
) {
  if (isCollision(defender, alienLazerShot)) {
    let lives = document.querySelectorAll(".one-live");
    alienLazerShot.remove();
    if (lives.length > 1) {
      player.x = 100;
      player.y = gameArea.offsetHeight - 50;
      defender.style.left = player.x + "px";
      defender.style.top = player.y + "px";
      lives[lives.length - 1].remove();
    } else {
      lives[lives.length - 1].remove();
      gameOverAction(gameOver);
    }
  }
}

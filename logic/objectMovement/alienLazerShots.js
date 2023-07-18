export function alienLazerShotsMovmentAndCollisionChecker(
  {
    game,
    scene,
    player,
    gameArea,
    isCollision,
    gameOverAction,
    defenderAlienLazerShotCollisionChecker,
    shieldAlienLazerShotCollisionChecker,
    gameOver
  },
  timestamp
) {
  const defender = document.querySelector(".defender");
  let alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
  alienLazerShots.forEach((alienLazerShot) => {
    alienLazerShot.y += game.speed;
    alienLazerShot.style.top = alienLazerShot.y + "px";
    if (
      timestamp - scene.lastAlienLazerShotSpriteInterval >
      game.alienLazerShotSpriteChangeInterval
    ) {
      if (alienLazerShot.style.backgroundImage.includes("type-1")) {
        alienLazerShot.style.backgroundImage =
          "url('./images/aliens/attack-type-2.png')";
      } else if (alienLazerShot.style.backgroundImage.includes("type-2")) {
        alienLazerShot.style.backgroundImage =
          "url('./images/aliens/attack-type-1.png')";
      } else {
        alienLazerShot.style.backgroundImage =
          "url('./images/aliens/attack-type-2.png')";
      }

      scene.lastAlienLazerShotSpriteInterval = timestamp;
    }

    // removes the lazer shot from the dom when it reaches the end of the screen
    if (
      alienLazerShot.y + alienLazerShot.offsetHeight >
      gameArea.offsetHeight - alienLazerShot.offsetHeight / 2
    ) {
      alienLazerShot.remove();
    }

    // checks if the alien lazer shot has hit the defender
    defenderAlienLazerShotCollisionChecker(
      defender,
      isCollision,
      alienLazerShot,
      gameOverAction,
      player,
      gameArea,
      gameOver
    );

    // checks if the alien lazer shot has hit a shield
    shieldAlienLazerShotCollisionChecker(alienLazerShot, isCollision);
  });
}

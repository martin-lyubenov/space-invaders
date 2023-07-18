export function lazerShotsMovement({ game, isCollision }) {
  let lazerShots = document.querySelectorAll(".lazer-shot");
  lazerShots.forEach((lazerShot) => {
    lazerShot.y -= game.speed;
    lazerShot.style.top = lazerShot.y + "px";

    if (lazerShot.y + lazerShot.offsetHeight < 0) {
      lazerShot.remove();
    }

    // if the lazer shot hits a shield, the shot is removed
    let shields = document.querySelectorAll(".shield");
    shields.forEach((shield) => {
      if (
        isCollision(lazerShot, shield) &&
        shield.classList.contains("shield-destroyed") === false
      ) {
        lazerShot.remove();
      }
    });
  });
}

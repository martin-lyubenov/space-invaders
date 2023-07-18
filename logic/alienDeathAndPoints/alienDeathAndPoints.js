export function alienDeathAndPoints({ isCollision, sounds, scene }) {
  let aliens = document.querySelectorAll(".alien");
  aliens.forEach((alien) => {
    let lazerShots = document.querySelectorAll(".lazer-shot");
    lazerShots.forEach((lazerShot) => {
      if (
        isCollision(lazerShot, alien) &&
        alien.classList.contains("dead-alien") === false
      ) {
        alien.style.backgroundImage =
          "url('./images/aliens/death-animation.jpg')";
        setTimeout(() => {
          alien.classList.add("dead-alien");
        }, 50);
        lazerShot.remove();
        sounds.alienDeathSound.play();
        if (alien.classList.contains("alien-40pts")) {
          scene.score += 40;
        } else if (alien.classList.contains("alien-20pts")) {
          scene.score += 20;
        } else if (alien.classList.contains("alien-10pts")) {
          scene.score += 10;
        } else if (alien.classList.contains("mothership")) {
          scene.score += 300;
        }
      }
    });
  });
}

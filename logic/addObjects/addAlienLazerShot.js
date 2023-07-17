const gameArea = document.querySelector(".game-area");

export class AddAlienLazerShot {
  alienLazerShot;

  constructor(alien) {
    this.render(alien);
    return this.alienLazerShot;
  }

  render(alien) {
    if (alien === undefined) {
      return;
    }
    this.alienLazerShot = document.createElement("div");
    this.alienLazerShot.classList.add("alien-lazer-shot");
    this.alienLazerShot.y = alien.getBoundingClientRect().y;
    this.alienLazerShot.style.top = this.alienLazerShot.y + "px";

    this.alienLazerShot.style.left =
      alien.getBoundingClientRect().x + alien.offsetWidth / 2 - 12 + "px";

    gameArea.appendChild(this.alienLazerShot);
  }
}

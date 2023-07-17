const gameArea = document.querySelector(".game-area");

export class AddDefenderLazerShot {
  lazerShot;

  constructor(player) {
    this.render(player);
    return this.lazerShot;
  }

  render(player) {
    this.lazerShot = document.createElement("div");
    this.lazerShot.classList.add("lazer-shot");
    this.lazerShot.y = player.y - player.height - 25;
    this.lazerShot.style.top = this.lazerShot.y + "px";

    this.lazerShot.style.left = player.x + player.width / 2 - 12 + "px";
    gameArea.appendChild(this.lazerShot);
  }
}

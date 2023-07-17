const gameArea = document.querySelector(".game-area");

export class AddDefender {
  defender;

  constructor(player) {
    this.render(player);
    return this.defender;
  }

  render(player) {
    this.defender = document.createElement("div");
    this.defender.classList.add("defender");
    this.defender.style.left = player.x + "px";
    this.defender.style.top = player.y + "px";
    gameArea.appendChild(this.defender);
  }
}
